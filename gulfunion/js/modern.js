/**
 * Modern Website JavaScript
 * Gulf Union Ozone - Industrial Solutions
 */

'use strict';

class ModernWebsite {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupScrollEffects();
        this.setupAnimations();
        this.setupMobileNavigation();
        this.setupProductFilters();
        this.setupFormHandling();
        this.setupScrollToTop();

        console.log('Modern Website Initialized');
    }

    setupEventListeners() {
        // Navigation scroll effect
        window.addEventListener('scroll', this.throttle(this.handleScroll.bind(this), 100));

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', this.handleAnchorClick.bind(this));
        });

        // Resize event
        window.addEventListener('resize', this.throttle(this.handleResize.bind(this), 100));

        // Load event
        window.addEventListener('load', this.handleLoad.bind(this));
    }

    handleScroll() {
        const navbar = document.getElementById('navbar');
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Add/remove scrolled class
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Update active navigation link
        this.updateActiveNavLink();

        // Trigger scroll animations
        this.triggerScrollAnimations();
    }

    handleAnchorClick(e) {
        const href = e.currentTarget.getAttribute('href');

        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const navbarHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                this.closeMobileMenu();
            }
        }
    }

    handleResize() {
        // Close mobile menu on resize
        if (window.innerWidth > 768) {
            this.closeMobileMenu();
        }
    }

    handleLoad() {
        // Trigger initial animations
        setTimeout(() => {
            this.triggerScrollAnimations();
        }, 100);
    }

    updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        let current = '';
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const navbarHeight = document.getElementById('navbar').offsetHeight;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top + scrollTop - navbarHeight - 100;
            const sectionHeight = section.offsetHeight;

            if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    setupScrollEffects() {
        // Parallax effect for hero background (if needed)
        const hero = document.querySelector('.hero');
        if (hero) {
            window.addEventListener('scroll', this.throttle(() => {
                const scrolled = window.pageYOffset;
                const rate = scrolled * -0.5;
                hero.style.transform = `translateY(${rate * 0.1}px)`;
            }, 16));
        }
    }

    setupAnimations() {
        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe animated elements
        this.observeAnimatedElements();
    }

    observeAnimatedElements() {
        const animatedElements = document.querySelectorAll([
            '.service-card',
            '.product-card',
            '.highlight-item',
            '.stat-item',
            '.contact-item',
            '.hero-card'
        ].join(','));

        animatedElements.forEach((element, index) => {
            // Add animation classes with staggered delays
            element.classList.add('fade-in');
            element.style.transitionDelay = `${index * 0.1}s`;

            if (this.observer) {
                this.observer.observe(element);
            }
        });
    }

    triggerScrollAnimations() {
        const elements = document.querySelectorAll('.fade-in:not(.visible)');

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    }

    setupMobileNavigation() {
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');

        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                this.toggleMobileMenu();
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                    this.closeMobileMenu();
                }
            });

            // Close menu when clicking on nav links
            navMenu.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    this.closeMobileMenu();
                });
            });
        }
    }

    toggleMobileMenu() {
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');

        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');

        // Prevent scrolling when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    closeMobileMenu() {
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');

        if (navToggle && navMenu) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    setupProductFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const productCards = document.querySelectorAll('.product-card');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const category = button.getAttribute('data-category');

                // Update active filter button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                // Filter products
                productCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');

                    if (category === 'all' || cardCategory === category) {
                        card.style.display = 'block';
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';

                        // Animate appearance
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 100);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';

                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }

    setupFormHandling() {
        const contactForm = document.getElementById('contact-form');

        if (contactForm) {
            contactForm.addEventListener('submit', this.handleFormSubmit.bind(this));
        }

        // Add floating label effect
        const formInputs = document.querySelectorAll('.form-group input, .form-group textarea, .form-group select');
        formInputs.forEach(input => {
            input.addEventListener('focus', this.handleInputFocus);
            input.addEventListener('blur', this.handleInputBlur);
        });
    }

    handleFormSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;

        // Show loading state
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitButton.disabled = true;

        // Collect form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Send email using multiple methods
        this.sendContactEmail(data)
            .then(() => {
                // Reset button
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;

                // Show success notification
                this.showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');

                // Reset form
                form.reset();

                // Remove focus styles
                form.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
                    input.classList.remove('focused');
                });
            })
            .catch((error) => {
                console.error('Email sending failed:', error);

                // Reset button
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;

                // Show error notification with fallback
                this.showNotification('Message submitted! We\'ll contact you soon. For urgent inquiries, please call +966 11 123 4567', 'info');

                // Reset form even on error
                form.reset();

                // Remove focus styles
                form.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
                    input.classList.remove('focused');
                });
            });

        console.log('Form submitted:', data);
    }

    async sendContactEmail(data) {
        const emailData = {
            to: 'info@gulfunionozone.com',
            subject: `New Contact Form Submission from ${data.name}`,
            html: this.generateEmailTemplate(data),
            from: data.email,
            replyTo: data.email
        };

        // Try multiple email sending methods
        try {
            // Method 1: Try PHP handler first (most reliable)
            try {
                return await this.sendViaPHP(data);
            } catch (phpError) {
                console.log('PHP handler failed, trying other methods...', phpError);
            }

            // Method 2: Try EmailJS if available
            if (typeof emailjs !== 'undefined') {
                return await this.sendViaEmailJS(data);
            }

            // Method 3: Try Formspree
            return await this.sendViaFormspree(data);

        } catch (error) {
            console.error('All email methods failed:', error);
            // Method 4: Generate mailto link as fallback
            this.generateMailtoLink(data);
            throw error;
        }
    }

    async sendViaPHP(data) {
        // Send to PHP handler
        const response = await fetch('contact-handler.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`PHP handler responded with ${response.status}`);
        }

        const result = await response.json();

        if (!result.success) {
            throw new Error(result.message || 'PHP handler reported failure');
        }

        return result;
    }

    async sendViaEmailJS(data) {
        // EmailJS configuration - you would need to set up EmailJS service
        const serviceID = 'your_service_id'; // Replace with actual service ID
        const templateID = 'contact_form'; // Replace with actual template ID
        const userID = 'your_user_id'; // Replace with actual user ID

        const templateParams = {
            from_name: data.name,
            from_email: data.email,
            company: data.company || 'Not specified',
            service: data.service || 'Not specified',
            message: data.message,
            to_email: 'info@gulfunionozone.com'
        };

        return emailjs.send(serviceID, templateID, templateParams, userID);
    }

    async sendViaFormspree(data) {
        // Formspree endpoint - replace with your actual Formspree endpoint
        const formspreeEndpoint = 'https://formspree.io/f/your_form_id';

        const response = await fetch(formspreeEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                company: data.company,
                service: data.service,
                message: data.message,
                _subject: `New Contact Form Submission from ${data.name}`,
                _replyto: data.email
            })
        });

        if (!response.ok) {
            throw new Error('Formspree submission failed');
        }

        return response.json();
    }

    generateEmailTemplate(data) {
        return `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
                <div style="background: linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%); color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                    <h2 style="margin: 0; font-size: 24px;">Gulf Union Ozone</h2>
                    <p style="margin: 5px 0 0 0; opacity: 0.9;">New Contact Form Submission</p>
                </div>
                
                <div style="padding: 20px; background: #f8fafc; border-radius: 8px; margin-bottom: 20px;">
                    <h3 style="color: #2563eb; margin-top: 0;">Contact Information</h3>
                    <p><strong>Name:</strong> ${data.name}</p>
                    <p><strong>Email:</strong> ${data.email}</p>
                    <p><strong>Company:</strong> ${data.company || 'Not specified'}</p>
                    <p><strong>Service of Interest:</strong> ${data.service || 'Not specified'}</p>
                </div>
                
                <div style="padding: 20px; background: #f8fafc; border-radius: 8px;">
                    <h3 style="color: #2563eb; margin-top: 0;">Message</h3>
                    <p style="line-height: 1.6; white-space: pre-wrap;">${data.message || 'No message provided'}</p>
                </div>
                
                <div style="margin-top: 20px; padding: 15px; background: #e5f3ff; border-radius: 8px; border-left: 4px solid #2563eb;">
                    <p style="margin: 0; font-size: 14px; color: #64748b;">
                        This email was sent from the Gulf Union Ozone website contact form.
                        Please respond directly to ${data.email}
                    </p>
                </div>
            </div>
        `;
    }

    generateMailtoLink(data) {
        const subject = encodeURIComponent(`Contact Form Submission from ${data.name}`);
        const body = encodeURIComponent(`
Name: ${data.name}
Email: ${data.email}
Company: ${data.company || 'Not specified'}
Service of Interest: ${data.service || 'Not specified'}

Message:
${data.message || 'No message provided'}

---
This inquiry was submitted through the Gulf Union Ozone website contact form.
        `.trim());

        const mailtoLink = `mailto:info@gulfunionozone.com?subject=${subject}&body=${body}`;

        // Try to open default email client
        const link = document.createElement('a');
        link.href = mailtoLink;
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    handleInputFocus(e) {
        e.target.closest('.form-group').classList.add('focused');
    }

    handleInputBlur(e) {
        if (!e.target.value) {
            e.target.closest('.form-group').classList.remove('focused');
        }
    }

    setupScrollToTop() {
        // Create scroll to top button
        const scrollButton = document.createElement('button');
        scrollButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
        scrollButton.className = 'scroll-to-top';
        scrollButton.setAttribute('aria-label', 'Scroll to top');

        // Add styles
        Object.assign(scrollButton.style, {
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'var(--primary)',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            opacity: '0',
            visibility: 'hidden',
            transition: 'all 0.3s ease-in-out',
            zIndex: '1000',
            fontSize: '18px',
            boxShadow: 'var(--shadow-lg)'
        });

        document.body.appendChild(scrollButton);

        // Show/hide on scroll
        window.addEventListener('scroll', this.throttle(() => {
            if (window.pageYOffset > 300) {
                scrollButton.style.opacity = '1';
                scrollButton.style.visibility = 'visible';
            } else {
                scrollButton.style.opacity = '0';
                scrollButton.style.visibility = 'hidden';
            }
        }, 100));

        // Scroll to top on click
        scrollButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Hover effect
        scrollButton.addEventListener('mouseenter', () => {
            scrollButton.style.transform = 'translateY(-3px)';
            scrollButton.style.boxShadow = 'var(--shadow-xl)';
        });

        scrollButton.addEventListener('mouseleave', () => {
            scrollButton.style.transform = 'translateY(0)';
            scrollButton.style.boxShadow = 'var(--shadow-lg)';
        });
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;

        const icons = {
            success: 'fas fa-check-circle',
            error: 'fas fa-exclamation-circle',
            warning: 'fas fa-exclamation-triangle',
            info: 'fas fa-info-circle'
        };

        const colors = {
            success: '#10b981',
            error: '#ef4444',
            warning: '#f59e0b',
            info: '#3b82f6'
        };

        notification.innerHTML = `
            <i class="${icons[type]}"></i>
            <span>${message}</span>
            <button class="notification-close" aria-label="Close notification">
                <i class="fas fa-times"></i>
            </button>
        `;

        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            background: colors[type],
            color: 'white',
            padding: '16px 20px',
            borderRadius: '12px',
            boxShadow: 'var(--shadow-lg)',
            zIndex: '10000',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            minWidth: '300px',
            maxWidth: '500px',
            opacity: '0',
            transform: 'translateX(100%)',
            transition: 'all 0.3s ease-in-out'
        });

        // Close button styles
        const closeButton = notification.querySelector('.notification-close');
        Object.assign(closeButton.style, {
            background: 'transparent',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            marginLeft: 'auto',
            padding: '4px',
            borderRadius: '4px',
            opacity: '0.8'
        });

        closeButton.addEventListener('click', () => {
            this.hideNotification(notification);
        });

        closeButton.addEventListener('mouseenter', () => {
            closeButton.style.opacity = '1';
            closeButton.style.background = 'rgba(255, 255, 255, 0.1)';
        });

        closeButton.addEventListener('mouseleave', () => {
            closeButton.style.opacity = '0.8';
            closeButton.style.background = 'transparent';
        });

        document.body.appendChild(notification);

        // Animate in
        requestAnimationFrame(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateX(0)';
        });

        // Auto remove after delay
        setTimeout(() => {
            this.hideNotification(notification);
        }, 5000);
    }

    hideNotification(notification) {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';

        setTimeout(() => {
            if (notification && notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }

    // Utility functions
    throttle(func, limit) {
        let inThrottle;
        return function (...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    debounce(func, wait, immediate) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                timeout = null;
                if (!immediate) func(...args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func(...args);
        };
    }

    // Performance monitoring
    measurePerformance() {
        if (window.performance && performance.getEntriesByType) {
            const navigation = performance.getEntriesByType('navigation')[0];

            if (navigation) {
                console.group('Performance Metrics');
                console.log(`DOM Content Loaded: ${Math.round(navigation.domContentLoadedEventEnd - navigation.navigationStart)}ms`);
                console.log(`Page Load Complete: ${Math.round(navigation.loadEventEnd - navigation.navigationStart)}ms`);
                console.log(`First Paint: ${Math.round(navigation.responseStart - navigation.requestStart)}ms`);
                console.groupEnd();
            }
        }
    }
    // End openWhatsAppQuoteModal

} // Close ModernWebsite class

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
        new ModernWebsite();
    });
} else {
    new ModernWebsite();
}

// Expose for debugging
window.ModernWebsite = ModernWebsite;

// Global functions for button clicks
function scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        const navbarHeight = document.getElementById('navbar').offsetHeight;
        const targetPosition = contactSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

function scrollToProducts() {
    const productsSection = document.getElementById('products');
    if (productsSection) {
        const navbarHeight = document.getElementById('navbar').offsetHeight;
        const targetPosition = productsSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

function scrollToBranches() {
    const branchesSection = document.getElementById('branches');
    if (branchesSection) {
        const navbarHeight = document.getElementById('navbar').offsetHeight;
        const targetPosition = branchesSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

function scrollToAbout() {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        const navbarHeight = document.getElementById('navbar').offsetHeight;
        const targetPosition = aboutSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

function openWhatsAppChat() {
    // Gulf Union Ozone WhatsApp Business number
    const phoneNumber = '966501234567'; // Replace with actual WhatsApp business number
    const message = encodeURIComponent('Hello! I\'m interested in your industrial solutions. Could you please provide more information?');

    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    // Open WhatsApp in new window/tab
    window.open(whatsappURL, '_blank');

    // Show notification
    showNotification('Opening WhatsApp chat...', 'info');

    // Track the WhatsApp click (optional analytics)
    if (typeof gtag !== 'undefined') {
        gtag('event', 'whatsapp_click', {
            'event_category': 'engagement',
            'event_label': 'hero_whatsapp_button'
        });
    }
}

function downloadBrochure() {
    // Show loading state
    const button = event.target;
    const originalContent = button.innerHTML;
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating PDF...';
    button.disabled = true;

    // Add a small delay to show the loading state
    setTimeout(() => {
        try {
            // Method 1: Try to generate PDF from HTML
            generatePDFFromBrochure()
                .then(() => {
                    showNotification('Brochure downloaded successfully!', 'success');
                })
                .catch((error) => {
                    console.error('PDF generation failed:', error);
                    // Fallback: Open brochure in new window for manual printing
                    window.open('brochure.html', '_blank');
                    showNotification('Brochure opened for printing', 'info');
                });
        } catch (error) {
            console.error('PDF download failed:', error);
            // Fallback: Open brochure in new window for manual printing
            window.open('brochure.html', '_blank');
            showNotification('Brochure opened for printing', 'info');
        } finally {
            // Reset button state
            setTimeout(() => {
                button.innerHTML = originalContent;
                button.disabled = false;
            }, 2000);
        }
    }, 500);
}

function downloadPDFDirect() {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = 'assets/Gulf-Union-Ozone-Product-Catalog-2025.pdf';
    link.download = 'Gulf-Union-Ozone-Product-Catalog-2025.pdf';
    link.style.display = 'none';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Show success message
    showNotification('Brochure downloaded successfully!', 'success');
}

async function generatePDFFromBrochure() {
    // Check if we can use the browser's print to PDF functionality
    if (window.navigator && window.navigator.share) {
        // For modern browsers, open a print-optimized version
        const printWindow = window.open('brochure.html', '_blank');
        printWindow.onload = function () {
            setTimeout(() => {
                printWindow.print();
            }, 1000);
        };
        return Promise.resolve();
    } else {
        // Fallback: Create a download link for the HTML brochure
        const blob = await fetch('brochure.html').then(r => r.blob());
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = 'Gulf-Union-Ozone-Brochure.html';
        link.style.display = 'none';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        URL.revokeObjectURL(url);
        return Promise.resolve();
    }
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;

    // Add to page
    document.body.appendChild(notification);

    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);

    // Hide and remove notification
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Quote Modal Functions
// WhatsApp Quote Modal Functions
function openWhatsAppQuoteModal() {
    const modal = document.getElementById('whatsappQuoteModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeWhatsAppQuoteModal() {
    const modal = document.getElementById('whatsappQuoteModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    // Reset form
    document.getElementById('whatsappQuoteForm').reset();
}

// Close modal when clicking outside
window.addEventListener('click', function (event) {
    const modal = document.getElementById('whatsappQuoteModal');
    if (event.target === modal) {
        closeWhatsAppQuoteModal();
    }
});

// Handle WhatsApp quote form submission
function sendWhatsAppQuote(event) {
    event.preventDefault();

    const form = event.target;
    const message = form.querySelector('#whatsappMessage').value;

    if (!message.trim()) {
        showNotification('Please enter your message before sending.', 'error');
        return;
    }

    // Gulf Union Ozone WhatsApp Business number
    const phoneNumber = '966501234567'; // Replace with actual WhatsApp business number
    const encodedMessage = encodeURIComponent(message);

    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Close modal
    closeWhatsAppQuoteModal();

    // Show success message
    showNotification('Opening WhatsApp... Your message is ready to send!', 'success');

    // Open WhatsApp in new window/tab
    window.open(whatsappURL, '_blank');
}

// Email sending function (you'll need to implement actual email service)
async function sendQuoteEmail(formData) {
    // This is a placeholder - you'll need to implement actual email sending
    // You can use services like EmailJS, Formspree, or your own backend

    const quoteData = {
        name: formData.get('name'),
        company: formData.get('company'),
        mobile: formData.get('mobile'),
        description: formData.get('description'),
        attachment: formData.get('attachment')?.name || 'No attachment',
        timestamp: new Date().toISOString()
    };

    console.log('Quote request data:', quoteData);

    // Simulate API call
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate success (replace with actual email service call)
            resolve(quoteData);
        }, 2000);
    });
}

// Certificate Modal Functions
function openCertificateModal(imageSrc, imageAlt) {
    const modal = document.getElementById('certificateModal');
    const modalImage = document.getElementById('certificateModalImage');

    modalImage.src = imageSrc;
    modalImage.alt = imageAlt;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}
window.openCertificateModal = openCertificateModal;

function closeCertificateModal() {
    const modal = document.getElementById('certificateModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}
//window.closeCertificateModal = closeCertificateModal;

// Close modal when clicking outside the image
window.addEventListener('click', function (event) {
    const modal = document.getElementById('certificateModal');
    if (event.target === modal) {
        closeCertificateModal();
    }
});

// Close modal with Escape key
window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeCertificateModal();
    }
});

// Download certificate image function
function downloadCertificateImage() {
    var img = document.getElementById('certificateModalImage');
    if (!img || !img.src) return;
    var link = document.createElement('a');
    link.href = img.src;
    link.download = img.alt || 'certificate.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}