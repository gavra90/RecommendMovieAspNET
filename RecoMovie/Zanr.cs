//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace RecoMovie
{
    using System;
    using System.Collections.Generic;
    
    public partial class Zanr
    {
        public Zanr()
        {
            this.Films = new HashSet<Film>();
            this.Recniks = new HashSet<Recnik>();
        }
    
        public int ID_Zanr { get; set; }
        public string Naziv_Zanra { get; set; }
    
        public virtual ICollection<Film> Films { get; set; }
        public virtual ICollection<Recnik> Recniks { get; set; }
    }
}
