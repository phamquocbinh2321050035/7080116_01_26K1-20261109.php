function register() {
    let form = document.forms["formRegister"];

    let userName = form.userName.value;
    let email = form.email.value;
    let studentId = form.studentId.value;
    let fullName = form.fullName.value;
    let passWord = form.passWord.value;
    let confirmPassword = form["confirm-password"].value;

    if (userName == "" || email == "" || studentId == "" ||
        fullName == "" || passWord == "" || confirmPassword == "") {
        alert("Vui lòng nhập đầy đủ thông tin!");
    }
    else if (passWord.length <= 6) {
        alert("Mật khẩu phải lớn hơn 6 ký tự!");
    }
    else if (passWord != confirmPassword) {
        alert("Mật khẩu nhập lại không khớp!");
    }
    else {
        alert("Đăng ký thành công!");
    }
}