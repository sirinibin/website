// Filter Nest - Basket Management System

class BasketManager {
    constructor() {
        this.items = this.loadBasket();
        this.listeners = [];
        this.updateBasketCount();
    }

    // Add item to basket
    addItem(productId, quantity = 1) {
        const existingItem = this.items.find(item => item.productId === productId);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({
                productId,
                quantity,
                dateAdded: new Date().toISOString()
            });
        }

        this.saveBasket();
        this.updateBasketCount();
        this.notifyListeners();

        return this.items;
    }

    // Remove item from basket
    removeItem(productId) {
        this.items = this.items.filter(item => item.productId !== productId);
        this.saveBasket();
        this.updateBasketCount();
        this.notifyListeners();

        // Refresh basket modal if open
        if (document.getElementById('basketModal')?.classList.contains('active')) {
            window.app?.populateBasketModal();
        }

        return this.items;
    }

    // Update item quantity
    updateQuantity(productId, newQuantity) {
        if (newQuantity <= 0) {
            return this.removeItem(productId);
        }

        const item = this.items.find(item => item.productId === productId);
        if (item) {
            item.quantity = newQuantity;
            this.saveBasket();
            this.updateBasketCount();
            this.notifyListeners();

            // Refresh basket modal if open
            if (document.getElementById('basketModal')?.classList.contains('active')) {
                window.app?.populateBasketModal();
            }
        }

        return this.items;
    }

    // Get all basket items
    getItems() {
        return [...this.items];
    }

    // Get basket items with product details
    getItemsWithDetails() {
        return this.items.map(item => {
            const product = window.ProductsAPI.getById(item.productId);
            return {
                ...item,
                product
            };
        }).filter(item => item.product); // Filter out items with deleted products
    }

    // Get total quantity
    getTotalQuantity() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    // Get total unique products
    getTotalProducts() {
        return this.items.length;
    }

    // Clear basket
    clearBasket() {
        this.items = [];
        this.saveBasket();
        this.updateBasketCount();
        this.notifyListeners();

        // Refresh basket modal if open
        if (document.getElementById('basketModal')?.classList.contains('active')) {
            window.app?.populateBasketModal();
        }

        return this.items;
    }

    // Check if product is in basket
    hasProduct(productId) {
        return this.items.some(item => item.productId === productId);
    }

    // Get product quantity in basket
    getProductQuantity(productId) {
        const item = this.items.find(item => item.productId === productId);
        return item ? item.quantity : 0;
    }

    // Save basket to localStorage
    saveBasket() {
        try {
            localStorage.setItem('filterNestBasket', JSON.stringify(this.items));
        } catch (error) {
            console.error('Failed to save basket to localStorage:', error);
        }
    }

    // Load basket from localStorage
    loadBasket() {
        try {
            const savedBasket = localStorage.getItem('filterNestBasket');
            return savedBasket ? JSON.parse(savedBasket) : [];
        } catch (error) {
            console.error('Failed to load basket from localStorage:', error);
            return [];
        }
    }

    // Update basket count in UI
    updateBasketCount() {
        const basketCountElement = document.getElementById('basketCount');
        if (basketCountElement) {
            const totalQuantity = this.getTotalQuantity();
            basketCountElement.textContent = totalQuantity;

            // Add animation when count changes
            basketCountElement.classList.add('bounce');
            setTimeout(() => {
                basketCountElement.classList.remove('bounce');
            }, 300);

            // Show/hide count badge
            if (totalQuantity > 0) {
                basketCountElement.style.display = 'flex';
            } else {
                basketCountElement.style.display = 'none';
            }
        }
    }

    // Add event listener for basket changes
    addListener(callback) {
        this.listeners.push(callback);
    }

    // Remove event listener
    removeListener(callback) {
        this.listeners = this.listeners.filter(listener => listener !== callback);
    }

    // Notify all listeners of basket changes
    notifyListeners() {
        this.listeners.forEach(callback => {
            try {
                callback(this.items);
            } catch (error) {
                console.error('Basket listener error:', error);
            }
        });
    }

    // Export basket data for quotation
    exportForQuotation() {
        const itemsWithDetails = this.getItemsWithDetails();

        return {
            items: itemsWithDetails.map(item => ({
                productId: item.productId,
                productName: item.product.name,
                partNumber: item.product.partNumber,
                brand: item.product.brand,
                category: item.product.category,
                quantity: item.quantity,
                specifications: item.product.specifications,
                compatibility: item.product.compatibility
            })),
            summary: {
                totalProducts: this.getTotalProducts(),
                totalQuantity: this.getTotalQuantity(),
                categories: this.getCategorySummary(),
                brands: this.getBrandSummary()
            },
            timestamp: new Date().toISOString()
        };
    }

    // Get category summary
    getCategorySummary() {
        const summary = {};
        this.getItemsWithDetails().forEach(item => {
            const category = item.product.category;
            if (!summary[category]) {
                summary[category] = {
                    count: 0,
                    quantity: 0,
                    name: window.CATEGORIES[category]?.name || category
                };
            }
            summary[category].count++;
            summary[category].quantity += item.quantity;
        });
        return summary;
    }

    // Get brand summary
    getBrandSummary() {
        const summary = {};
        this.getItemsWithDetails().forEach(item => {
            const brand = item.product.brand;
            if (!summary[brand]) {
                summary[brand] = {
                    count: 0,
                    quantity: 0,
                    name: window.BRANDS[brand]?.name || brand
                };
            }
            summary[brand].count++;
            summary[brand].quantity += item.quantity;
        });
        return summary;
    }

    // Validate basket items (remove invalid products)
    validateBasket() {
        const validItems = this.items.filter(item => {
            const product = window.ProductsAPI.getById(item.productId);
            return product !== undefined;
        });

        if (validItems.length !== this.items.length) {
            this.items = validItems;
            this.saveBasket();
            this.updateBasketCount();
            this.notifyListeners();
            console.log('Basket validated and cleaned');
        }
    }

    // Import basket data
    importBasket(basketData) {
        try {
            if (Array.isArray(basketData)) {
                this.items = basketData.filter(item =>
                    item.productId &&
                    typeof item.quantity === 'number' &&
                    item.quantity > 0
                );
                this.saveBasket();
                this.updateBasketCount();
                this.notifyListeners();
                return true;
            }
        } catch (error) {
            console.error('Failed to import basket:', error);
        }
        return false;
    }

    // Get basket statistics
    getStatistics() {
        const itemsWithDetails = this.getItemsWithDetails();

        return {
            totalItems: this.getTotalQuantity(),
            uniqueProducts: this.getTotalProducts(),
            categories: Object.keys(this.getCategorySummary()).length,
            brands: Object.keys(this.getBrandSummary()).length,
            applications: new Set(itemsWithDetails.map(item => item.product.application)).size,
            origins: new Set(itemsWithDetails.map(item => item.product.origin)).size,
            averageQuantityPerProduct: this.getTotalProducts() > 0 ?
                (this.getTotalQuantity() / this.getTotalProducts()).toFixed(1) : 0
        };
    }

    // Generate quotation summary text
    generateQuotationSummary() {
        const data = this.exportForQuotation();
        const stats = this.getStatistics();

        let summary = `QUOTATION REQUEST SUMMARY\n`;
        summary += `Generated: ${new Date().toLocaleString()}\n\n`;

        summary += `OVERVIEW:\n`;
        summary += `- Total Products: ${stats.uniqueProducts}\n`;
        summary += `- Total Quantity: ${stats.totalItems}\n`;
        summary += `- Categories: ${stats.categories}\n`;
        summary += `- Brands: ${stats.brands}\n\n`;

        summary += `PRODUCTS:\n`;
        data.items.forEach((item, index) => {
            summary += `${index + 1}. ${item.productName}\n`;
            summary += `   Part #: ${item.partNumber}\n`;
            summary += `   Brand: ${item.brand}\n`;
            summary += `   Quantity: ${item.quantity}\n\n`;
        });

        return summary;
    }
}

// Basket UI Helper Functions
class BasketUI {
    static createBasketItemElement(item, product) {
        const brand = window.BRANDS[product.brand];

        return `
            <div class="basket-item" data-product-id="${item.productId}">
                <div class="basket-item-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                </div>
                <div class="basket-item-content">
                    <div class="basket-item-name">${product.name}</div>
                    <div class="basket-item-details">
                        <span class="part-number">Part #: ${product.partNumber}</span>
                        <span class="brand">${brand?.name || product.brand}</span>
                        <span class="category">${window.CATEGORIES[product.category]?.name || product.category}</span>
                    </div>
                    <div class="basket-item-specs">
                        ${Object.entries(product.specifications || {}).slice(0, 2).map(([key, value]) =>
            `<span class="spec">${key}: ${value}</span>`
        ).join('')}
                    </div>
                </div>
                <div class="basket-item-actions">
                    <div class="quantity-controls">
                        <button class="quantity-btn minus" onclick="window.BasketManager.updateQuantity('${item.productId}', ${item.quantity - 1})"
                                ${item.quantity <= 1 ? 'disabled' : ''}>
                            <i class="icon-minus"></i>
                        </button>
                        <input type="number" value="${item.quantity}" min="1" max="999" 
                               onchange="window.BasketManager.updateQuantity('${item.productId}', parseInt(this.value))"
                               class="quantity-input">
                        <button class="quantity-btn plus" onclick="window.BasketManager.updateQuantity('${item.productId}', ${item.quantity + 1})">
                            <i class="icon-plus"></i>
                        </button>
                    </div>
                    <button class="remove-item-btn" onclick="window.BasketManager.removeItem('${item.productId}')" title="Remove item">
                        <i class="icon-trash"></i>
                    </button>
                </div>
            </div>
        `;
    }

    static createBasketSummary(basketData) {
        const { summary } = basketData;

        let summaryHTML = `
            <div class="basket-summary-section">
                <h4>Summary</h4>
                <div class="summary-stats">
                    <div class="stat-item">
                        <span class="stat-label">Total Products:</span>
                        <span class="stat-value">${summary.totalProducts}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Total Quantity:</span>
                        <span class="stat-value">${summary.totalQuantity}</span>
                    </div>
                </div>
            </div>
        `;

        if (Object.keys(summary.categories).length > 0) {
            summaryHTML += `
                <div class="basket-summary-section">
                    <h4>Categories</h4>
                    <div class="category-breakdown">
                        ${Object.entries(summary.categories).map(([key, cat]) => `
                            <div class="breakdown-item">
                                <span class="breakdown-label">${cat.name}:</span>
                                <span class="breakdown-value">${cat.quantity} items</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        if (Object.keys(summary.brands).length > 0) {
            summaryHTML += `
                <div class="basket-summary-section">
                    <h4>Brands</h4>
                    <div class="brand-breakdown">
                        ${Object.entries(summary.brands).map(([key, brand]) => `
                            <div class="breakdown-item">
                                <span class="breakdown-label">${brand.name}:</span>
                                <span class="breakdown-value">${brand.quantity} items</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        return summaryHTML;
    }

    static showBasketNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `basket-notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="icon-${type === 'success' ? 'check-circle' : 'alert-circle'}"></i>
                <span>${message}</span>
            </div>
        `;

        document.body.appendChild(notification);

        // Animate in
        requestAnimationFrame(() => {
            notification.classList.add('show');
        });

        // Remove after 3 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
}

// Initialize basket manager
window.BasketManager = new BasketManager();

// Add basket-specific CSS
const basketStyles = `
    .basket-count.bounce {
        animation: basketBounce 0.3s ease;
    }
    
    @keyframes basketBounce {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.2); }
    }
    
    .basket-notification {
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--success);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-xl);
        z-index: 10001;
        transform: translateX(100%);
        opacity: 0;
        transition: all 0.3s ease;
        max-width: 300px;
    }
    
    .basket-notification.show {
        transform: translateX(0);
        opacity: 1;
    }
    
    .basket-notification.error {
        background: var(--error);
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .quantity-controls {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background: var(--gray-100);
        border-radius: var(--radius);
        padding: 0.25rem;
    }
    
    .quantity-btn {
        width: 32px;
        height: 32px;
        border: none;
        background: white;
        border-radius: var(--radius-sm);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: var(--transition-fast);
        color: var(--gray-600);
    }
    
    .quantity-btn:hover:not(:disabled) {
        background: var(--primary);
        color: white;
    }
    
    .quantity-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
    
    .quantity-input {
        width: 50px;
        height: 32px;
        border: none;
        background: white;
        border-radius: var(--radius-sm);
        text-align: center;
        font-weight: var(--font-semibold);
    }
    
    .remove-item-btn {
        background: var(--error);
        color: white;
        border: none;
        border-radius: var(--radius);
        padding: 0.5rem;
        cursor: pointer;
        transition: var(--transition-fast);
    }
    
    .remove-item-btn:hover {
        background: #dc2626;
    }
    
    .basket-summary-section {
        margin-bottom: 1.5rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid var(--gray-200);
    }
    
    .basket-summary-section:last-child {
        border-bottom: none;
        margin-bottom: 0;
    }
    
    .basket-summary-section h4 {
        margin-bottom: 1rem;
        color: var(--gray-900);
    }
    
    .summary-stats,
    .category-breakdown,
    .brand-breakdown {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    
    .stat-item,
    .breakdown-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem 0;
    }
    
    .stat-label,
    .breakdown-label {
        color: var(--gray-600);
    }
    
    .stat-value,
    .breakdown-value {
        font-weight: var(--font-semibold);
        color: var(--gray-900);
    }
`;

// Inject basket styles
const basketStyleSheet = document.createElement('style');
basketStyleSheet.textContent = basketStyles;
document.head.appendChild(basketStyleSheet);

// Validate basket on page load
document.addEventListener('DOMContentLoaded', () => {
    window.BasketManager.validateBasket();
});

// Export for use in other modules
window.BasketUI = BasketUI;