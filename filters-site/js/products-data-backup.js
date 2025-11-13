// Gulf Union Ozone Trading Co. - Industrial Supplies Categories
// Comprehensive product categories with professional imagery

// Product category images from Unsplash - High quality industrial supply images
const CATEGORY_IMAGES = {
    welding: [
        'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1609205936106-cbb63581df17?w=400&h=300&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop&crop=center'
    ],
    alternator: [
        'https://images.unsplash.com/photo-1558486012-817176f84c6d?w=400&h=300&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400&h=300&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&h=300&fit=crop&center'
    ],
    cable: [
        'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=300&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop&crop=center'
    ],
    pipe: [
        'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1581092795442-48eb5b69bdc3?w=400&h=300&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400&h=300&fit=crop&crop=center'
    ],
    bearing: [
        'https://images.unsplash.com/photo-1558486012-817176f84c6d?w=400&h=300&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&h=300&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop&crop=center'
    ],
    battery: [
        'https://images.unsplash.com/photo-1558486012-817176f84c6d?w=400&h=300&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400&h=300&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop&crop=center'
    ],
    tools: [
        'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1609205936106-cbb63581df17?w=400&h=300&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop&crop=center'
    ],
    electric: [
        'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=300&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop&crop=center'
    ],
    fitting: [
        'https://images.unsplash.com/photo-1581092795442-48eb5b69bdc3?w=400&h=300&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400&h=300&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&h=300&fit=crop&crop=center'
    ],
    automotive: [
        'https://images.unsplash.com/photo-1558486012-817176f84c6d?w=400&h=300&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400&h=300&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop&crop=center'
    ]
};

window.CATEGORIES_DATA = [
    // Welding Category
    {
        id: 'welding',
        name: 'Welding',
        description: 'Professional welding equipment and accessories',
        image: CATEGORY_IMAGES.welding[0],
        images: CATEGORY_IMAGES.welding,
        subCategories: ['Arc Welding', 'MIG Welding', 'TIG Welding', 'Welding Electrodes', 'Welding Accessories'],
        productCount: 150,
        tags: ['professional', 'industrial'],
        featured: true
    },

    // Non VAT Products
    {
        id: 'non-vat',
        name: 'NON VAT PRODUCT',
        description: 'Tax-exempt industrial supplies and components',
        image: CATEGORY_IMAGES.tools[0],
        images: CATEGORY_IMAGES.tools,
        subCategories: ['Basic Tools', 'Raw Materials', 'Standard Components'],
        productCount: 85,
        tags: ['tax-free', 'standard']
    },

    // Alternator
    {
        id: 'alternator',
        name: 'ALTERNATOR',
        description: 'Automotive and industrial alternators',
        image: CATEGORY_IMAGES.alternator[0],
        images: CATEGORY_IMAGES.alternator,
        subCategories: ['Car Alternators', 'Truck Alternators', 'Industrial Alternators', 'Marine Alternators'],
        productCount: 45,
        tags: ['automotive', 'electrical'],
        featured: true
    },

    // Thread Rod
    {
        id: 'thread-rod',
        name: 'THREAD ROD',
        description: 'Threaded rods and fastening solutions',
        image: CATEGORY_IMAGES.tools[1],
        images: CATEGORY_IMAGES.tools,
        subCategories: ['Metric Thread', 'Imperial Thread', 'Stainless Steel', 'Galvanized'],
        productCount: 200,
        tags: ['fasteners', 'construction']
    },

    // Cable
    {
        id: 'cable',
        name: 'CABLE',
        description: 'Electrical and data cables for all applications',
        image: CATEGORY_IMAGES.cable[0],
        images: CATEGORY_IMAGES.cable,
        subCategories: ['Power Cables', 'Control Cables', 'Data Cables', 'Coaxial Cables'],
        productCount: 180,
        tags: ['electrical', 'communication'],
        featured: true
    },

    // Tester
    {
        id: 'tester',
        name: 'TESTER',
        description: 'Electronic testing and measurement equipment',
        image: CATEGORY_IMAGES.electric[0],
        images: CATEGORY_IMAGES.electric,
        subCategories: ['Multimeters', 'Oscilloscopes', 'Function Generators', 'Power Meters'],
        productCount: 65,
        tags: ['measurement', 'electronic']
    },

    // Pipe
    {
        id: 'pipe',
        name: 'PIPE',
        description: 'Industrial pipes and plumbing solutions',
        image: CATEGORY_IMAGES.pipe[0],
        images: CATEGORY_IMAGES.pipe,
        subCategories: ['Steel Pipes', 'PVC Pipes', 'Copper Pipes', 'Flexible Hoses'],
        productCount: 320,
        tags: ['plumbing', 'industrial'],
        featured: true
    },

    // Cable Assembly
    {
        id: 'cable-assy',
        name: 'CABLE ASSY',
        description: 'Pre-assembled cable solutions',
        image: CATEGORY_IMAGES.cable[1],
        images: CATEGORY_IMAGES.cable,
        subCategories: ['Custom Assemblies', 'Standard Harnesses', 'Connectorized Cables'],
        productCount: 95,
        tags: ['custom', 'assembly']
    },

    // Fitting
    {
        id: 'fitting',
        name: 'FITTING',
        description: 'Pipe fittings and connection solutions',
        image: CATEGORY_IMAGES.fitting[0],
        images: CATEGORY_IMAGES.fitting,
        subCategories: ['Elbow Fittings', 'Tee Fittings', 'Reducer Fittings', 'Union Fittings'],
        productCount: 250,
        tags: ['plumbing', 'connection']
    },

    // Bearing
    {
        id: 'bearing',
        name: 'BEARING',
        description: 'Industrial bearings and rotational components',
        image: CATEGORY_IMAGES.bearing[0],
        images: CATEGORY_IMAGES.bearing,
        subCategories: ['Ball Bearings', 'Roller Bearings', 'Thrust Bearings', 'Linear Bearings'],
        productCount: 180,
        tags: ['mechanical', 'precision'],
        featured: true
    },

    // Battery
    {
        id: 'battery',
        name: 'BATTERY',
        description: 'Automotive and industrial batteries',
        image: CATEGORY_IMAGES.battery[0],
        images: CATEGORY_IMAGES.battery,
        subCategories: ['Car Batteries', 'Truck Batteries', 'Marine Batteries', 'Industrial Batteries'],
        productCount: 75,
        tags: ['automotive', 'power']
    },

    // Fabrication
    {
        id: 'fabrication',
        name: 'FABRICATION',
        description: 'Metal fabrication tools and equipment',
        image: CATEGORY_IMAGES.welding[1],
        images: CATEGORY_IMAGES.welding,
        subCategories: ['Cutting Tools', 'Forming Tools', 'Joining Equipment', 'Finishing Tools'],
        productCount: 140,
        tags: ['metalwork', 'manufacturing']
    },

    // Gloves
    {
        id: 'gloves',
        name: 'GLOVES',
        description: 'Industrial safety and work gloves',
        image: CATEGORY_IMAGES.tools[2],
        images: CATEGORY_IMAGES.tools,
        subCategories: ['Safety Gloves', 'Chemical Resistant', 'Cut Resistant', 'Heat Resistant'],
        productCount: 85,
        tags: ['safety', 'ppe']
    },

    // O-Ring
    {
        id: 'oring',
        name: 'ORING',
        description: 'Sealing rings and gaskets',
        image: CATEGORY_IMAGES.fitting[1],
        images: CATEGORY_IMAGES.fitting,
        subCategories: ['NBR O-Rings', 'Viton O-Rings', 'EPDM O-Rings', 'Custom Seals'],
        productCount: 300,
        tags: ['sealing', 'hydraulic']
    },

    // Electric
    {
        id: 'electric',
        name: 'ELECTRIC',
        description: 'Electrical components and systems',
        image: CATEGORY_IMAGES.electric[1],
        images: CATEGORY_IMAGES.electric,
        subCategories: ['Switches', 'Relays', 'Contactors', 'Circuit Breakers'],
        productCount: 220,
        tags: ['electrical', 'automation'],
        featured: true
    }
];

// Additional categories (continuation from user's list)
const ADDITIONAL_CATEGORIES = [
    'GASKET', 'carbon brush', 'BELT', 'OIL SEAL', 'starter', 'WATER PUMP ELECTRIC',
    'GROOVED FITTING', 'butt welding', 'BURNER', 'SUPPORT', 'LIGHT', 'NEWMATIC',
    'STARING COVER', 'SOLAR LIGHT', 'BRAKE PADS', 'INDICATOR LIGHT', 'CLUTCH BOOSTER',
    'COOLER', 'JIG SAW', 'SAW MACHINE', 'PIPE WRENCH', 'STRIP', 'LIVER', 'VACUUM',
    'SHIRT', 'REDUCER', 'COUPLER', 'PAPER', 'RADIATOR FAN', 'PRESSURE SWITCH',
    'CHARGING HOSE', 'TEE', 'TAPE', 'CRIMP', 'BOOT', 'STAR BIT', 'STEERING OIL',
    'TARPAULIN', 'WATER GUN', 'VIBRATOR', 'LAMP', 'FILTER WRENCH', 'FILTER WRENCH 95-85',
    'WIPER', 'SIDE LIGHT', 'BREAK LIGHT', 'SIKA', 'HEX NUT', 'HEX BOLT', 'FLAT WASHER',
    'ROPE CLIP', 'STEEL FUNNEL', 'BREAKPADS', 'TANK', 'PARKING BREAK', 'SHIFT CLUTCH',
    'PRESSURE PLATE', 'HYDRO', 'COMRESION', 'COMORESION', 'FLAT HOSE', 'GREEN HOSE',
    'CRISTAL HOSE', 'LEEFSET', 'WIPER SEAL', 'AC CONTR', 'WH-500', 'INNER ROPE',
    'FOOT VALVE', 'CRANK', 'ADAPTER', 'ORBITAL', 'ALOX', 'FREON', 'SEAL STRING',
    'SCREWDRIVER', 'CALIBER', 'TOP LIGHT', 'ALLOY WHEEL CUP', 'BREAKER', 'STIKO', 'STEEL WIRE'
];

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
// Oil Filters
{
    id: 'oil-001',
        name: 'MANN W 712/95 Heavy Duty Oil Filter',
            partNumber: 'W712/95',
                category: 'oil',
                    brand: 'mann',
                        application: 'industrial',
                            origin: 'germany',
                                image: FILTER_IMAGES.oil[0],
                                    images: FILTER_IMAGES.oil,
                                        description: 'Heavy-duty oil filter for industrial equipment and construction machinery. Superior filtration for demanding environments.',
                                            specifications: {
        'Thread Size': 'M20 x 1.5',
            'Height': '100mm',
                'Outer Diameter': '108mm',
                    'Filter Media': 'Synthetic',
                        'Bypass Valve': 'Yes',
                            'Anti-Drain Valve': 'Yes',
                                'Temperature Range': '-40°C to +150°C'
    },
    compatibility: ['Caterpillar 320D', 'Komatsu PC200', 'Volvo EC210', 'Hitachi ZX200'],
        tags: ['bestseller', 'premium', 'industrial'],
            dateAdded: '2024-11-01'
},
{
    id: 'oil-002',
        name: 'Bosch F 026 407 124 Industrial Oil Filter',
            partNumber: 'F026407124',
                category: 'oil',
                    brand: 'bosch',
                        application: 'industrial',
                            origin: 'germany',
                                image: FILTER_IMAGES.oil[1],
                                    images: FILTER_IMAGES.oil,
                                        description: 'Premium oil filter for industrial machinery and heavy equipment. Extended service life.',
                                            specifications: {
        'Thread Size': 'M22 x 1.5',
            'Height': '86mm',
                'Outer Diameter': '93mm',
                    'Filter Media': 'Cellulose',
                        'Bypass Valve': 'Yes',
                            'Anti-Drain Valve': 'Yes',
                                'Filtration Efficiency': '99.5%'
    },
    compatibility: ['Liebherr R 924', 'Case CX210', 'New Holland E215', 'JCB JS220'],
        tags: ['bestseller', 'oem'],
            dateAdded: '2024-10-15'
},
{
    id: 'oil-003',
        name: 'Mahle OX 188D Industrial Oil Filter',
            partNumber: 'OX188D',
                category: 'oil',
                    brand: 'mahle',
                        application: 'industrial',
                            origin: 'germany',
                                image: FILTER_IMAGES.oil[2],
                                    images: FILTER_IMAGES.oil,
                                        description: 'OEM quality oil filter for industrial applications. Excellent build quality and reliability.',
                                            specifications: {
        'Thread Size': '3/4-16 UNF',
            'Height': '65mm',
                'Outer Diameter': '76mm',
                    'Filter Media': 'Synthetic',
                        'Bypass Valve': 'Yes',
                            'Anti-Drain Valve': 'Yes',
                                'Working Pressure': '10 bar'
    },
    compatibility: ['Doosan DX225LC', 'Hyundai R220LC', 'Kobelco SK210', 'Sumitomo SH210'],
        tags: ['new', 'premium'],
            dateAdded: '2024-11-05'
},

// Air Filters
{
    id: 'air-001',
        name: 'Donaldson P829333 Heavy Duty Air Filter',
            partNumber: 'P829333',
                category: 'air',
                    brand: 'donaldson',
                        application: 'industrial',
                            origin: 'usa',
                                image: FILTER_IMAGES.air[0],
                                    images: FILTER_IMAGES.air,
                                        description: 'High-efficiency air filter for construction and mining equipment. Exceptional dust holding capacity.',
                                            specifications: {
        'Length': '358mm',
            'Width': '223mm',
                'Height': '25mm',
                    'Filter Media': 'Synthetic Pleated',
                        'Filtration Efficiency': '99.9%',
                            'Dust Capacity': '680g'
    },
    compatibility: ['Caterpillar 345D', 'Komatsu PC400', 'Volvo EC380', 'Case CX470'],
        tags: ['premium', 'bestseller', 'industrial'],
            dateAdded: '2024-10-25'
},
{
    id: 'air-002',
        name: 'MANN C 27 192/1 Industrial Air Filter',
            partNumber: 'C27192/1',
                category: 'air',
                    brand: 'mann',
                        application: 'industrial',
                            origin: 'germany',
                                image: FILTER_IMAGES.air[1],
                                    images: FILTER_IMAGES.air,
                                        description: 'Premium air filter with multi-layer filtration for industrial equipment in dusty environments.',
                                            specifications: {
        'Length': '280mm',
            'Width': '210mm',
                'Height': '58mm',
                    'Filter Media': 'Non-woven',
                        'Filtration Efficiency': '99.5%',
                            'Dust Capacity': 'High'
    },
    compatibility: ['Liebherr R 946', 'Atlas Copco 1404', 'Sandvik DX800', 'Wirtgen W2100'],
        tags: ['premium', 'dustproof'],
            dateAdded: '2024-11-02'
},

// Fuel Filters
{
    id: 'fuel-001',
        name: 'Bosch F 026 402 047 Diesel Fuel Filter',
            partNumber: 'F026402047',
                category: 'fuel',
                    brand: 'bosch',
                        application: 'industrial',
                            origin: 'germany',
                                image: FILTER_IMAGES.fuel[0],
                                    images: FILTER_IMAGES.fuel,
                                        description: 'High-efficiency fuel filter for diesel engines with water separation. Critical for fuel system protection.',
                                            specifications: {
        'Length': '180mm',
            'Diameter': '86mm',
                'Filter Media': 'Paper',
                    'Water Separation': 'Yes',
                        'Micron Rating': '5 microns',
                            'Flow Rate': '100 L/h'
    },
    compatibility: ['Caterpillar C7.1', 'Perkins 1106D', 'Cummins QSB6.7', 'Deutz TCD2015'],
        tags: ['diesel', 'premium', 'water-separator'],
            dateAdded: '2024-10-30'
},
{
    id: 'fuel-002',
        name: 'Parker Racor R90T Fuel Water Separator',
            partNumber: 'R90T',
                category: 'fuel',
                    brand: 'parker',
                        application: 'marine',
                            origin: 'usa',
                                image: FILTER_IMAGES.fuel[1],
                                    images: FILTER_IMAGES.fuel,
                                        description: 'Marine grade fuel water separator with clear bowl for visual inspection. Essential for marine engines.',
                                            specifications: {
        'Flow Rate': '340 L/h',
            'Micron Rating': '2 microns',
                'Water Separation': '99.9%',
                    'Bowl Material': 'Clear Polycarbonate',
                        'Mounting': 'Spin-on',
                            'Temperature Range': '-29°C to +66°C'
    },
    compatibility: ['Caterpillar C18 Marine', 'Cummins QSM11', 'Volvo Penta D13', 'MAN D2866'],
        tags: ['marine', 'water-separator', 'premium'],
            dateAdded: '2024-10-28'
},

// Hydraulic Filters
{
    id: 'hydraulic-001',
        name: 'Parker 926169 Hydraulic Filter Element',
            partNumber: '926169',
                category: 'hydraulic',
                    brand: 'parker',
                        application: 'industrial',
                            origin: 'usa',
                                image: FILTER_IMAGES.hydraulic[0],
                                    images: FILTER_IMAGES.hydraulic,
                                        description: 'Premium hydraulic filter element for high-pressure hydraulic systems. Critical for system protection.',
                                            specifications: {
        'Length': '250mm',
            'Outer Diameter': '60mm',
                'Inner Diameter': '28mm',
                    'Filter Media': 'Glass Fiber',
                        'Micron Rating': '10 microns',
                            'Collapse Pressure': '21 bar',
                                'Working Pressure': '210 bar'
    },
    compatibility: ['Caterpillar 330D', 'Komatsu PC300', 'Hitachi ZX350', 'Volvo EC350'],
        tags: ['industrial', 'premium', 'high-pressure'],
            dateAdded: '2024-10-28'
},
{
    id: 'hydraulic-002',
        name: 'Hydac 0240 D 010 BN4HC Hydraulic Filter',
            partNumber: '0240D010BN4HC',
                category: 'hydraulic',
                    brand: 'hydac',
                        application: 'industrial',
                            origin: 'germany',
                                image: FILTER_IMAGES.hydraulic[1],
                                    images: FILTER_IMAGES.hydraulic,
                                        description: 'High-pressure hydraulic filter for mobile hydraulics. Excellent dirt holding capacity.',
                                            specifications: {
        'Length': '127mm',
            'Outer Diameter': '54mm',
                'Inner Diameter': '22mm',
                    'Filter Media': 'Micro Glass',
                        'Micron Rating': '10 microns',
                            'Collapse Pressure': '75 bar',
                                'Max Flow': '60 L/min'
    },
    compatibility: ['Liebherr R 936', 'Case CX290', 'New Holland E245', 'JCB JS290'],
        tags: ['industrial', 'mobile-hydraulics'],
            dateAdded: '2024-10-20'
},

// Cabin Filters
{
    id: 'cabin-001',
        name: 'MANN CU 2143 Activated Carbon Cabin Filter',
            partNumber: 'CU2143',
                category: 'cabin',
                    brand: 'mann',
                        application: 'industrial',
                            origin: 'germany',
                                image: FILTER_IMAGES.cabin[0],
                                    images: FILTER_IMAGES.cabin,
                                        description: 'Activated carbon cabin filter for superior air quality in heavy equipment cabs. Odor and gas filtration.',
                                            specifications: {
        'Length': '254mm',
            'Width': '224mm',
                'Height': '30mm',
                    'Filter Media': 'Activated Carbon',
                        'Filtration Efficiency': '99%',
                            'Odor Control': 'Yes',
                                'Gas Filtration': 'Yes'
    },
    compatibility: ['Caterpillar 336E', 'Komatsu PC350', 'Volvo EC380', 'Case CX350'],
        tags: ['premium', 'health', 'activated-carbon'],
            dateAdded: '2024-11-01'
},

// Transmission Filters
{
    id: 'transmission-001',
        name: 'WIX 58940 Transmission Filter Kit',
            partNumber: '58940',
                category: 'transmission',
                    brand: 'wix',
                        application: 'industrial',
                            origin: 'usa',
                                image: FILTER_IMAGES.transmission[0],
                                    images: FILTER_IMAGES.transmission,
                                        description: 'Complete transmission filter kit for heavy equipment. Ensures smooth power transmission.',
                                            specifications: {
        'Length': '185mm',
            'Width': '125mm',
                'Height': '65mm',
                    'Filter Media': 'Cellulose',
                        'Filtration Efficiency': '98%',
                            'Flow Rate': 'High',
                                'Kit Includes': 'Filter + Gasket'
    },
    compatibility: ['Caterpillar 988H', 'Komatsu WA470', 'Volvo L120F', 'Case 921F'],
        tags: ['kit', 'automatic', 'oem'],
            dateAdded: '2024-10-22'
},

// Additional Industrial Products
{
    id: 'hydraulic-003',
        name: 'Pall HC9600FDS13H Hydraulic Filter',
            partNumber: 'HC9600FDS13H',
                category: 'hydraulic',
                    brand: 'pall',
                        application: 'industrial',
                            origin: 'usa',
                                image: FILTER_IMAGES.hydraulic[2],
                                    images: FILTER_IMAGES.hydraulic,
                                        description: 'Ultra-high efficiency hydraulic filter for critical applications. Extended equipment life.',
                                            specifications: {
        'Length': '250mm',
            'Outer Diameter': '60mm',
                'Inner Diameter': '28mm',
                    'Filter Media': 'Synthetic',
                        'Micron Rating': '3 microns',
                            'Beta Rating': '1000',
                                'Collapse Pressure': '345 bar'
    },
    compatibility: ['Mining Equipment', 'Steel Mill Machinery', 'Power Plant Equipment', 'Injection Molding Machines'],
        tags: ['ultra-precision', 'critical-application', 'premium'],
            dateAdded: '2024-11-03'
},
{
    id: 'air-003',
        name: 'Fram CA10172 Heavy Duty Air Filter',
            partNumber: 'CA10172',
                category: 'air',
                    brand: 'fram',
                        application: 'commercial',
                            origin: 'usa',
                                image: FILTER_IMAGES.air[2],
                                    images: FILTER_IMAGES.air,
                                        description: 'Heavy duty air filter for commercial vehicles and light industrial equipment.',
                                            specifications: {
        'Length': '290mm',
            'Width': '230mm',
                'Height': '40mm',
                    'Filter Media': 'Pleated Paper',
                        'Filtration Efficiency': '99.1%',
                            'Dust Capacity': '450g'
    },
    compatibility: ['Freightliner Cascadia', 'Peterbilt 579', 'Kenworth T680', 'Volvo VNL'],
        tags: ['commercial', 'heavy-duty', 'trucking'],
            dateAdded: '2024-10-18'
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
    mann: { name: 'MANN-FILTER', country: 'Germany', logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCA0MCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjIwIiByeD0iNCIgZmlsbD0iIzIwNTNFQiIvPgo8dGV4dCB4PSIyMCIgeT0iMTQiIGZvbnQtZmFtaWx5PSJJbnRlciIgZm9udC1zaXplPSIxMCIgZm9udC13ZWlnaHQ9IjcwMCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk1BTk48L3RleHQ+Cjwvc3ZnPgo=' },
    bosch: { name: 'Bosch', country: 'Germany', logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCA0MCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjIwIiByeD0iNCIgZmlsbD0iI0U1MzAzNSIvPgo8dGV4dCB4PSIyMCIgeT0iMTQiIGZvbnQtZmFtaWx5PSJJbnRlciIgZm9udC1zaXplPSI5IiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Qk9TQ0g8L3RleHQ+Cjwvc3ZnPgo=' },
    mahle: { name: 'Mahle', country: 'Germany', logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCA0MCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjIwIiByeD0iNCIgZmlsbD0iIzIyN0NFOCIvPgo8dGV4dCB4PSIyMCIgeT0iMTQiIGZvbnQtZmFtaWx5PSJJbnRlciIgZm9udC1zaXplPSI5IiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TUFITEU8L3RleHQ+Cjwvc3ZnPgo=' },
    fram: { name: 'Fram', country: 'USA', logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCA0MCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjIwIiByeD0iNCIgZmlsbD0iI0Y5NzMxNiIvPgo8dGV4dCB4PSIyMCIgeT0iMTQiIGZvbnQtZmFtaWx5PSJJbnRlciIgZm9udC1zaXplPSIxMCIgZm9udC13ZWlnaHQ9IjcwMCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkZSQU08L3RleHQ+Cjwvc3ZnPgo=' },
    wix: { name: 'WIX', country: 'USA', logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCA0MCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjIwIiByeD0iNCIgZmlsbD0iIzFEOTI5MCIvPgo8dGV4dCB4PSIyMCIgeT0iMTQiIGZvbnQtZmFtaWx5PSJJbnRlciIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9IjcwMCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPldJWDwvdGV4dD4KPC9zdmc+Cg==' },
    donaldson: { name: 'Donaldson', country: 'USA', logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCA0MCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjIwIiByeD0iNCIgZmlsbD0iIzEyN0Y3MyIvPgo8dGV4dCB4PSIyMCIgeT0iMTQiIGZvbnQtZmFtaWx5PSJJbnRlciIgZm9udC1zaXplPSI3IiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+RE9OQUxEU09OPC90ZXh0Pgo8L3N2Zz4K' },
    parker: { name: 'Parker', country: 'USA', logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCA0MCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjIwIiByeD0iNCIgZmlsbD0iIzFENEVEOCIvPgo8dGV4dCB4PSIyMCIgeT0iMTQiIGZvbnQtZmFtaWx5PSJJbnRlciIgZm9udC1zaXplPSI5IiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+UEFSSEVSPC90ZXh0Pgo8L3N2Zz4K' },
    hydac: { name: 'Hydac', country: 'Germany', logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCA0MCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjIwIiByeD0iNCIgZmlsbD0iI0Y1OTcxNiIvPgo8dGV4dCB4PSIyMCIgeT0iMTQiIGZvbnQtZmFtaWx5PSJJbnRlciIgZm9udC1zaXplPSI5IiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SFlEQUM8L3RleHQ+Cjwvc3ZnPgo=' },
    pall: { name: 'Pall', country: 'USA', logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCA0MCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjIwIiByeD0iNCIgZmlsbD0iIzhCNUNGNiIvPgo8dGV4dCB4PSIyMCIgeT0iMTQiIGZvbnQtZmFtaWx5PSJJbnRlciIgZm9udC1zaXplPSIxMSIgZm9udC13ZWlnaHQ9IjcwMCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlBBTEw8L3RleHQ+Cjwvc3ZnPgo=' },
    ufi: { name: 'UFI', country: 'Italy', logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCA0MCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjIwIiByeD0iNCIgZmlsbD0iIzEzOUQ4RCIvPgo8dGV4dCB4PSIyMCIgeT0iMTQiIGZvbnQtZmFtaWx5PSJJbnRlciIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9IjcwMCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlVGSTwvdGV4dD4KPC9zdmc+Cg==' }
};

// Applications configuration
window.APPLICATIONS = {
    passenger: { name: 'Passenger Cars', description: 'Cars and light vehicles' },
    commercial: { name: 'Commercial Vehicles', description: 'Trucks and buses' },
    industrial: { name: 'Industrial Equipment', description: 'Heavy machinery' },
    marine: { name: 'Marine Equipment', description: 'Boats and ships' },
    agricultural: { name: 'Agricultural Equipment', description: 'Tractors and farm equipment' }
};

// Origins configuration
window.ORIGINS = {
    germany: { name: 'Germany', flag: '🇩🇪' },
    usa: { name: 'USA', flag: '🇺🇸' },
    japan: { name: 'Japan', flag: '🇯🇵' },
    italy: { name: 'Italy', flag: '🇮🇹' },
    france: { name: 'France', flag: '🇫🇷' },
    china: { name: 'China', flag: '🇨🇳' },
    korea: { name: 'South Korea', flag: '🇰🇷' }
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
