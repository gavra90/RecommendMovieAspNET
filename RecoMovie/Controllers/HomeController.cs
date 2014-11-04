using System;
using System.Collections.Generic;
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

          //  return Json(new {title="Movei title", id=4}, JsonRequestBehavior.AllowGet);



            return Json(new
            {
                movies = new[]{new {title="Movei title", id=4},
                                            new {title="Movei title 2", id=5}}
            }, JsonRequestBehavior.AllowGet);
        }

    }
}
