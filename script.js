function Login() {
  var done = 0;
  var username = document.login.username.value;
  var password = document.login.password.value;
  if (username == "mabim" && password == "mabim") {
    if (confirm("apakah anda ingin login") == true) {
      window.location.href = "https://github.com/AhmadAjiSatrio";
    } else {
      alert("login dibatalkan !");
    }
  } else {
    if (done == 0) alert("username/password salah");
  }
}
