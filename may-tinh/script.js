function nhap(phepTinh) {
  phepTinh = formMayTinh.btnsTyped.value += phepTinh;
  console.log(phepTinh);
}
function tinh() {
  let phepTinh = formMayTinh.btnsTyped.value;
  console.log(phepTinh);
  let ketQua = eval(phepTinh); //eval(Phép tính) để bắt máy tính xử lý giá trị của chuỗi "Phép tính"
  formMayTinh.outputValue.value = ketQua;
}
function xoa() {
  formMayTinh.btnsTyped.value = "";
  formMayTinh.outputValue.value = "";
}
