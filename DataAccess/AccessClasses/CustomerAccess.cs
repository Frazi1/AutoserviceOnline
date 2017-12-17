using AutoserviceOnlineServer.Model.Dto;
using DataAccess.Model;

namespace DataAccess
{
    public class CustomerAccess : AccessBase<AutoserviceDb>
    {
        public void AddCustomer(Customer customer)
        {
            Db.Customer.Add(customer);
            Db.SaveChanges();
        }
    }
}