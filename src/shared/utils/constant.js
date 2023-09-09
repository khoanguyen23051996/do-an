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
        logo: 'https://xgear.net/wp-content/uploads/2022/12/Ram_Laptop_OEM.jpeg',
        name: "Samsung 8GB",
        url: "samsung-8gb",
        description: "Ram Laptop Samsung 8GB DDR5 Bus 4800Mhz (M425R1GB4BB0-CQKOD)"
      },
      {
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "Samsung 8GB",
        url: "samsung-8gb",
        description: "lorem 20"
      },
      {
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
    logo: 'https://png.pngitem.com/pimgs/s/26-260215_logo-kingston-hd-png-download.png',
    name: "Kingston",
    url: "kingston",
    products: [
      {
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "Samsung 8GB",
        url: "samsung-8gb"
      },
      {
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "Samsung 8GB",
        url: "samsung-8gb"
      },
      {
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "Samsung 16GB",
        url: "samsung-16gb"
      },
      {
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
    logo: 'https://e7.pngegg.com/pngimages/162/839/png-clipart-intel-developer-forum-logo-intel-blue-text-thumbnail.png',
    name: "Intel",
    url: "intel",
    products: [
      {
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "Intel i5",
        url: "intel-i5",
        description: "lorem 20"
      },
      {
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "Intel i5",
        url: "intel-i5",
        description: "lorem 20"
      },
      {
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "Intel i7",
        url: "intel-i7",
        description: "lorem 20"
      },
      {
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "Intel i7",
        url: "intel-i7",
        description: "lorem 20"
      }, 
    ]
  },
  {
    logo: 'https://w7.pngwing.com/pngs/503/644/png-transparent-advanced-micro-devices-logo-graphics-cards-video-adapters-central-processing-unit-amd-turion-computer-angle-text-trademark-thumbnail.png',
    name: "AMD",
    url: "amd",
    products: [
      {
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "AMD",
        url: "amd"
      },
      {
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "Kingston 8GB",
        url: "kingston-8gb"
      },
      {
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "Kingston 16GB",
        url: "kingston-16gb"
      },
      {
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
    logo: 'https://images.samsung.com/is/image/samsung/assets/global/about-us/brand/logo/mo/256_144_1.png?$512_N_PNG$',
    name: "Samsung",
    url: "samsung",
    products: [
      {
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "Samsung 8GB",
        url: "samsung-8gb",
        description: "lorem 20"
      },
      {
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "Samsung 8GB",
        url: "samsung-8gb",
        description: "lorem 20"
      },
      {
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
    logo: 'https://png.pngitem.com/pimgs/s/26-260215_logo-kingston-hd-png-download.png',
    name: "Kingston",
    url: "kingston",
    products: [
      {
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "Kingston 8GB",
        url: "kingston-8gb"
      },
      {
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "Kingston 8GB",
        url: "kingston-8gb"
      },
      {
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "Kingston 16GB",
        url: "kingston-16gb"
      },
      {
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
    logo: 'https://images.samsung.com/is/image/samsung/assets/global/about-us/brand/logo/mo/256_144_1.png?$512_N_PNG$',
    name: "Samsung",
    url: "samsung",
    products: [
      {
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "Samsung 8GB",
        url: "samsung-8gb",
        description: "lorem 20"
      },
      {
        logo: 'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png',
        name: "Samsung 8GB",
        url: "samsung-8gb",
        description: "lorem 20"
      },
      {
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
