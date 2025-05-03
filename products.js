// Product data
const products = [
    // Y2K Revival
    {
        id: 1,
        name: "Butterfly Crop Top",
        category: "y2k",
        price: 24.99,
        oldPrice: null,
        image: "images/products/butterfly-crop.jpg",
        onSale: false,
        description: "A Y2K-inspired crop top featuring butterfly prints and rhinestone details."
    },
    {
        id: 2,
        name: "Low-Rise Cargo Pants",
        category: "y2k",
        price: 39.99,
        oldPrice: 49.99,
        image: "images/products/low-rise-cargo.jpg",
        onSale: true,
        description: "Trendy low-rise cargo pants with multiple pockets, perfect for that early 2000s vibe."
    },
    {
        id: 3,
        name: "Velour Tracksuit Set",
        category: "y2k",
        price: 54.99,
        oldPrice: null,
        image: "images/products/velour-tracksuit.jpg",
        onSale: false,
        description: "Iconic velour tracksuit set in vibrant colors, bringing back that juicy 2000s look."
    },
    
    // Sustainable Fashion
    {
        id: 4,
        name: "Organic Cotton Tee",
        category: "sustainable",
        price: 19.99,
        oldPrice: null,
        image: "images/products/organic-tee.jpg",
        onSale: false,
        description: "100% organic cotton tee made with eco-friendly dyes and sustainable production methods."
    },
    {
        id: 5,
        name: "Recycled Denim Jacket",
        category: "sustainable",
        price: 59.99,
        oldPrice: 69.99,
        image: "images/products/recycled-denim.jpg",
        onSale: true,
        description: "Cool denim jacket made from recycled materials, saving water and reducing waste."
    },
    {
        id: 6,
        name: "Hemp Blend Sweater",
        category: "sustainable",
        price: 44.99,
        oldPrice: null,
        image: "images/products/hemp-sweater.jpg",
        onSale: false,
        description: "Cozy sweater made from hemp and organic cotton blend, perfect for conscious fashion lovers."
    },
    
    // Techwear
    {
        id: 7,
        name: "Multi-Pocket Cargo Pants",
        category: "techwear",
        price: 64.99,
        oldPrice: null,
        image: "images/products/tech-cargo.jpg",
        onSale: false,
        description: "Waterproof cargo pants with multiple utility pockets and adjustable straps."
    },
    {
        id: 8,
        name: "Urban Tech Jacket",
        category: "techwear",
        price: 79.99,
        oldPrice: 99.99,
        image: "images/products/tech-jacket.jpg",
        onSale: true,
        description: "Functional jacket with water-resistant fabric, hidden pockets, and a futuristic design."
    },
    {
        id: 9,
        name: "Tactical Vest",
        category: "techwear",
        price: 49.99,
        oldPrice: null,
        image: "images/products/tactical-vest.jpg",
        onSale: false,
        description: "Streetwear tactical vest with multiple compartments for the urban explorer."
    },
    
    // Oversized Everything
    {
        id: 10,
        name: "Oversized Hoodie",
        category: "oversized",
        price: 44.99,
        oldPrice: null,
        image: "images/products/oversized-hoodie.jpg",
        onSale: false,
        description: "Ultra-comfortable oversized hoodie with a relaxed fit and dropped shoulders."
    },
    {
        id: 11,
        name: "Baggy Jeans",
        category: "oversized",
        price: 49.99,
        oldPrice: 59.99,
        image: "images/products/baggy-jeans.jpg",
        onSale: true,
        description: "Trendy baggy jeans with a loose, comfortable fit perfect for casual wear."
    },
    {
        id: 12,
        name: "Oversized Tee",
        category: "oversized",
        price: 29.99,
        oldPrice: null,
        image: "images/products/oversized-tee.jpg",
        onSale: false,
        description: "Classic oversized t-shirt with a boxy fit and dropped shoulders."
    },
    
    // Bold Colors and Patterns
    {
        id: 13,
        name: "Neon Graphic Tee",
        category: "bold",
        price: 24.99,
        oldPrice: null,
        image: "images/products/neon-tee.jpg",
        onSale: false,
        description: "Vibrant neon graphic tee that makes a bold statement."
    },
    {
        id: 14,
        name: "Tie-Dye Sweatshirt",
        category: "bold",
        price: 39.99,
        oldPrice: 49.99,
        image: "images/products/tie-dye.jpg",
        onSale: true,
        description: "Hand-dyed sweatshirt with unique tie-dye patterns, no two are exactly alike."
    },
    {
        id: 15,
        name: "Checkerboard Pattern Pants",
        category: "bold",
        price: 44.99,
        oldPrice: null,
        image: "images/products/checkerboard.jpg",
        onSale: false,
        description: "Eye-catching checkerboard pattern pants for those who love to stand out."
    },
    
    // Athleisure
    {
        id: 16,
        name: "Matching Tracksuit Set",
        category: "athleisure",
        price: 69.99,
        oldPrice: null,
        image: "images/products/tracksuit-set.jpg",
        onSale: false,
        description: "Comfortable and stylish matching tracksuit set perfect for workouts or casual wear."
    },
    {
        id: 17,
        name: "Premium Joggers",
        category: "athleisure",
        price: 34.99,
        oldPrice: 44.99,
        image: "images/products/joggers.jpg",
        onSale: true,
        description: "Soft, premium joggers with tapered fit and elastic waistband."
    },
    {
        id: 18,
        name: "Sports Bra Top",
        category: "athleisure",
        price: 29.99,
        oldPrice: null,
        image: "images/products/sports-bra.jpg",
        onSale: false,
        description: "Supportive sports bra that doubles as a trendy crop top for athleisure looks."
    },
    
    // Vintage and Retro
    {
        id: 19,
        name: "Vintage-Inspired Flare Jeans",
        category: "vintage",
        price: 54.99,
        oldPrice: null,
        image: "images/products/flare-jeans.jpg",
        onSale: false,
        description: "70s-inspired flare jeans with a high waist and retro aesthetic."
    },
    {
        id: 20,
        name: "Retro Band Tee",
        category: "vintage",
        price: 27.99,
        oldPrice: 34.99,
        image: "images/products/band-tee.jpg",
        onSale: true,
        description: "Vintage-style band tee with distressed details for an authentic look."
    },
    {
        id: 21,
        name: "90s Plaid Skirt",
        category: "vintage",
        price: 32.99,
        oldPrice: null,
        image: "images/products/plaid-skirt.jpg",
        onSale: false,
        description: "Nostalgic 90s-inspired plaid mini skirt, perfect with combat boots or sneakers."
    },
    
    // Streetwear
    {
        id: 22,
        name: "Graphic Hoodie",
        category: "streetwear",
        price: 49.99,
        oldPrice: null,
        image: "images/products/graphic-hoodie.jpg",
        onSale: false,
        description: "Bold graphic hoodie with street-inspired designs and comfortable fit."
    },
    {
        id: 23,
        name: "Urban Cargo Pants",
        category: "streetwear",
        price: 54.99,
        oldPrice: 64.99,
        image: "images/products/urban-cargo.jpg",
        onSale: true,
        description: "Streetwear cargo pants with chain details and urban aesthetic."
    },
    {
        id: 24,
        name: "Graffiti Print Tee",
        category: "streetwear",
        price: 29.99,
        oldPrice: null,
        image: "images/products/graffiti-tee.jpg",
        onSale: false,
        description: "Urban graphic tee featuring custom graffiti-inspired artwork."
    },
    
    // Gender-Neutral
    {
        id: 25,
        name: "Unisex Basic Tee",
        category: "gender-neutral",
        price: 22.99,
        oldPrice: null,
        image: "images/products/unisex-tee.jpg",
        onSale: false,
        description: "Simple, versatile tee with a relaxed fit designed for all genders."
    },
    {
        id: 26,
        name: "Boxy Fit Shirt",
        category: "gender-neutral",
        price: 34.99,
        oldPrice: 44.99,
        image: "images/products/boxy-shirt.jpg",
        onSale: true,
        description: "Boxy button-up shirt in neutral tones, perfect for any gender expression."
    },
    {
        id: 27,
        name: "Neutral Cargo Pants",
        category: "gender-neutral",
        price: 49.99,
        oldPrice: null,
        image: "images/products/neutral-cargo.jpg",
        onSale: false,
        description: "Gender-neutral cargo pants with a relaxed fit and versatile styling options."
    },
    
    // DIY and Customization
    {
        id: 28,
        name: "Customizable Denim Jacket",
        category: "diy",
        price: 59.99,
        oldPrice: null,
        image: "images/products/custom-jacket.jpg",
        onSale: false,
        description: "Denim jacket ready for your personal touch - add patches, pins, or paint!"
    },
    {
        id: 29,
        name: "Patchwork Jeans",
        category: "diy",
        price: 49.99,
        oldPrice: 69.99,
        image: "images/products/patchwork-jeans.jpg",
        onSale: true,
        description: "Creative patchwork jeans with upcycled fabric details, each one unique."
    },
    {
        id: 30,
        name: "DIY Embroidery Tee",
        category: "diy",
        price: 27.99,
        oldPrice: null,
        image: "images/products/embroidery-tee.jpg",
        onSale: false,
        description: "Plain tee with pre-printed embroidery guides, perfect for your own customization."
    }
];