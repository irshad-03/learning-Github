
// ----------- about section slide show creation -----------//
document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) {
        slide.classList.add('active');
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  setInterval(nextSlide, 3000); // Change every 3 seconds
});

// Certificate viewer functionality
document.addEventListener("DOMContentLoaded", function () {
    // Certificate viewer variables
    const certOverlay = document.getElementById("certOverlay");
    const certBtn = document.getElementById("certBtn");
    const closeBtn = document.getElementById("closeBtn");
    const certImage = document.getElementById("certImage");
    const certTitle = document.getElementById("certTitle");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");
    const certCounter = document.getElementById("certCounter");
    
    // Certificate data - replace with your actual certificate images and titles
    const certs = [
        { src: "digisaksham.png", title: "Digisaksham Certificate" },
        { src: "salesforce-certi.png", title: "salseforce internship Certificate" },
    ];
    
    let currentCert = 0;

    // Function to show certificate
    function showCertificate(index) {
        certImage.src = certs[index].src;
        certImage.alt = certs[index].title;
        certTitle.textContent = certs[index].title;
        certCounter.textContent = `${index + 1} of ${certs.length}`;
    }

    // Event listeners for certificate viewer
    certBtn.addEventListener("click", () => {
        certOverlay.style.display = "flex";
        showCertificate(currentCert);
    });

    closeBtn.addEventListener("click", () => {
        certOverlay.style.display = "none";
    });

    nextBtn.addEventListener("click", () => {
        currentCert = (currentCert + 1) % certs.length;
        showCertificate(currentCert);
    });

    prevBtn.addEventListener("click", () => {
        currentCert = (currentCert - 1 + certs.length) % certs.length;
        showCertificate(currentCert);
    });

    // Close certificate viewer when clicking outside content
    certOverlay.addEventListener("click", (e) => {
        if (e.target === certOverlay) {
            certOverlay.style.display = "none";
        }
    });
});

// Function to animate skill bars when they come into view
        function animateSkillBars() {
            const skillBars = document.querySelectorAll('.skill-bar');
            
            skillBars.forEach(bar => {
                const progress = bar.querySelector('.skill-progress');
                const level = progress.getAttribute('data-level');
                
                // Set custom property for animation
                progress.parentElement.style.setProperty('--skill-level', level);
                
                // Add animate class when element is in viewport
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            bar.classList.add('animate');
                            observer.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.5 });
                
                observer.observe(bar);
            });
        }

        // Initialize when page loads
        document.addEventListener('DOMContentLoaded', animateSkillBars);

  // ----art section Simple JavaScript for modal functionality
document.addEventListener('DOMContentLoaded', function() {
            const track = document.querySelector('.gallery-track');
            const slides = document.querySelectorAll('.gallery-slide');
            const prevBtn = document.querySelector('.prev-btn');
            const nextBtn = document.querySelector('.next-btn');
            const dotsContainer = document.querySelector('.gallery-dots');
            const currentSlideEl = document.querySelector('.current-slide');
            const totalSlidesEl = document.querySelector('.total-slides');
            
            let currentIndex = 0;
            const totalSlides = slides.length;
            
            // Initialize dots
            function initDots() {
                for (let i = 0; i < totalSlides; i++) {
                    const dot = document.createElement('div');
                    dot.classList.add('dot');
                    if (i === 0) dot.classList.add('active');
                    dot.addEventListener('click', () => {
                        goToSlide(i);
                    });
                    dotsContainer.appendChild(dot);
                }
                totalSlidesEl.textContent = totalSlides;
            }
            
            // Update dots
            function updateDots() {
                const dots = document.querySelectorAll('.dot');
                dots.forEach((dot, index) => {
                    if (index === currentIndex) {
                        dot.classList.add('active');
                    } else {
                        dot.classList.remove('active');
                    }
                });
            }
            
            // Go to specific slide
            function goToSlide(index) {
                if (index < 0) index = totalSlides - 1;
                if (index >= totalSlides) index = 0;
                
                track.style.transform = `translateX(-${index * 100}%)`;
                currentIndex = index;
                currentSlideEl.textContent = index + 1;
                updateDots();
            }
            
            // Next slide
            function nextSlide() {
                goToSlide(currentIndex + 1);
            }
            
            // Previous slide
            function prevSlide() {
                goToSlide(currentIndex - 1);
            }
            
            // Event listeners
            prevBtn.addEventListener('click', prevSlide);
            nextBtn.addEventListener('click', nextSlide);
            
            // Initialize
            initDots();
            
            // Auto-play (optional)
            let autoplay = setInterval(nextSlide, 5000);
            
            // Pause autoplay on hover
            const gallery = document.querySelector('.gallery-container');
            gallery.addEventListener('mouseenter', () => {
                clearInterval(autoplay);
            });
            
            gallery.addEventListener('mouseleave', () => {
                autoplay = setInterval(nextSlide, 5000);
            });
            
            // Keyboard navigation
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') prevSlide();
                if (e.key === 'ArrowRight') nextSlide();
            });
            
            // Swipe support for touch devices
            let startX = 0;
            let endX = 0;
            
            gallery.addEventListener('touchstart', (e) => {
                startX = e.touches[0].clientX;
            });
            
            gallery.addEventListener('touchend', (e) => {
                endX = e.changedTouches[0].clientX;
                handleSwipe();
            });
            
            function handleSwipe() {
                const threshold = 50;
                if (startX - endX > threshold) {
                    nextSlide(); // Swipe left
                } else if (endX - startX > threshold) {
                    prevSlide(); // Swipe right
                }
            }

        });
