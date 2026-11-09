//Function - Hàm
//Khai báo function không có tham số, không trả về kết quả
function helloWorld(){
	//Các câu lệnh
	console.log(`Hello world!`);
}
helloWorld();
//Khai báo function không có tham số, trả về kết quả
let diem = (Math.random()*10).toFixed(2);
function xepLoai(){
	let diemChu = "";
	if(diem<4){	diemChu = "F";
	}else if(diem<5){	diemChu = "D";
	}else if(diem<5.5){	diemChu = "D+";
	}else if(diem<6.5){	diemChu = "C";
	}else if(diem<7){	diemChu = "C+";
	}else if(diem<8){	diemChu = "B";
	}else if(diem<8.5){	diemChu = "B+";
	}else if(diem<9){	diemChu = "A";
	}else{	diemChu = "A+";
	}
	return diemChu;
}
console.log(`Sinh viên có điểm ${diem} đạt điểm chữ là ${xepLoai()}`);
function xepLoaiCoThamSo(x){
	let diemChu = "";
	if(x<4){	diemChu = "F";
	}else if(x<5){	diemChu = "D";
	}else if(x<5.5){	diemChu = "D+";
	}else if(x<6.5){	diemChu = "C";
	}else if(x<7){	diemChu = "C+";
	}else if(x<8){	diemChu = "B";
	}else if(x<8.5){	diemChu = "B+";
	}else if(x<9){	diemChu = "A";
	}else{	diemChu = "A+";
	}
	console.log(`Sinh viên có điểm ${diem} đạt điểm chữ là ${diemChu}`);
}
xepLoaiCoThamSo(diem);