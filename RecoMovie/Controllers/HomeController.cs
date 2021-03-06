﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;


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
            using (var dbContext = new MovieDBEntities()) {       

                var listFilmovi = dbContext.Films.
                                Where(x => x.Naziv_Filma.Contains(query)).
                                Select(f => new { id = f.ID_Filma, title = f.Naziv_Filma }).
                                ToList();

                listFilmovi = listFilmovi
                    .GroupBy(f => f.title)
                    .Select(g => g.First())
                    .ToList();

            return Json(new {movies=listFilmovi}, JsonRequestBehavior.AllowGet);
            }
            
        }
        public ActionResult MovieDetails(int i) {
            using (var dbContext = new MovieDBEntities()) {
                Film f = dbContext.Films.Where(x => x.ID_Filma.Equals(i)).FirstOrDefault();
                ViewBag.likes = f.Likes==null ? 0 : f.Likes;
                ViewBag.film = f;
                var top10 = dbContext.TopLists.Where(x => x.ID_Filma.Equals(i))
                                           .Select(p => new { ID = p.Film, sim =Math.Round(p.Slicnost,2) })
                                           .Take(10)
                                           .ToList();
                List<Film> top10Lista = new List<Film>();
                
               foreach (var item in top10)
                {
                    int id = Convert.ToInt32(item.ID);
                    Film f1 = dbContext.Films
                                        .Where(x => x.ID_Filma.Equals(id))
                                        //.Select(p => new {title = p.Naziv_Filma, likes =p.Likes, id=item.ID})
                                        .FirstOrDefault();
                    f1.LemmaPlots = item.sim.ToString(); //iskorisito sam ovo polje da prenesem slicnost filmova
                    top10Lista.Add(f1);
                  
                    ViewBag.top10Lista = top10Lista;
                   

                }
               ViewBag.zanr = f.ID_Zanra;
            }
            ViewBag.hdn = i;
           
            return View();
        }
        public ActionResult LikeMovie(int ID_Movie)
        {
            using(var dbContext=new MovieDBEntities()){
                Film f = dbContext.Films.Where(x => x.ID_Filma.Equals(ID_Movie)).SingleOrDefault();
               
                if (f.Likes != null)
                    f.Likes++;
                else
                    f.Likes = 1;
                try
                {
                   // dbContext.Entry(f).State = System.Data.EntityState.Modified;
                    dbContext.SaveChanges();
                }
                catch (Exception ex)
                {
                    
                    throw ex;
                }
               
            }

            return Json(new { poruka = "ok" });
        }
        public ActionResult GetMovies(int ID_Zanra)
        {
            var dbContext = new MovieDBEntities();
            var listaFilmova = dbContext.Films
                .Where(p => p.ID_Zanra.Equals(ID_Zanra))
                .OrderByDescending(z => z.Likes)
                .Select(x => new {id= x.ID_Filma, title = x.Naziv_Filma, likes = x.Likes == null ? 0 : x.Likes})
               // .Take(10)
                .ToList();
            
                return Json(new { lista = listaFilmova },JsonRequestBehavior.AllowGet);
            
        }
    }
}
