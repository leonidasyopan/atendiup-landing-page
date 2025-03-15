document.addEventListener("DOMContentLoaded", function () {
  let testimonials = document.querySelectorAll(".testimonial");
  let index = 0;

  function showTestimonial(n) {
    testimonials.forEach((t, i) => {
      t.classList.remove("active");
      if (i === n) {
        t.classList.add("active");
      }
    });
  }

  function nextTestimonial() {
    index = (index + 1) % testimonials.length;
    showTestimonial(index);
  }

  setInterval(nextTestimonial, 5000);

  // Contact Form Submission
  document.querySelector(".contact-form form").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let message = document.querySelector("#message").value;

    if (name && email && message) {
      alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      this.reset();
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  });
});
