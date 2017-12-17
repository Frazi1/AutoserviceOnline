using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Routing;
using AutoMapper;
using AutoserviceOnlineServer.Model.Dto;
using DataAccess.Model;
using Newtonsoft.Json;

namespace AutoserviceOnlineServer
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            GlobalConfiguration.Configure(WebApiConfig.Register);
            ConfigureApi(GlobalConfiguration.Configuration);
            Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<Order, OrderDto>();
                cfg.CreateMap<Task, TaskDto>()
                    .ForMember(dto => dto.Orders, expression => expression.Ignore());
                cfg.CreateMap<Workman, WorkmanDto>();
                cfg.CreateMap<Car, CarDto>()
                    .ForMember(dto => dto.Order, e=>e.Ignore())
                    .ForMember(dto => dto.CustomerDto, e=>e.Ignore() );
                cfg.CreateMap<Customer, CustomerDto>()
                    .ForMember(dto => dto.Car, e => e.Ignore())
                    .ForMember(dto => dto.Order, e => e.Ignore());
            });
        }

        protected void ConfigureApi(HttpConfiguration config)
        {
            // Remove the XML formatter
            config.Formatters.Remove(config.Formatters.XmlFormatter);
            config.Formatters.JsonFormatter.SerializerSettings.Formatting = Formatting.Indented;
        }
    }
}