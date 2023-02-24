/* Sticky NavBar */

window.addEventListener("scroll",function(){
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

/* Responsive NavBar */

function toggleMenu(){
  const toggleMenu = document.querySelector(".toggleMenu");
  const nav = document.querySelector(".nav");
  toggleMenu.classList.toggle("active")
  nav.classList.toggle("active")
}

/* Filterable Cards */

let list = document.querySelectorAll(".list");
let card = document.querySelectorAll(".card");

for(let i = 0; i< list.length; i++){
  list[i].addEventListener("click", function(){
    for(let j=0; j<list.length; j++){
      list[j].classList.remove("active");
    }
    this.classList.add("active");

    let dataFilter = this.getAttribute("data-filter");

    for(let k= 0; k<card.length; k++){
      card[k].classList.remove("active");
      card[k].classList.add("hide");

      if(card[k].getAttribute("data-item") == dataFilter || dataFilter == "all"){
        card[k].classList.remove("hide");
        card[k].classList.add("active");
      }
    }
  })
}

/* Scrolling Animation Effects */
window.addEventListener("scroll",function(){
  var anime = document.querySelectorAll(".animeX");

for(var s = 0; s < anime.length;s++){
  var windowheight = window.innerHeight;
  var animetop = anime[s].getBoundingClientRect().top;
  var animepoint = 100;

  if(animetop < windowheight - animepoint){
    anime[s].classList.add("active");
  }
  else{
    anime[s].classList.remove("active")
  }

}

})

/* IMG GIFS */

$(document).ready(function() {
    $(".cardBx img").hover(
      function() {
        var gif = $(this).data('gif');
        $(this).attr('src', gif);
      },
      function() {
        var src = $(this).attr('src').replace(/\.gif/i, '.png');
        $(this).attr('src', src);
      });
  });


/* Carrusel de imagenes */


// Obtener todos los elementos de carrusel
const carousels = document.querySelectorAll('.carousel');

// Iterar sobre cada carrusel
carousels.forEach(carousel => {
  // Obtener todas las imágenes del carrusel
  const images = carousel.querySelectorAll('img');
  let index = 0;
  
  // Ocultar todas las imágenes excepto la primera
  images.forEach((image, i) => {
    if (i !== 0) {
      image.style.display = 'none';
    }
  });
  
  // Establecer un temporizador para cambiar las imágenes
  setInterval(() => {
    // Ocultar la imagen actual
    images[index].style.display = 'none';
    // Incrementar el índice de imagen y establecer el siguiente índice de imagen
    index = (index + 1) % images.length;
    // Mostrar la siguiente imagen
    images[index].style.display = 'block';
  }, 1500);
});

/* */

