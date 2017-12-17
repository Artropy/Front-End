using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Users.Models;

namespace ArtropyRestAPI
{
  public class Startup
  {
    public void ConfigureServices(IServiceCollection services)
    {
      services.AddDbContext<TodoContext>(opt => opt.UseInMemoryDatabase("TodoList"));
      services.AddMvc();
    }

    public void Configure(IApplicationBuilder app)
    {
      app.UseMvc();
    }
  }
}
