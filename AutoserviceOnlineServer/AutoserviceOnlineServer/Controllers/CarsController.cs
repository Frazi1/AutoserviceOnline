using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DataAccess;
using DataAccess = DataAccess.DataAccess;

namespace AutoserviceOnlineServer.Controllers
{
    public class CarsController : ApiController
    {
        public IEnumerable<string> Get()
        {
            //return new List<string>()
            //{
            //    "test",
            //    "test2"
            //};
            var db = global::DataAccess.DataAccess.GetContext();
            var casrs = db.car.ToList();
            return casrs.Select(x => x.model.ToString());
        }
    }
}
