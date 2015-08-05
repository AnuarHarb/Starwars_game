
var np = Math.round(Math.random()*2);
var blaster = 0;
var force = 1;
var lightsaber = 2;

   if (np == 0) {
     document.getElementById("force").style.display = "none";
     document.getElementById("lightsaber").style.display = "none";
  }else if (np == 1){
    document.getElementById("blaster").style.display = "none";
    document.getElementById("lightsaber").style.display = "none";
  }else if (np == 2){
     document.getElementById("force").style.display = "none";
     document.getElementById("blaster").style.display = "none";
  }else{
    alert("error");
  };
