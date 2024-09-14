document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("Conform_password").value; // Corrected the ID

  // Check if passwords match
  if (password !== confirmPassword) {
    alert("Password does not match");
    return; // Exit the function
  }

  // Retrieve the existing registered users from Local Storage
  let register = JSON.parse(localStorage.getItem("register")) || [];

  // Check if the user is already registered
  const isRegistered = register.some((user) => user.email === email);

  if (isRegistered) {
    alert("Already registered, please try to log in!");
    return; // Exit the function
  }

  // Create a new user object for each submission
  let user = {
    name: name,
    email: email,
    password: password,
    Conform_password: confirmPassword,
  };

  console.log(user);

  // Add the new user object to the register array
  register.push(user);

  // Store the updated register array in Local Storage
  localStorage.setItem("register", JSON.stringify(register));

  console.log(register);

  // Redirect to another page if registration is successful
  window.location.href = "front.html"; // Change "front.html" to the correct path
});
