const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", () => {
  loginBtn.classList.add("loading");

  // Simulate login delay (anime suspense 😄)
  setTimeout(() => {
    loginBtn.classList.remove("loading");
    alert("✨ Login Success!");
  }, 2000);
});
