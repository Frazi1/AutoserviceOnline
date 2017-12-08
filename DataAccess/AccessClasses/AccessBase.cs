using System;
using System.Data.Entity;

namespace DataAccess
{
    public class AccessBase<TAccess>: IDisposable
        where TAccess : DbContext, new()
    {
        private TAccess _db;

        protected TAccess Db
        {
            get { return _db ?? (_db = new TAccess()); }
        }


        public void Dispose()
        {
            _db.Dispose();
        }
    }
}