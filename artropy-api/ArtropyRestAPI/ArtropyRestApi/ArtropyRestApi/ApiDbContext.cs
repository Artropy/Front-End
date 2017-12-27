using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ArtropyRestApi.Model;
using ArtropyRestApi.Data;

namespace ArtropyRestApi.Data
{
    public class ApiDbContext : DbContext
    {
        public ApiDbContext(DbContextOptions<ApiDbContext> options) : base(options)
        {


        }
        public DbSet<ArtropyRestApi.Model.Sponser> Sponsers { get; set; }
        public DbSet<ArtropyRestApi.Model.Users> Users { get; set; }
        public DbSet<ArtropyRestApi.Model.Account> Account { get; set; }
        public DbSet<ArtropyRestApi.Model.DigitalAsset> DigitalAsset { get; set; }


    }
}
