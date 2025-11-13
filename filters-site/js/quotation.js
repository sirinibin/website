// Gulf Union Ozone Trading Co. - Quotation Management System

class QuotationManager {
    constructor() {
        this.quotations = this.loadQuotations();
        this.currentQuotation = null;
    }

    // Create new quotation from basket
    createQuotation(contactInfo, basketData = null) {
        const data = basketData || window.BasketManager.exportForQuotation();

        if (!data.items || data.items.length === 0) {
            throw new Error('Cannot create quotation: basket is empty');
        }

        const quotation = {
            id: this.generateQuotationId(),
            status: 'pending',
            contactInfo: {
                name: contactInfo.name,
                email: contactInfo.email,
                phone: contactInfo.phone,
                company: contactInfo.company || '',
                location: contactInfo.location || '',
                notes: contactInfo.notes || ''
            },
            items: data.items,
            summary: data.summary,
            timestamps: {
                created: new Date().toISOString(),
                updated: new Date().toISOString()
            },
            reference: this.generateReference(),
            priority: 'normal',
            validUntil: this.calculateValidUntil()
        };

        this.quotations.push(quotation);
        this.saveQuotations();
        this.currentQuotation = quotation;

        return quotation;
    }

    // Generate unique quotation ID
    generateQuotationId() {
        return `QUO-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    }

    // Generate human-readable reference
    generateReference() {
        const date = new Date();
        const year = date.getFullYear().toString().substr(-2);
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const sequence = String(this.quotations.length + 1).padStart(3, '0');

        return `FN${year}${month}${day}-${sequence}`;
    }

    // Calculate quotation validity period (30 days default)
    calculateValidUntil(days = 30) {
        const validUntil = new Date();
        validUntil.setDate(validUntil.getDate() + days);
        return validUntil.toISOString();
    }

    // Update quotation status
    updateStatus(quotationId, newStatus, notes = '') {
        const quotation = this.quotations.find(q => q.id === quotationId);
        if (quotation) {
            quotation.status = newStatus;
            quotation.timestamps.updated = new Date().toISOString();

            if (notes) {
                if (!quotation.statusHistory) {
                    quotation.statusHistory = [];
                }
                quotation.statusHistory.push({
                    status: newStatus,
                    timestamp: new Date().toISOString(),
                    notes: notes
                });
            }

            this.saveQuotations();
            return quotation;
        }
        return null;
    }

    // Get quotation by ID
    getQuotation(quotationId) {
        return this.quotations.find(q => q.id === quotationId) || null;
    }

    // Get all quotations
    getAllQuotations() {
        return [...this.quotations].sort((a, b) =>
            new Date(b.timestamps.created) - new Date(a.timestamps.created)
        );
    }

    // Get quotations by status
    getQuotationsByStatus(status) {
        return this.quotations.filter(q => q.status === status);
    }

    // Delete quotation
    deleteQuotation(quotationId) {
        const index = this.quotations.findIndex(q => q.id === quotationId);
        if (index !== -1) {
            const deleted = this.quotations.splice(index, 1)[0];
            this.saveQuotations();
            return deleted;
        }
        return null;
    }

    // Save quotations to localStorage
    saveQuotations() {
        try {
            localStorage.setItem('filterNestQuotations', JSON.stringify(this.quotations));
        } catch (error) {
            console.error('Failed to save quotations:', error);
        }
    }

    // Load quotations from localStorage
    loadQuotations() {
        try {
            const saved = localStorage.getItem('filterNestQuotations');
            return saved ? JSON.parse(saved) : [];
        } catch (error) {
            console.error('Failed to load quotations:', error);
            return [];
        }
    }

    // Export quotation as text
    exportAsText(quotationId) {
        const quotation = this.getQuotation(quotationId);
        if (!quotation) return '';

        let text = `GULF UNION OZONE TRADING CO. - QUOTATION REQUEST\n`;
        text += `================================================\n\n`;

        text += `QUOTATION DETAILS:\n`;
        text += `Reference: ${quotation.reference}\n`;
        text += `Created: ${new Date(quotation.timestamps.created).toLocaleString()}\n`;
        text += `Status: ${quotation.status.toUpperCase()}\n`;
        text += `Valid Until: ${new Date(quotation.validUntil).toLocaleDateString()}\n\n`;

        text += `CUSTOMER INFORMATION:\n`;
        text += `Name: ${quotation.contactInfo.name}\n`;
        text += `Email: ${quotation.contactInfo.email}\n`;
        text += `Phone: ${quotation.contactInfo.phone}\n`;
        if (quotation.contactInfo.company) {
            text += `Company: ${quotation.contactInfo.company}\n`;
        }
        if (quotation.contactInfo.location) {
            text += `Location: ${quotation.contactInfo.location}\n`;
        }
        text += `\n`;

        text += `REQUESTED PRODUCTS:\n`;
        text += `Total Products: ${quotation.summary.totalProducts}\n`;
        text += `Total Quantity: ${quotation.summary.totalQuantity}\n\n`;

        quotation.items.forEach((item, index) => {
            text += `${index + 1}. ${item.productName}\n`;
            text += `   Part Number: ${item.partNumber}\n`;
            text += `   Brand: ${item.brand}\n`;
            text += `   Category: ${item.category}\n`;
            text += `   Quantity: ${item.quantity}\n`;

            if (item.specifications && Object.keys(item.specifications).length > 0) {
                text += `   Specifications:\n`;
                Object.entries(item.specifications).forEach(([key, value]) => {
                    text += `     - ${key}: ${value}\n`;
                });
            }

            if (item.compatibility && item.compatibility.length > 0) {
                text += `   Compatible with: ${item.compatibility.slice(0, 3).join(', ')}`;
                if (item.compatibility.length > 3) {
                    text += ` and ${item.compatibility.length - 3} more`;
                }
                text += `\n`;
            }
            text += `\n`;
        });

        if (quotation.contactInfo.notes) {
            text += `ADDITIONAL NOTES:\n`;
            text += `${quotation.contactInfo.notes}\n\n`;
        }

        text += `================================================\n`;
        text += `Gulf Union Ozone Trading Co. - Industrial Supplies\n`;
        text += `Contact: info@filternest.sa | +966 XX XXX XXXX\n`;

        return text;
    }

    // Export quotation as JSON
    exportAsJson(quotationId) {
        const quotation = this.getQuotation(quotationId);
        return quotation ? JSON.stringify(quotation, null, 2) : null;
    }

    // Get quotation statistics
    getStatistics() {
        const total = this.quotations.length;
        const statusCounts = this.quotations.reduce((acc, q) => {
            acc[q.status] = (acc[q.status] || 0) + 1;
            return acc;
        }, {});

        const totalItems = this.quotations.reduce((sum, q) => sum + q.summary.totalQuantity, 0);
        const avgItemsPerQuotation = total > 0 ? (totalItems / total).toFixed(1) : 0;

        return {
            total,
            statusCounts,
            totalItems,
            avgItemsPerQuotation,
            recentCount: this.quotations.filter(q => {
                const created = new Date(q.timestamps.created);
                const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
                return created > weekAgo;
            }).length
        };
    }

    // Search quotations
    search(query, field = 'all') {
        const searchTerm = query.toLowerCase();

        return this.quotations.filter(quotation => {
            if (field === 'all') {
                return (
                    quotation.reference.toLowerCase().includes(searchTerm) ||
                    quotation.contactInfo.name.toLowerCase().includes(searchTerm) ||
                    quotation.contactInfo.email.toLowerCase().includes(searchTerm) ||
                    quotation.contactInfo.company.toLowerCase().includes(searchTerm) ||
                    quotation.items.some(item =>
                        item.productName.toLowerCase().includes(searchTerm) ||
                        item.partNumber.toLowerCase().includes(searchTerm) ||
                        item.brand.toLowerCase().includes(searchTerm)
                    )
                );
            }

            switch (field) {
                case 'reference':
                    return quotation.reference.toLowerCase().includes(searchTerm);
                case 'customer':
                    return quotation.contactInfo.name.toLowerCase().includes(searchTerm) ||
                        quotation.contactInfo.email.toLowerCase().includes(searchTerm) ||
                        quotation.contactInfo.company.toLowerCase().includes(searchTerm);
                case 'products':
                    return quotation.items.some(item =>
                        item.productName.toLowerCase().includes(searchTerm) ||
                        item.partNumber.toLowerCase().includes(searchTerm) ||
                        item.brand.toLowerCase().includes(searchTerm)
                    );
                default:
                    return false;
            }
        });
    }

    // Cleanup old quotations (older than specified days)
    cleanup(daysOld = 90) {
        const cutoffDate = new Date(Date.now() - daysOld * 24 * 60 * 60 * 1000);
        const before = this.quotations.length;

        this.quotations = this.quotations.filter(quotation => {
            const created = new Date(quotation.timestamps.created);
            return created > cutoffDate || quotation.status === 'approved';
        });

        const removed = before - this.quotations.length;
        if (removed > 0) {
            this.saveQuotations();
        }

        return removed;
    }
}

// Quotation form handler
class QuotationFormHandler {
    constructor(quotationManager) {
        this.quotationManager = quotationManager;
        this.setupFormValidation();
    }

    // Setup form validation
    setupFormValidation() {
        this.validationRules = {
            name: {
                required: true,
                minLength: 2,
                pattern: /^[a-zA-Z\s\u0600-\u06FF]+$/,
                message: 'Please enter a valid name (letters only)'
            },
            email: {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Please enter a valid email address'
            },
            phone: {
                required: true,
                pattern: /^(\+966|966|0)?[5-9]\d{8}$/,
                message: 'Please enter a valid Saudi phone number'
            },
            company: {
                required: false,
                minLength: 2,
                message: 'Company name must be at least 2 characters'
            }
        };
    }

    // Validate single field
    validateField(fieldName, value) {
        const rule = this.validationRules[fieldName];
        if (!rule) return { valid: true };

        // Check required
        if (rule.required && (!value || value.trim() === '')) {
            return { valid: false, message: `${fieldName} is required` };
        }

        // Skip other validations if field is empty and not required
        if (!value || value.trim() === '') {
            return { valid: true };
        }

        // Check minimum length
        if (rule.minLength && value.length < rule.minLength) {
            return {
                valid: false,
                message: `${fieldName} must be at least ${rule.minLength} characters`
            };
        }

        // Check pattern
        if (rule.pattern && !rule.pattern.test(value)) {
            return { valid: false, message: rule.message };
        }

        return { valid: true };
    }

    // Validate entire form
    validateForm(formData) {
        const errors = {};
        let isValid = true;

        Object.keys(this.validationRules).forEach(fieldName => {
            const validation = this.validateField(fieldName, formData[fieldName]);
            if (!validation.valid) {
                errors[fieldName] = validation.message;
                isValid = false;
            }
        });

        return { isValid, errors };
    }

    // Process quotation form submission
    async processQuotationForm(formData) {
        try {
            // Validate form
            const validation = this.validateForm(formData);
            if (!validation.isValid) {
                return {
                    success: false,
                    errors: validation.errors,
                    message: 'Please correct the form errors'
                };
            }

            // Check if basket has items
            const basketItems = window.BasketManager.getItems();
            if (basketItems.length === 0) {
                return {
                    success: false,
                    message: 'Your basket is empty. Please add products before requesting a quotation.'
                };
            }

            // Create quotation
            const quotation = this.quotationManager.createQuotation(formData);

            // Send email notification (simulated)
            await this.sendQuotationNotification(quotation);

            // Clear basket after successful quotation
            window.BasketManager.clearBasket();

            return {
                success: true,
                quotation: quotation,
                message: 'Quotation request submitted successfully!'
            };

        } catch (error) {
            console.error('Error processing quotation:', error);
            return {
                success: false,
                message: 'An error occurred while processing your request. Please try again.'
            };
        }
    }

    // Simulate sending email notification
    async sendQuotationNotification(quotation) {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        console.log('Quotation notification sent:', {
            to: quotation.contactInfo.email,
            reference: quotation.reference,
            itemCount: quotation.summary.totalProducts
        });

        return true;
    }

    // Format phone number for display
    formatPhoneNumber(phone) {
        // Remove any non-digit characters
        const cleaned = phone.replace(/\D/g, '');

        // Format Saudi phone numbers
        if (cleaned.startsWith('966')) {
            return `+${cleaned}`;
        } else if (cleaned.startsWith('0')) {
            return `+966${cleaned.substring(1)}`;
        } else if (cleaned.length === 9) {
            return `+966${cleaned}`;
        }

        return phone;
    }

    // Show form validation errors
    showValidationErrors(errors) {
        Object.keys(errors).forEach(fieldName => {
            const field = document.querySelector(`[name="${fieldName}"]`);
            const errorElement = document.querySelector(`#${fieldName}-error`);

            if (field) {
                field.classList.add('error');
                field.setAttribute('aria-invalid', 'true');
            }

            if (errorElement) {
                errorElement.textContent = errors[fieldName];
                errorElement.style.display = 'block';
            }
        });
    }

    // Clear form validation errors
    clearValidationErrors() {
        document.querySelectorAll('.form-field.error').forEach(field => {
            field.classList.remove('error');
            field.removeAttribute('aria-invalid');
        });

        document.querySelectorAll('.field-error').forEach(error => {
            error.style.display = 'none';
            error.textContent = '';
        });
    }
}

// Initialize quotation manager
window.QuotationManager = new QuotationManager();
window.QuotationFormHandler = new QuotationFormHandler(window.QuotationManager);

// Quotation status definitions
window.QUOTATION_STATUSES = {
    pending: { name: 'Pending Review', color: '#f59e0b', icon: 'clock' },
    processing: { name: 'Processing', color: '#3b82f6', icon: 'refresh-cw' },
    approved: { name: 'Approved', color: '#10b981', icon: 'check-circle' },
    rejected: { name: 'Rejected', color: '#ef4444', icon: 'x-circle' },
    expired: { name: 'Expired', color: '#6b7280', icon: 'calendar-x' }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { QuotationManager, QuotationFormHandler };
}