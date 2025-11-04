        document.addEventListener('DOMContentLoaded', function() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                    }
                });
            }, { 
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });
            
            const elementsToObserve = [
                '.card', '.about-content', '.img', 
                '.contact-form', '.text' , '.text-about' , '.service-card', '.rooms-card' ,'.about-img-spa','.about-img','.about-img-2','.about-img-sp' , '.hr-animate', '.why-choose-container' , '.menu-preview' ,'.booking-background' ,'.booking-container',
                '.testimonial-slider' , '.booking-form' ,'.booking-info' ,'.contact-content' , '.newsletter-content' , '.blog-card' ,'.faq-item' ,'.footer-content' , '.hero' ,'.testimonial-hero' , '.about-hero-content' ,'.cta-content' , '.contact-hero-content' , '.gallery-section' ,'.contact-info' ,'.text-hero-rooms'  , '.comments-section' , '.service-cards-our' , ,'.navbar'
            ];
            
            elementsToObserve.forEach(selector => {
                document.querySelectorAll(selector).forEach(el => observer.observe(el));
            });
        });
        

                // Animation for stat items only
        document.addEventListener('DOMContentLoaded', function() {
            const statItems = document.querySelectorAll('.stat-item');
            const statNumbers = document.querySelectorAll('.stat-number');
            
            // Observer for stat items
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                        
                        // Start counting animation
                        const statNumber = entry.target.querySelector('.stat-number');
                        if (statNumber) {
                            startCounting(statNumber);
                        }
                    }
                });
            }, { 
                threshold: 0.3,
                rootMargin: '0px 0px -50px 0px'
            });

            // Observe all stat items
            statItems.forEach(item => observer.observe(item));

            // Counting function
            function startCounting(counter) {
                const target = +counter.getAttribute('data-count');
                const duration = 2000; // 2 seconds
                const increment = target / (duration / 50);
                let current = 0;

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        counter.textContent = target;
                        counter.classList.add('counting');
                        clearInterval(timer);
                    } else {
                        counter.textContent = Math.floor(current);
                    }
                }, 50);
            }
        });

