using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ArtropyRestApi;
using ArtropyRestApi.Model;

namespace ArtropyRestApi.Controllers
{
    [Produces("application/json")]
    [Route("api/Sponsers")]
    public class SponsersController : ControllerBase
    {
        private readonly ApiDbContext _context;

        public SponsersController(ApiDbContext context)
        {
            _context = context;
        }

        // GET: api/Sponsers
        [HttpGet]
        public IEnumerable<Sponser> GetSponser()
        {
            return _context.Sponsers;
        }

        // GET: api/Sponsers/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetSponser([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var sponser = await _context.Sponsers.SingleOrDefaultAsync(m => m.id == id);

            if (sponser == null)
            {
                return NotFound();
            }

            return Ok(sponser);
        }

        // PUT: api/Sponsers/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSponser([FromRoute] int id, [FromBody] Sponser sponser)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != sponser.id)
            {
                return BadRequest();
            }

            _context.Entry(sponser).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SponserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Sponsers
        [HttpPost]
        public async Task<IActionResult> PostSponser([FromBody] Sponser sponser)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Sponsers.Add(sponser);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSponser", new { id = sponser.id }, sponser);
        }

        // DELETE: api/Sponsers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSponser([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var sponser = await _context.Sponsers.SingleOrDefaultAsync(m => m.id == id);
            if (sponser == null)
            {
                return NotFound();
            }

            _context.Sponsers.Remove(sponser);
            await _context.SaveChangesAsync();

            return Ok(sponser);
        }

        private bool SponserExists(int id)
        {
            return _context.Sponsers.Any(e => e.id == id);
        }
    }
}
