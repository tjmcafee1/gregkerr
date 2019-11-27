 document.getElementById("producerdiv").addEventListener("click", leftdivover);
 document.getElementById("writerdiv").addEventListener("click", middivover);
 document.getElementById("actordiv").addEventListener("click", rightdivover);
 //document.getElementById("home").addEventListener("click", home);

 function leftdivover() {
     document.getElementById("body1").style.display = "block";


     document.getElementById("producerdiv").style.width = "100%";
     document.getElementById("writerdiv").style.width = "0vw";
     document.getElementById("actordiv").style.width = "0vw";

     document.getElementById("s1").style.fontSize = "5em";

     // document.getElementById("d1").style.opacity = 1;

     videoProducer();
 }

 function videoProducer() {
     document.getElementById("v1").style.display = "block";
     document.getElementById("back-button").style.display = "block";
     document.getElementById("section1").style.display = "none";
     document.getElementById("section2").style.display = "none";
     document.getElementById("section3").style.display = "none";
     //document.getElementById("d1").style.display = "none";
     document.getElementById("producerdiv").style.display = "none";
     document.getElementById("heading").style.display = "none";
     document.getElementById("back-button").addEventListener("click", backButton)

 }

 function videoWriter() {
     document.getElementById("v2").style.display = "block";
     document.getElementById("back-button").style.display = "block";
     document.getElementById("section1").style.display = "none";
     document.getElementById("section2").style.display = "none";
     document.getElementById("section3").style.display = "none";
     //document.getElementById("d1").style.display = "none";
     document.getElementById("writerdiv").style.display = "none";
     document.getElementById("heading").style.display = "none";
     document.getElementById("back-button").addEventListener("click", backButton)
 }

 function videoActor() {
     document.getElementById("v3").style.display = "block";
     document.getElementById("back-button").style.display = "block";
     document.getElementById("section1").style.display = "none";
     document.getElementById("section2").style.display = "none";
     document.getElementById("section3").style.display = "none";
     //document.getElementById("d1").style.display = "none";
     document.getElementById("actordiv").style.display = "none";
     document.getElementById("heading").style.display = "none";
     document.getElementById("back-button").addEventListener("click", backButton)
 }

 function middivover() {
     document.getElementById("body2").style.display = "block";

     document.getElementById("producerdiv").style.width = "0vw";
     document.getElementById("writerdiv").style.width = "100vw";
     document.getElementById("actordiv").style.width = "0vw";

     document.getElementById("s2").style.fontSize = "5em";

     //document.getElementById("d2").style.opacity = 1;

     videoWriter();
 }

 function rightdivover() {
     document.getElementById("body3").style.display = "block";

     document.getElementById("producerdiv").style.width = "0vw";
     document.getElementById("writerdiv").style.width = "0vw";
     document.getElementById("actordiv").style.width = "100vw";

     document.getElementById("s3").style.fontSize = "5em";

     videoActor();
     // document.getElementById("d3").style.opacity = 1;
 }

 function backButton() {


     document.getElementById("back-button").style.display = "none";
     document.getElementById("heading").style.display = "none";
     document.getElementById("v1").style.display = "none";
     document.getElementById("v2").style.display = "none";
     document.getElementById("v3").style.display = "none";
     document.getElementById("section1").style.display = "block";
     document.getElementById("section2").style.display = "block";
     document.getElementById("section3").style.display = "block";


     document.getElementById("producerdiv").style.display = "block";
     document.getElementById("writerdiv").style.display = "block";
     document.getElementById("actordiv").style.display = "block";
     document.getElementById("producerdiv").style.width = "33vw";
     document.getElementById("writerdiv").style.width = "34vw";
     document.getElementById("actordiv").style.width = "33vw";

     document.getElementById("body1").style.display = "none";
     document.getElementById("body2").style.display = "none";
     document.getElementById("body3").style.display = "none";

     document.getElementById("s1").style.fontSize = "3em";
     document.getElementById("s2").style.fontSize = "3em";
     document.getElementById("s3").style.fontSize = "3em";

 }
