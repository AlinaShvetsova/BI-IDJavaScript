var p = new Array();
var a = new Array();
var d, txt, v;

function chek(sms, tip)
{
var ok = false;
var text = "";
while(!ok)
{
text = prompt(sms);
ok = true;
switch(tip)
{
case "int":
{
for(var i = 0; i<text.length; i++)
if(ok)
switch(text[i])
{
case "0":
{
if(i == 0) {alert("Некорректный ввод."); ok = false;}
break;
}
case "1": case "2": case "3": case "4": case "5": case "6": case "7": case "8": case "9": break;
case "+":
{
if(i != 0) {alert("Некорректный ввод."); ok = false;}
break;
}
default: {alert("Некорректный ввод."); ok = false;}
}
break;
}
case "usl":
{
if(text.length > 1) {alert("Некорректный ввод."); ok = false;}
else
{
if(text[0] != "(" && text[0] != ")") {alert("Некорректный ввод."); ok = false;}
}}}}
if(tip == "int") return parseInt(text)
else return text;
}

for(;;)
{
v = 0;
n = chek("Введите кол-во символов строки: ", "int"); n *= 2;
d = true;
for(var i = 0; i<n;i++) p[i] = chek("Введите C" + (i+1), "usl");
for(var i = 0; i < n; i++)
{
if(d)
{
switch(p[i])
{
case "(": {a[v++] = 1; break;}
case ")":
{
if(v == 0 || a[--v] != 1) d = false;
break;
}}}}
if(v != 0) d = false;
txt = "";
for(var i = 0; i<n; i++) 
txt += p[i];
alert("\nСкобочное выражение: " + txt);
if(d) alert("Правильное скобочное выражение!\n")
else alert("Неправильное скобочное выражение!\n");
}