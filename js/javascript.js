var i = 0;
var txt = 'Gigs.com';
var txt2 = 'One-off jobs made easy';
var speed = 90;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
	if (i == txt.length - 1 ) {
	  speed = 2000;
	}
  }
  else if(i<txt.length*2){
      document.getElementById("demo").innerHTML = txt.substring(0,txt.length*2-i-1);
	  speed = 90;
  }
   else if(i<txt.length*2+txt2.length){
       speed = 90;
       document.getElementById("demo").innerHTML += txt2.charAt(i-txt.length*2);
		  if (i == txt.length*2+txt2.length - 1 ) {
        speed = 2000;
      }
   }
   else if(i<txt.length*2+txt2.length*2){
      speed = 90;
      document.getElementById("demo").innerHTML = txt2.substring(0,txt2.length*2-i-1+txt.length*2);
	  	if (i == txt.length - 1 ) {
	  speed = 2000;
	}
   }
   else{i=-1, speed = 90;}
      i++;
    setTimeout(typeWriter, speed);
	
}
function myFunction(x) {
  x.classList.toggle("change");
}