using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace txthtmlbeKIALLITAS
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }
        static bool faljKivalasztva = false;
        static string faljNev;
        private void button1_Click(object sender, EventArgs e)
        {
            try
            {
                string faljnev = textBox1.Text;
                StreamReader r = new StreamReader(faljnev);
                r.ReadLine();
                r.Close();
                faljKivalasztva = true;
                faljNev = faljnev;
                label2.Text = "Kiválasztott fálj: "+faljnev;
            }
            catch
            {
                label2.Text = "Kiválasztott fálj: Nincs ilyen fálj!";
            }
        }

        private void button2_Click(object sender, EventArgs e)
        {
            if(faljKivalasztva)
            {
                gen();
                label3.Text = "Generálás sikeres!";
            }
            else
            {
                label3.Text = "Generálás sikertelen!";
            }
        }
        static string template = "";
        private void gen()
        {
            /*Formátum:
            Cím
            
            Bek1Cím
            Bek1Tartalom

            Bek2Cím
            Bek2Tartalom

            Bek3Cím
            Bek3Tartalom

            Tábla:
            CÍM|TARTALOM
            CÍM|TARTALOM
            CÍM|TARTALOM
            CÍM|TARTALOM
            */
            StreamReader r = new StreamReader(faljNev);
            bool bekezdesbenvagye = false;
            string cim = r.ReadLine();
            template += "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD\" crossorigin=\"anonymous\">\r\n    <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js\" integrity=\"sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN\" crossorigin=\"anonymous\"></script>\r\n    <link rel=\"stylesheet\" href=\"../fooldal/css/timeline.css\">\r\n    <link rel=\"icon\" type=\"image/x-icon\" href=\"https://ckik.hu/_next/image?url=https%3A%2F%2Fceg-kozgazdasagi.cms.intezmeny.edir.hu%2Fuploads%2Fthumbnail_ckik_logo1_5ddb5979c8.png&w=128&q=90\">\r\n    <!--link rel=\"stylesheet\" href=\"../../style.css\"-->\r\n    <title>CKIK - " + cim + "</title>\r\n</head>\r\n<body>\r\n    <div class=\"information\">\r\n        <header>\r\n            <h1>"+cim+"</h1>\r\n        </header>\r\n        <main>\r\n            <div class=\"container-fluid\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-12 col-sm-8 szoveg\">";
            while (!r.EndOfStream)
            {
                string line = r.ReadLine();
                if (line == "")
                {
                    string bekcim = r.ReadLine();
                    if (bekcim == "Tábla:")
                    {
                        template += "</div>\r\n                    <!-- d-none d-sm-block -->\r\n                    <div class=\" col-12 col-sm-4 \"> \r\n                        <div class=\"table-wrapper\">\r\n                            <table>\r\n                                <thead>\r\n                                    <tr>\r\n                                        <td colspan=\"2\">\r\n                                          <div id=\"carouselExample\" class=\"carousel slide\">\r\n                                              <div class=\"carousel-inner\">\r\n                                                <div class=\"carousel-item active\">\r\n                                                  <img src=\"../kepek/szamitogep_alex_teszt.png\" class=\"d-block w-100\" alt=\"\" title=\"\">\r\n                                                </div>\r\n                                                <div class=\"carousel-item\">\r\n                                                  <img src=\"../kepek/szamitogep_alex_teszt.png\" class=\"d-block w-100\" alt=\"\" title=\"\">\r\n                                                </div>\r\n                                                <div class=\"carousel-item\">\r\n                                                  <img src=\"../kepek/szamitogep_alex_teszt.png\" class=\"d-block w-100\" alt=\"\" title=\"\">\r\n                                                </div>\r\n                                              </div>\r\n                                              <button class=\"carousel-control-prev\" type=\"button\" data-bs-target=\"#carouselExample\" data-bs-slide=\"prev\">\r\n                                                <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n                                                <span class=\"visually-hidden\">Previous</span>\r\n                                              </button>\r\n                                              <button class=\"carousel-control-next\" type=\"button\" data-bs-target=\"#carouselExample\" data-bs-slide=\"next\">\r\n                                                <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n                                                <span class=\"visually-hidden\">Next</span>\r\n                                              </button>\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>";
                    }
                    else
                    {
                        template += "                    \r\n<h2>" + bekcim + "</h2>                    \r\n<hr>                    \r\n<p>";
                    }
                }
                else if (line.Contains("|"))
                {
                    string[] szet = line.Split('|');
                    template += "                                    <tr>\r\n                                        <td class=\"tablasorcim\">" + szet[0] + "</td>\r\n                                        <td>" + szet[1] + "</td>\r\n                                    </tr>";
                }
                else if (line != "Tábla:")
                {
                    template += "\r\n" + line;
                }
            }
            template += "                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!--<div class=\"row\"> \r\n                    <div class=\"col-12 col-sm-8\"> \r\n                        <h2>Fordította/Készítette:</h2>\r\n                            <hr>\r\n                            <p></p>    \r\n                            <h2>Forrás:</h2>\r\n                            <hr>\r\n                            <a class = \"nemtudtamkitalalnikreativnevet\" href=\"\" target=\"_blank\"></a>\r\n                    </div>\r\n                </div>-->\r\n            </div>\r\n        </main>\r\n        <p style=\"text-align: right;\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" onclick=\"location.href='../fooldal/index.html';\">Vissza</button>\r\n        </p>    \r\n    </div>\t\t\r\n</body>\r\n<script src=\"../tldr.js\"></script>\r\n</html>";
            r.Close();
            StreamWriter f = new StreamWriter(cim+".html");
            f.WriteLine(template);
            f.Close();
        }
    }
}
