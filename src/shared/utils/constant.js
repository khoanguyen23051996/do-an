import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  GeminiSlide_1,
  GeminiSlide_2,
  GeminiSlide_3,
} from "../../assets";

export const navItems = [
  {
    label: "Ram",
    path: "/ram",
    sub: [
      {
        label: "Samsung",
        path: "/ram/samsung",
      },
      {
        label: "Kingstone",
        path: "/ram/kingstone",
      },
    ],
  },
  {
    label: "CPU",
    path: "/cpu",
    sub: [
      {
        label: "Intel",
        path: "/cpu/intel",
      },
      {
        label: "AMD",
        path: "/cpu/amd",
      },
    ],
  },
  {
    label: "SSD",
    path: "/ssd",
    sub: [
      {
        label: "Samsung",
        path: "/ssd/samsung",
      },
      {
        label: "Kingstone",
        path: "/ssd/kingstone",
      },
    ],
  },
  {
    label: "Màn hình",
    path: "/monitor",
    sub: [
      {
        label: "Samsung",
        path: "/monitor/samsung",
      },
      {
        label: "MSI",
        path: "/monitor/MSI",
      },
    ],
  },
  {
    label: "Chuột",
    path: "/mouse",
    sub: [
      {
        label: "Logitech",
        path: "/mouse/logitech",
      },
      {
        label: "Laser",
        path: "/mouse/razer",
      },
    ],
  },
  {
    label: "Bàn phím",
    path: "/keyboard",
    sub: [
      {
        label: "Akko",
        path: "/keyboard/akko",
      },
      {
        label: "Corsair",
        path: "/keyboard/corsair",
      },
    ],
  },
  {
    label: "Giỏ hàng",
    path: "/cart",
  }
];

export const socialItems = [
  {
    label: FacebookIcon,
    href: "#facebook",
  },
  {
    label: InstagramIcon,
    href: "#instagram",
  },
  {
    label: TwitterIcon,
    href: "#twitter",
  },
];

export const slideItems = [GeminiSlide_1, GeminiSlide_2, GeminiSlide_3];

// RAM
export const ramBrands = [
  {
    logo: 'https://images.samsung.com/is/image/samsung/assets/global/about-us/brand/logo/mo/256_144_1.png?$512_N_PNG$',
    name: "Samsung",
    url: "samsung",
    products: [
      {
        id: 1,
        logo: 'https://xgear.net/wp-content/uploads/2022/12/Ram_Laptop_OEM.jpeg',
        name: "RAM Laptop Samsung 8GB DDR5 4800MT/S",
        url: "samsung-8gb",
        price: 500000,
        description: "Ram Laptop Samsung 8GB DDR5 Bus 4800Mhz (M425R1GB4BB0-CQKOD)"
      },
      {
        id: 2,
        logo: 'https://laptop88.vn/media/product/5321_ram_laptop_kingston_8gb_ddr4_3200mhz_1.jpg',
        name: "RAM Laptop DDR4 Samsung 8GB Bus 3200 SODIMM",
        url: "samsung-8gb-2",
        description: "lorem 20",
        price: 300000,
      },
      {
        id: 3,
        logo: 'https://m.media-amazon.com/images/I/71AEIk7kzIL.jpg',
        name: "Samsung DDR5 4800MHz 8GB 16GB SODIMM PC5-38400 CL40",
        url: "samsung-16gb",
        description: "lorem 20",
        price: 300000,
      },
      {
        id: 4,
        logo: 'https://ae01.alicdn.com/kf/S8a65d99fb37242e599af9b4127b7fd3cK.png_640x640.png_.webp',
        name: "Samsung 16GB (1x16GB) DDR5 4800MHz PC5-38400 ",
        url: "samsung-16gb",
        description: "lorem 20",
        price: 300000,
      }, 
      {
        id: 5,
        logo: 'https://ae01.alicdn.com/kf/S8a65d99fb37242e599af9b4127b7fd3cK.png_640x640.png_.webp',
        name: "RAM DDR5 Laptop Samsung 16GB Bus 4800Mhz",
        url: "samsung-16gb",
        description: "lorem 20",
        price: 300000,
      }, 
    ]
  },
  {
    id: 5,
    logo: 'https://png.pngitem.com/pimgs/s/26-260215_logo-kingston-hd-png-download.png',
    name: "Kingston",
    url: "kingston",
    products: [
      {
        id: 6,
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "Samsung 8GB",
        url: "samsung-8gb"
      },
      {
        id: 7,
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "Samsung 8GB",
        url: "samsung-8gb"
      },
      {
        id: 8,
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "Samsung 16GB",
        url: "samsung-16gb"
      },
      {
        id: 9,
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "Samsung 16GB",
        url: "samsung-16gb"
      },
    ]
  }
]

//CPU
export const cpuBrands = [
  {
    id: 10,
    logo: 'https://e7.pngegg.com/pngimages/162/839/png-clipart-intel-developer-forum-logo-intel-blue-text-thumbnail.png',
    name: "Intel",
    url: "intel",
    products: [
      {
        id: 11,
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "Intel i5",
        url: "intel-i5",
        description: "lorem 20"
      },
      {
        id: 12,
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "Intel i5",
        url: "intel-i5",
        description: "lorem 20"
      },
      {
        id: 12,
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "Intel i7",
        url: "intel-i7",
        description: "lorem 20"
      },
      {
        id: 13,
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "Intel i7",
        url: "intel-i7",
        description: "lorem 20"
      }, 
    ]
  },
  {
    id: 14,
    logo: 'https://w7.pngwing.com/pngs/503/644/png-transparent-advanced-micro-devices-logo-graphics-cards-video-adapters-central-processing-unit-amd-turion-computer-angle-text-trademark-thumbnail.png',
    name: "AMD",
    url: "amd",
    products: [
      {
        id: 15,
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "AMD",
        url: "amd"
      },
      {
        id: 16,
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "Kingston 8GB",
        url: "kingston-8gb"
      },
      {
        id: 17,
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "Kingston 16GB",
        url: "kingston-16gb"
      },
      {
        id: 18,
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "Kingston 16GB",
        url: "kingston-16gb"
      },
    ]
  }
]

//SSD
export const ssdBrands = [
  {
    id: 19,
    logo: 'https://images.samsung.com/is/image/samsung/assets/global/about-us/brand/logo/mo/256_144_1.png?$512_N_PNG$',
    name: "Samsung",
    url: "samsung",
    products: [
      {
        id: 20,
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "Samsung 8GB",
        url: "samsung-8gb",
        description: "lorem 20"
      },
      {
        id: 21,
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "Samsung 8GB",
        url: "samsung-8gb",
        description: "lorem 20"
      },
      {
        id: 22,
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "Samsung 16GB",
        url: "samsung-16gb",
        description: "lorem 20"
      },
      {
        id: 23,
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "Samsung 16GB",
        url: "samsung-16gb",
        description: "lorem 20"
      }, 
    ]
  },
  {
    id: 24,
    logo: 'https://png.pngitem.com/pimgs/s/26-260215_logo-kingston-hd-png-download.png',
    name: "Kingston",
    url: "kingston",
    products: [
      {
        id: 25,
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "Kingston 8GB",
        url: "kingston-8gb"
      },
      {
        id: 26,
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "Kingston 8GB",
        url: "kingston-8gb"
      },
      {
        id: 27,
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "Kingston 16GB",
        url: "kingston-16gb"
      },
      {
        id: 28,
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "Kingston 16GB",
        url: "kingston-16gb"
      },
    ]
  }
]

//Man hinh
export const monitorBrands = [
  {
    id: 29,
    logo: 'https://images.samsung.com/is/image/samsung/assets/global/about-us/brand/logo/mo/256_144_1.png?$512_N_PNG$',
    name: "Samsung",
    url: "samsung",
    products: [
      {
        id: 30,
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "Samsung 8GB",
        url: "samsung-8gb",
        description: "lorem 20"
      },
      {
        id: 31,
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "Samsung 8GB",
        url: "samsung-8gb",
        description: "lorem 20"
      },
      {
        id: 32,
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "Samsung 16GB",
        url: "samsung-16gb",
        description: "lorem 20"
      },
      {
        
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "Samsung 16GB",
        url: "samsung-16gb",
        description: "lorem 20"
      }, 
    ]
  },
  {
    logo: 'https://w7.pngwing.com/pngs/803/477/png-transparent-msi-logo-thumbnail.png',
    name: "MSI",
    url: "msi",
    products: [
      {
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "MSI",
        url: "msi"
      },
      {
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "MSI",
        url: "msi"
      },
      {
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "MSI",
        url: "msi"
      },
      {
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "MSI",
        url: "msi"
      },
    ]
  }
]

//Chuot
export const mouseBrands = [
  {
    logo: 'https://ih0.redbubble.net/image.2999519614.5897/raf,360x360,075,t,fafafa:ca443f4786.jpg',
    name: "Logitech",
    url: "logitech",
    products: [
      {
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "Logitech",
        url: "logitech",
        description: "lorem 20"
      },
      {
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "Logitech",
        url: "logitech",
        description: "lorem 20"
      },
      {
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "Logitech",
        url: "logitech",
        description: "lorem 20"
      },
      {
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "Logitech",
        url: "logitech",
        description: "lorem 20"
      }, 
    ]
  },
  {
    logo: 'https://upload.wikimedia.org/wikipedia/vi/a/a1/Razer_snake_logo.png',
    name: "Razer",
    url: "razer",
    products: [
      {
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "Razer",
        url: "razer"
      },
      {
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "Razer",
        url: "razer"
      },
      {
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "Razer",
        url: "razer"
      },
      {
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "Razer",
        url: "razer"
      },
    ]
  }
]

//Ban phim
export const keyboardBrands = [
  {
    logo: 'https://seeklogo.com/images/C/corsair-logo-6A2722AAB9-seeklogo.com.png',
    name: "Corsair",
    url: "corsair",
    products: [
      {
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "Corsair",
        url: "corsair",
        description: "lorem 20"
      },
      {
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "Corsair",
        url: "corsair",
        description: "lorem 20"
      },
      {
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "Corsair",
        url: "corsair",
        description: "lorem 20"
      },
      {
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "Corsair",
        url: "corsair",
        description: "lorem 20"
      }, 
    ]
  },
  {
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThOsz3FNcVDTBtmS725RtzMENKg-kO8vG8-P4DsEI&s',
    name: "Akko",
    url: "akko",
    products: [
      {
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "Akko",
        url: "akko"
      },
      {
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "Akko",
        url: "akko"
      },
      {
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "Akko",
        url: "akko"
      },
      {
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "Akko",
        url: "akko"
      },
    ]
  }
]
