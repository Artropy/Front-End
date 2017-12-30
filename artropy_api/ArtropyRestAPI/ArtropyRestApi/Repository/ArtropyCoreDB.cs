using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Azure.Documents;
using Microsoft.Azure.Documents.Client;

namespace ArtropyRestApi.Repository
{
    public class ArtropyCoreDB
    {
      private const string EndpointUri = "https://localhost:8081";
      private const string PrimaryKey = "C2y6yDjf5/R+ob0N8A7Cgv30VRDJIWEHLM+4QDU5DE2nQ9nDuVTqobD4b8mGGyPMbIZnqyMsEcaGQy67XIw/Jw==";
      private const string DatabaseId = "Artropy";
      private const string InitialCollection = "Users";

    private DocumentClient client;

      private async Task clientDB()
      {
        this.client = new DocumentClient(new Uri(EndpointUri), PrimaryKey);
        await this.client.CreateDatabaseIfNotExistsAsync(new Database { Id = DatabaseId });
        await this.client.CreateDocumentCollectionIfNotExistsAsync(UriFactory.CreateDatabaseUri(DatabaseId), new DocumentCollection { Id = InitialCollection });


      //  await this.CreateFamilyDocumentIfNotExists("FamilyDB_oa", "FamilyCollection_oa", andersenFamily);
      }

  }
}
