using System.Collections.Generic;

namespace AutoserviceOnlineServer.Tests
{
    public class MapDto
    {
        public string NameDto { get; set; }
        public int ValueDto { get; set; }
        public ICollection<StubDto> StubDtos { get; set; }
    }
}