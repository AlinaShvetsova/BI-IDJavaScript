let n = prompt("Введите n: ");

let arr = new Array();
let answer=new Array();
for (let i=0; i < n; i++){ 
  arr[i] = new Array();
  for (let j=0; j < n; j++)
    {arr[i][j]=Math.floor(Math.random()*90 + 10);
    if (i == j)
  {
    answer[i]=new Array();
    answer[i][i]=arr[i][j];
  }}}
  alert("Матрица:");
  alert(arr);
  alert("Главная диагональ: \n"+answer);