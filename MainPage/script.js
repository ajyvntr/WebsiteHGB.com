const btnLogin = document.getElementById('btnLogin');
const usernameField = document.getElementById('username');
const passwordField = document.getElementById('password');

btnLogin.addEventListener('click', function(e) {
    e.preventDefault();
      if (username.value === "hgb" && password.value === "hgb123") {
        alert("Login Successful")
        window.location = "main.html"
    }else{
      alert("Invalid Username or Password");
      return;
    }
});
