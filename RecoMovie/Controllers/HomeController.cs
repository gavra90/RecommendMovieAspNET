using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using RecoMovie.Models;

namespace RecoMovie.Controllers
{

    public class HomeController : Controller
    {
        //
        // GET: /Home/

        public ActionResult Index()
        {
            return View();
        }
        public ActionResult PretragaFilmova(string query)
        {
            List<Filmovi> listFilmovi;
            using (var dbContext = new MovieDBEntities()) {          
                //mora dto klasa, ovako nece da uradi projekciju na klasama koje je kreirao EF

                listFilmovi = dbContext.Films.
                                            Where(x => x.Naziv_Filma.Contains(query)).
                                            Select(f => new Filmovi() { id = f.ID_Filma, title = f.Naziv_Filma }).
                                            ToList();

                listFilmovi = listFilmovi
                    .GroupBy(f => f.title)
                    .Select(g => g.First())
                    .ToList();
             

            
            }


            return Json(new {movies=listFilmovi}, JsonRequestBehavior.AllowGet);

            //return Json(new
            //{
            //    movies = new[]{new {title="Movei title", id=4},
            //                                new {title="Movei title 2", id=5}}
            //}, JsonRequestBehavior.AllowGet);
        }
        public ActionResult MovieDetails(int i) {
            using (var dbContext = new MovieDBEntities()) {
                Film f = dbContext.Films.Where(x => x.ID_Filma.Equals(i)).FirstOrDefault();
                ViewBag.film = f;
                
                
            }

            return View();
        }

    }
}
