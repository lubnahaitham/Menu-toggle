
var menuToggle = document.querySelector("#menu-toggle");
var activeElements = document.querySelectorAll(".active-element");
var toggledMenu = menuToggle.addEventListener("click", function(){
     // forEach is not supported in IE11
  // activeElements.forEach(function(e){
  //     e.classList.toggle("active");
  // });
     for(var activated = 0; activated < activeElements.length; activated++){
          activeElements[activated].classList.toggle("active");
     }
})


// var menuToggle = document.querySelector("#menu-toggle");
// var activeElements = document.querySelectorAll(".active-element");
// var toggleMenu = menuToggle.addEventListener("click", function(){
//     //forEach is not supported in IE11
//     // activeElemnets.forEach(Function(e){
//     //e.classList.toggle("active");
// //});

// for(var activated = 0; activated < activeElements.length; actvated++){
//     activeElements[activated].classList.toggle("active");
// }
// });
