// Sử dụng JavaScript để làm 1 chương trình:Dùng prompt để nhập vào giá trị họ và tên của 1 SV
// Dùng random để tạo ngẫu nhiên điểm GPA của SV đó
// Hiển thị ra màn hình: Họ và tên. Điểm GPA và xếp loại tốt nghiệp:
//  3.60 - 4.00: Xuất sắc
//  3.20 - 3.59: Giỏi 
//  2.50 - 3.19: Khá
//  2.00 - 2.49: Trung bình
//  Dưới 2.00: Không đạt
let hoTen = prompt(`Họ tên sinh viên:`);

let gpa = Math.round(Math.random() * 400) / 100;
if (gpa >= 3.60 && gpa <= 4.00) {
  alert(`Sinh viên ${hoTen} có gpa là ${gpa} được xếp tốt nghiệp loại Xuất sắc`);
} else if (gpa >=3.20 && gpa <= 3.59) {
  alert(`Sinh viên ${hoTen} có gpa là ${gpa} được xếp tốt nghiệp loại giỏi`);
} else if (gpa >= 2.50 && gpa <= 2.59) {
  alert(`Sinh viên ${hoTen} có gpa là ${gpa} được xếp tốt nghiệp loại khá`);
} else if (gpa >= 2.00 && gpa <= 2.49) {
  alert(`Sinh viên ${hoTen} có gpa là ${gpa} được xếp tốt nghiệp loại trung bình`);
} else if (gpa <= 2.00) {
  alert(`Sinh viên ${hoTen} có gpa là ${gpa} không đạt`);
}