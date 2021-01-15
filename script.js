var $ = require( 'jquery' );
const TIME = 1000;

let start = function(){
  console.log(sessionStorage.isStart);
  if (sessionStorage.isStart == "true"){
    $("body").addClass("back");

    let aMas = document.querySelectorAll("a");
    
    for (let a of aMas){
      a.setAttribute("style", "text-decoration: none")
      a.classList.add("a");
    }

    let liMas = document.querySelectorAll("li");
    for (let li of liMas){
      li.classList.add("submenu");
    }

    $("#start").addClass("none");
    $(".divMenu").removeClass("none");
    $(".divMenu").addClass("artMenu");
    $(".m").addClass("menu");
    $(".paino").removeClass("none");
    $(".mes").removeClass("none");
    $(".F").removeClass("none");
    $(".i").removeClass("none");
    $("p").wrapAll("<div class = 'border'> </div>");
    $(".border").wrapAll("<div class = 'art'> </div>");
    $(".lesson5").addClass("final");
    $(".lesson5").addClass("t");
    $(".lesson5").removeClass("none");
    $(".directed").slideToggle(TIME+1000);
  }
}

start();


let saveToSessionStarage = function(){
  sessionStorage.setItem("isStart", true);
}

let l5 = function(){
  $(".lesson5").fadeToggle(TIME, ()=>{
    $(".i").fadeToggle(TIME, ()=>{
    $(".first").hide(TIME+1000);
    $(".lesson1").hide(TIME+1000);
    $(".lesson2").hide(TIME+1000);
    $(".lesson3").hide(TIME+1000);
    $(".lesson4").hide(TIME+1000);
    $('body').addClass("back");
    $("p").wrapAll("<div class = 'border'> </div>");
    $(".border").wrapAll("<div class = 'art'> </div>");
    $(".lesson5").addClass("final");
    $(".lesson5").addClass("t");
    $(".directed").slideToggle(TIME+1000);
    saveToSessionStarage();
    })
  });
}

let l4 = function(){
  $(".lesson4").fadeToggle(TIME, ()=>{
    $(".F").addClass("submenu");
    $(".F").fadeToggle(TIME, ()=>{
      l5();
    });
  })
}

let l3 = function(){
  $(".m").addClass("menu");
  $(".lesson3").fadeToggle(TIME, ()=>{
    $(".mes").fadeToggle(TIME, l4);
  })
}

let l2 = function(){
  $(".lesson2").fadeToggle(TIME, ()=>{
    let aMas = document.querySelectorAll("a");
    
    for (let a of aMas){
      a.setAttribute("style", "text-decoration: none")
      a.classList.add("a");
    }

    let liMas = document.querySelectorAll("li");
    for (let li of liMas){
      li.classList.add("submenu");
    }
    
    $(".divMenu").addClass("artMenu");
    $(".piano").fadeToggle(TIME, l3);
  });
}

let l1 = function(){
  $(".lesson1").fadeToggle(TIME, ()=>{
    $(".divMenu").fadeToggle(TIME, l2);
  });
}


$("#start").click(function(){
  $("#start").addClass("none");
  $(".first").fadeToggle(TIME, l1);
  
})





