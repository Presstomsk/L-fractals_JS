let canva = document.getElementById("canva");
let holst = canva.getContext("2d");
let btn =document.getElementById("btn");
let x=400,y=600,x1,y1;
let l=5;
let acsiom = "F+F+F+F";
let rule = "F+f-FF+F+FF+Ff+FF-f+FF-F-FF-Ff-FFF";
let smallRule="ffffff";

let n = 2;
let angle = 0;

let result = acsiom;
for (let i = 0; i < n; i++) {      
  result = result.replace(/F/g,rule);   
  result = result.replace(/f/g,smallRule); 
}



function RotateLine(ang)
{
  angle += ang;
  x1 = Math.cos(Math.PI/180.0*angle)*l+x;
  y1 = Math.sin(Math.PI/180.0*angle)*l+y;
}

btn.onclick = function()
{
  alert(result.length);
for(let i=0; i<result.length; i++)
{  
  if(result[i]=='F')
  {
    RotateLine(0);
    Paint("red");
  }
  if(result[i]=='-')
  {
    RotateLine(90);
    Paint("red");
  }  
  if(result[i]=='+')
  {
    RotateLine(-90);
    Paint("red");
  } 
  if(result[i]=='f')
  {
    RotateLine(0);
    Paint("white");
  } 
  
}
}

function Paint(str)
{
  holst.strokeStyle =`${str}`;
  holst.beginPath();
  holst.moveTo(x,y);
  holst.lineTo(x1,y1);
  holst.closePath();
  holst.stroke();
  x=x1;
  y=y1;
}

