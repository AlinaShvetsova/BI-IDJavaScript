let n=0,i=0;
function a(i){
for(let j=2;j<i;j++)
{
if (i%j==0){
return false;
}}
return true;
}
while(n<100){
i++;
if( a(i)==true){
n++;
alert(i);
}}