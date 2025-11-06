// Filter Nest - Products Data
// Comprehensive product database with realistic filter data

// Product images from Unsplash - High quality automotive filter images
const FILTER_IMAGES = {
    oil: [
        'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1558488089-e635dd91ac1e?w=400&h=400&fit=crop&crop=center'
    ],
    air: [
        'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1563396983906-b3795482a59a?w=400&h=400&fit=crop&crop=center'
    ],
    fuel: [
        'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1558488089-e635dd91ac1e?w=400&h=400&fit=crop&crop=center'
    ],
    hydraulic: [
        'https://images.unsplash.com/photo-1581092795442-48eb5b69bdc3?w=400&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1558488089-e635dd91ac1e?w=400&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400&h=400&fit=crop&crop=center'
    ],
    cabin: [
        'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1563396983906-b3795482a59a?w=400&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=400&fit=crop&crop=center'
    ],
    transmission: [
        'https://images.unsplash.com/photo-1581092795442-48eb5b69bdc3?w=400&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=400&fit=crop&crop=center'
    ]
};

window.PRODUCTS_DATA = [
    // Oil Filters
    {
        id: 'oil-001',
        name: 'MANN-FILTER W 712/95 Oil Filter',
        partNumber: 'W712/95',
        category: 'oil',
        brand: 'mann',
        application: 'passenger',
        origin: 'germany',
        image: FILTER_IMAGES.oil[0],
        images: FILTER_IMAGES.oil,
        description: 'High-performance oil filter for BMW and Mercedes-Benz vehicles. Superior filtration efficiency.',
        specifications: {
            'Thread Size': 'M20 x 1.5',
            'Height': '100mm',
            'Outer Diameter': '108mm',
            'Filter Media': 'Synthetic',
            'Bypass Valve': 'Yes',
            'Anti-Drain Valve': 'Yes'
        },
        compatibility: ['BMW 3 Series (E90)', 'BMW 5 Series (E60)', 'Mercedes C-Class (W204)', 'Mercedes E-Class (W211)'],
        tags: ['bestseller', 'premium'],
        dateAdded: '2024-11-01'
    },
    {
        id: 'oil-002',
        name: 'Bosch F 026 407 124 Oil Filter',
        partNumber: 'F026407124',
        category: 'oil',
        brand: 'bosch',
        application: 'passenger',
        origin: 'germany',
        image: FILTER_IMAGES.oil[1],
        images: FILTER_IMAGES.oil,
        description: 'Premium oil filter for Volkswagen and Audi vehicles with TSI engines.',
        specifications: {
            'Thread Size': 'M22 x 1.5',
            'Height': '86mm',
            'Outer Diameter': '93mm',
            'Filter Media': 'Paper',
            'Bypass Valve': 'Yes',
            'Anti-Drain Valve': 'Yes'
        },
        compatibility: ['VW Golf GTI', 'Audi A3 TSI', 'VW Passat TSI', 'Audi A4 TSI'],
        tags: ['bestseller'],
        dateAdded: '2024-10-15'
    },
    {
        id: 'oil-003',
        name: 'Mahle OX 188D Oil Filter',
        partNumber: 'OX188D',
        category: 'oil',
        brand: 'mahle',
        application: 'passenger',
        origin: 'germany',
        image: FILTER_IMAGES.oil[2],
        images: FILTER_IMAGES.oil,
        description: 'OEM quality oil filter for Japanese vehicles. Excellent build quality and reliability.',
        specifications: {
            'Thread Size': '3/4-16 UNF',
            'Height': '65mm',
            'Outer Diameter': '76mm',
            'Filter Media': 'Synthetic',
            'Bypass Valve': 'Yes',
            'Anti-Drain Valve': 'Yes'
        },
        compatibility: ['Toyota Camry', 'Honda Accord', 'Nissan Altima', 'Mazda CX-5'],
        tags: ['new'],
        dateAdded: '2024-11-05'
    },

    // Air Filters
    {
        id: 'air-001',
        name: 'K&N 33-2304 High-Flow Air Filter',
        partNumber: '33-2304',
        category: 'air',
        brand: 'wix',
        application: 'passenger',
        origin: 'usa',
        image: FILTER_IMAGES.air[0],
        images: FILTER_IMAGES.air,
        description: 'Washable, reusable cotton air filter providing exceptional airflow and filtration.',
        specifications: {
            'Length': '358mm',
            'Width': '223mm',
            'Height': '25mm',
            'Filter Media': 'Cotton Gauze',
            'Filtration Efficiency': '99%',
            'Airflow': 'High Performance'
        },
        compatibility: ['Honda Civic Type R', 'Honda Accord Sport', 'Acura TLX', 'Honda Pilot'],
        tags: ['premium', 'bestseller'],
        dateAdded: '2024-10-25'
    },
    {
        id: 'air-002',
        name: 'MANN-FILTER C 27 192/1 Air Filter',
        partNumber: 'C27192/1',
        category: 'air',
        brand: 'mann',
        application: 'passenger',
        origin: 'germany',
        image: FILTER_IMAGES.air[1],
        images: FILTER_IMAGES.air,
        description: 'Premium air filter with multi-layer filtration for European vehicles.',
        specifications: {
            'Length': '280mm',
            'Width': '210mm',
            'Height': '58mm',
            'Filter Media': 'Non-woven',
            'Filtration Efficiency': '99.5%',
            'Dust Capacity': 'High'
        },
        compatibility: ['BMW X3', 'BMW X5', 'Mercedes ML-Class', 'Audi Q5'],
        tags: ['premium'],
        dateAdded: '2024-11-02'
    },

    // Fuel Filters
    {
        id: 'fuel-001',
        name: 'Bosch F 026 402 047 Fuel Filter',
        partNumber: 'F026402047',
        category: 'fuel',
        brand: 'bosch',
        application: 'passenger',
        origin: 'germany',
        image: FILTER_IMAGES.fuel[0],
        images: FILTER_IMAGES.fuel,
        description: 'High-efficiency fuel filter for diesel engines with water separation.',
        specifications: {
            'Length': '180mm',
            'Diameter': '86mm',
            'Filter Media': 'Paper',
            'Water Separation': 'Yes',
            'Micron Rating': '5 microns'
        },
        compatibility: ['Mercedes Sprinter', 'VW Crafter', 'Audi A6 TDI', 'BMW 320d'],
        tags: ['diesel', 'premium'],
        dateAdded: '2024-10-30'
    },

    // Hydraulic Filters
    {
        id: 'hydraulic-001',
        name: 'Parker 926169 Hydraulic Filter',
        partNumber: '926169',
        category: 'hydraulic',
        brand: 'parker',
        application: 'industrial',
        origin: 'usa',
        image: FILTER_IMAGES.hydraulic[0],
        images: FILTER_IMAGES.hydraulic,
        description: 'Premium hydraulic filter element for high-pressure hydraulic systems.',
        specifications: {
            'Length': '250mm',
            'Outer Diameter': '60mm',
            'Inner Diameter': '28mm',
            'Filter Media': 'Glass Fiber',
            'Micron Rating': '10 microns',
            'Collapse Pressure': '21 bar'
        },
        compatibility: ['Caterpillar 320D', 'Komatsu PC200', 'Hitachi ZX200', 'Volvo EC210'],
        tags: ['industrial', 'premium'],
        dateAdded: '2024-10-28'
    },

    // Cabin Filters
    {
        id: 'cabin-001',
        name: 'MANN-FILTER CU 2143 Cabin Filter',
        partNumber: 'CU2143',
        category: 'cabin',
        brand: 'mann',
        application: 'passenger',
        origin: 'germany',
        image: FILTER_IMAGES.cabin[0],
        images: FILTER_IMAGES.cabin,
        description: 'Activated carbon cabin filter for superior air quality and odor control.',
        specifications: {
            'Length': '254mm',
            'Width': '224mm',
            'Height': '30mm',
            'Filter Media': 'Activated Carbon',
            'Filtration Efficiency': '99%',
            'Odor Control': 'Yes'
        },
        compatibility: ['BMW 3 Series', 'BMW 5 Series', 'BMW X3', 'BMW X5'],
        tags: ['premium', 'health'],
        dateAdded: '2024-11-01'
    },

    // Transmission Filters
    {
        id: 'transmission-001',
        name: 'WIX 58940 Transmission Filter',
        partNumber: '58940',
        category: 'transmission',
        brand: 'wix',
        application: 'passenger',
        origin: 'usa',
        image: FILTER_IMAGES.transmission[0],
        images: FILTER_IMAGES.transmission,
        description: 'High-quality automatic transmission filter for smooth shifting.',
        specifications: {
            'Length': '185mm',
            'Width': '125mm',
            'Height': '65mm',
            'Filter Media': 'Cellulose',
            'Filtration Efficiency': '98%',
            'Flow Rate': 'High'
        },
        compatibility: ['Ford F-150', 'Chevrolet Silverado', 'GMC Sierra', 'Ram 1500'],
        tags: ['automatic', 'oem'],
        dateAdded: '2024-10-22'
    }
];

// Categories configuration
window.CATEGORIES = {
    oil: { name: 'Oil Filters', description: 'Engine oil filtration systems' },
    air: { name: 'Air Filters', description: 'Engine air intake filters' },
    fuel: { name: 'Fuel Filters', description: 'Fuel system filtration' },
    hydraulic: { name: 'Hydraulic Filters', description: 'Hydraulic system filters' },
    cabin: { name: 'Cabin Filters', description: 'Interior air quality filters' },
    transmission: { name: 'Transmission Filters', description: 'Automatic transmission filters' }
};

// Brands configuration
window.BRANDS = {
    mann: { name: 'MANN-FILTER', country: 'Germany' },
    bosch: { name: 'Bosch', country: 'Germany' },
    mahle: { name: 'Mahle', country: 'Germany' },
    fram: { name: 'Fram', country: 'USA' },
    wix: { name: 'WIX', country: 'USA' },
    donaldson: { name: 'Donaldson', country: 'USA' },
    parker: { name: 'Parker', country: 'USA' },
    hydac: { name: 'Hydac', country: 'Germany' },
    pall: { name: 'Pall', country: 'USA' },
    ufi: { name: 'UFI', country: 'Italy' }
};

// Applications configuration
window.APPLICATIONS = {
    passenger: { name: 'Passenger Cars', description: 'Cars and light vehicles' },
    commercial: { name: 'Commercial Vehicles', description: 'Trucks and buses' },
    industrial: { name: 'Industrial Equipment', description: 'Heavy machinery' },
    marine: { name: 'Marine Equipment', description: 'Boats and ships' },
    agricultural: { name: 'Agricultural Equipment', description: 'Tractors and farm equipment' }
};

// Products API
window.ProductsAPI = {
    getAll: () => window.PRODUCTS_DATA,
    
    getById: (id) => window.PRODUCTS_DATA.find(product => product.id === id),
    
    getByCategory: (category) => window.PRODUCTS_DATA.filter(product => product.category === category),
    
    getByBrand: (brand) => window.PRODUCTS_DATA.filter(product => product.brand === brand),
    
    getByApplication: (application) => window.PRODUCTS_DATA.filter(product => product.application === application),
    
    search: (query) => {
        const searchTerm = query.toLowerCase();
        return window.PRODUCTS_DATA.filter(product =>
            product.name.toLowerCase().includes(searchTerm) ||
            product.partNumber.toLowerCase().includes(searchTerm) ||
            product.brand.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            (product.compatibility && product.compatibility.some(comp => 
                comp.toLowerCase().includes(searchTerm)
            ))
        );
    },
    
    filter: (filters) => {
        let results = [...window.PRODUCTS_DATA];
        
        if (filters.category && filters.category !== 'all') {
            results = results.filter(product => product.category === filters.category);
        }
        
        if (filters.brand && filters.brand !== 'all') {
            results = results.filter(product => product.brand === filters.brand);
        }
        
        if (filters.application && filters.application !== 'all') {
            results = results.filter(product => product.application === filters.application);
        }
        
        if (filters.search && filters.search.trim()) {
            const searchTerm = filters.search.toLowerCase();
            results = results.filter(product =>
                product.name.toLowerCase().includes(searchTerm) ||
                product.partNumber.toLowerCase().includes(searchTerm) ||
                product.description.toLowerCase().includes(searchTerm)
            );
        }
        
        return results;
    }
};
