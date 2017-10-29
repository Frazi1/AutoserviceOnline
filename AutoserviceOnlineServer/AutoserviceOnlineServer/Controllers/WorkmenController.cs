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
        private AutoserviceDb db = new AutoserviceDb();

        // GET: api/Workmen
        public IQueryable<workman> Getworkman()
        {
            return db.workman;
        }

        // GET: api/Workmen/5
        [ResponseType(typeof(workman))]
        public IHttpActionResult Getworkman(int id)
        {
            workman workman = db.workman.Find(id);
            if (workman == null)
            {
                return NotFound();
            }

            return Ok(workman);
        }

        // PUT: api/Workmen/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putworkman(int id, workman workman)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != workman.id)
            {
                return BadRequest();
            }

            db.Entry(workman).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!workmanExists(id))
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
        [ResponseType(typeof(workman))]
        public IHttpActionResult Postworkman(workman workman)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.workman.Add(workman);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = workman.id }, workman);
        }

        // DELETE: api/Workmen/5
        [ResponseType(typeof(workman))]
        public IHttpActionResult Deleteworkman(int id)
        {
            workman workman = db.workman.Find(id);
            if (workman == null)
            {
                return NotFound();
            }

            db.workman.Remove(workman);
            db.SaveChanges();

            return Ok(workman);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool workmanExists(int id)
        {
            return db.workman.Count(e => e.id == id) > 0;
        }
    }
}