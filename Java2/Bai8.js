//Viết chương trình giải phương trình bậc 1: ax + b = 0 (xét tất cả các trường hợp, làm tròn kết quả 2 số thập phân).
var a = prompt('Nhap a:');
var b = prompt('Nhap b');
var thuong = (a / b);
thuong = thuong.toFixed(2);
if(a == 0){
    if(b == 0){
        console.log('VO SO NGHIEM');
    }   else console.log('VO NGHIEM');
}   else console.log(thuong);