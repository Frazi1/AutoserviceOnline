using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace DataAccess.Model
{
    [Table("autoservicedb2.task")]
    public partial class Task
    {
        public int Id { get; set; }

        [StringLength(50)]
        public string Name { get; set; }

        public decimal? Price { get; set; }

        [JsonIgnore]
        public virtual ICollection<Order> Orders { get; set; }
    }
}
