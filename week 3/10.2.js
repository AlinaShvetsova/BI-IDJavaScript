let n=0;
let r=0;
let r_now=1;
let a = prompt("Введите число меньше единицы, которое характеризует введенный лекарственный препарат");

do{
  r=r_now;
  n++;
  r_now=a * r + Math.pow(0.4, n);
  alert(r_now);}
while(r_now>r);
alert("Через " +(n-1) + " часов наступает максимальная реакция на введение препарата");

let r_max;

while (r_now>r) //функция растет
r_max = r; // максимальное значение
while (r_max<=r_now*2)
n++;
r_now = a * r_now + Math.pow(0.4, n);
alert("После "+n+" часов реакция понизится ниже 50%");