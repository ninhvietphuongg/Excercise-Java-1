//Viết chương trình nhập vào 3 số a, b, c. Kiểm tra xem 3 số đó có lập thành 1 tam giác không? Đó là tam giác gì?
var check = true;
var a = prompt('Nhap a:')
var b = prompt('Nhap b:')
var c = prompt('Nhap c:')
if (a === '' || a === null) {
    console.log("Vui lòng nhập a!");
    check = false;
} else if (isNaN(a)) {
    console.log("Nhập a không đúng định dạng số!");
    check = false;
} else if (a <= 0) {
    console.log('a phải lớn hơn 0');
    check = false;
} else {
    a = Number(a);
}
if (b === '' || b === null) {
    console.log("Vui lòng nhập b!");
    check = false;
} else if (isNaN(b)) {
    console.log("Nhập b không đúng định dạng số!");
    check = false;
} else if (b <= 0) {
    console.log('b phải lớn hơn 0');
    check = false;
} else {
    b = Number(b);
}
if (c === '' || c === null) {
    console.log("Vui lòng nhập c!");
    check = false;
} else if (isNaN(c)) {
    console.log("Nhập b không đúng định dạng số!");
    check = false;
} else if (c <= 0) {
    console.log('c phải lớn hơn 0');
    check = false;
} else {
    c = Number(c);
}
if (check) {
    if (a > 0 && b > 0 && c > 0) {
        if (a == b && b == c && a == c) {
            console.log('TAM GIAC DEU');
        } else if (b == c) {
            console.log('TAM GIAC CAN');
        } else if (a * a == b * b + c * c || b * b == a * a + c * c || c * c == b * b + a * a) {
            console.log('TAM GIAC VUONG');
        } else {
            console.log('TAM GIAC THUONG');
        }
    }
}
