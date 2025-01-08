document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const popup = document.getElementById("popup");

  menuToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });

      mobileMenu.classList.add("hidden");
    });
  });

  const form = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");

  function showPopup() {
    popup.classList.remove("opacity-0", "pointer-events-none");
    setTimeout(() => {
      popup.classList.add("opacity-0", "pointer-events-none");
    }, 3000);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(form);

    fetch("https://formspree.io/f/mdkkpvlz", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          form.reset();
          showPopup();
        } else {
          formStatus.textContent =
            "Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.";
        }
      })
      .catch((error) => {
        formStatus.textContent =
          "Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.";
      });
  });
});
