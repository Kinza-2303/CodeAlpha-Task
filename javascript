const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.onclick = () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    toggleBtn.innerText = "☀ Light Mode";
  } else {
    toggleBtn.innerText = "🌙 Dark Mode";
  }

 function showAlert(event) {
  event.preventDefault();

  const popup = document.getElementById("popup");
  popup.style.display = "block";

  setTimeout(() => {
    popup.style.display = "none";
  }, 3000);
}

};
