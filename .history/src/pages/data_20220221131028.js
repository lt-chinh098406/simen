const items = [
  {
    id: 1,
    name: 'Curabitur non',
    imageUrl: 'http://demo.snstheme.com/wp/simen/wp-content/uploads/2015/11/22-215x260.jpg',
    price: 54,
    sofas: true,
    bedroom: true,
    furniture: false,
    coffeeTable: false,
    sale: false,
  },
  {
    id: 2,
    name: 'Donec cursus',
    imageUrl: 'http://demo.snstheme.com/wp/simen/wp-content/uploads/2015/11/15-215x260.jpg',
    price: 15,
    furniture: true,
    coffeeTable: true,
    sofas: true,
    bedroom: true,
    sale: false,
  },
  {
    id: 3,
    name: 'External/Affiliate Product',
    imageUrl: 'http://demo.snstheme.com/wp/simen/wp-content/uploads/2015/11/26-215x260.jpg',
    price: 8,
    furniture: true,
    coffeeTable: true,
    sofas: true,
    bedroom: true,
    sale: false,
  },
  {
    id: 4,
    name: 'Grouped Product',
    imageUrl: 'http://demo.snstheme.com/wp/simen/wp-content/uploads/2015/11/11-215x260.jpg',
    price: 12,
    furniture: true,
    coffeeTable: true,
    sofas: true,
    bedroom: true,
    sale: false,
  },
  {
    id: 5,
    name: 'Iaculis orci',
    imageUrl: 'http://demo.snstheme.com/wp/simen/wp-content/uploads/2015/11/8-215x260.jpg',
    price: 35,
    furniture: false,
    coffeeTable: false,
    sofas: true,
    bedroom: true,
    sale: false,
  },
  {
    id: 6,
    name: 'Laoreet ultrices',
    imageUrl: 'http://demo.snstheme.com/wp/simen/wp-content/uploads/2015/11/20-215x260.jpg',
    price: 35,
    furniture: false,
    coffeeTable: false,
    sofas: true,
    bedroom: true,
    sale: false,
  },
  {
    id: 7,
    name: 'Maecenas consequat',
    imageUrl: 'http://demo.snstheme.com/wp/simen/wp-content/uploads/2015/11/32-215x260.jpg',
    price: 35,
    furniture: false,
    coffeeTable: false,
    sofas: true,
    bedroom: true,
    sale: false,
  },
  {
    id: 8,
    name: 'Modular Modern',
    imageUrl: 'http://demo.snstheme.com/wp/simen/wp-content/uploads/2015/11/28-215x260.jpg',
    price: 9,
    furniture: true,
    coffeeTable: true,
    sofas: true,
    bedroom: true,
    sale: false,
  },
  {
    id: 9,
    name: 'Modular Modern',
    imageUrl: 'http://demo.snstheme.com/wp/simen/wp-content/uploads/2015/11/19-215x260.jpg',
    price: 9,
    furniture: true,
    coffeeTable: true,
    sofas: true,
    bedroom: true,
    sale: false,
  },
  {
    id: 10,
    name: 'Modular Modern',
    imageUrl: 'http://demo.snstheme.com/wp/simen/wp-content/uploads/2015/11/3-215x260.jpg',
    price: 9,
    furniture: true,
    coffeeTable: true,
    sofas: true,
    bedroom: true,
    sale: false,
  },
  {
    id: 11,
    name: 'Modular Modern',
    imageUrl: 'http://demo.snstheme.com/wp/simen/wp-content/uploads/2015/11/10-215x260.jpg',
    price: 2,
    furniture: true,
    coffeeTable: true,
    sofas: true,
    bedroom: true,
    sale: false,
  },
  {
    id: 12,
    name: 'Modular Modern',
    imageUrl: 'http://demo.snstheme.com/wp/simen/wp-content/uploads/2015/11/17-215x260.jpg',
    price: 600,
    furniture: true,
    coffeeTable: true,
    sofas: true,
    bedroom: true,
    sale: false,
  },
  {
    id: 13,
    name: 'Nisi vitae',
    imageUrl: 'http://demo.snstheme.com/wp/simen/wp-content/uploads/2015/11/7-215x260.jpg',
    price: 35,
    furniture: false,
    coffeeTable: false,
    sofas: true,
    bedroom: true,
    sale: false,
  },
  {
    id: 14,
    name: 'Patient sofa',
    imageUrl: 'http://demo.snstheme.com/wp/simen/wp-content/uploads/2015/11/9-215x260.jpg',
    price: 35,
    furniture: false,
    coffeeTable: false,
    sofas: true,
    bedroom: true,
    sale: false,
  },
  {
    id: 16,
    name: 'Modular Modern',
    imageUrl: 'http://demo.snstheme.com/wp/simen/wp-content/uploads/2015/11/19-215x260.jpg',
    price: 9,
    furniture: true,
    coffeeTable: false,
    sofas: false,
    bedroom: false,
    sale: false,
  },
  {
    id: 17,
    name: 'Modular Modern',
    imageUrl: 'http://demo.snstheme.com/wp/simen/wp-content/uploads/2015/11/3-215x260.jpg',
    price: 14,
    furniture: true,
    coffeeTable: false,
    sofas: false,
    bedroom: false,
    sale: false,
  },
  {
    id: 18,
    name: 'Modular Modern',
    imageUrl: 'http://demo.snstheme.com/wp/simen/wp-content/uploads/2015/11/24-215x260.jpg',
    price: 13,
    furniture: true,
    coffeeTable: false,
    sofas: false,
    bedroom: false,
    sale: false,
  },
  {
    id: 19,
    name: 'Modular Modern',
    imageUrl: 'http://demo.snstheme.com/wp/simen/wp-content/uploads/2015/11/10-215x260.jpg',
    price: 2,
    furniture: true,
    coffeeTable: false,
    sofas: false,
    bedroom: false,
    sale: false,
  },
  {
    id: 20,
    name: 'Modular Modern',
    imageUrl: 'http://demo.snstheme.com/wp/simen/wp-content/uploads/2015/11/26-215x260.jpg',
    price: 10,
    furniture: true,
    coffeeTable: false,
    sofas: false,
    bedroom: false,
    sale: false,
  },
  {
    id: 21,
    name: 'Modular Modern',
    imageUrl: 'http://demo.snstheme.com/wp/simen/wp-content/uploads/2015/11/17-215x260.jpg',
    price: 7,
    furniture: true,
    coffeeTable: false,
    sofas: false,
    bedroom: false,
    sale: false,
  },
  {
    id: 22,
    name: 'Praesent at',
    imageUrl: 'http://demo.snstheme.com/wp/simen/wp-content/uploads/2015/11/31-215x260.jpg',
    price: 15,
    furniture: true,
    coffeeTable: true,
    sofas: true,
    bedroom: true,
    sale: false,
  },
  {
    id: 23,
    name: 'scelerisque accumsan',
    imageUrl: 'http://demo.snstheme.com/wp/simen/wp-content/uploads/2015/11/21-215x260.jpg',
    price: 12,
    furniture: true,
    coffeeTable: true,
    sofas: true,
    bedroom: true,
    sale: false,
  },
  {
    id: 24,
    name: 'Urna in eros',
    imageUrl: 'http://demo.snstheme.com/wp/simen/wp-content/uploads/2015/11/29-215x260.jpg',
    price: 12,
    furniture: true,
    coffeeTable: true,
    sofas: false,
    bedroom: false,
    sale: false,
  },
  {
    id: 25,
    name: 'Variable Product',
    imageUrl: 'http://demo.snstheme.com/wp/simen/wp-content/uploads/2015/11/24-215x260.jpg',
    price: 8,
    furniture: true,
    coffeeTable: true,
    sofas: true,
    bedroom: true,
    sale: false,
  },
  {
    id: 26,
    name: 'Variable Product – Color',
    imageUrl: 'http://demo.snstheme.com/wp/simen/wp-content/uploads/2015/11/27-215x260.jpg',
    price: 30,
    furniture: false,
    coffeeTable: false,
    sofas: true,
    bedroom: true,
    sale: false,
  },
  {
    id: 27,
    name: 'Variable Product – Image',
    imageUrl: 'http://demo.snstheme.com/wp/simen/wp-content/uploads/2015/11/33-215x260.jpg',
    price: 30,
    furniture: false,
    coffeeTable: false,
    sofas: true,
    bedroom: true,
    sale: false,
  },
];

export default items;
