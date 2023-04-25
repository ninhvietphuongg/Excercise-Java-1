//Viết chương trình giải phương trình bậc 2: ax^2 + bx + c = 0
var a = prompt('Nhap a:');
var b = prompt('Nhap b:');
var c = prompt('Nhap c:');
var nghiemc_b = -c / b;
var x1;
var x2;
nghiemc_b = nghiemc_b.toFixed(2);
if (a == 0) {
    if (b == 0) {
        if (c == 0) {
            console.log('VO SO NGHIEM');
        } else console.log('VO NGHIEM');
    } else console.log(nghiemc_b)
}
else{
var delta = b * b - 4 * a * c;
if (delta > 0) {
    var tong = Number(-b) + (Number(Math.sqrt(delta)));
    var tong1 = Number(-b) - (Number(Math.sqrt(delta)));
    x1 = tong / (2 * a);
    x1 = x1.toFixed(2);
    x2 = tong1 / (2 * a);
    x2 = x2.toFixed(2);
    console.log(x1);
    console.log(x2);
} else if (delta == 0) {
    var x = -b / (2 * a);
    x = x.toFixed(2);
    console.log(x);
} else console.log('VO NGHIEM');
}