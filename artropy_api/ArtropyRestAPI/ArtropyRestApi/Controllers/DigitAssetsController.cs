using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace ArtropyRestApi.Controllers
{
  [Route("api/[controller]")]
  public class DigitAssetsController : ControllerBase
  {
    // GET api/values
    [HttpGet]
    public IEnumerable<string> Get()
    {
      return new string[] { "value1", "value2" };


    }

    // GET api/values/5
    [HttpGet("{id}")]
    public IActionResult Get(int id, string query)
    {
      return Ok();
    }

    // POST api/values
    [HttpPost]
    public IActionResult Post([FromBody]Value value)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }
      return CreatedAtAction("Get", new { id = value.Id }, value);
    }

    // PUT api/values/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody]String value)
    {
    }

    // DELETE api/values/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
    }

    public void updateInfo()
    {

    }

    public void updatefavorited()
    {

    }

    public void updateLiked()
    {

    }

    public void addReview()
    {

    }

    public void editReview()
    {

    }



  }

}
