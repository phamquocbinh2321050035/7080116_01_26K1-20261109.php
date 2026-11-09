document.write("<h1>Hello world 2!</h1>");
//console.log("Hello world in logs");
name = "value";
var name2 = "value 2";
let name3 = "value 3";
let txtFullName = "";
const UPPER_SNAKE_CASE = 1212312;
const MIN_SCORE = 0;
const x = 123456;
let t = 200;
function viDuVar(t){
	document.write(t);
}
//viDuVar(t);
//document.write(t);
//Kiểu dữ liệu:
let soNguyen = 123;
let soThuc = 123.456;
let soAm = -123;
let soVoCuc = Infinity;
let khongPhaiSo = NaN;
let chuoi = "123.456gjh";
document.write(parseInt(chuoi));
document.write(parseFloat(chuoi));
document.write(Number(chuoi));
document.write(isNaN(Number(chuoi)));
document.write(isNaN(parseFloat(chuoi)));
document.write("<br>");
document.write(soThuc.toFixed(2));
//Biến đổi số 1000000 sang hệ cơ số 2, 8, 10, 16
let motTrieu = 1000000;
document.write("<br>Hệ nhị phân: " + motTrieu.toString(2));
document.write("<br>Hệ bát phân: " + motTrieu.toString(8));
document.write("<br>Hệ thập phân: " + motTrieu.toString(10));
document.write("<br>Hệ thập lục phân: " + motTrieu.toString(16));
//Biến đổi số f4240 sang hệ cơ số 2, 8, 10, 16
let motTrieuBi = "11110100001001000000";
let motTrieu2 = parseInt(motTrieuBi,2);
document.write("<br>Hệ nhị phân: " + motTrieu2.toString(2));
document.write("<br>Hệ bát phân: " + motTrieu2.toString(8));
document.write("<br>Hệ thập phân: " + motTrieu2.toString(10));
document.write("<br>Hệ thập lục phân: " + motTrieu2.toString(16));
let strBigInt = BigInt("1111111111111111111111111");
let strBigInt2 = BigInt("55555555555555555555555555");
document.write("<br>");
document.write(strBigInt+strBigInt2);
let bigInt = 222222222222222222222222222222n;
document.write("<br>");
document.write(strBigInt+bigInt);
document.write("<br>");
document.write(bigInt.toLocaleString());
//Kiểu String
let str = "Đây là 1 chuỗi";
let str2 = 'Đây là 1 chuỗi';
let str3 = `Đây là 1 chuỗi`;
document.write("<br>");
//document.write(`<br>Kết quả của strBigInt + strBigInt2 là: ${strBigInt+strBigInt2} <br>`);
document.write(`Đây là chuỗi được biến đổi IN HOA từ '${str3}', kết quả: '${str3.toUpperCase()}'<br>`);
document.write(`Đây là chuỗi được biến đổi in thường từ '${str3}', kết quả: '${str3.toLowerCase()}'<br>`);
document.write(`Đây là chuỗi được biến đổi màu sắc từ '${str3}', kết quả: '${str3.fontcolor('red')}'<br>`);
document.write(`Đây là chuỗi được biến đổi in đậm, màu xanh dương từ, cỡ chữ 8 '${str3}', kết quả: '${str3.bold().fontcolor('blue').fontsize(8)}'<br>`);
document.write(`Đây là chuỗi được biến đổi từ 'H2O', kết quả: 'H${'2'.sub()}O'<br>`);
document.write(`Đây là chuỗi được biến đổi từ 'H2O', kết quả: 'H${'2'.sub()}O'<br>`);
document.write(`Symbol của #8707 là: '${String.fromCodePoint(8707,8708,8709,8710)}'<br>`);
let Euro = String.fromCodePoint(8364);
document.write(`Giá tiền của cái dép này là 123,456${Euro}<br>`);
document.write(`Chuỗi từ mã Unicode 63-70 là: ${String.fromCharCode(63,64,65,66,67)}`);
document.write(`Chuỗi được viết theo 3 cách: sử dụng "", sử dụng '', sử dụng \`\`<br>`);
document.write(`&lt;br> là thẻ xuống dòng trong HTML<br>`);
document.write(`Các ký tự sau buộc phải dùng ký tự thoát trong HTML nếu muốn viết trong chuỗi (chuỗi được bắt đầu giống với ký tự đó), bao gồm \', \", \', \\<br>`);
//Các phương thức khác
let Str = "Hà Nội mùa này vắng những cơn mưa, hôm nay mưa to quá";
document.write(`8 ký tự từ thứ 4 đến 11 của chuỗi ${Str} là '${Str.slice(3,10)}'`);
document.write(`3 ký tự cuối cùng của chuỗi ${Str} là '${Str.slice(-3)}'`);
//Tìm chuỗi trong 1 chuỗi
document.write(`Chuỗi ${Str} có chuỗi con 'mưa', vị trí: ${Str.indexOf('mưa')}<br>`);
document.write(`Chuỗi ${Str} có chuỗi con 'mưa', vị trí: ${Str.lastIndexOf('mưa')}<br>`);
document.write(`Chuỗi ${Str} có chuỗi con 'mưa': ${Str.includes('mưa')}<br>`);
document.write(`Ký tự ở vị trí thứ 10 của chuỗi '${Str}' là '${Str.at(11)}'`);
document.write(`Ký hiệu ῼ có CodePoint là: ${'ῼ'.codePointAt(0)}`);
document.write(`Ký tự thứ 4 của '${Str}' là '${Str.charAt(3)}'`);
document.write(`Các ký hiệu từ 1-11 của chuỗi ${Str} là: `);
for(i=0;i<=10;i++){
	document.write(Str.charAt(i));
}
document.write(`Các ký hiệu ASCII từ 1-128 là:`);
for(i=1;i<=1;i++){
	document.write(`<br>${i}: ${String.fromCharCode(i)}`);
}
//Xem Str có bao nhiêu từ và có bao nhiêu ký tự.
document.write(`<br>Số ký tự trong chuỗi '${Str}' là: ${Str.length}`);
document.write(`<br>Số từ trong chuỗi '${Str}' là: ${Str.split(' ').length}`);
let Str2 = "Hôm nay là thứ 4. Chúng ta học môn WAD.";
//Đếm số câu trong 1 Chuỗi.
document.write(`<br>Số câu trong chuỗi '${Str2}' là: ${Str2.split('.').length-1}`);
//Viết 1 số dạng 10 ký tự:
//5 -> 10 ký tự: 0000000005
document.write(`<br>Viết số 5 dạng 5 ký tự: ${'5'.padStart(10,"0")}`);
//Trình bày 1-9999 dạng 4 ký tự
for(i=1; i<=99; i++){
	let Stri = i.toString();
	document.write(`<br>${Stri.padStart(2,"0")}`);
}
//Viết ký hiệu ... 100 lần: Sử dụng repeat(100)
//Boolean -> true nếu đúng, false nếu sai.
document.write(1>2);
document.write(100>2);
var x1;
//document.write(x.constructor);
//strReplace();
//strReplaceAll();
x1 = null;
Str = null;