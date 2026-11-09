/*
Đề bài:
Hãy tạo danh sách gồm 100 sinh viên,
có điểm môn học Phát triển ứng dụng web chạy từ 0-> 10,
xếp loại điểm chữ cho 100 sinh viên này.
Nếu sinh viên đạt >=8 được xếp loại sinh viên giỏi.
Nếu điểm từ 7-8 xếp loại Khá, còn lại không xếp loại
*/

for (let id = 1; id <= 100; id++) {
  let diem = Math.round(Math.random() * 100) / 10;
  if (diem >= 8) {
    console.log(`Sinh viên ${id} có số điểm là ${diem} được xếp loại giỏi`);
  } else if (diem >= 7 && diem <= 8) {
    console.log(`Sinh viên ${id} có số điểm là ${diem} được xếp loại khá`);
  } else {
    console.log(`Sinh viên ${id} có số điểm là ${diem} không được xếp loại`);
  }
};
