function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  alert(Logged in as ${email});
  // Add logic to redirect to dashboard.html
}

function signup() {
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  const confirm = document.getElementById("confirmPassword").value;
  const accepted = document.getElementById("terms").checked;

  if (password !== confirm) {
    alert("Passwords do not match!");
    return;
  }

  if (!accepted) {
    alert("You must accept the terms.");
    return;
  }

  alert("Account created successfully!");
  // Add logic to store or send user data
}

function addEmployee() {
  const name = document.getElementById("empName").value;
  const email = document.getElementById("empEmail").value;
  const role = document.getElementById("empRole").value;
  const dept = document.getElementById("empDept").value;

  console.log(Employee Added: ${name} - ${email} - ${role} - ${dept});
  alert("Employee added successfully!");
}