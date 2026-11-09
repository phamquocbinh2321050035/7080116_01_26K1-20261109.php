// In tiêu đề bằng document.write()
document.write("<h1>Thông tin đơn hàng</h1>");

// Khai báo hằng số tên cửa hàng theo quy tắc UPPER_SNAKE_CASE
const STORE_NAME = "QB Food";

// Khai báo mã đơn hàng
let orderCode = "DH001";

// Khai báo tổng tiền
let totalPrice = 70;


// Chuỗi có cả chữ và số
let data = "123.45abc";

// parseInt() lấy phần số nguyên ở đầu chuỗi
document.write("parseInt: " + parseInt(data) + "<br>");

// parseFloat() lấy phần số thực ở đầu chuỗi
document.write("parseFloat: " + parseFloat(data) + "<br>");

// Number() cố gắng chuyển toàn bộ chuỗi thành số
// Vì "123.45abc" có chữ nên kết quả là NaN
document.write("Number: " + Number(data) + "<br>");

// isNaN() kiểm tra kết quả có phải NaN hay không
document.write("isNaN(Number(data)): " + isNaN(Number(data)) + "<br>");


// In totalPrice với đúng 2 chữ số sau dấu thập phân
document.write("totalPrice.toFixed(2): " + totalPrice.toFixed(2) + "<br>");


// Một số nguyên cần chuyển sang các hệ cơ số
let number = 255;

// toString(2): hệ nhị phân
document.write("Hệ 2: " + number.toString(2) + "<br>");

// toString(8): hệ bát phân
document.write("Hệ 8: " + number.toString(8) + "<br>");

// toString(10): hệ thập phân
document.write("Hệ 10: " + number.toString(10) + "<br>");

// toString(16): hệ thập lục phân
document.write("Hệ 16: " + number.toString(16) + "<br>");


// Chuỗi biểu diễn một số ở hệ nhị phân
let binaryString = "1010";

// parseInt(..., 2): chuyển từ hệ 2 sang hệ 10
let decimalNumber = parseInt(binaryString, 2);

// Chuyển kết quả sang hệ 16
document.write(
    "Chuỗi nhị phân " + binaryString +
    " sang hệ 16: " + decimalNumber.toString(16) + "<br>"
);


// Khai báo 2 số nguyên BigInt
let money1 = 9007199254740991n;
let money2 = 12345678901234567890n;

// Tính tổng hai BigInt
let bigIntTotal = money1 + money2;

// In tổng BigInt
document.write("Tổng BigInt: " + bigIntTotal + "<br>");

// In BigInt theo định dạng có dấu phân cách hàng nghìn
document.write(
    "BigInt toLocaleString(): " +
    bigIntTotal.toLocaleString() +
    "<br>"
);


// Template string sử dụng dấu backtick ` `
let summary = `Cửa hàng: ${STORE_NAME} | Mã đơn hàng: ${orderCode} | Tổng tiền: ${totalPrice.toFixed(2)} VNĐ`;

// In câu tổng hợp thông tin đơn hàng
document.write(summary + "<br>");