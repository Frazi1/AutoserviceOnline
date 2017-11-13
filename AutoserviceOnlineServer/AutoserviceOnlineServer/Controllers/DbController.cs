using System.Web.Http;
using DataAccess;

namespace AutoserviceOnlineServer.Controllers
{
    public class DbController : ApiController
    {
        private readonly AutoserviceDb _db = new AutoserviceDb();
        // GET
        [Route("api/db/dropcreate")]
        [HttpGet]
        public IHttpActionResult Drop()
        {
            _db.Database.Delete();
            _db.Database.Create();
            return Ok();
        }
    }
}