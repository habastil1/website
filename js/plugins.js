

/* Start Sticky Nav */ 

var nav = document.getElementById("my-nav"),
    toTop = document.getElementById("to-top");

window.onscroll = function () {
    if(document.body.scrollTop >= 35 || document.documentElement.scrollTop >= 35) {
        nav.classList.add("sticky"); 
    } else {
        nav.classList.remove("sticky");
    }
    /* End Sticky Nav */ 


    /* Start To Top Button */
    if(document.body.scrollTop >=300 || document.documentElement.scrollTop >= 300) {
        toTop.style.visibility = "visible";
        toTop.style.opacity = 1;

    } else {
        toTop.style.visibility = "hidden";
        toTop.style.opacity = 0;

    }
}   
    toTop.onclick = function() {
      window.scrollTo({
          top: 0,
          left:0,
          behavior: "smooth"
      });  
}

/* End To Top Button */ 



/* Start Open The Bar On Phones */ 

var bar = document.getElementById("my-bar"),
    links = document.getElementById("my-links"),
    myBars = document.querySelectorAll(".bar");

/*
bar.onclick = function() {
    if (links.style.display == "block"){
        links.style.display = "none"
    } else {
        links.style.display = "block"
    }
    
}
*/
bar.onclick = function() {
   
    links.classList.toggle("show");

    for(let i=0; i < myBars.length; i++) {
        myBars[i].classList.toggle(`bar${i+1}`);
    } 
}

/* End Open The Bar On Phones */ 


/* Start Slider Testimonials */ 

var testim = Array.from(document.querySelectorAll(".testim")),
    indicator = Array.from(document.querySelectorAll(".indicators li")),
    currentSlide = 1;


for(let i = 0; i<indicator.length; i++){
    indicator[i].setAttribute("data-index", (i+1));
}


function slide() {

   removeActive();

    testim[currentSlide - 1].classList.add("show");
    indicator[currentSlide -1].classList.add("active");
}

function removeActive() {
    testim.forEach(function(testi){
        testi.classList.remove("show")
    })

    indicator.forEach(function(indic){
        indic.classList.remove("active")
    })
}



for(let i =0; i < indicator.length; i++){
    indicator[i].onclick = function() {
        currentSlide = parseInt(this.getAttribute("data-index"));
        slide();
    }
}

slide();

/* End Slider Testimonials */ 


/* Start Slide The Posts */

var cards = document.querySelectorAll(".card"),
    btns = document.querySelectorAll(".btns li"),
    current =0;



function check(){
    removeAllActive();
    cards[current].classList.add("show");
    btns[current].classList.add("active");
}

function removeAllActive(){
    cards.forEach(function(card){
        card.classList.remove("show")
    })
    btns.forEach(function(btn){
        btn.classList.remove("active")
    })
}

for(let i =0; i<btns.length; i++){
    btns[i].onclick = function(){
    current = i;
    check();
    }
}

check();

/* End Slide The Posts */ 


/* Start Open And Close Pop-up */

var popUp = document.getElementById("pop-up");

document.getElementById("open").onclick = function() {
    
    popUp.style.visibility = "visible";
    popUp.style.opacity = "1";
}

document.getElementById("close").onclick = function() {
   
    popUp.style.visibility = "hidden";
    popUp.style.opacity = "0";
}

/* End Open And Close Pop-up */ 



/* Start Filter Gallery */ 

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "visible");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "visible");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var button = Array.from(document.querySelectorAll(".button"));
for (var i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("clicked");
    current[0].className = current[0].className.replace(" clicked", "");
    this.className += " clicked";
  });
}

/* End Filter Gallery */ 


/* Start Google Map Api */


function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(21.42483, 39.823201),
        zoom:8,
    };
    var map = new google.maps.Map(document.getElementById("map"),mapProp);
    }


/* End Google Map Api */


/* Start Nice Scroll */

$(document).ready(function(){
    $("body").niceScroll({
        cursorcolor:" #f7c552",
        cursorwidth:"16px"
    });
})


/* End Nice Scroll */ 
