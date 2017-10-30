using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using DataAccess;

namespace AutoserviceOnlineServer.Controllers
{
    public class WorkmenController : ApiController
    {
        private AutoserviceDb _db = new AutoserviceDb();

        // GET: api/Workmen
        public IQueryable<Workman> Getworkman()
        {
            return _db.Workman;
        }

        // GET: api/Workmen/5
        [ResponseType(typeof(Workman))]
        public IHttpActionResult Getworkman(int id)
        {
            Workman workman = _db.Workman.Find(id);
            if (workman == null)
            {
                return NotFound();
            }

            return Ok(workman);
        }

        // PUT: api/Workmen/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putworkman(int id, Workman workman)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != workman.Id)
            {
                return BadRequest();
            }

            _db.Entry(workman).State = EntityState.Modified;

            try
            {
                _db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WorkmanExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Workmen
        [ResponseType(typeof(Workman))]
        public IHttpActionResult Postworkman(Workman workman)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _db.Workman.Add(workman);
            _db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = workman.Id }, workman);
        }

        // DELETE: api/Workmen/5
        [ResponseType(typeof(Workman))]
        public IHttpActionResult Deleteworkman(int id)
        {
            Workman workman = _db.Workman.Find(id);
            if (workman == null)
            {
                return NotFound();
            }

            _db.Workman.Remove(workman);
            _db.SaveChanges();

            return Ok(workman);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool WorkmanExists(int id)
        {
            return _db.Workman.Count(e => e.Id == id) > 0;
        }
    }
}