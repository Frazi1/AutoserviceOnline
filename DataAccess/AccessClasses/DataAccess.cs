namespace DataAccess
{
    public static class DataAccess
    {
        public static AutoserviceDb GetContext()
        {
            //return new AutoserviceDb("server=localhost;user id=testuser;password=123;persistsecurityinfo=True;database=autoservicedb2");
            return new AutoserviceDb();
        }
    }
}