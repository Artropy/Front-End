using Microsoft.EntityFrameworkCore;

namespace Users.Models
{
  public class TodoContext : DbContext
  {
    public TodoContext(DbContextOptions<TodoContext> options)
        : base(options)
    {
    }

    public DbSet<UsersItem> TodoItems { get; set; }

  }
}
