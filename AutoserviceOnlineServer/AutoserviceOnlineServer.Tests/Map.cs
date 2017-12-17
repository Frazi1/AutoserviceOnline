using System.Collections.Generic;

namespace AutoserviceOnlineServer.Tests
{
    public class Map
    {
        public string Name { get; set; }
        public int Value { get; set; }
        public ICollection<Stub> Stubs { get; set; }
    }
}