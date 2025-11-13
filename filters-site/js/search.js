// Gulf Union Ozone Trading Co. - Search and Filtering System

class SearchFilter {
    constructor() {
        this.currentFilters = {
            search: '',
            category: 'all',
            brand: 'all',
            application: 'all'
        };
        this.searchHistory = this.loadSearchHistory();
        this.debounceTimer = null;
        this.initializeSearch();
    }

    // Initialize search functionality
    initializeSearch() {
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.debounceSearch(e.target.value);
            });

            searchInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.performSearch(e.target.value);
                }
            });
        }

        // Initialize filter dropdowns
        this.initializeFilterDropdowns();

        // Initialize quick search suggestions
        this.initializeSearchSuggestions();
    }

    // Debounced search to avoid excessive API calls
    debounceSearch(query, delay = 300) {
        clearTimeout(this.debounceTimer);
        this.debounceTimer = setTimeout(() => {
            this.updateFilter('search', query);
        }, delay);
    }

    // Perform immediate search
    performSearch(query) {
        clearTimeout(this.debounceTimer);
        this.updateFilter('search', query);
        this.addToSearchHistory(query);
    }

    // Update a specific filter
    updateFilter(filterType, value) {
        this.currentFilters[filterType] = value;
        this.applyFilters();
        this.updateFilterUI();
    }

    // Apply all current filters
    applyFilters() {
        const results = this.filterProducts();
        this.displayResults(results);
        this.updateResultsCount(results.length);
        this.updateFilterSummary();
    }

    // Filter products based on current filters
    filterProducts() {
        let results = [...window.PRODUCTS_DATA];

        // Apply search filter
        if (this.currentFilters.search.trim()) {
            const searchTerm = this.currentFilters.search.toLowerCase();
            results = results.filter(product =>
                product.name.toLowerCase().includes(searchTerm) ||
                product.partNumber.toLowerCase().includes(searchTerm) ||
                product.brand.toLowerCase().includes(searchTerm) ||
                product.category.toLowerCase().includes(searchTerm) ||
                (product.compatibility && product.compatibility.some(comp =>
                    comp.toLowerCase().includes(searchTerm)
                )) ||
                Object.values(product.specifications || {}).some(spec =>
                    spec.toString().toLowerCase().includes(searchTerm)
                )
            );
        }

        // Apply category filter
        if (this.currentFilters.category !== 'all') {
            results = results.filter(product => product.category === this.currentFilters.category);
        }

        // Apply brand filter
        if (this.currentFilters.brand !== 'all') {
            results = results.filter(product => product.brand === this.currentFilters.brand);
        }

        // Apply application filter
        if (this.currentFilters.application !== 'all') {
            results = results.filter(product => product.application === this.currentFilters.application);
        }

        return results;
    }

    // Display filtered results
    displayResults(products) {
        if (window.app && typeof window.app.displayProducts === 'function') {
            window.app.displayProducts(products);
        }
    }

    // Update results count display
    updateResultsCount(count) {
        const countElement = document.getElementById('resultsCount');
        if (countElement) {
            countElement.textContent = `${count} product${count !== 1 ? 's' : ''} found`;
        }
    }

    // Update filter summary
    updateFilterSummary() {
        const summaryElement = document.getElementById('filterSummary');
        if (!summaryElement) return;

        const activeFilters = this.getActiveFilters();

        if (activeFilters.length === 0) {
            summaryElement.style.display = 'none';
            return;
        }

        summaryElement.style.display = 'block';
        summaryElement.innerHTML = `
            <div class="active-filters">
                <span class="filters-label">Active filters:</span>
                ${activeFilters.map(filter => `
                    <span class="filter-tag" data-filter="${filter.type}">
                        ${filter.label}
                        <button class="remove-filter" onclick="window.SearchFilter.removeFilter('${filter.type}')">
                            <i class="icon-x"></i>
                        </button>
                    </span>
                `).join('')}
                <button class="clear-all-filters" onclick="window.SearchFilter.clearAllFilters()">
                    Clear all
                </button>
            </div>
        `;
    }

    // Get list of active filters
    getActiveFilters() {
        const active = [];

        if (this.currentFilters.search.trim()) {
            active.push({
                type: 'search',
                label: `Search: "${this.currentFilters.search}"`
            });
        }

        if (this.currentFilters.category !== 'all') {
            const category = window.CATEGORIES[this.currentFilters.category];
            active.push({
                type: 'category',
                label: `Category: ${category?.name || this.currentFilters.category}`
            });
        }

        if (this.currentFilters.brand !== 'all') {
            const brand = window.BRANDS[this.currentFilters.brand];
            active.push({
                type: 'brand',
                label: `Brand: ${brand?.name || this.currentFilters.brand}`
            });
        }

        if (this.currentFilters.application !== 'all') {
            const app = window.APPLICATIONS[this.currentFilters.application];
            active.push({
                type: 'application',
                label: `Application: ${app?.name || this.currentFilters.application}`
            });
        }

        return active;
    }

    // Remove specific filter
    removeFilter(filterType) {
        if (filterType === 'search') {
            this.currentFilters.search = '';
            const searchInput = document.getElementById('searchInput');
            if (searchInput) searchInput.value = '';
        } else {
            this.currentFilters[filterType] = 'all';
        }

        this.applyFilters();
        this.updateFilterDropdowns();
    }

    // Clear all filters
    clearAllFilters() {
        this.currentFilters = {
            search: '',
            category: 'all',
            brand: 'all',
            application: 'all'
        };

        // Reset UI elements
        const searchInput = document.getElementById('searchInput');
        if (searchInput) searchInput.value = '';

        this.applyFilters();
        this.updateFilterDropdowns();
    }

    // Initialize filter dropdowns
    initializeFilterDropdowns() {
        const dropdowns = ['categoryFilter', 'brandFilter', 'applicationFilter'];

        dropdowns.forEach(dropdownId => {
            const dropdown = document.getElementById(dropdownId);
            if (dropdown) {
                dropdown.addEventListener('change', (e) => {
                    const filterType = dropdownId.replace('Filter', '');
                    this.updateFilter(filterType, e.target.value);
                });
            }
        });
    }

    // Update filter dropdown selections
    updateFilterDropdowns() {
        Object.keys(this.currentFilters).forEach(filterType => {
            if (filterType === 'search') return;

            const dropdown = document.getElementById(`${filterType}Filter`);
            if (dropdown) {
                dropdown.value = this.currentFilters[filterType];
            }
        });
    }

    // Update filter UI
    updateFilterUI() {
        this.updateFilterDropdowns();
        this.updateFilterCounts();
    }

    // Update filter option counts
    updateFilterCounts() {
        // This would update the count of available products for each filter option
        // Implementation depends on UI design
    }

    // Initialize search suggestions
    initializeSearchSuggestions() {
        const searchInput = document.getElementById('searchInput');
        if (!searchInput) return;

        const suggestionsContainer = this.createSuggestionsContainer();

        searchInput.addEventListener('focus', () => {
            this.showSearchSuggestions();
        });

        searchInput.addEventListener('blur', (e) => {
            // Delay hiding to allow clicking on suggestions
            setTimeout(() => {
                this.hideSearchSuggestions();
            }, 200);
        });
    }

    // Create suggestions container
    createSuggestionsContainer() {
        let container = document.getElementById('searchSuggestions');
        if (!container) {
            container = document.createElement('div');
            container.id = 'searchSuggestions';
            container.className = 'search-suggestions';

            const searchBox = document.querySelector('.search-box');
            if (searchBox) {
                searchBox.appendChild(container);
            }
        }
        return container;
    }

    // Show search suggestions
    showSearchSuggestions() {
        const container = document.getElementById('searchSuggestions');
        if (!container) return;

        const suggestions = this.generateSearchSuggestions();

        container.innerHTML = suggestions.map(suggestion => `
            <div class="suggestion-item" onclick="window.SearchFilter.selectSuggestion('${suggestion.value}', '${suggestion.type}')">
                <i class="icon-${suggestion.icon}"></i>
                <span class="suggestion-text">${suggestion.label}</span>
                <span class="suggestion-type">${suggestion.type}</span>
            </div>
        `).join('');

        container.style.display = suggestions.length > 0 ? 'block' : 'none';
    }

    // Hide search suggestions
    hideSearchSuggestions() {
        const container = document.getElementById('searchSuggestions');
        if (container) {
            container.style.display = 'none';
        }
    }

    // Generate search suggestions
    generateSearchSuggestions() {
        const suggestions = [];
        const currentSearch = this.currentFilters.search.toLowerCase();

        // Recent searches
        if (!currentSearch) {
            this.searchHistory.slice(0, 5).forEach(term => {
                suggestions.push({
                    value: term,
                    label: term,
                    type: 'recent',
                    icon: 'clock'
                });
            });
        }

        // Popular products
        const popularProducts = this.getPopularProducts();
        popularProducts.slice(0, 3).forEach(product => {
            if (!currentSearch || product.name.toLowerCase().includes(currentSearch)) {
                suggestions.push({
                    value: product.name,
                    label: product.name,
                    type: 'product',
                    icon: 'box'
                });
            }
        });

        // Categories
        Object.entries(window.CATEGORIES).forEach(([key, category]) => {
            if (!currentSearch || category.name.toLowerCase().includes(currentSearch)) {
                suggestions.push({
                    value: category.name,
                    label: category.name,
                    type: 'category',
                    icon: 'grid'
                });
            }
        });

        // Brands
        Object.entries(window.BRANDS).slice(0, 5).forEach(([key, brand]) => {
            if (!currentSearch || brand.name.toLowerCase().includes(currentSearch)) {
                suggestions.push({
                    value: brand.name,
                    label: brand.name,
                    type: 'brand',
                    icon: 'tag'
                });
            }
        });

        return suggestions.slice(0, 8); // Limit suggestions
    }

    // Get popular products (mock implementation)
    getPopularProducts() {
        return window.PRODUCTS_DATA.slice(0, 5);
    }

    // Select suggestion
    selectSuggestion(value, type) {
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.value = value;
        }

        this.performSearch(value);
        this.hideSearchSuggestions();
    }

    // Add to search history
    addToSearchHistory(term) {
        if (!term || term.trim().length < 2) return;

        const cleanTerm = term.trim();

        // Remove existing entry
        this.searchHistory = this.searchHistory.filter(item => item !== cleanTerm);

        // Add to beginning
        this.searchHistory.unshift(cleanTerm);

        // Limit history size
        this.searchHistory = this.searchHistory.slice(0, 10);

        this.saveSearchHistory();
    }

    // Load search history
    loadSearchHistory() {
        try {
            const saved = localStorage.getItem('filterNestSearchHistory');
            return saved ? JSON.parse(saved) : [];
        } catch (error) {
            return [];
        }
    }

    // Save search history
    saveSearchHistory() {
        try {
            localStorage.setItem('filterNestSearchHistory', JSON.stringify(this.searchHistory));
        } catch (error) {
            console.error('Failed to save search history:', error);
        }
    }

    // Get current filters state
    getCurrentFilters() {
        return { ...this.currentFilters };
    }

    // Set filters from external source
    setFilters(filters) {
        this.currentFilters = { ...this.currentFilters, ...filters };
        this.applyFilters();
    }

    // Clear search history
    clearSearchHistory() {
        this.searchHistory = [];
        this.saveSearchHistory();
    }

    // Get search analytics
    getSearchAnalytics() {
        return {
            totalSearches: this.searchHistory.length,
            uniqueSearches: new Set(this.searchHistory).size,
            topSearches: this.getTopSearches(),
            recentSearches: this.searchHistory.slice(0, 5)
        };
    }

    // Get top searches
    getTopSearches() {
        const counts = {};
        this.searchHistory.forEach(term => {
            counts[term] = (counts[term] || 0) + 1;
        });

        return Object.entries(counts)
            .sort(([, a], [, b]) => b - a)
            .slice(0, 5)
            .map(([term, count]) => ({ term, count }));
    }
}

// Advanced search functionality
class AdvancedSearch {
    constructor(searchFilter) {
        this.searchFilter = searchFilter;
        this.advancedFilters = {
            priceRange: { min: 0, max: 1000 },
            origin: 'all',
            availability: 'all',
            rating: 0
        };
    }

    // Show advanced search modal
    showAdvancedSearch() {
        const modal = document.getElementById('advancedSearchModal');
        if (modal) {
            modal.classList.add('active');
            this.populateAdvancedFilters();
        }
    }

    // Hide advanced search modal
    hideAdvancedSearch() {
        const modal = document.getElementById('advancedSearchModal');
        if (modal) {
            modal.classList.remove('active');
        }
    }

    // Populate advanced filter values
    populateAdvancedFilters() {
        // Set current values in the advanced search form
        Object.keys(this.advancedFilters).forEach(key => {
            const element = document.getElementById(`advanced${key.charAt(0).toUpperCase() + key.slice(1)}`);
            if (element) {
                if (element.type === 'range') {
                    element.value = this.advancedFilters[key];
                } else {
                    element.value = this.advancedFilters[key];
                }
            }
        });
    }

    // Apply advanced filters
    applyAdvancedFilters() {
        // This would extend the basic filtering with advanced criteria
        console.log('Applying advanced filters:', this.advancedFilters);
        this.hideAdvancedSearch();
    }

    // Reset advanced filters
    resetAdvancedFilters() {
        this.advancedFilters = {
            priceRange: { min: 0, max: 1000 },
            origin: 'all',
            availability: 'all',
            rating: 0
        };
        this.populateAdvancedFilters();
    }
}

// Initialize search functionality
window.SearchFilter = new SearchFilter();
window.AdvancedSearch = new AdvancedSearch(window.SearchFilter);

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SearchFilter, AdvancedSearch };
}