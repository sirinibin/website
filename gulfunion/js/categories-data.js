// Gulf Union Ozone Trading Co. - Industrial Supplies Categories
// Comprehensive product categories with professional imagery

// Product category images - High quality industrial supply images
const CATEGORY_IMAGES = {
    welding: [
        'https://placehold.co/400x300/007acc/ffffff?text=Welding+Equipment',
        'https://placehold.co/400x300/007acc/ffffff?text=Welding+Tools',
        'https://placehold.co/400x300/007acc/ffffff?text=Welding+Supplies'
    ],
    alternator: [
        'https://placehold.co/400x300/dc3545/ffffff?text=Alternator+Parts',
        'https://placehold.co/400x300/dc3545/ffffff?text=Alternator+Motors',
        'https://placehold.co/400x300/dc3545/ffffff?text=Alternator+Systems'
    ],
    cable: [
        'https://placehold.co/400x300/ffc107/000000?text=Cable+Assembly',
        'https://placehold.co/400x300/ffc107/000000?text=Cable+Types',
        'https://placehold.co/400x300/ffc107/000000?text=Cable+Solutions'
    ],
    pipe: [
        'https://placehold.co/400x300/6c757d/ffffff?text=Pipe+Fittings',
        'https://placehold.co/400x300/6c757d/ffffff?text=Pipe+Systems',
        'https://placehold.co/400x300/6c757d/ffffff?text=Pipe+Components'
    ],
    bearing: [
        'https://placehold.co/400x300/17a2b8/ffffff?text=Bearing+Types',
        'https://placehold.co/400x300/17a2b8/ffffff?text=Bearing+Systems',
        'https://placehold.co/400x300/17a2b8/ffffff?text=Bearing+Parts'
    ],
    battery: [
        'https://placehold.co/400x300/e83e8c/ffffff?text=Battery+Systems',
        'https://placehold.co/400x300/e83e8c/ffffff?text=Battery+Types',
        'https://placehold.co/400x300/e83e8c/ffffff?text=Battery+Parts'
    ],
    tools: [
        'https://placehold.co/400x300/6f42c1/ffffff?text=Tools+Equipment',
        'https://placehold.co/400x300/6f42c1/ffffff?text=Tools+Industrial',
        'https://placehold.co/400x300/6f42c1/ffffff?text=Tools+Professional'
    ],
    electric: [
        'https://placehold.co/400x300/fd7e14/000000?text=Electric+Components',
        'https://placehold.co/400x300/fd7e14/000000?text=Electric+Systems',
        'https://placehold.co/400x300/fd7e14/000000?text=Electric+Parts'
    ],
    fitting: [
        'https://placehold.co/400x300/20c997/000000?text=Fitting+Types',
        'https://placehold.co/400x300/20c997/000000?text=Fitting+Systems',
        'https://placehold.co/400x300/20c997/000000?text=Fitting+Solutions'
    ],
    automotive: [
        'https://placehold.co/400x300/495057/ffffff?text=Automotive+Parts',
        'https://placehold.co/400x300/495057/ffffff?text=Automotive+Systems',
        'https://placehold.co/400x300/495057/ffffff?text=Automotive+Components'
    ]
};

// All categories from the comprehensive list provided
const ALL_CATEGORIES = [
    'Welding', 'NON VAT PRODUCT', 'ALTERNATOR', 'THREAD ROD', 'CABLE', 'TESTER', 'PIPE', 'CABLE ASSY',
    'FITTING', 'BEARING', 'BATTERY', 'FABRICATION', 'GLOVES', 'ORING', 'ELECTRIC', 'GASKET',
    'carbon brush', 'BELT', 'OIL SEAL', 'starter', 'WATER PUMP ELECTRIC', 'GROOVED FITTING',
    'butt welding', 'BURNER', 'SUPPORT', 'LIGHT', 'NEWMATIC', 'STARING COVER', 'SOLAR LIGHT',
    'BRAKE PADS', 'INDICATOR LIGHT', 'CLUTCH BOOSTER', 'COOLER', 'JIG SAW', 'SAW MACHINE',
    'PIPE WRENCH', 'STRIP', 'LIVER', 'VACUUM', 'SHIRT', 'REDUCER', 'COUPLER', 'PAPER',
    'RADIATOR FAN', 'PRESSURE SWITCH', 'CHARGING HOSE', 'TEE', 'TAPE', 'CRIMP', 'BOOT',
    'STAR BIT', 'STEERING OIL', 'TARPAULIN', 'WATER GUN', 'VIBRATOR', 'LAMP', 'FILTER WRENCH',
    'FILTER WRENCH 95-85', 'WIPER', 'SIDE LIGHT', 'BREAK LIGHT', 'SIKA', 'HEX NUT', 'HEX BOLT',
    'FLAT WASHER', 'ROPE CLIP', 'STEEL FUNNEL', 'BREAKPADS', 'TANK', 'PARKING BREAK',
    'SHIFT CLUTCH', 'PRESSURE PLATE', 'HYDRO', 'COMRESION', 'COMORESION', 'FLAT HOSE',
    'GREEN HOSE', 'CRISTAL HOSE', 'LEEFSET', 'WIPER SEAL', 'AC CONTR', 'WH-500', 'INNER ROPE',
    'FOOT VALVE', 'CRANK', 'ADAPTER', 'ORBITAL', 'ALOX', 'FREON', 'SEAL STRING', 'SCREWDRIVER',
    'CALIBER', 'TOP LIGHT', 'ALLOY WHEEL CUP', 'BREAKER', 'STIKO', 'STEEL WIRE'
];

window.CATEGORIES_DATA = ALL_CATEGORIES.map((categoryName, index) => {
    const categoryId = categoryName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

    // Determine image category based on the type of product
    let imageCategory = 'tools'; // default
    if (categoryName.toLowerCase().includes('electric') || categoryName.toLowerCase().includes('cable') ||
        categoryName.toLowerCase().includes('alternator') || categoryName.toLowerCase().includes('battery')) {
        imageCategory = 'electric';
    } else if (categoryName.toLowerCase().includes('welding') || categoryName.toLowerCase().includes('fabrication')) {
        imageCategory = 'welding';
    } else if (categoryName.toLowerCase().includes('pipe') || categoryName.toLowerCase().includes('fitting') ||
        categoryName.toLowerCase().includes('hose') || categoryName.toLowerCase().includes('seal')) {
        imageCategory = 'pipe';
    } else if (categoryName.toLowerCase().includes('bearing') || categoryName.toLowerCase().includes('belt') ||
        categoryName.toLowerCase().includes('starter') || categoryName.toLowerCase().includes('brake')) {
        imageCategory = 'bearing';
    } else if (categoryName.toLowerCase().includes('cable')) {
        imageCategory = 'cable';
    }

    // Determine if featured (first 8 categories)
    const featured = index < 8;

    // Generate product count
    const productCount = Math.floor(Math.random() * 200) + 50;

    // Determine tags based on category type
    let tags = ['industrial', 'professional'];
    if (categoryName.includes('NON VAT')) tags.push('tax-free');
    if (categoryName.toLowerCase().includes('electric')) tags.push('electrical');
    if (categoryName.toLowerCase().includes('safety') || categoryName.toLowerCase().includes('gloves')) tags.push('safety');
    if (featured) tags.push('featured');

    return {
        id: categoryId,
        name: categoryName,
        description: `Professional ${categoryName.toLowerCase()} products and industrial solutions`,
        image: CATEGORY_IMAGES[imageCategory] ? CATEGORY_IMAGES[imageCategory][index % 3] : CATEGORY_IMAGES.tools[0],
        images: CATEGORY_IMAGES[imageCategory] || CATEGORY_IMAGES.tools,
        subCategories: ['Standard Grade', 'Premium Quality', 'Industrial Grade', 'Heavy Duty'],
        productCount: productCount,
        tags: tags,
        featured: featured
    };
});

// Create additional category objects
ADDITIONAL_CATEGORIES.forEach((categoryName, index) => {
    const categoryId = categoryName.toLowerCase().replace(/\s+/g, '-');
    const imageCategory = ['automotive', 'tools', 'electric', 'fitting'][index % 4];

    window.CATEGORIES_DATA.push({
        id: categoryId,
        name: categoryName,
        description: `Professional ${categoryName.toLowerCase()} products and solutions`,
        image: CATEGORY_IMAGES[imageCategory][index % 3],
        images: CATEGORY_IMAGES[imageCategory],
        subCategories: ['Standard', 'Premium', 'Industrial Grade'],
        productCount: Math.floor(Math.random() * 100) + 20,
        tags: ['industrial', 'professional']
    });
});

// Brand information
window.BRANDS = {
    gulf_union: { name: 'Gulf Union Ozone', country: 'UAE' },
    caterpillar: { name: 'Caterpillar', country: 'USA' },
    bosch: { name: 'Bosch', country: 'Germany' },
    siemens: { name: 'Siemens', country: 'Germany' },
    schneider: { name: 'Schneider Electric', country: 'France' },
    abb: { name: 'ABB', country: 'Switzerland' },
    ge: { name: 'General Electric', country: 'USA' },
    honeywell: { name: 'Honeywell', country: 'USA' },
    eaton: { name: 'Eaton', country: 'USA' },
    parker: { name: 'Parker Hannifin', country: 'USA' }
};

// Application areas
window.APPLICATIONS = {
    automotive: { name: 'Automotive', description: 'Cars, trucks, and vehicles' },
    industrial: { name: 'Industrial', description: 'Manufacturing and heavy machinery' },
    marine: { name: 'Marine', description: 'Ships and offshore equipment' },
    construction: { name: 'Construction', description: 'Building and infrastructure' },
    oil_gas: { name: 'Oil & Gas', description: 'Petroleum and energy sector' },
    power: { name: 'Power Generation', description: 'Electrical power systems' },
    mining: { name: 'Mining', description: 'Extraction and processing' },
    aerospace: { name: 'Aerospace', description: 'Aviation and space industry' }
};

// Categories API
window.CategoriesAPI = {
    getAll: () => window.CATEGORIES_DATA,

    getById: (id) => window.CATEGORIES_DATA.find(category => category.id === id),

    getFeatured: () => window.CATEGORIES_DATA.filter(category => category.featured),

    getByTag: (tag) => window.CATEGORIES_DATA.filter(category =>
        category.tags && category.tags.includes(tag)
    ),

    search: (query) => {
        const searchTerm = query.toLowerCase();
        return window.CATEGORIES_DATA.filter(category =>
            category.name.toLowerCase().includes(searchTerm) ||
            category.description.toLowerCase().includes(searchTerm) ||
            (category.subCategories && category.subCategories.some(sub =>
                sub.toLowerCase().includes(searchTerm)
            ))
        );
    },

    filter: (filters) => {
        let results = [...window.CATEGORIES_DATA];

        if (filters.featured) {
            results = results.filter(category => category.featured);
        }

        if (filters.tag && filters.tag !== 'all') {
            results = results.filter(category =>
                category.tags && category.tags.includes(filters.tag)
            );
        }

        if (filters.search && filters.search.trim()) {
            const searchTerm = filters.search.toLowerCase();
            results = results.filter(category =>
                category.name.toLowerCase().includes(searchTerm) ||
                category.description.toLowerCase().includes(searchTerm)
            );
        }

        return results;
    }
};