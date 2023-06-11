function login() {
    // Lấy thông tin tên đăng nhập và mật khẩu
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Kiểm tra nếu tên đăng nhập là admin và mật khẩu là 123456
    if (username == "admin" && password == "123456") {
       // Hiển thị thông báo đăng nhập thành công
       document.getElementById("message").innerHTML = "Đăng nhập thành công!";
    } else {
       // Hiển thị thông báo đăng nhập thất bại
       document.getElementById("message").innerHTML = "Tên đăng nhập hoặc mật khẩu không đúng!";
    }
    
    // Ngăn chặn form được gửi đi
    return false;
 }
 