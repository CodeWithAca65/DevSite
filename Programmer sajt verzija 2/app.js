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

// Otvaranje i zatvaranje podataka o kursu

card_description1 = document.getElementById("card_description1");
card_description2 = document.getElementById("card_description2");
card_description3 = document.getElementById("card_description3");
card_description4 = document.getElementById("card_description4");
card_description5 = document.getElementById("card_description5");
card_description6 = document.getElementById("card_description6");
card_description7 = document.getElementById("card_description7");

card_description1.style.display = "none";
card_description2.style.display = "none";
card_description3.style.display = "none";
card_description4.style.display = "none";
card_description5.style.display = "none";
card_description6.style.display = "none";
card_description7.style.display = "none";

function openForm1() {
    card_description2.style.display = "none";
    card_description3.style.display = "none";
    card_description4.style.display = "none";
    card_description5.style.display = "none";
    card_description6.style.display = "none";
    card_description7.style.display = "none";
    document.getElementById("cpp_naslov").style.color = "rgb(178, 181, 193)";
    document.getElementById("css_naslov").style.color = "rgb(178, 181, 193)";
    document.getElementById("js_naslov").style.color = "rgb(178, 181, 193)";
    document.getElementById("web_naslov").style.color = "rgb(178, 181, 193)";
    document.getElementById("py_naslov").style.color = "rgb(178, 181, 193)";
    document.getElementById("c_naslov").style.color = "rgb(178, 181, 193)";
    if (card_description1.style.display == 'none') {
        card_description1.style.display = "block";
        document.getElementById("html_naslov").style.color = "rgb(0, 42, 70)";
    }
    else {
        card_description1.style.display = "none";
        document.getElementById("html_naslov").style.color = "rgb(178, 181, 193)";
    }
}

function openForm2() {
    card_description1.style.display = "none";
    card_description3.style.display = "none";
    card_description4.style.display = "none";
    card_description5.style.display = "none";
    card_description6.style.display = "none";
    card_description7.style.display = "none";
    document.getElementById("html_naslov").style.color = "rgb(178, 181, 193)";
    document.getElementById("cpp_naslov").style.color = "rgb(178, 181, 193)";
    document.getElementById("js_naslov").style.color = "rgb(178, 181, 193)";
    document.getElementById("web_naslov").style.color = "rgb(178, 181, 193)";
    document.getElementById("py_naslov").style.color = "rgb(178, 181, 193)";
    document.getElementById("c_naslov").style.color = "rgb(178, 181, 193)";
    if (document.getElementById("card_description2").style.display == 'none') {
        document.getElementById("card_description2").style.display = "block";
        document.getElementById("css_naslov").style.color = "rgb(0, 42, 70)";
    }
    else {
        document.getElementById("card_description2").style.display = "none";
        document.getElementById("css_naslov").style.color = "rgb(178, 181, 193)";
    }
}

function openForm3() {
    card_description1.style.display = "none";
    card_description2.style.display = "none";
    card_description4.style.display = "none";
    card_description5.style.display = "none";
    card_description6.style.display = "none";
    card_description7.style.display = "none";
    document.getElementById("html_naslov").style.color = "rgb(178, 181, 193)";
    document.getElementById("css_naslov").style.color = "rgb(178, 181, 193)";
    document.getElementById("cpp_naslov").style.color = "rgb(178, 181, 193)";
    document.getElementById("web_naslov").style.color = "rgb(178, 181, 193)";
    document.getElementById("py_naslov").style.color = "rgb(178, 181, 193)";
    document.getElementById("c_naslov").style.color = "rgb(178, 181, 193)";
    if (card_description3.style.display == 'none') {
        card_description3.style.display = "block";
        document.getElementById("js_naslov").style.color = "rgb(0, 42, 70)";
    }
    else {
        card_description3.style.display = "none";
        document.getElementById("js_naslov").style.color = "rgb(178, 181, 193)";
    }
}

function openForm4() {
    card_description1.style.display = "none";
    card_description2.style.display = "none";
    card_description3.style.display = "none";
    card_description5.style.display = "none";
    card_description6.style.display = "none";
    card_description7.style.display = "none";
    document.getElementById("html_naslov").style.color = "rgb(178, 181, 193)";
    document.getElementById("css_naslov").style.color = "rgb(178, 181, 193)";
    document.getElementById("js_naslov").style.color = "rgb(178, 181, 193)";
    document.getElementById("cpp_naslov").style.color = "rgb(178, 181, 193)";
    document.getElementById("py_naslov").style.color = "rgb(178, 181, 193)";
    document.getElementById("c_naslov").style.color = "rgb(178, 181, 193)";
    if (card_description4.style.display == 'none') {
        card_description4.style.display = "block";
        document.getElementById("web_naslov").style.color = "rgb(0, 42, 70)";
    }
    else {
        card_description4.style.display = "none";
        document.getElementById("web_naslov").style.color = "rgb(178, 181, 193)";
    }
}

function openForm5() {
    card_description1.style.display = "none";
    card_description2.style.display = "none";
    card_description3.style.display = "none";
    card_description4.style.display = "none";
    card_description6.style.display = "none";
    card_description7.style.display = "none";
    document.getElementById("html_naslov").style.color = "rgb(178, 181, 193)";
    document.getElementById("css_naslov").style.color = "rgb(178, 181, 193)";
    document.getElementById("js_naslov").style.color = "rgb(178, 181, 193)";
    document.getElementById("web_naslov").style.color = "rgb(178, 181, 193)";
    document.getElementById("cpp_naslov").style.color = "rgb(178, 181, 193)";
    document.getElementById("c_naslov").style.color = "rgb(178, 181, 193)";
    if (card_description5.style.display == 'none') {
        card_description5.style.display = "block";
        document.getElementById("py_naslov").style.color = "rgb(0, 42, 70)";
    }
    else {
        card_description5.style.display = "none";
        document.getElementById("py_naslov").style.color = "rgb(178, 181, 193)";
    }
}

function openForm6() {
    card_description1.style.display = "none";
    card_description2.style.display = "none";
    card_description3.style.display = "none";
    card_description4.style.display = "none";
    card_description5.style.display = "none";
    card_description7.style.display = "none";
    document.getElementById("html_naslov").style.color = "rgb(178, 181, 193)";
    document.getElementById("css_naslov").style.color = "rgb(178, 181, 193)";
    document.getElementById("js_naslov").style.color = "rgb(178, 181, 193)";
    document.getElementById("web_naslov").style.color = "rgb(178, 181, 193)";
    document.getElementById("py_naslov").style.color = "rgb(178, 181, 193)";
    document.getElementById("cpp_naslov").style.color = "rgb(178, 181, 193)";
    if (card_description6.style.display == 'none') {
        card_description6.style.display = "block";
        document.getElementById("c_naslov").style.color = "rgb(0, 42, 70)";
    }
    else {
        card_description6.style.display = "none";
        document.getElementById("c_naslov").style.color = "rgb(178, 181, 193)";
    }
}

function openForm7() {
    card_description1.style.display = "none";
    card_description2.style.display = "none";
    card_description3.style.display = "none";
    card_description4.style.display = "none";
    card_description5.style.display = "none";
    card_description6.style.display = "none";
    document.getElementById("html_naslov").style.color = "rgb(178, 181, 193)";
    document.getElementById("css_naslov").style.color = "rgb(178, 181, 193)";
    document.getElementById("js_naslov").style.color = "rgb(178, 181, 193)";
    document.getElementById("web_naslov").style.color = "rgb(178, 181, 193)";
    document.getElementById("py_naslov").style.color = "rgb(178, 181, 193)";
    document.getElementById("c_naslov").style.color = "rgb(178, 181, 193)";
    if (card_description7.style.display == 'none') {
        card_description7.style.display = "block";
        document.getElementById("cpp_naslov").style.color = "rgb(0, 42, 70)";
    }
    else {
        card_description7.style.display = "none";
        document.getElementById("cpp_naslov").style.color = "rgb(178, 181, 193)";
    }
}

// Forma za kupovinu kursa

naziv_kursa = document.getElementById("naziv_kursa");

function openForm(clicked_id) {
    document.getElementById("myForm").style.display = "block";
    if(clicked_id == 1){
        naziv_kursa.value = "HTML kurs";
    }
    if(clicked_id == 2){
        naziv_kursa.value = "CSS kurs";
    }
    if(clicked_id == 3){
        naziv_kursa.value = "JavaScript kurs";
    }
    if(clicked_id == 4){
        naziv_kursa.value = "Kurs WEB programiranja";
    }
    if(clicked_id == 5){
        naziv_kursa.value = "Python kurs";
    }
    if(clicked_id == 6){
        naziv_kursa.value = "C kurs";
    }
    if(clicked_id == 7){
        naziv_kursa.value = "C++ kurs";
    }
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
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