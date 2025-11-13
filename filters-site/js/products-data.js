// Gulf Union Ozone Trading Co. - Industrial Supplies
// This file now focuses on categories instead of individual products
// For backward compatibility with existing code

// Load categories data
if (typeof window.CATEGORIES_DATA === 'undefined') {
    // Fallback data if categories-data.js not loaded
    window.CATEGORIES_DATA = [];
}

// For backward compatibility - map categories to products format
window.PRODUCTS_DATA = window.CATEGORIES_DATA || [];

// Brands (kept for compatibility)
window.BRANDS = {
    gulf_union: { name: 'Gulf Union Ozone', country: 'UAE' },
    caterpillar: { name: 'Caterpillar', country: 'USA' },
    bosch: { name: 'Bosch', country: 'Germany' },
    siemens: { name: 'Siemens', country: 'Germany' },
    parker: { name: 'Parker Hannifin', country: 'USA' }
};

// Categories (mapped from CATEGORIES_DATA)
window.CATEGORIES = {};
if (window.CATEGORIES_DATA) {
    window.CATEGORIES_DATA.forEach(category => {
        window.CATEGORIES[category.id] = {
            name: category.name,
            description: category.description
        };
    });
}

// Applications
window.APPLICATIONS = {
    automotive: { name: 'Automotive', description: 'Cars, trucks, and vehicles' },
    industrial: { name: 'Industrial', description: 'Manufacturing and heavy machinery' },
    construction: { name: 'Construction', description: 'Building and infrastructure' },
    oil_gas: { name: 'Oil & Gas', description: 'Petroleum and energy sector' }
};

// Products API (redirects to Categories API)
window.ProductsAPI = {
    getAll: () => window.CATEGORIES_DATA || [],
    getById: (id) => window.CategoriesAPI ? window.CategoriesAPI.getById(id) : null,
    getByCategory: (category) => window.CategoriesAPI ? [window.CategoriesAPI.getById(category)] : [],
    search: (query) => window.CategoriesAPI ? window.CategoriesAPI.search(query) : [],
    filter: (filters) => window.CategoriesAPI ? window.CategoriesAPI.filter(filters) : []
};
