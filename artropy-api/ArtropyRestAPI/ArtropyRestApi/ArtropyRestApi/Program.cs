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

namespace ArtropyRestApi
{
    public class Program
    {

        private const string EndpointUri = "https://localhost:8081";
        private const string PrimaryKey = "C2y6yDjf5/R+ob0N8A7Cgv30VRDJIWEHLM+4QDU5DE2nQ9nDuVTqobD4b8mGGyPMbIZnqyMsEcaGQy67XIw/Jw==";
        static DocumentClient client;

        public static void Main(string[] args)
        {
            //MyMethod().Wait();
            //Console.ReadKey();

        }

        static async Task MyMethod()
        {
            try
            {
                using (client = new DocumentClient(new Uri(EndpointUri), PrimaryKey))
                {
                    IEnumerable<Database> database = from db in client.CreateDatabaseQuery()
                                                     select db;

                    foreach (var item in database)
                    {
                        Console.WriteLine(item.Id);
                    }


                }
            }
            catch(Exception e)
            {
                Console.WriteLine("Error {0}", e.Message);

            }
       

        }
    }
}
