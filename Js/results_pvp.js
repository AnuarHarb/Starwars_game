document.getElementById("sith_code").style.display = "none";
var jedi_user
var sith_user
var answer

  function sith(){
    document.getElementById("jedi_code").style.display = "none";
    document.getElementById("sith_code").style.display = "block";
    jedi_user = document.querySelector('input[name=jedi]:checked').value;

}

 function result() {
   sith_user = document.querySelector('input[name=sith]:checked').value;
   answer = {}
   answer.jedi = jedi_user
   answer.sith = sith_user
   if (answer.jedi === "1" && answer.sith === "1") {
    document.getElementById("main").style.display = "none";
    document.getElementById("main2").style.display = "block";
    document.getElementById("Jedilightsaber_Sithlightsaber").style.display = "block";
  }else if (answer.jedi === "1" && answer.sith === "2") {
    document.getElementById("main").style.display = "none";
    document.getElementById("main2").style.display = "block";
    document.getElementById("Jedilightsaber_Sithblaster").style.display = "block";
  }else if (answer.jedi === "1" && answer.sith === "3") {
    document.getElementById("main").style.display = "none";
    document.getElementById("main2").style.display = "block";
    document.getElementById("Jedilightsaber_Sithforce").style.display = "block";
  }else if (answer.jedi === "2" && answer.sith === "1") {
    document.getElementById("main").style.display = "none";
    document.getElementById("main2").style.display = "block";
    document.getElementById("Jediblaster_Sithlightsaber").style.display = "block";
  }else if (answer.jedi === "2" && answer.sith === "2") {
    document.getElementById("main").style.display = "none";
    document.getElementById("main2").style.display = "block";
    document.getElementById("Jediblaster_Sithblaster").style.display = "block";
  }else if (answer.jedi === "2" && answer.sith === "3") {
    document.getElementById("main").style.display = "none";
    document.getElementById("main2").style.display = "block";
    document.getElementById("Jediblaster_Sithforce").style.display = "block";
  }else if (answer.jedi === "3" && answer.sith === "1") {
    document.getElementById("main").style.display = "none";
    document.getElementById("main2").style.display = "block";
    document.getElementById("Jediforce_Sithlightsaber").style.display = "block";
  }else if (answer.jedi === "3" && answer.sith === "2") {
    document.getElementById("main").style.display = "none";
    document.getElementById("main2").style.display = "block";
    document.getElementById("Jediforce_Sithblaster").style.display = "block";
  }else if (answer.jedi === "3" && answer.sith === "3") {
    document.getElementById("main").style.display = "none";
    document.getElementById("main2").style.display = "block";
    document.getElementById("Jediforce_Sithforce").style.display = "block";
  }
 }
