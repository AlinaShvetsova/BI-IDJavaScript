let x1=prompt("Введите х1: ");
let y1=prompt("Введите y1: ");
let x2=prompt("Введите x2: ");
let y2=prompt("Введите y2: ");

let b, k;
let x;


if(y1==0 && y2==0){
if(x1<x2)
console.log("Любое значение от " + x1 +" до " + x2);
else
  alert("Любое значение от "+ x2 + " до "+ x1);
}
else if(y1==0) x=x1;
else if(y2==0) x=x2;
else
{
  if(y1*y2>0)
  {
    y1=-y1;
    k=(y2-y1)/(x2-x1);
    b=(x2*y1-y2*x1)/(x2-x1);
    x=-b/k;
  }
}
alert("Точка, удовлетворяющая условию, на оси x = "+ x );