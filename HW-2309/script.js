// Khai báo đoạn văn bản khoảng 50 từ
let str = "Đội tuyển bóng đá quốc gia Anh (tiếng Anh: England national football team) là đội tuyển bóng đá của Hiệp hội bóng đá Anh (FA) và đại diện cho Anh trên bình diện quốc tế. Sân nhà của đội tuyển Anh là sân vận động Wembley, London. Trung tâm huấn luyện quốc gia của đội tuyển là St George's Park tại Burton upon Trent.";

// 1. In văn bản ban đầu
console.log("Văn bản ban đầu:");
console.log(str);

// 2. Đếm số từ
let danhSachTu = str.split(" ");
console.log("Số từ trong văn bản:", danhSachTu.length);

// 3. Đổi từ "Anh" thành "ANH"
let newStr = str.replaceAll("Anh", "ANH");

console.log("Văn bản sau khi đổi Anh thành ANH:");
console.log(newStr);

// 4. Tách các câu
let danhSachCau = str.split(". ");

console.log("Danh sách các câu:");
console.log(danhSachCau);

// 5. Đếm số câu
console.log("Số câu trong văn bản:", danhSachCau.length);