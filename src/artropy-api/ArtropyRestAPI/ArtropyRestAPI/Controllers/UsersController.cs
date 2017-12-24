using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Users.Models;
using System.Linq;
namespace Users.Controllers
{
  [Route("api/users")]
  public class TodoController : Controller
  {
    private readonly TodoContext _context;

    public TodoController(TodoContext context)
    {
      _context = context;

      if (_context.TodoItems.Count() == 0)
      {
        _context.TodoItems.Add(new UsersItem { Name = "Item1" });
        _context.SaveChanges();
      }
    }

    /*GET: TYPE REQUESTS */
    //GET: ALL USERS
    [HttpGet]
    public IEnumerable<UsersItem> GetAll()
    {
      return _context.TodoItems.ToList();
    }

    //GET: A PARTICULAR USER INFO
    [HttpGet("{id}", Name = "GetTodo")]
    public IActionResult GetById(long id)
    {
      var item = _context.TodoItems.FirstOrDefault(t => t.Id == id);
      if (item == null)
      {
        return NotFound();
      }
      return new ObjectResult(item);
    }

    //POST
    [HttpPost]
    public IActionResult Create([FromBody] UsersItem item)
    {
      if (item == null)
      {
        return BadRequest();
      }

      _context.TodoItems.Add(item);
      _context.SaveChanges();

      return CreatedAtRoute("GetTodo", new { id = item.Id }, item);
    }

    //PUT
    [HttpPut("{id}")]
    public IActionResult Update(long id, [FromBody] UsersItem item)
    {
      if (item == null || item.Id != id)
      {
        return BadRequest();
      }

      var todo = _context.TodoItems.FirstOrDefault(t => t.Id == id);
      if (todo == null)
      {
        return NotFound();
      }

      todo.IsComplete = item.IsComplete;
      todo.Name = item.Name;

      _context.TodoItems.Update(todo);
      _context.SaveChanges();
      return new NoContentResult();
    }

    //DELETE
    [HttpDelete("{id}")]
    public IActionResult Delete(long id)
    {
      var todo = _context.TodoItems.FirstOrDefault(t => t.Id == id);
      if (todo == null)
      {
        return NotFound();
      }

      _context.TodoItems.Remove(todo);
      _context.SaveChanges();
      return new NoContentResult();
    }
  }
}
