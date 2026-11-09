//Mảng trong JavaScript
//let tenMang = new Array("gt1","gt2",..."gtn");
let mangThu = new Array[
  ("Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy")
]();
let mangThang = new Array[
  ("Tháng Giêng",
  "Tháng Hai",
  "Tháng Ba",
  "Tháng Tư",
  "Tháng Năm",
  "Tháng Sáu",
  "Tháng Ngâu",
  "Tháng Tám",
  "Tháng Chín",
  "Tháng Mười",
  "Tháng Mười một",
  "Tháng Chạp")
]();
console.log(mangThu[1]);

//Ngày tháng (thời gian trong JavaScript)
var d = new Date();
console.log(d);

//Đổi ngày hiện tại thành 30/09/2026
/*d.setDate(1);
d.setFullYear(2026);
d.setMonth(0);
d.setHours(0);
d.setMinutes(0);
d.setSeconds(0);
d.setMilliseconds(0);*/
console.log(`Thời gian sau khi đổi là: ${d}`);

var d2 = new Date("09/29/2026 11:11:11");
console.log(d2);

var d3 = new Date(2027, 0, 1, 0, 0, 0, 500);
console.log(d3);

var d4 = new Date(1798765200000);
console.log(d4);

let year = d.getFullYear();
console.log(`Năm nay là năm: ${year}`);

let month = d.getMonth();
console.log(`Tháng hiện tại là: ${mangThang[month]}`);

let date = d.getDate();
console.log(`Ngày hiện tại là: ${date}`);

let day = d.getDay();
console.log(`Thứ hiện tại là: ${mangThu[day]}`);

let hours = d.getHours();
console.log(`Giờ hiện tại là: ${hours}`);

let minutes = d.getMinutes();
console.log(`Phút hiện tại là: ${minutes}`);

let seconds = d.getSeconds();
console.log(`Giây hiện tại là: ${seconds}`);

let ms = d.getMilliseconds();
console.log(`Mili giây hiện tại là: ${ms}`);

console.log(`Bây giờ là: ${hours}: ${minutes} :${seconds}`);

d5 = new Date();
console.log(`Giá trị giờ chưa khai ISO ${d5}`);
console.log(`Giá trị giờ đã khai ISO ${d5.toISOString()}`);
console.log(`Giá trị giờ sử dụng toString ${d5.toString()}`);
console.log(`Giá trị giờ sử dụng toDateString ${d5.toDateString()}`);
console.log(`Giá trị giờ sử dụng toTimeString ${d5.toTimeString()}`);
console.log(`Giá trị giờ sử dụng UTCString ${d5.toUTCString()}`);
console.log(`Giá trị giờ sử dụng LocaleString ${d5.toLocaleString("vi-VN")}`);
console.log(
  `Giá trị giờ sử dụng LocaleString ${d5.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })}`,
);
//Chuỗi thời gian chuẩn (ISO):
//"YYYY-MM-DDTHH:mm:ssZ"
//Số mili giây tính từ 0:0:0.000 ngày 01/01/1970 đến thời điểm hiện tại
