/**
 * Gulf Union Ozone - Professional Website JavaScript
 * Enterprise-Grade Interactive Features
 * Version: 2.0.0
 */

'use strict';

/**
 * Main Application Class
 */
class GulfUnionOzoneApp {
    constructor() {
        this.init();
    }

    /**
     * Initialize the application
     */
    init() {
        this.bindEvents();
        this.initializeAnimations();
        this.setupScrollEffects();
        this.setupPerformanceMonitoring();

        // Mark initialization complete
        this.markPerformance('app-initialized');
        console.log('Gulf Union Ozone Professional Website Initialized');
    }

    /**
     * Bind all event listeners
     */
    bindEvents() {
        // Navigation events
        this.setupNavigation();

        // Mobile menu toggle
        this.setupMobileMenu();

        // Language selector
        this.setupLanguageSelector();

        // Smooth scrolling for anchor links
        this.setupSmoothScrolling();

        // Form handling
        this.setupFormHandling();

        // Intersection Observer for animations
        this.setupIntersectionObserver();
    }

    /**
     * Setup navigation functionality
     */
    setupNavigation() {
        const navItems = document.querySelectorAll('.nav-item.has-dropdown');

        navItems.forEach(item => {
            const link = item.querySelector('.nav-link');
            const dropdown = item.querySelector('.dropdown-menu');

            if (link && dropdown) {
                let timeout;

                // Mouse enter
                item.addEventListener('mouseenter', () => {
                    clearTimeout(timeout);
                    link.setAttribute('aria-expanded', 'true');
                    dropdown.style.opacity = '1';
                    dropdown.style.visibility = 'visible';
                    dropdown.style.transform = 'translateX(-50%) translateY(0)';
                });

                // Mouse leave
                item.addEventListener('mouseleave', () => {
                    timeout = setTimeout(() => {
                        link.setAttribute('aria-expanded', 'false');
                        dropdown.style.opacity = '0';
                        dropdown.style.visibility = 'hidden';
                        dropdown.style.transform = 'translateX(-50%) translateY(-10px)';
                    }, 150);
                });
            }
        });
    }

    /**
     * Setup mobile menu functionality
     */
    setupMobileMenu() {
        const mobileToggle = document.querySelector('.mobile-toggle');
        const navigation = document.querySelector('.navigation');

        if (mobileToggle && navigation) {
            let isOpen = false;

            mobileToggle.addEventListener('click', () => {
                isOpen = !isOpen;
                mobileToggle.setAttribute('aria-expanded', isOpen.toString());

                if (isOpen) {
                    this.openMobileMenu(navigation);
                } else {
                    this.closeMobileMenu(navigation);
                }
            });

            // Close on outside click
            document.addEventListener('click', (e) => {
                if (isOpen && !navigation.contains(e.target) && !mobileToggle.contains(e.target)) {
                    isOpen = false;
                    mobileToggle.setAttribute('aria-expanded', 'false');
                    this.closeMobileMenu(navigation);
                }
            });
        }
    }

    /**
     * Open mobile menu
     */
    openMobileMenu(navigation) {
        navigation.style.display = 'block';
        requestAnimationFrame(() => {
            navigation.style.opacity = '1';
            navigation.style.transform = 'translateY(0)';
        });
    }

    /**
     * Close mobile menu
     */
    closeMobileMenu(navigation) {
        navigation.style.opacity = '0';
        navigation.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            navigation.style.display = 'none';
        }, 300);
    }

    /**
     * Setup language selector
     */
    setupLanguageSelector() {
        const langButton = document.querySelector('.lang-button');

        if (langButton) {
            langButton.addEventListener('click', () => {
                // Toggle between English and Arabic
                const currentLang = langButton.querySelector('.lang-text').textContent;
                const newLang = currentLang === 'عربي' ? 'English' : 'عربي';
                langButton.querySelector('.lang-text').textContent = newLang;

                // Here you would implement actual language switching logic
                this.switchLanguage(newLang === 'English' ? 'en' : 'ar');
            });
        }
    }

    /**
     * Switch language (placeholder implementation)
     */
    switchLanguage(lang) {
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

        // Store preference
        localStorage.setItem('preferred-language', lang);

        console.log(`Language switched to: ${lang}`);
    }

    /**
     * Setup smooth scrolling for anchor links
     */
    setupSmoothScrolling() {
        const anchorLinks = document.querySelectorAll('a[href^="#"]');

        anchorLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    e.preventDefault();

                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    /**
     * Setup form handling
     */
    setupFormHandling() {
        const forms = document.querySelectorAll('form');

        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmission(form);
            });
        });
    }

    /**
     * Handle form submission
     */
    handleFormSubmission(form) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Show loading state
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Submitting...';
        submitButton.disabled = true;

        // Simulate API call
        setTimeout(() => {
            // Reset button
            submitButton.textContent = originalText;
            submitButton.disabled = false;

            // Show success message
            this.showNotification('Message sent successfully!', 'success');

            // Reset form
            form.reset();
        }, 2000);

        console.log('Form submitted:', data);
    }

    /**
     * Show notification
     */
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;

        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 16px 24px;
            background: ${type === 'success' ? '#10B981' : '#3B82F6'};
            color: white;
            border-radius: 12px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            z-index: 10000;
            opacity: 0;
            transform: translateX(100%);
            transition: all 300ms ease-in-out;
        `;

        document.body.appendChild(notification);

        // Animate in
        requestAnimationFrame(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateX(0)';
        });

        // Remove after delay
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 5000);
    }

    /**
     * Setup intersection observer for animations
     */
    setupIntersectionObserver() {
        const animatedElements = document.querySelectorAll([
            '.metric-item',
            '.highlight-item',
            '.cert-item',
            '.action-button'
        ].join(','));

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        animatedElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 600ms ease-out, transform 600ms ease-out';
            observer.observe(element);
        });
    }

    /**
     * Initialize animations
     */
    initializeAnimations() {
        // Logo pulse animation
        const logoPulse = document.querySelector('.logo-pulse');
        if (logoPulse) {
            setInterval(() => {
                logoPulse.style.animation = 'none';
                requestAnimationFrame(() => {
                    logoPulse.style.animation = 'ping 1s cubic-bezier(0, 0, 0.2, 1)';
                });
            }, 5000);
        }

        // Scroll animations
        this.setupScrollAnimations();
    }

    /**
     * Setup scroll animations
     */
    setupScrollAnimations() {
        let ticking = false;

        const updateScrollEffects = () => {
            const scrollY = window.scrollY;
            const header = document.querySelector('.header');

            // Header background opacity based on scroll
            if (header) {
                const opacity = Math.min(scrollY / 100, 1);
                header.style.background = `rgba(255, 255, 255, ${0.95 + (opacity * 0.05)})`;

                if (scrollY > 50) {
                    header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                } else {
                    header.style.boxShadow = 'none';
                }
            }

            ticking = false;
        };

        const requestTick = () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollEffects);
                ticking = true;
            }
        };

        window.addEventListener('scroll', requestTick, { passive: true });
    }

    /**
     * Setup scroll effects
     */
    setupScrollEffects() {
        // Parallax effect for hero background
        const heroBackground = document.querySelector('.hero-pattern');

        if (heroBackground) {
            let ticking = false;

            const updateParallax = () => {
                const scrollY = window.scrollY;
                const rate = scrollY * -0.5;
                heroBackground.style.transform = `translateY(${rate}px)`;
                ticking = false;
            };

            const requestTick = () => {
                if (!ticking) {
                    requestAnimationFrame(updateParallax);
                    ticking = true;
                }
            };

            window.addEventListener('scroll', requestTick, { passive: true });
        }
    }

    /**
     * Setup performance monitoring
     */
    setupPerformanceMonitoring() {
        // Mark DOM content loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.markPerformance('dom-content-loaded');
            });
        } else {
            this.markPerformance('dom-content-loaded');
        }

        // Mark window loaded
        window.addEventListener('load', () => {
            this.markPerformance('window-loaded');
            this.logPerformanceMetrics();
        });
    }

    /**
     * Mark performance milestone
     */
    markPerformance(name) {
        if (window.performance && performance.mark) {
            performance.mark(name);
        }
    }

    /**
     * Log performance metrics
     */
    logPerformanceMetrics() {
        if (window.performance && performance.getEntriesByType) {
            const navigation = performance.getEntriesByType('navigation')[0];

            if (navigation) {
                console.group('Performance Metrics');
                console.log(`DNS Lookup: ${Math.round(navigation.domainLookupEnd - navigation.domainLookupStart)}ms`);
                console.log(`Connection: ${Math.round(navigation.connectEnd - navigation.connectStart)}ms`);
                console.log(`First Byte: ${Math.round(navigation.responseStart - navigation.requestStart)}ms`);
                console.log(`DOM Content Loaded: ${Math.round(navigation.domContentLoadedEventEnd - navigation.navigationStart)}ms`);
                console.log(`Window Loaded: ${Math.round(navigation.loadEventEnd - navigation.navigationStart)}ms`);
                console.groupEnd();
            }
        }
    }
}

/**
 * Utility Functions
 */
const Utils = {
    /**
     * Debounce function
     */
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
    },

    /**
     * Throttle function
     */
    throttle(func, limit) {
        let inThrottle;
        return function (...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    /**
     * Check if element is in viewport
     */
    isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
};

/**
 * Initialize application when DOM is ready
 */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new GulfUnionOzoneApp();
    });
} else {
    new GulfUnionOzoneApp();
}

/**
 * Export for module usage
 */
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { GulfUnionOzoneApp, Utils };
}