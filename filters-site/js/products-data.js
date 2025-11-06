// Filter Nest - Products Data
// Comprehensive product database with realistic filter data

// Real automotive and industrial filter images - High quality product photos
const FILTER_IMAGES = {
    oil: [
        'images/oil-filter.svg',
        'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&h=400&fit=crop&crop=center'
    ],
    air: [
        'images/air-filter.svg',
        'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=400&fit=crop&crop=center'
    ],
    fuel: [
        'images/fuel-filter.svg',
        'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=400&h=400&fit=crop&crop=center'
    ],
    hydraulic: [
        'images/hydraulic-filter.svg',
        'https://images.unsplash.com/photo-1581092795442-48eb5b69bdc3?w=400&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=400&fit=crop&crop=center'
    ],
    cabin: [
        'images/cabin-filter.svg',
        'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1563396983906-b3795482a59a?w=400&h=400&fit=crop&crop=center'
    ],
    transmission: [
        'https://images.unsplash.com/photo-1581092795442-48eb5b69bdc3?w=400&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400&h=400&fit=crop&crop=center'
    ]
};

window.PRODUCTS_DATA = [
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
