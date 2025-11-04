        document.addEventListener('DOMContentLoaded', function() {
            // Mobile Navigation
            const hamburger = document.querySelector('.hamburger');
            const navMenu = document.querySelector('.nav-menu');
            const overlay = document.querySelector('.overlay');
            
            hamburger.addEventListener('click', function() {
                this.classList.toggle('active');
                navMenu.classList.toggle('active');
                overlay.classList.toggle('active');
            });
            
            // Close mobile menu when clicking on overlay
            overlay.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                this.classList.remove('active');
                
                // Close all dropdowns when closing the menu
                document.querySelectorAll('.dropdown').forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
                
                // Close language dropdown on mobile
                document.querySelectorAll('.language-selector').forEach(selector => {
                    selector.classList.remove('active');
                });
            });
            
            // Handle dropdown toggle on mobile
            document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
                toggle.addEventListener('click', function(e) {
                    if (window.innerWidth <= 992) {
                        e.preventDefault();
                        const dropdown = this.closest('.dropdown');
                        
                        // Close other dropdowns
                        document.querySelectorAll('.dropdown').forEach(otherDropdown => {
                            if (otherDropdown !== dropdown) {
                                otherDropdown.classList.remove('active');
                            }
                        });
                        
                        // Toggle current dropdown
                        dropdown.classList.toggle('active');
                    }
                });
            });
            
            // Close mobile menu when clicking on a regular link
            document.querySelectorAll('.nav-link:not(.dropdown-toggle)').forEach(link => {
                link.addEventListener('click', () => {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    overlay.classList.remove('active');
                });
            });
            
            // Mobile language selector functionality
            document.querySelectorAll('.language-btn').forEach(btn => {
                btn.addEventListener('click', function(e) {
                    if (window.innerWidth <= 992) {
                        e.preventDefault();
                        const languageSelector = this.closest('.language-selector');
                        languageSelector.classList.toggle('active');
                    }
                });
            });
            
            // Language selection
            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const lang = this.getAttribute('data-lang');
                    alert(`Language changed to ${lang}`);
                    
                    // Update active state
                    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Close dropdowns
                    document.querySelectorAll('.language-selector').forEach(selector => {
                        selector.classList.remove('active');
                    });
                });
            });
            
            // Booking button functionality
            document.querySelectorAll('.btn-booking').forEach(btn => {
                btn.addEventListener('click', function() {
                    alert('Booking functionality would go here!');
                });
            });
            
            // Sticky Header
            const navbar = document.querySelector('.navbar');
            
            window.addEventListener('scroll', function() {
                if (window.scrollY > 100) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });
            
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
        });