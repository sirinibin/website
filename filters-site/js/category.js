// Category Page JavaScript Functions
document.addEventListener('DOMContentLoaded', function () {
    // Initialize category page functionality
    initializeFiltering();
    initializeAnimations();
    initializeProductActions();
    initializeScrollEffects();
});

// Product Filtering System
function initializeFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productItems = document.querySelectorAll('.product-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const filterCategory = this.getAttribute('data-filter');

            // Filter products
            productItems.forEach(item => {
                const productCategory = item.getAttribute('data-category');

                if (filterCategory === 'all' || productCategory === filterCategory) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Animate elements on scroll
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe category elements
    const animateElements = document.querySelectorAll(
        '.product-item, .advantage-item, .feature-card, .category-stats .stat-item'
    );

    animateElements.forEach(el => {
        observer.observe(el);
    });

    // Add CSS for animations
    const animationStyles = `
        <style>
        .product-item, .advantage-item, .feature-card, .category-stats .stat-item {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease-out;
        }
        
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        
        .category-stats .stat-item {
            transition-delay: calc(var(--item-index) * 0.1s);
        }
        </style>
    `;

    document.head.insertAdjacentHTML('beforeend', animationStyles);
}

// Product Actions
function initializeProductActions() {
    // Handle "Get Quote" buttons
    const quoteButtons = document.querySelectorAll('.btn-quote');
    quoteButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const productName = this.closest('.product-item').querySelector('.product-name').textContent;
            handleQuoteRequest(productName);
        });
    });

    // Handle "View Details" buttons
    const detailButtons = document.querySelectorAll('.btn-details');
    detailButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const productName = this.closest('.product-item').querySelector('.product-name').textContent;
            showProductDetails(productName);
        });
    });
}

// Quote Request Handler
function handleQuoteRequest(productName) {
    // Create quote modal
    const modal = document.createElement('div');
    modal.className = 'quote-modal';
    modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Request Quote: ${productName}</h3>
                    <button class="modal-close">&times;</button>
                </div>
                <form class="quote-form">
                    <div class="form-group">
                        <label for="company">Company Name *</label>
                        <input type="text" id="company" name="company" required>
                    </div>
                    <div class="form-group">
                        <label for="contact-name">Contact Person *</label>
                        <input type="text" id="contact-name" name="contact-name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email Address *</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone">
                    </div>
                    <div class="form-group">
                        <label for="quantity">Quantity Required</label>
                        <input type="number" id="quantity" name="quantity" min="1">
                    </div>
                    <div class="form-group">
                        <label for="requirements">Specific Requirements</label>
                        <textarea id="requirements" name="requirements" rows="4" placeholder="Please describe your specific needs, timeline, or any special requirements..."></textarea>
                    </div>
                    <div class="form-actions">
                        <button type="button" class="btn-cancel">Cancel</button>
                        <button type="submit" class="btn-submit">Send Quote Request</button>
                    </div>
                </form>
            </div>
        </div>
    `;

    // Add modal styles
    const modalStyles = `
        <style>
        .quote-modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }
        
        .quote-modal.active {
            opacity: 1;
            visibility: visible;
        }
        
        .modal-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
        
        .modal-content {
            background: white;
            border-radius: 16px;
            width: 100%;
            max-width: 500px;
            max-height: 90vh;
            overflow-y: auto;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            transform: translateY(20px);
            transition: transform 0.3s ease;
        }
        
        .quote-modal.active .modal-content {
            transform: translateY(0);
        }
        
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 24px;
            border-bottom: 1px solid #e5e7eb;
        }
        
        .modal-header h3 {
            font-family: 'Space Grotesk', sans-serif;
            font-size: 1.25rem;
            font-weight: 600;
            color: #1f2937;
            margin: 0;
        }
        
        .modal-close {
            background: none;
            border: none;
            font-size: 24px;
            color: #6b7280;
            cursor: pointer;
            padding: 4px;
            transition: color 0.2s;
        }
        
        .modal-close:hover {
            color: #374151;
        }
        
        .quote-form {
            padding: 24px;
        }
        
        .form-group {
            margin-bottom: 20px;
        }
        
        .form-group label {
            display: block;
            font-weight: 500;
            color: #374151;
            margin-bottom: 6px;
            font-size: 14px;
        }
        
        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 12px;
            border: 1px solid #d1d5db;
            border-radius: 8px;
            font-size: 14px;
            transition: border-color 0.2s;
            box-sizing: border-box;
        }
        
        .form-group input:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: #3b82f6;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        
        .form-actions {
            display: flex;
            gap: 12px;
            justify-content: flex-end;
            margin-top: 24px;
        }
        
        .btn-cancel,
        .btn-submit {
            padding: 12px 24px;
            border-radius: 8px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s;
            border: none;
        }
        
        .btn-cancel {
            background: #f3f4f6;
            color: #374151;
        }
        
        .btn-cancel:hover {
            background: #e5e7eb;
        }
        
        .btn-submit {
            background: #3b82f6;
            color: white;
        }
        
        .btn-submit:hover {
            background: #2563eb;
            transform: translateY(-1px);
        }
        </style>
    `;

    if (!document.querySelector('.quote-modal-styles')) {
        document.head.insertAdjacentHTML('beforeend', modalStyles.replace('<style>', '<style class="quote-modal-styles">'));
    }

    document.body.appendChild(modal);

    // Show modal
    setTimeout(() => modal.classList.add('active'), 10);

    // Handle modal close
    const closeBtn = modal.querySelector('.modal-close');
    const cancelBtn = modal.querySelector('.btn-cancel');
    const overlay = modal.querySelector('.modal-overlay');

    [closeBtn, cancelBtn].forEach(btn => {
        btn.addEventListener('click', () => closeModal(modal));
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal(modal);
    });

    // Handle form submission
    const form = modal.querySelector('.quote-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        handleQuoteSubmission(form, productName, modal);
    });
}

// Close Modal
function closeModal(modal) {
    modal.classList.remove('active');
    setTimeout(() => {
        document.body.removeChild(modal);
    }, 300);
}

// Handle Quote Submission
function handleQuoteSubmission(form, productName, modal) {
    const formData = new FormData(form);
    const quoteData = {
        product: productName,
        company: formData.get('company'),
        contactName: formData.get('contact-name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        quantity: formData.get('quantity'),
        requirements: formData.get('requirements'),
        timestamp: new Date().toISOString()
    };

    // Show loading state
    const submitBtn = form.querySelector('.btn-submit');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Simulate API call (replace with actual API endpoint)
    setTimeout(() => {
        console.log('Quote request:', quoteData);

        // Show success message
        showNotification('Quote request sent successfully! We will contact you soon.', 'success');
        closeModal(modal);

        // In a real application, you would send this data to your backend
        // Example: fetch('/api/quote-request', { method: 'POST', body: JSON.stringify(quoteData) })
    }, 1500);
}

// Product Details Modal
function showProductDetails(productName) {
    // In a real application, you would fetch product details from an API
    const details = {
        name: productName,
        images: [
            'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500',
            'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=500'
        ],
        description: 'Professional grade equipment designed for industrial applications with superior performance and reliability.',
        specifications: [
            { label: 'Power', value: '220V-240V' },
            { label: 'Frequency', value: '50/60Hz' },
            { label: 'Weight', value: '15kg' },
            { label: 'Dimensions', value: '45x30x25cm' },
            { label: 'Warranty', value: '2 Years' }
        ],
        features: [
            'High-quality construction',
            'Energy efficient operation',
            'User-friendly interface',
            'Safety compliance certified',
            'Extended warranty coverage'
        ]
    };

    // Create and show details modal (similar structure to quote modal)
    // Implementation would be similar to quote modal but with product details
    showNotification('Product details feature coming soon!', 'info');
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;

    // Add notification styles if not already present
    if (!document.querySelector('.notification-styles')) {
        const notificationStyles = `
            <style class="notification-styles">
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 1100;
                min-width: 300px;
                max-width: 500px;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                transform: translateX(400px);
                transition: transform 0.3s ease;
            }
            
            .notification.show {
                transform: translateX(0);
            }
            
            .notification-success {
                background: #10b981;
                color: white;
            }
            
            .notification-error {
                background: #ef4444;
                color: white;
            }
            
            .notification-info {
                background: #3b82f6;
                color: white;
            }
            
            .notification-content {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 16px;
            }
            
            .notification-message {
                flex: 1;
                font-size: 14px;
                line-height: 1.4;
            }
            
            .notification-close {
                background: none;
                border: none;
                color: inherit;
                font-size: 18px;
                cursor: pointer;
                padding: 0 0 0 12px;
                opacity: 0.8;
            }
            
            .notification-close:hover {
                opacity: 1;
            }
            </style>
        `;
        document.head.insertAdjacentHTML('beforeend', notificationStyles);
    }

    document.body.appendChild(notification);

    // Show notification
    setTimeout(() => notification.classList.add('show'), 10);

    // Auto-hide after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 5000);

    // Handle close button
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    });
}

// Scroll Effects
function initializeScrollEffects() {
    // Parallax effect for category hero
    const categoryHero = document.querySelector('.category-hero-background img');
    if (categoryHero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            categoryHero.style.transform = `translateY(${rate}px)`;
        });
    }

    // Update stats with animation
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumber(entry.target);
                statsObserver.unobserve(entry.target);
            }
        });
    });

    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });
}

// Animate Numbers
function animateNumber(element) {
    const finalNumber = parseInt(element.textContent);
    const duration = 2000;
    const steps = 60;
    const increment = finalNumber / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
        current += increment;
        step++;

        if (step >= steps) {
            current = finalNumber;
            clearInterval(timer);
        }

        element.textContent = Math.floor(current);
    }, duration / steps);
}

// Utility Functions
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function scrollToContact() {
    scrollToSection('contact');
}

function scrollToProducts() {
    scrollToSection('products');
}

// Export functions for global use
window.scrollToContact = scrollToContact;
window.scrollToProducts = scrollToProducts;
window.scrollToSection = scrollToSection;