// Filter Nest - Main Application JavaScript

class FilterNestApp {
    constructor() {
        this.currentLanguage = 'en';
        this.currentFilters = {};
        this.currentPage = 1;
        this.productsPerPage = 12;
        this.currentProduct = null;
        this.testimonialIndex = 0;

        this.init();
    }

    init() {
        this.initializeEventListeners();
        this.initializeNavigation();
        this.initializeProducts();
        this.initializeAnimations();
        this.initializeScrollEffects();
        this.loadProducts();

        // Check if there's a hash in URL
        if (window.location.hash) {
            this.scrollToSection(window.location.hash.substring(1));
        }
    }

    initializeEventListeners() {
        // Navigation
        document.getElementById('mobileToggle')?.addEventListener('click', this.toggleMobileMenu.bind(this));
        document.getElementById('langToggle')?.addEventListener('click', this.toggleLanguage.bind(this));
        document.getElementById('mobileLangToggle')?.addEventListener('click', this.toggleLanguage.bind(this));

        // Basket
        document.getElementById('basketBtn')?.addEventListener('click', this.openBasketModal.bind(this));

        // Search and filters
        document.getElementById('searchInput')?.addEventListener('input', this.handleSearch.bind(this));
        document.getElementById('searchClear')?.addEventListener('click', this.clearSearch.bind(this));
        document.getElementById('categoryFilter')?.addEventListener('change', this.handleFilterChange.bind(this));
        document.getElementById('brandFilter')?.addEventListener('change', this.handleFilterChange.bind(this));
        document.getElementById('applicationFilter')?.addEventListener('change', this.handleFilterChange.bind(this));
        document.getElementById('originFilter')?.addEventListener('change', this.handleFilterChange.bind(this));
        document.getElementById('sortFilter')?.addEventListener('change', this.handleFilterChange.bind(this));

        // Quick filters
        document.querySelectorAll('.quick-filter').forEach(btn => {
            btn.addEventListener('click', this.handleQuickFilter.bind(this));
        });

        // Clear filters
        document.getElementById('clearFilters')?.addEventListener('click', this.clearAllFilters.bind(this));

        // Load more
        document.getElementById('loadMoreBtn')?.addEventListener('click', this.loadMoreProducts.bind(this));

        // Contact form
        document.getElementById('contactForm')?.addEventListener('submit', this.handleContactForm.bind(this));
        document.getElementById('quotationForm')?.addEventListener('submit', this.handleQuotationForm.bind(this));

        // Back to top
        document.getElementById('backToTop')?.addEventListener('click', this.scrollToTop.bind(this));

        // Modal close handlers
        document.addEventListener('click', this.handleModalClose.bind(this));
        document.addEventListener('keydown', this.handleKeydown.bind(this));

        // Scroll handler
        window.addEventListener('scroll', this.handleScroll.bind(this));

        // Resize handler
        window.addEventListener('resize', this.handleResize.bind(this));
    }

    initializeNavigation() {
        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                this.scrollToSection(targetId);
                this.updateActiveNavLink(targetId);
            });
        });

        // Update active nav link on scroll
        window.addEventListener('scroll', this.updateActiveNavOnScroll.bind(this));
    }

    initializeProducts() {
        this.loadProducts();
        this.initializeTestimonials();
        this.initializeBrandsSlider();
    }

    initializeAnimations() {
        // Intersection Observer for animations
        this.observeElements();
    }

    initializeScrollEffects() {
        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        if (navbar) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });
        }
    }

    // Navigation Methods
    toggleMobileMenu() {
        const navMenu = document.getElementById('nav-menu');
        const mobileToggle = document.getElementById('mobileToggle');

        if (navMenu) {
            navMenu.classList.toggle('mobile-active');
            mobileToggle?.classList.toggle('active');
        }
    }

    toggleLanguage() {
        this.currentLanguage = this.currentLanguage === 'en' ? 'ar' : 'en';
        document.documentElement.setAttribute('dir', this.currentLanguage === 'ar' ? 'rtl' : 'ltr');
        document.documentElement.setAttribute('lang', this.currentLanguage);

        // Update language toggle buttons
        const langButtons = document.querySelectorAll('#langToggle .lang-text, #mobileLangToggle .lang-text');
        langButtons.forEach(btn => {
            btn.textContent = this.currentLanguage === 'en' ? 'عربي' : 'English';
        });

        // Update content if needed (future enhancement)
        this.updateLanguageContent();
    }

    updateLanguageContent() {
        // Placeholder for language content updates
        // In a real application, this would load translated content
        console.log(`Language changed to: ${this.currentLanguage}`);
    }

    scrollToSection(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            const navbarHeight = document.getElementById('navbar')?.offsetHeight || 80;
            const elementPosition = element.offsetTop - navbarHeight;

            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    }

    updateActiveNavLink(activeId) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${activeId}`) {
                link.classList.add('active');
            }
        });
    }

    updateActiveNavOnScroll() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                this.updateActiveNavLink(sectionId);
            }
        });
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Product Methods
    loadProducts() {
        this.showLoading();

        // Simulate API delay
        setTimeout(() => {
            const filters = { ...this.currentFilters };
            if (this.currentFilters.quickFilter) {
                filters.tag = this.currentFilters.quickFilter;
                delete filters.quickFilter;
            }

            const allProducts = window.ProductsAPI.filter(filters);
            const startIndex = (this.currentPage - 1) * this.productsPerPage;
            const endIndex = startIndex + this.productsPerPage;
            const productsToShow = allProducts.slice(0, endIndex);

            this.renderProducts(productsToShow);
            this.updateProductsCount(productsToShow.length, allProducts.length);
            this.updateLoadMoreButton(endIndex < allProducts.length);
            this.hideLoading();

            if (productsToShow.length === 0) {
                this.showNoResults();
            } else {
                this.hideNoResults();
            }
        }, 500);
    }

    renderProducts(products) {
        const productsGrid = document.getElementById('productsGrid');
        if (!productsGrid) return;

        productsGrid.innerHTML = products.map(product => this.createProductCard(product)).join('');

        // Add event listeners to product cards
        productsGrid.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('click', () => {
                const productId = card.dataset.productId;
                this.openProductModal(productId);
            });
        });

        // Add event listeners to add to basket buttons
        productsGrid.querySelectorAll('.add-to-basket-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const productId = btn.dataset.productId;
                this.addToBasket(productId);
            });
        });
    }

    createProductCard(product) {
        const brand = window.BRANDS[product.brand];
        const category = window.CATEGORIES[product.category];
        const badges = product.tags?.map(tag => `<span class="product-badge ${tag}">${tag}</span>`).join('') || '';

        return `
            <div class="product-card" data-product-id="${product.id}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    <div class="product-badges">${badges}</div>
                    <div class="product-actions-quick">
                        <button class="quick-action-btn" title="Quick view">
                            <i class="icon-search"></i>
                        </button>
                    </div>
                </div>
                <div class="product-content">
                    <div class="product-category">${category?.name || product.category}</div>
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-part-number">Part #: ${product.partNumber}</div>
                    <div class="product-specs">
                        <span class="product-spec">${window.APPLICATIONS[product.application]?.name || product.application}</span>
                        <span class="product-spec">${window.ORIGINS[product.origin]?.name || product.origin}</span>
                    </div>
                    <div class="product-footer">
                        <div class="product-brand">
                            <img src="${brand?.logo || ''}" alt="${brand?.name || product.brand}" class="brand-logo">
                            <span class="brand-name">${brand?.name || product.brand}</span>
                        </div>
                        <div class="product-actions">
                            <button class="add-to-basket-btn" data-product-id="${product.id}">
                                <i class="icon-basket"></i>
                                <span>Add</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // Filter Methods
    handleSearch(e) {
        const searchTerm = e.target.value.trim();
        const clearBtn = document.getElementById('searchClear');

        if (searchTerm) {
            clearBtn?.classList.add('visible');
            this.currentFilters.search = searchTerm;
        } else {
            clearBtn?.classList.remove('visible');
            delete this.currentFilters.search;
        }

        this.currentPage = 1;
        this.loadProducts();
        this.updateActiveFilters();
    }

    clearSearch() {
        const searchInput = document.getElementById('searchInput');
        const clearBtn = document.getElementById('searchClear');

        if (searchInput) searchInput.value = '';
        clearBtn?.classList.remove('visible');
        delete this.currentFilters.search;

        this.currentPage = 1;
        this.loadProducts();
        this.updateActiveFilters();
    }

    handleFilterChange(e) {
        const filterType = e.target.id.replace('Filter', '');
        const value = e.target.value;

        if (value) {
            this.currentFilters[filterType] = value;
        } else {
            delete this.currentFilters[filterType];
        }

        this.currentPage = 1;
        this.loadProducts();
        this.updateActiveFilters();
    }

    handleQuickFilter(e) {
        const filterValue = e.target.dataset.filter;

        // Remove active class from all quick filters
        document.querySelectorAll('.quick-filter').forEach(btn => {
            btn.classList.remove('active');
        });

        if (filterValue === 'all') {
            delete this.currentFilters.quickFilter;
        } else {
            this.currentFilters.quickFilter = filterValue;
            e.target.classList.add('active');
        }

        if (filterValue === 'all') {
            e.target.classList.add('active');
        }

        this.currentPage = 1;
        this.loadProducts();
        this.updateActiveFilters();
    }

    filterByCategory(category) {
        this.currentFilters.category = category;
        this.currentPage = 1;

        // Update the category filter dropdown
        const categoryFilter = document.getElementById('categoryFilter');
        if (categoryFilter) {
            categoryFilter.value = category;
        }

        // Scroll to products section
        this.scrollToSection('products');

        this.loadProducts();
        this.updateActiveFilters();
    }

    clearAllFilters() {
        this.currentFilters = {};
        this.currentPage = 1;

        // Reset all filter inputs
        document.getElementById('searchInput').value = '';
        document.getElementById('searchClear')?.classList.remove('visible');
        document.getElementById('categoryFilter').value = '';
        document.getElementById('brandFilter').value = '';
        document.getElementById('applicationFilter').value = '';
        document.getElementById('originFilter').value = '';
        document.getElementById('sortFilter').value = 'name';

        // Reset quick filters
        document.querySelectorAll('.quick-filter').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector('.quick-filter[data-filter="all"]')?.classList.add('active');

        this.loadProducts();
        this.updateActiveFilters();
    }

    updateActiveFilters() {
        const activeFiltersContainer = document.getElementById('activeFilters');
        const filterTagsContainer = document.getElementById('filterTags');

        if (!activeFiltersContainer || !filterTagsContainer) return;

        const activeTags = [];

        Object.entries(this.currentFilters).forEach(([key, value]) => {
            if (key === 'search') {
                activeTags.push({
                    key,
                    label: `Search: "${value}"`,
                    value
                });
            } else if (key === 'quickFilter') {
                activeTags.push({
                    key,
                    label: value.charAt(0).toUpperCase() + value.slice(1),
                    value
                });
            } else {
                const label = this.getFilterLabel(key, value);
                activeTags.push({
                    key,
                    label,
                    value
                });
            }
        });

        if (activeTags.length > 0) {
            activeFiltersContainer.classList.add('visible');
            filterTagsContainer.innerHTML = activeTags.map(tag => `
                <div class="filter-tag">
                    <span>${tag.label}</span>
                    <button class="filter-tag-remove" onclick="app.removeFilter('${tag.key}')">
                        <i class="icon-close"></i>
                    </button>
                </div>
            `).join('');
        } else {
            activeFiltersContainer.classList.remove('visible');
            filterTagsContainer.innerHTML = '';
        }
    }

    getFilterLabel(key, value) {
        switch (key) {
            case 'category':
                return window.CATEGORIES[value]?.name || value;
            case 'brand':
                return window.BRANDS[value]?.name || value;
            case 'application':
                return window.APPLICATIONS[value]?.name || value;
            case 'origin':
                return window.ORIGINS[value]?.name || value;
            case 'sort':
                return `Sort: ${value}`;
            default:
                return value;
        }
    }

    removeFilter(filterKey) {
        delete this.currentFilters[filterKey];

        // Update the corresponding input
        if (filterKey === 'search') {
            document.getElementById('searchInput').value = '';
            document.getElementById('searchClear')?.classList.remove('visible');
        } else if (filterKey === 'quickFilter') {
            document.querySelectorAll('.quick-filter').forEach(btn => {
                btn.classList.remove('active');
            });
            document.querySelector('.quick-filter[data-filter="all"]')?.classList.add('active');
        } else {
            const input = document.getElementById(filterKey + 'Filter');
            if (input) input.value = '';
        }

        this.currentPage = 1;
        this.loadProducts();
        this.updateActiveFilters();
    }

    loadMoreProducts() {
        this.currentPage++;
        this.loadProducts();
    }

    updateProductsCount(shown, total) {
        const shownElement = document.getElementById('productsShown');
        const totalElement = document.getElementById('productsTotal');

        if (shownElement) shownElement.textContent = shown;
        if (totalElement) totalElement.textContent = total;
    }

    updateLoadMoreButton(hasMore) {
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        if (loadMoreBtn) {
            loadMoreBtn.style.display = hasMore ? 'flex' : 'none';
        }
    }

    showLoading() {
        const loadingState = document.getElementById('loadingState');
        if (loadingState) {
            loadingState.classList.add('visible');
        }
    }

    hideLoading() {
        const loadingState = document.getElementById('loadingState');
        if (loadingState) {
            loadingState.classList.remove('visible');
        }
    }

    showNoResults() {
        const noResults = document.getElementById('noResults');
        if (noResults) {
            noResults.classList.add('visible');
        }
    }

    hideNoResults() {
        const noResults = document.getElementById('noResults');
        if (noResults) {
            noResults.classList.remove('visible');
        }
    }

    // Modal Methods
    openProductModal(productId) {
        const product = window.ProductsAPI.getById(productId);
        if (!product) return;

        this.currentProduct = product;
        this.populateProductModal(product);
        this.showModal('productModal');
    }

    populateProductModal(product) {
        const modal = document.getElementById('productModal');
        if (!modal) return;

        const brand = window.BRANDS[product.brand];
        const category = window.CATEGORIES[product.category];
        const application = window.APPLICATIONS[product.application];
        const origin = window.ORIGINS[product.origin];

        // Update modal content
        document.getElementById('modalProductName').textContent = product.name;
        document.getElementById('modalProductImage').src = product.image;
        document.getElementById('modalProductImage').alt = product.name;

        // Update thumbnails
        const thumbnailsContainer = document.getElementById('modalThumbnails');
        if (thumbnailsContainer && product.images) {
            thumbnailsContainer.innerHTML = product.images.map((img, index) => `
                <div class="thumbnail ${index === 0 ? 'active' : ''}" onclick="app.changeProductImage('${img}', this)">
                    <img src="${img}" alt="${product.name} ${index + 1}">
                </div>
            `).join('');
        }

        // Update badges
        const badgesContainer = document.getElementById('modalBadges');
        if (badgesContainer && product.tags) {
            badgesContainer.innerHTML = product.tags.map(tag =>
                `<span class="product-badge ${tag}">${tag}</span>`
            ).join('');
        }

        // Update details
        const detailsContainer = document.getElementById('modalProductDetails');
        if (detailsContainer) {
            detailsContainer.innerHTML = `
                <div class="detail-row">
                    <span class="detail-label">Part Number:</span>
                    <span class="detail-value">${product.partNumber}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Category:</span>
                    <span class="detail-value">${category?.name || product.category}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Brand:</span>
                    <span class="detail-value">${brand?.name || product.brand}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Application:</span>
                    <span class="detail-value">${application?.name || product.application}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Origin:</span>
                    <span class="detail-value">${origin?.name || product.origin} ${origin?.flag || ''}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Description:</span>
                    <span class="detail-value">${product.description}</span>
                </div>
            `;
        }

        // Update specifications
        const specsContainer = document.getElementById('modalSpecifications');
        if (specsContainer && product.specifications) {
            specsContainer.innerHTML = `
                <h4>Specifications</h4>
                <div class="specs-grid">
                    ${Object.entries(product.specifications).map(([key, value]) => `
                        <div class="spec-item">
                            <div class="spec-label">${key}</div>
                            <div class="spec-value">${value}</div>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        // Update compatibility
        const compatibilityContainer = document.getElementById('modalCompatibility');
        if (compatibilityContainer && product.compatibility) {
            compatibilityContainer.innerHTML = `
                <h4>Compatible Models</h4>
                <div class="compatibility-list">
                    ${product.compatibility.map(model =>
                `<span class="compatibility-item">${model}</span>`
            ).join('')}
                </div>
            `;
        }

        // Reset quantity
        const quantityInput = document.getElementById('productQuantity');
        if (quantityInput) {
            quantityInput.value = 1;
        }
    }

    changeProductImage(imageSrc, thumbnail) {
        const mainImage = document.getElementById('modalProductImage');
        if (mainImage) {
            mainImage.src = imageSrc;
        }

        // Update active thumbnail
        document.querySelectorAll('.thumbnail').forEach(thumb => {
            thumb.classList.remove('active');
        });
        thumbnail.classList.add('active');
    }

    increaseQuantity() {
        const quantityInput = document.getElementById('productQuantity');
        if (quantityInput) {
            quantityInput.value = parseInt(quantityInput.value) + 1;
        }
    }

    decreaseQuantity() {
        const quantityInput = document.getElementById('productQuantity');
        if (quantityInput && parseInt(quantityInput.value) > 1) {
            quantityInput.value = parseInt(quantityInput.value) - 1;
        }
    }

    closeProductModal() {
        this.hideModal('productModal');
        this.currentProduct = null;
    }

    openBasketModal() {
        this.populateBasketModal();
        this.showModal('basketModal');
    }

    closeBasketModal() {
        this.hideModal('basketModal');
    }

    openQuotationModal() {
        this.showModal('quotationModal');
        // If opened from basket, close basket modal
        this.hideModal('basketModal');
    }

    closeQuotationModal() {
        this.hideModal('quotationModal');
    }

    openSuccessModal() {
        this.showModal('successModal');
        // Close quotation modal
        this.hideModal('quotationModal');
    }

    closeSuccessModal() {
        this.hideModal('successModal');
    }

    showModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    hideModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    handleModalClose(e) {
        if (e.target.classList.contains('modal-overlay')) {
            const modal = e.target.closest('.modal');
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    }

    handleKeydown(e) {
        if (e.key === 'Escape') {
            const activeModal = document.querySelector('.modal.active');
            if (activeModal) {
                activeModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    }

    // Form Handlers
    handleContactForm(e) {
        e.preventDefault();

        const submitBtn = e.target.querySelector('button[type="submit"]');
        const originalText = submitBtn.querySelector('.btn-text').textContent;

        // Show loading state
        submitBtn.classList.add('loading');
        submitBtn.querySelector('.btn-text').textContent = 'Sending...';

        // Simulate form submission
        setTimeout(() => {
            // Reset form
            e.target.reset();

            // Reset button state
            submitBtn.classList.remove('loading');
            submitBtn.querySelector('.btn-text').textContent = originalText;

            // Show success message
            this.showSuccessMessage('Message sent successfully! We will contact you soon.');
        }, 2000);
    }

    handleQuotationForm(e) {
        e.preventDefault();

        const submitBtn = e.target.querySelector('button[type="submit"]');
        const originalText = submitBtn.querySelector('.btn-text').textContent;

        // Show loading state
        submitBtn.classList.add('loading');
        submitBtn.querySelector('.btn-text').textContent = 'Submitting...';

        // Simulate form submission
        setTimeout(() => {
            // Reset form
            e.target.reset();

            // Reset button state
            submitBtn.classList.remove('loading');
            submitBtn.querySelector('.btn-text').textContent = originalText;

            // Clear basket after successful quotation
            window.BasketManager.clearBasket();

            // Show success modal
            this.openSuccessModal();
        }, 2000);
    }

    showSuccessMessage(message) {
        // Create and show a toast notification
        const toast = document.createElement('div');
        toast.className = 'toast success';
        toast.innerHTML = `
            <div class="toast-content">
                <i class="icon-check-circle"></i>
                <span>${message}</span>
            </div>
        `;

        document.body.appendChild(toast);

        // Animate in
        setTimeout(() => toast.classList.add('show'), 100);

        // Remove after 3 seconds
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => document.body.removeChild(toast), 300);
        }, 3000);
    }

    // Scroll Effects
    handleScroll() {
        const scrollTop = window.pageYOffset;
        const backToTopBtn = document.getElementById('backToTop');

        // Show/hide back to top button
        if (scrollTop > 500) {
            backToTopBtn?.classList.add('visible');
        } else {
            backToTopBtn?.classList.remove('visible');
        }
    }

    handleResize() {
        // Handle responsive updates
        this.initializeBrandsSlider();
    }

    // Animation and Effects
    observeElements() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observe elements for animation
        document.querySelectorAll('.feature-card, .category-card, .product-card').forEach(el => {
            observer.observe(el);
        });
    }

    initializeTestimonials() {
        const track = document.getElementById('testimonialsTrack');
        const prevBtn = document.getElementById('testimonialPrev');
        const nextBtn = document.getElementById('testimonialNext');
        const dotsContainer = document.getElementById('testimonialsDots');

        if (!track) return;

        const testimonials = track.children;
        const totalTestimonials = testimonials.length;

        // Create dots
        if (dotsContainer) {
            dotsContainer.innerHTML = Array.from({ length: totalTestimonials }, (_, i) =>
                `<button class="testimonial-dot ${i === 0 ? 'active' : ''}" onclick="app.goToTestimonial(${i})"></button>`
            ).join('');
        }

        // Event listeners
        prevBtn?.addEventListener('click', () => this.changeTestimonial(-1));
        nextBtn?.addEventListener('click', () => this.changeTestimonial(1));

        // Auto-play
        setInterval(() => this.changeTestimonial(1), 5000);
    }

    changeTestimonial(direction) {
        const track = document.getElementById('testimonialsTrack');
        if (!track) return;

        const totalTestimonials = track.children.length;
        this.testimonialIndex = (this.testimonialIndex + direction + totalTestimonials) % totalTestimonials;

        this.updateTestimonialPosition();
    }

    goToTestimonial(index) {
        this.testimonialIndex = index;
        this.updateTestimonialPosition();
    }

    updateTestimonialPosition() {
        const track = document.getElementById('testimonialsTrack');
        const dots = document.querySelectorAll('.testimonial-dot');

        if (!track) return;

        const translateX = -this.testimonialIndex * 100;
        track.style.transform = `translateX(${translateX}%)`;

        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.testimonialIndex);
        });
    }

    initializeBrandsSlider() {
        const track = document.getElementById('brandsTrack');
        if (!track) return;

        // Clone brands for infinite scroll
        const brands = Array.from(track.children);
        brands.forEach(brand => {
            const clone = brand.cloneNode(true);
            track.appendChild(clone);
        });
    }

    // Utility Methods
    addToBasket(productId) {
        const quantity = document.getElementById('productQuantity')?.value || 1;
        window.BasketManager.addItem(productId, parseInt(quantity));
        this.showSuccessMessage('Product added to basket!');

        // Close product modal if open
        this.closeProductModal();
    }

    populateBasketModal() {
        const basketItems = window.BasketManager.getItems();
        const basketItemsContainer = document.getElementById('basketItems');
        const basketSummaryContainer = document.getElementById('basketSummary');

        if (!basketItemsContainer || !basketSummaryContainer) return;

        if (basketItems.length === 0) {
            basketItemsContainer.innerHTML = `
                <div class="basket-empty">
                    <div class="basket-empty-icon">
                        <i class="icon-basket"></i>
                    </div>
                    <h3>Your basket is empty</h3>
                    <p>Add some products to request a quotation</p>
                </div>
            `;
            basketSummaryContainer.innerHTML = '';
            return;
        }

        // Render basket items
        basketItemsContainer.innerHTML = basketItems.map(item => {
            const product = window.ProductsAPI.getById(item.productId);
            if (!product) return '';

            return `
                <div class="basket-item">
                    <div class="basket-item-image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="basket-item-content">
                        <div class="basket-item-name">${product.name}</div>
                        <div class="basket-item-details">
                            <span>Part #: ${product.partNumber}</span>
                            <span>${window.BRANDS[product.brand]?.name || product.brand}</span>
                        </div>
                        <div class="basket-item-actions">
                            <div class="basket-item-quantity">
                                <button class="quantity-btn" onclick="window.BasketManager.updateQuantity('${item.productId}', ${item.quantity - 1})">-</button>
                                <span class="quantity-display">${item.quantity}</span>
                                <button class="quantity-btn" onclick="window.BasketManager.updateQuantity('${item.productId}', ${item.quantity + 1})">+</button>
                            </div>
                            <button class="remove-btn" onclick="window.BasketManager.removeItem('${item.productId}')">Remove</button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        // Render summary
        basketSummaryContainer.innerHTML = `
            <div class="summary-row">
                <span class="summary-label">Total Items:</span>
                <span class="summary-value">${basketItems.reduce((sum, item) => sum + item.quantity, 0)}</span>
            </div>
            <div class="summary-row">
                <span class="summary-label">Products:</span>
                <span class="summary-value">${basketItems.length}</span>
            </div>
        `;
    }
}

// Global functions for inline event handlers
window.scrollToProducts = () => window.app?.scrollToSection('products');
window.filterByCategory = (category) => window.app?.filterByCategory(category);
window.openQuotationModal = () => window.app?.openQuotationModal();
window.closeProductModal = () => window.app?.closeProductModal();
window.closeBasketModal = () => window.app?.closeBasketModal();
window.closeQuotationModal = () => window.app?.closeQuotationModal();
window.closeSuccessModal = () => window.app?.closeSuccessModal();
window.clearAllFilters = () => window.app?.clearAllFilters();
window.increaseQuantity = () => window.app?.increaseQuantity();
window.decreaseQuantity = () => window.app?.decreaseQuantity();
window.addToBasket = () => window.app?.addToBasket(window.app?.currentProduct?.id);

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new FilterNestApp();
});

// Add CSS for toast notifications
const toastStyles = `
    .toast {
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--success);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-xl);
        z-index: 10000;
        transform: translateX(100%);
        opacity: 0;
        transition: all 0.3s ease;
    }
    
    .toast.show {
        transform: translateX(0);
        opacity: 1;
    }
    
    .toast-content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .animate-in {
        animation: slideInUp 0.6s ease forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

// Inject toast styles
const styleSheet = document.createElement('style');
styleSheet.textContent = toastStyles;
document.head.appendChild(styleSheet);