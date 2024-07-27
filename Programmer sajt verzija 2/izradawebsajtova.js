// Ucitavanje sajta

div_sve = document.getElementById("all");
ucitavanje_sajta = document.getElementById("ucitavanje_sajta");

setTimeout(function(){
    div_sve.style.display = "block";
    ucitavanje_sajta.style.display = "none";
}, 3970);

// Dugme za vracanje na pocetak

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0;
}

// Animacija pojavljivanja kurseva

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 30;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
    }
}
  
window.addEventListener("scroll", reveal);