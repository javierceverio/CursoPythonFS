//Cargo el Header
var cad = `
<nav class="navbar navbar-expand-lg bg-black">
    <a class="navbar-brand" href="index.html"><img src="images/Logo.png" alt="Logo" id="logo"></a>
    <button class="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ml-auto">
            <a class="nav-item nav-link`; if (document.title == "Home") { cad += ' active" href="index.html"><span>Home</span></a>' } else { cad += '" href="index.html">Home</a>' } cad += `
            <a class="nav-item nav-link`; if (document.title == "Acerca de") { cad += ' active" href="about.html"><span>Acerca de</span></a>' } else { cad += '" href="about.html">Acerca de</a>' } cad += `
            <a class="nav-item nav-link`; if (document.title == "Contacto") { cad += ' active" href="contact.html"><span>Contacto</span></a>' } else { cad += '" href="contact.html">Contacto</a>' } cad += `
            <a class="nav-item nav-link`; if (document.title == "Registrese") { cad += ' active" href="register.html"><span>Registrarse</span></a>' } else { cad += '" href="register.html">Registrarse</a>' } cad += `
            <a class="nav-item nav-link`; if (document.title == "Sucursales") { cad += ' active" href="sucursales.html"><span>Sucursales</span></a>' } else { cad += '" href="sucursales.html">Sucursales</a>' } cad += `
            <a class="nav-item nav-link`; if (document.title == "Nuestros Clientes") { cad += ' active" href="clientes.html"><span>Nuestros Clientes</span></a>' } else { cad += '" href="clientes.html">Nuestros Clientes</a>' } cad += `
        </div>
    </div>
</nav>
<h1>La cocina de Javier</h1>
`
document.getElementById("idheader").innerHTML = cad;

//Cargo el Footer
cad = `
<a href="https://www.twitter.com" target="_blank"><i class="fab fa-twitter"></i></a>
<a href="https://www.facebook.com" target="_blank"><i class="fab fa-facebook-f"></i></a>
<a href="https://www.pinterest.com" target="_blank"><i class="fab fa-pinterest"></i></a>
<a href="https://www.instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
<a href="https://www.linkedin.com" target="_blank"><i class="fab fa-linkedin"></i></a>
<p>Derechos reservados @2020</p>
`
document.getElementById("idfooter").innerHTML = cad;

//Cargo el subheader
cad = `
<div class="row">
    <div class="jumbotron col-sm-12 col-md-4 col-lg-3 pt-3 mb-3"><p>Somos una casa de comida artesanal. Elaboramos nuestros productos con los mejores y más frescos ingredientes. La mejor calidad es nuestro objetivo.</p></div>
        <div class="col-sm-12 col-md-8 col-lg-6 pt-3 mb-3">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                </ol>
                <div class="carousel-inner">
                    `
                    for (var i = 0; i < data2.length; i++) {
                        cad +=`
                        <div class="carousel-item `; if (i == 0) { cad += `active` } cad += `">
                            <img class="d-block w-100" src="${data2[i].img}" alt="${data2[i].alt}">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>${data2[i].dir}</h5>
                                <p>${data2[i].coment}</p>
                            </div>
                        </div>
                        `
                    }
                cad += `   
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    <div class="jumbotron col-sm-12 col-md-12 col-lg-3 pt-3 mb-3"><p>A continuación, te dejamos las recetas de nuestros mejores platos para que puedas probarlos desde la comodidad de tu casa. Recetas fáciles y sencillas.</p></div>
</div>
`
document.getElementById("idsubheader").innerHTML = cad;

//Cargo las Especialidades
cad = '';
for (var i = 0; i < data.length; i++) {
    cad +=`
    <div class="caja">
        <h3>${data[i].titulo}</h3>
        <img src="${data[i].image}" class="fotoReceta" />
        <a href="${data[i].receta}">Receta</a>
    </div>
    `
}
document.getElementById("idespecialidades").innerHTML = cad;