let today = new Date();
let h = today.getHours();
if(h<12){
	console.log("Buổi sáng");
}else{
	console.log("Không phải buổi sáng");
}
let diem = Math.round(Math.random()*100)/10;
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
console.log(`<b>Chúc mừng bạn đã được điểm: ${diem}, điểm chữ là: ${diemChu}!</b>`);

console.log("Chia hết cho 2:")
for (let i = 0; i <= 10; i++) {
	if(i % 2 == 0) {
		console.log(i);
	}
};

console.log("Chia hết cho 3:")
for (let chiaHetCho3 = 3; chiaHetCho3 <= 10; chiaHetCho3 +=3) {
	console.log(chiaHetCho3);
};

let w = 0;
while(w <= 10) {
	console.log(w);
	w++
};

console.log(`do while: ${w}`);
do {
	console.log(w);
	w++;
} while (w <= 10) 

let i =1;
let arrDem = ["vân", "Công", "Tuấn", "Bình", "Lực"];
arrDem.forEach(function(dem) {
	console.log(`Tên đệm thứ ${i}: ${dem}`);
	i++;
});	
