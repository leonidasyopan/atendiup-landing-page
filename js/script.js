document.addEventListener('DOMContentLoaded', () => {
  // Carousel Implementation
  const carousel = {
    currentIndex: 0,
    items: [],
    totalItems: 0,
    isTransitioning: false,

    init() {
      this.carouselInner = document.querySelector('.carousel-inner');
      this.items = document.querySelectorAll('.carousel-item');
      this.totalItems = this.items.length;

      // Set initial active item
      this.items[this.currentIndex].classList.add('active');

      // Event listeners for controls
      document.querySelector('.carousel-control.prev').addEventListener('click', () => this.prev());
      document.querySelector('.carousel-control.next').addEventListener('click', () => this.next());
    },

    updateCarousel() {
      this.isTransitioning = true;
      this.carouselInner.style.transform = `translateX(-${this.currentIndex * 100}%)`;

      // Update active class after transition
      setTimeout(() => {
        this.items.forEach(item => item.classList.remove('active'));
        this.items[this.currentIndex].classList.add('active');
        this.isTransitioning = false;
      }, 500);
    },

    next() {
      if (this.isTransitioning) return;
      this.currentIndex = (this.currentIndex + 1) % this.totalItems;
      this.updateCarousel();
    },

    prev() {
      if (this.isTransitioning) return;
      this.currentIndex = (this.currentIndex - 1 + this.totalItems) % this.totalItems;
      this.updateCarousel();
    }
  };

  // Initialize carousel
  carousel.init();

  // Contact Form Validation
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const formData = {
        name: this.querySelector('[name="name"]').value.trim(),
        email: this.querySelector('[name="email"]').value.trim(),
        message: this.querySelector('[name="message"]').value.trim()
      };

      if (validateForm(formData)) {
        // Here you would typically send the form data to a server
        console.log('Form submitted:', formData);
        showMessage('Message sent successfully!', 'success');
        this.reset();
      }
    });
  }

  function validateForm(data) {
    if (!data.name || !data.email || !data.message) {
      showMessage('Please fill in all required fields', 'error');
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      showMessage('Please enter a valid email address', 'error');
      return false;
    }

    return true;
  }

  function showMessage(text, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = text;

    document.body.appendChild(messageDiv);

    setTimeout(() => {
      messageDiv.remove();
    }, 3000);
  }
});