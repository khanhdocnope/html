document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const loginBtn = document.getElementById("loginBtn");
  const messageText = document.getElementById("message");
  const togglePassword = document.getElementById("togglePassword");
  const passwordInput = document.getElementById("password");

  // 1. Hiệu ứng Hiện/Ẩn mật khẩu
  togglePassword.addEventListener("click", () => {
    const type =
      passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    togglePassword.textContent = type === "password" ? "👁️" : "🙈";
  });

  // 2. Xử lý sự kiện khi nhấn nút Đăng nhập
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Ngăn trang web tải lại

    const user = document.getElementById("username").value;

    // Thay đổi trạng thái nút bấm
    loginBtn.innerText = "Đang kiểm tra...";
    loginBtn.style.background = "#ccc";
    loginBtn.disabled = true;

    // Giả lập thời gian chờ xử lý (như đang kiểm tra server)
    setTimeout(() => {
      if (user) {
        // Hiệu ứng chào mừng thành công
        messageText.innerText = `Chào mừng ${user} đã quay trở lại!`;
        messageText.style.color = "#00ffcc";
        messageText.style.fontWeight = "bold";

        alert(`Đăng nhập thành công! Xin chào ${user}`);

        // Trả lại trạng thái nút
        loginBtn.innerText = "Thành công!";
        loginBtn.style.background = "#28a745";
        loginBtn.style.color = "#fff";
      }
    }, 1500);
  });
});
