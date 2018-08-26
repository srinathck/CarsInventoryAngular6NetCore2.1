using CarsInventory.Web.Core;
using CarsInventory.Web.Core.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace CarsInventory.Web.Controllers
{
    [Route("api/[controller]")]
    public class CarsController : Controller
    {
        private CarsRepository repo = new CarsRepository();
        // GET api/Cars
        [HttpGet]
        public IEnumerable<Car> Get()
        {
            return repo.GetCars();
        }

        // GET api/Cars/5
        [HttpGet("{id}")]
        public Car Get(int id)
        {
            return repo.GetCar(id);
        }

        // POST api/Cars
        [HttpPost]
        public IActionResult Post([FromBody]Car value)
        {
            try
            {
                repo.AddCar(value);
                return Ok(value);
            }

            catch (Exception e)
            { return StatusCode(500, e); }
        }

        // PUT api/Cars/5
        [HttpPut]
        public IActionResult Put([FromBody]Car value)
        {
            try
            {
                repo.UpdateCar(value);
                return Ok(value);
            }

            catch (Exception e)
            { return StatusCode(500, e); }
        }

        // DELETE api/Cars/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                repo.DeleteCar(id);
                return Ok();
            }

            catch (Exception e)
            { return StatusCode(500, e); }
        }
    }
}
