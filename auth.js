// js/auth.js

function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      window.location.href = "index.html"; // chuyển đến trang chính
    })
    .catch((error) => {
      alert("Sai email hoặc mật khẩu!");
    });
}

function logout() {
  firebase.auth().signOut().then(() => {
    window.location.href = "login.html";
  });
}
