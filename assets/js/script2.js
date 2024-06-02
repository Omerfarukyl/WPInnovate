document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Simulate form submission
    setTimeout(function () {
      document.getElementById("contactForm").reset();
      document.getElementById("successMessage").classList.remove("hidden");
    }, 500);
  });
