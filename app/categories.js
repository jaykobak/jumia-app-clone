export const categoryData = [
    {
        id: 1,
        category: 'Home & Office',
    },
    {
        id: 2,
        category: 'Phones & Tablets',
    },
    {
        id: 3,
        category: 'Fashion',
    },
    {
        id: 4,
        category: 'Health & Beauty',
    },
    {
        id: 5,
        category: 'Electronics',
    },
    {
        id: 6,
        category: 'Computing',
    },
    {
        id: 7,
        category: 'Grocery',
    },
    {
        id: 8,
        category: 'Garden & Outdoors',
    },
    {
        id: 9,
        category: 'Automobile',
    },
    {
        id: 10,
        category: 'Sporting Goods',
    },
    {
        id: 11,
        category: 'Gaming',
    },
    {
        id: 12,
        category: 'Baby Products',
    }
]

export const productData = [
    { 
        name: 'Large Appliances', 
        image: require('../assets/images/washing machine.png'), 
        category: 'Appliances' 
    },
    { 
        name: 'Small Appliances', 
        image: require('../assets/images/Electric-jug.png'), 
        category: 'Appliances' 
    },
    { 
        name: 'Frying Pan', 
        image: require('../assets/images/frying pan.jpg'), 
        category: 'Kitchen' 
    },
    { 
        name: 'Small Appliances', 
        image: require('../assets/images/microwave.jpg'), 
        category: 'Kitchen' 
    },
    { 
        name: 'Bakeware', 
        image: require('../assets/images/electric gas.jpg'), 
        category: 'Kitchen' 
    },
    { 
        name: 'Cutlery & Knife', 
        image: require('../assets/images/cutlery.jpg'), 
        category: 'Kitchen' 
    },
    { 
        name: 'Car', 
        image: require('../assets/images/car.jpg'), 
        category: 'Home' 
    },
    { 
        name: 'Dining table', 
        image: require('../assets/images/dining table.jpg'), 
        category: 'Home' 
    },
    { 
        name: 'Chair', 
        image: require('../assets/images/chair.jpg'), 
        category: 'Home' 
    },
    { 
        name: 'Iron', 
        image: require('../assets/images/iron.jpg'), 
        category: 'Home' 
    },
    { 
        name: 'Painting', 
        image: require('../assets/images/painting.jpg'), 
        category: 'Home' 
    },
    { 
        name: 'Pillow', 
        image: require('../assets/images/pillow.jpg'), 
        category: 'Home' 
    },
    { 
        name: 'Chair', 
        image: require('../assets/images/office chair.jpg'), 
        category: 'Office' 
    },
    { 
        name: 'Desk', 
        image: require('../assets/images/office desk.jpg'), 
        category: 'Office' 
    },
    { 
        name: 'Printer', 
        image: require('../assets/images/printer.jpg'), 
        category: 'Office' 
    },
    { 
        name: 'Fan', 
        image: require('../assets/images/fan.png'), 
        category: 'Office' 
    },
  ];

export const product_category = [
    {
        id: 1,
        category_name: 'Appliances',
    },

    {
        id: 2,
        category_name: 'Home & Kitchen',
    },

    {
        id: 3,
        category_name: 'Home',
        products: [
            {
                product_name: 'Car',
                product_image: 'car.jpg'
            },
            {
                product_name: 'Dining table',
                product_image: 'dining table.jpg'
            },
            {
                product_name: 'Chair',
                product_image: 'chair.jpg'
            },
            {
                product_name: 'Iron',
                product_image: 'iron.jpg'
            },
            {
                product_name: 'Painting',
                product_image: 'painting.jpg'
            },
            {
                product_name: 'Pillow',
                product_image: 'pillow.jpg'
            },
        ]
    },

    {
        id: 4,
        category_name: 'Office Equipments',
        products: [
            {
                product_name: 'Chair',
                product_image: 'office chair.jpg'
            },
            {
                product_name: 'Desk',
                product_image: 'office desk.jpg'
            },
            {
                product_name: 'Printer',
                product_image: 'printer.jpg'
            },
            {
                product_name: 'Fan',
                product_image: 'fan.png'
            },
        ]
    }
]

export const appliances = [
    {
        product_name: 'Large Appliances',
        product_image: '../assets/images/washing machine.png'
    },
    {
        product_name: 'Small Appliances',
        product_image: '../assets/images/Electric-jug.png'
    },
]

export const kitchen = [
    {
        product_name: 'Cookware',
        product_image: 'frying pan.jpg'
    },
    {
        product_name: 'Small Appliances',
        product_image: 'microwave.jpg'
    },
    {
        product_name: 'Bakeware',
        product_image: 'electric gas.jpg'
    },
    {
        product_name: 'Cutlery & Knife',
        product_image: 'cutlery.jpg'
    },
]