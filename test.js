document.addEventListener('DOMContentLoaded', function() {

    // Testimonial Slider
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentTestimonial = 0;
    
    function showTestimonial(index) {
        testimonials.forEach(testimonial => {
            testimonial.classList.remove('active');
        });
        
        testimonials[index].classList.add('active');
    }
    
    prevBtn.addEventListener('click', function() {
        currentTestimonial--;
        
        if (currentTestimonial < 0) {
            currentTestimonial = testimonials.length - 1;
        }
        
        showTestimonial(currentTestimonial);
    });
    
    nextBtn.addEventListener('click', function() {
        currentTestimonial++;
        
        if (currentTestimonial >= testimonials.length) {
            currentTestimonial = 0;
        }
        
        showTestimonial(currentTestimonial);
    });
    
    // Auto-rotate testimonials
    setInterval(() => {
        currentTestimonial++;
        
        if (currentTestimonial >= testimonials.length) {
            currentTestimonial = 0;
        }
        
        showTestimonial(currentTestimonial);
    }, 5000);
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form submission handling
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send the form data to a server
            // For this example, we'll just show an alert
            alert('Thank you for your submission! We will contact you soon.');
            this.reset();
        });
    });
    
    // Animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.room-card, .service-card, .gallery-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animated elements
    document.querySelectorAll('.room-card, .service-card, .gallery-item').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Run once on page load
    animateOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
});

const galleryItems = [
            {
                img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                title: "Grand Entrance",
                desc: "The stunning facade of Jim Hotel at sunset"
            },
            {
                img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                title: "Presidential Suite",
                desc: "Our most luxurious accommodation with panoramic views"
            },
            {
                img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                title: "Infinity Pool",
                desc: "Relax with breathtaking ocean views from our heated pool"
            },
            {
                img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                title: "Gourmet Restaurant",
                desc: "Michelin-star dining experience with world-class chefs"
            },
            {
                img: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                title: "Luxury Spa",
                desc: "Ultimate relaxation and rejuvenation with our signature treatments"
            },
            {
                img: "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                title: "Sky Lounge",
                desc: "Signature cocktails with panoramic city views"
            },
            {
                img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                title: "Conference Hall",
                desc: "State-of-the-art meeting facilities for business events"
            },
            {
                img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                title: "Tropical Gardens",
                desc: "Lush landscapes surrounding the property with exotic plants"
            }
        ];
        
        let currentSlide = 0;
        const modal = document.getElementById("imageModal");
        const modalImg = document.getElementById("modalImage");
        const modalTitle = document.getElementById("modalTitle");
        const modalDesc = document.getElementById("modalDesc");
        
        // Open modal with clicked image
        function openModal(index) {
            currentSlide = index;
            updateModal();
            modal.style.display = "flex";
            document.body.style.overflow = "hidden";
        }
        
        // Close modal
        function closeModal() {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
        
        // Change slide in modal
        function changeSlide(direction) {
            currentSlide += direction;
            
            // Wrap around if at beginning or end
            if (currentSlide < 0) {
                currentSlide = galleryItems.length - 1;
            } else if (currentSlide >= galleryItems.length) {
                currentSlide = 0;
            }
            
            updateModal();
        }
        
        // Update modal content
        function updateModal() {
            const item = galleryItems[currentSlide];
            modalImg.src = item.img;
            modalImg.alt = item.title;
            modalTitle.textContent = item.title;
            modalDesc.textContent = item.desc;
        }
        
        // Close modal when clicking outside image
        modal.addEventListener("click", function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
        
        // Keyboard navigation
        document.addEventListener("keydown", function(e) {
            if (modal.style.display === "flex") {
                if (e.key === "Escape") {
                    closeModal();
                } else if (e.key === "ArrowLeft") {
                    changeSlide(-1);
                } else if (e.key === "ArrowRight") {
                    changeSlide(1);
                }
            }
        }); 
  document.addEventListener('DOMContentLoaded', function() {
            const roomsGrid = document.querySelector('.rooms-grid');
            const prevBtn = document.querySelector('.prev-btn');
            const nextBtn = document.querySelector('.next-btn');
            const roomCards = document.querySelectorAll('.room-card');
            
            if (roomsGrid && prevBtn && nextBtn && roomCards.length > 0) {
                const roomCard = roomCards[0];
                const roomCardWidth = roomCard.offsetWidth;
                const gap = 30; // Same as your CSS gap value
                const scrollAmount = roomCardWidth + gap;
                
                // Handle next button click
                nextBtn.addEventListener('click', () => {
                    roomsGrid.scrollBy({
                        left: scrollAmount,
                        behavior: 'smooth'
                    });
                });
                
                // Handle previous button click
                prevBtn.addEventListener('click', () => {
                    roomsGrid.scrollBy({
                        left: -scrollAmount,
                        behavior: 'smooth'
                    });
                });
                
                // Hide/show buttons based on scroll position
                roomsGrid.addEventListener('scroll', () => {
                    const maxScrollLeft = roomsGrid.scrollWidth - roomsGrid.clientWidth;
                    
                    // Show/hide previous button
                    if (roomsGrid.scrollLeft <= 10) {
                        prevBtn.style.opacity = '0.5';
                        prevBtn.style.cursor = 'not-allowed';
                    } else {
                        prevBtn.style.opacity = '1';
                        prevBtn.style.cursor = 'pointer';
                    }
                    
                    // Show/hide next button
                    if (roomsGrid.scrollLeft >= maxScrollLeft - 10) {
                        nextBtn.style.opacity = '0.5';
                        nextBtn.style.cursor = 'not-allowed';
                    } else {
                        nextBtn.style.opacity = '1';
                        nextBtn.style.cursor = 'pointer';
                    }
                });
                
                // Initialize button states
                roomsGrid.dispatchEvent(new Event('scroll'));
            }
        });

             // FAQ Accordion
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', () => {
                // Close all other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current item
                item.classList.toggle('active');
            });
        });
        
// Contact Form Submission
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    
    // Show loading state
    submitButton.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';
    submitButton.disabled = true;
    
    try {
        const formData = new FormData(contactForm);
        
        const response = await fetch('https://formspree.io/f/meqyrlkg', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            const name = contactForm.querySelector('input[name="name"]').value;
            const email = contactForm.querySelector('input[name="email"]').value;
            alert(`Thank you, ${name}! Your message has been sent. We'll get back to you at ${email} soon.`);
            contactForm.reset();
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('There was a problem sending your message. Please try again.');
    } finally {
        // Reset button state
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
    }
});

        
