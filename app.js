function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {

    let user = userCredential.user;

    // Phân quyền đơn giản
    if (user.email === "admin@gmail.com") {
        localStorage.setItem("role", "admin");
    } else {
        localStorage.setItem("role", "student");
    }

    window.location.href = "dashboard.html";
  })
  .catch(() => {
    alert("Sai tài khoản!");
  });
}
