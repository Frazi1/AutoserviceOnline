using DataAccess.Model;
using System.Data.Entity;

namespace DataAccess
{

    public class AutoserviceDb : DbContext
    {
        private static IDatabaseInitializer<AutoserviceDb> DatabaseInitializer 
            => new DropCreateDatabaseIfModelChanges<AutoserviceDb>();

        public AutoserviceDb()
            //: base("name=AutoserviceDb")
            :this("name=AutoserviceDb")
        {
        }

        public AutoserviceDb(string connectionString)
            : base(connectionString)
        {
            Database.SetInitializer(DatabaseInitializer);
        }

        public virtual DbSet<Car> Car { get; set; }
        public virtual DbSet<Customer> Customer { get; set; }
        public virtual DbSet<Order> Order { get; set; }
        public virtual DbSet<Task> Task { get; set; }
        public virtual DbSet<Workman> Workman { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            //modelBuilder.Entity<Car>()
            //    .Property(e => e.Manufacturer)
            //    .IsUnicode(true);

            //modelBuilder.Entity<Car>()
            //    .Property(e => e.Model)
            //    .IsUnicode(true);

            //modelBuilder.Entity<Car>()
            //    .Property(e => e.Vin)
            //    .IsUnicode(true);

            //modelBuilder.Entity<Car>()
            //    .HasMany(e => e.Order)
            //    .WithRequired(e => e.Car)
            //    .HasForeignKey(e => e.CarId)
            //    .WillCascadeOnDelete(false);

            //modelBuilder.Entity<Customer>()
            //    .Property(e => e.FirstName)
            //    .IsUnicode(true);

            //modelBuilder.Entity<Customer>()
            //    .Property(e => e.MiddleName)
            //    .IsUnicode(true);

            //modelBuilder.Entity<Customer>()
            //    .Property(e => e.LastName)
            //    .IsUnicode(true);

            //modelBuilder.Entity<Customer>()
            //    .HasMany(e => e.Car)
            //    .WithRequired(e => e.Customer)
            //    .HasForeignKey(e => e.CustomerId)
            //    .WillCascadeOnDelete(false);

            //modelBuilder.Entity<Customer>()
            //    .HasMany(e => e.Order)
            //    .WithRequired(e => e.Customer)
            //    .HasForeignKey(e => e.CustomerId)
            //    .WillCascadeOnDelete(false);

            //modelBuilder.Entity<Task>()
            //    .Property(e => e.Name)
            //    .IsUnicode(true);

            //modelBuilder.Entity<Workman>()
            //    .Property(e => e.FirstName)
            //    .IsUnicode(true);

            //modelBuilder.Entity<Workman>()
            //    .Property(e => e.MiddleName)
            //    .IsUnicode(true);

            //modelBuilder.Entity<Workman>()
            //    .Property(e => e.LastName)
            //    .IsUnicode(true);

            //modelBuilder.Entity<Workman>()
            //    .HasMany(e => e.Order)
            //    .WithMany(e => e.Workman)
            //    .Map(m => m.ToTable("workmanorder", "autoservicedb2"));

            //modelBuilder.Entity<Order>()
            //    .HasMany(e => e.Task)
            //    .WithMany(e => e.Orders)
            //    .Map(m => m.ToTable("ordertask", "autoservicedb2"));
        }
    }
}
