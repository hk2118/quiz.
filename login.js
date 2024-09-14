document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    let register = JSON.parse(localStorage.getItem("register")) || [];

    const user = register.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      window.location.href = "front.html";
    } else {
      // User not found or credentials do not match
      alert("Invalid email or password. Please try again.");
    }
  });
