using System;
using System.Collections.Generic;
using AutoMapper;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace AutoserviceOnlineServer.Tests
{
    [TestClass]
    public class MappingTest
    {
        [TestMethod]
        public void TestMap()
        {
            

            Map m = new Map
            {
                Name = "test",
                Value = 22,
                Stubs = new List<Stub> {new Stub {Index = 1}, new Stub {Index = 2}, new Stub {Index = 3}}
            };
            MapDto mDto = Mapper.Map<Map, MapDto>(m);
        }

        [TestMethod]
        public void ReverseMap()
        {
            MapDto mDto = new MapDto
            {
                NameDto = "test",
                ValueDto = 22,
                StubDtos = new List<StubDto> { new StubDto { Index = 1 }, new StubDto { Index = 2 }, new StubDto { Index = 3 } }
            };

            Map m = Mapper.Map<MapDto, Map>(mDto);
        }

        [TestInitialize]
        public void Initialize()
        {
            Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<Map, MapDto>()
                    .ForMember(dto => dto.NameDto, expression => expression.MapFrom(map => map.Name))
                    .ForMember(dto => dto.ValueDto, expression => expression.MapFrom(map => map.Value))
                    .ForMember(dto => dto.StubDtos, expression => expression.MapFrom(map => map.Stubs))
                    .ReverseMap();
                cfg.CreateMap<Stub, StubDto>();

            });
        }
    }
}