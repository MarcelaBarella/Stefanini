using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;
using LocadoraAPI.Models;

namespace LocadoraAPI.Controllers
{
    [EnableCors(origins: "*", methods: "*", headers: "*")]
    public class FilmeController : ApiController
    {
        public readonly Filme[] Filmes = new Filme[]
            {
                new Filme { Id = 1, Name="Night Of The Living Dead", Image="night-of-the-living-dead.jpg" },
                new Filme { Id = 2, Name="Moonrise Kingdom", Image="moonrise-kingdom.jpg" },
                new Filme { Id = 3, Name="The Life Aquatic with Steve Zissou", Image="life_aquatic_with_steve_zissou.jpg" },
                new Filme { Id = 4, Name="Irréversible", Image="irreversible.jpg" },
                new Filme { Id = 5, Name="The Pianist", Image="the-pianist.jpg" },
                new Filme { Id = 6, Name="The Lord Of The Rings: The Return Of the King", Image="lord-of-the-rings-the-return-of-the-king.jpg" },
                new Filme { Id = 7, Name="Ex Machina", Image="ex-machina.jpg" },
                new Filme { Id = 8, Name="2001: A Space Odyssey", Image="a-space-odyssey.jpg"},
                new Filme { Id = 9, Name="Annie Hall", Image="annie-hall.jpg"}

            };

        public Filme[] Get()
        {
            return Filmes;
        }

        public Filme Get(int id)
        {
            var filmes = Filmes;

            return filmes.SingleOrDefault(f => f.Id == id);
        }

        // POST: api/Filme
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Filme/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Filme/5
        public void Delete(int id)
        {
        }
    }
}
