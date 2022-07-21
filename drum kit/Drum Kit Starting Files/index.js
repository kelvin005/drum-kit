
var numberOfButtonClick = document.querySelectorAll(".drum").length;

 for ( var i = 0; i < numberOfButtonClick; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function(){

  //dectecting button press
  var buttonInnerHtml = this.innerHTML;

   makeSound(buttonInnerHtml);
   animationKey(buttonInnerHtml);

});

 }

 document.addEventListener("keydown",function(event){
        makeSound(event.key);
        animationKey(event.key);
 });

   //detecting keybord press
 function makeSound(key){

  switch(key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
  tom1.play();
      break;
    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
  tom2.play();
      break;
      case"s":
      var tom3 = new Audio('sounds/tom-3.mp3');
  tom3.play();
      break;
      case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
  tom4.play();
      break;
      case "j":
      var snare = new Audio('sounds/snare.mp3');
  snare.play();
      break;

      case "k":
      var crash = new Audio('sounds/crash.mp3');
  crash.play();
      break;

      case "l":
      var bass = new Audio('sounds/kick-bass.mp3');
  bass.play();
      break;
    default:console.log(buttonInnerHtml);
  }
 }

 function animationKey(currentkey){

  var activeAnimation = document.querySelector("." + currentkey);
   activeAnimation.classList.add("pressed");

   setTimeout(function(){
    activeAnimation.classList.remove("pressed");
    
   }, 100);

 }

