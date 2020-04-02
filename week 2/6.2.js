let h = 0.5;
let r=[10];
for (let j = 0; j < 10; j++)
{
    r[j] = Math.sqrt(1.0 / (3.14 * h));
    h += 0.5;
alert("Радиус цилиндра равен: " +r[j] );}