using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace DataAccess.Model
{
    [Table("autoservicedb2.order")]
    public partial class Order
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Order()
        {
            Tasks = new HashSet<Task>();
            Workman = new HashSet<Workman>();
        }

        public int Id { get; set; }

        public DateTime Created { get; set; }

        public bool Completed { get; set; }

        public DateTime? CompletionDate { get; set; }

        public int CustomerId { get; set; }

        public int CarId { get; set; }

        //[JsonIgnore]
        public virtual Car Car { get; set; }

        //[JsonIgnore]
        public virtual Customer Customer { get; set; }

        //[JsonIgnore]
        //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Task> Tasks { get; set; }

        [JsonIgnore]
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Workman> Workman { get; set; }
    }
}
