using Microsoft.EntityFrameworkCore;

namespace ArtropyRestApi.Model
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
        public DbSet<ArtropyRestApi.Model.Ticket> Ticket { get; set; }


  }
}
