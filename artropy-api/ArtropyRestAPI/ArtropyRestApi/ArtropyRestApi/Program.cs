using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;


using System.Net;
using Microsoft.Azure.Documents;
using Microsoft.Azure.Documents.Client;
using Newtonsoft.Json;

namespace ArtropyRestApi{
    public class Program {

          private const string EndpointUri = "https://localhost:8081";
          private const string PrimaryKey = "C2y6yDjf5/R+ob0N8A7Cgv30VRDJIWEHLM+4QDU5DE2nQ9nDuVTqobD4b8mGGyPMbIZnqyMsEcaGQy67XIw/Jw==";
          private DocumentClient client;

        public static void Main(string[] args) {

      //  this.client = new DocumentClient(new Uri(EndpointUri), PrimaryKey);

      // ADD THIS PART TO YOUR CODE
      try
      {
        Program p = new Program();
        p.clientDB().Wait();
      }
      catch (DocumentClientException de)
      {
        Exception baseException = de.GetBaseException();
        Console.WriteLine("{0} error occurred: {1}, Message: {2}", de.StatusCode, de.Message, baseException.Message);
      }
      catch (Exception e)
      {
        Exception baseException = e.GetBaseException();
        Console.WriteLine("Error: {0}, Message: {1}", e.Message, baseException.Message);
      }
      finally
      {
  
      }

      var host = new WebHostBuilder()
                    .UseKestrel()
                    .UseContentRoot(Directory.GetCurrentDirectory())
                    .UseIISIntegration()
                    .UseStartup<Startup>()
                    .Build();

                  host.Run();

         }
    // ADD THIS PART TO YOUR CODE
    private async Task clientDB()
    {
      this.client = new DocumentClient(new Uri(EndpointUri), PrimaryKey);
      await this.client.CreateDatabaseIfNotExistsAsync(new Database { Id = "FamilyDB_oa" });
      await this.client.CreateDocumentCollectionIfNotExistsAsync(UriFactory.CreateDatabaseUri("FamilyDB_oa"), new DocumentCollection { Id = "FamilyCollection_oa" });

      // ADD THIS PART TO YOUR CODE
      Family andersenFamily = new Family
      {
        Id = "Andersen.1",
        LastName = "Andersen",
        Parents = new Parent[]
              {
                new Parent { FirstName = "Thomas" },
                new Parent { FirstName = "Mary Kay" }
              },
        Children = new Child[]
              {
                new Child
                {
                        FirstName = "Henriette Thaulow",
                        Gender = "female",
                        Grade = 5,
                        Pets = new Pet[]
                        {
                                new Pet { GivenName = "Fluffy" }
                        }
                }
              },
        Address = new Address { State = "WA", County = "King", City = "Seattle" },
        IsRegistered = true
      };

      await this.CreateFamilyDocumentIfNotExists("FamilyDB_oa", "FamilyCollection_oa", andersenFamily);
    }

    private void WriteToConsoleAndPromptToContinue(string format, params object[] args)
    {
      Console.WriteLine(format, args);
      Console.WriteLine("Press any key to continue ...");
      Console.ReadKey();
    }


    // ADD THIS PART TO YOUR CODE
    public class Family
    {
      [JsonProperty(PropertyName = "id")]
      public string Id { get; set; }
      public string LastName { get; set; }
      public Parent[] Parents { get; set; }
      public Child[] Children { get; set; }
      public Address Address { get; set; }
      public bool IsRegistered { get; set; }
      public override string ToString()
      {
        return JsonConvert.SerializeObject(this);
      }
    }

    public class Parent
    {
      public string FamilyName { get; set; }
      public string FirstName { get; set; }
    }

    public class Child
    {
      public string FamilyName { get; set; }
      public string FirstName { get; set; }
      public string Gender { get; set; }
      public int Grade { get; set; }
      public Pet[] Pets { get; set; }
    }

    public class Pet
    {
      public string GivenName { get; set; }
    }

    public class Address
    {
      public string State { get; set; }
      public string County { get; set; }
      public string City { get; set; }
    }
    // ADD THIS PART TO YOUR CODE
    private async Task CreateFamilyDocumentIfNotExists(string databaseName, string collectionName, Family family)
    {
      try
      {
        await this.client.ReadDocumentAsync(UriFactory.CreateDocumentUri(databaseName, collectionName, family.Id));
       // this.WriteToConsoleAndPromptToContinue("Found {0}", family.Id);
      }
      catch (DocumentClientException de)
      {
        if (de.StatusCode == HttpStatusCode.NotFound)
        {
          await this.client.CreateDocumentAsync(UriFactory.CreateDocumentCollectionUri(databaseName, collectionName), family);
         // this.WriteToConsoleAndPromptToContinue("Created Family {0}", family.Id);
        }
        else
        {
          throw;
        }
      }
    }

    // ADD THIS PART TO YOUR CODE
    private void ExecuteSimpleQuery(string databaseName, string collectionName)
    {
      // Set some common query options
      FeedOptions queryOptions = new FeedOptions { MaxItemCount = -1 };

      // Here we find the Andersen family via its LastName
      IQueryable<Family> familyQuery = this.client.CreateDocumentQuery<Family>(
              UriFactory.CreateDocumentCollectionUri(databaseName, collectionName), queryOptions)
              .Where(f => f.LastName == "Andersen");

      // The query is executed synchronously here, but can also be executed asynchronously via the IDocumentQuery<T> interface
      Console.WriteLine("Running LINQ query...");
      foreach (Family family in familyQuery)
      {
       // Console.WriteLine("\tRead {0}", family);
      }

      // Now execute the same query via direct SQL
      IQueryable<Family> familyQueryInSql = this.client.CreateDocumentQuery<Family>(
              UriFactory.CreateDocumentCollectionUri(databaseName, collectionName),
              "SELECT * FROM Family WHERE Family.LastName = 'Andersen'",
              queryOptions);

      foreach (Family family in familyQueryInSql)
      {
      //  Console.WriteLine("\tRead {0}", family);
      }


    }



  }


}
