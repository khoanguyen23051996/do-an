//Khai báo dữ liệu, export sử dụng cho dự án

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
        label: "Kingston",
        path: "/ram/kingston",
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
        label: "Corsair",
        path: "/keyboard/corsair",
      },
      {
        label: "Akko",
        path: "/keyboard/akko",
      },
    ],
  },
  {
    label: "Giỏ hàng",
    path: "/cart",
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
    id: 1,
    logo: "https://images.samsung.com/is/image/samsung/assets/global/about-us/brand/logo/mo/256_144_1.png?$512_N_PNG$",
    name: "Samsung",
    url: "samsung",
    products: [
      {
        id: 2,
        logo: "https://xgear.net/wp-content/uploads/2022/12/Ram_Laptop_OEM.jpeg",
        name: "RAM Laptop Samsung 8GB DDR5 4800MT/S",
        url: "samsung-8gb",
        description:"Ram Laptop Samsung 8GB DDR5 Bus 4800Mhz (M425R1GB4BB0-CQKOD)",
        price: 500000,
      },
      {
        id: 3,
        logo: "https://laptop88.vn/media/product/5321_ram_laptop_kingston_8gb_ddr4_3200mhz_1.jpg",
        name: "RAM Laptop DDR4 Samsung 8GB Bus 3200 SODIMM",
        url: "RAM Laptop DDR4 Samsung 8GB Bus 3200 SODIMM",
        description: "RAM Laptop DDR4 Samsung 8GB Bus 3200 SODIMM",
        price: 300000,
      },
      {
        id: 4,
        logo: "https://m.media-amazon.com/images/I/71AEIk7kzIL.jpg",
        name: "Samsung DDR5 4800MHz 8GB 16GB SODIMM PC5-38400 CL40",
        url: "samsung-16gb",
        description: "Samsung DDR5 4800MHz 8GB 16GB SODIMM PC5-38400 CL40",
        price: 800000,
      },
      {
        id: 5,
        logo: "https://ae01.alicdn.com/kf/S8a65d99fb37242e599af9b4127b7fd3cK.png_640x640.png_.webp",
        name: "Samsung 16GB (1x16GB) DDR5 4800MHz PC5-38400 ",
        url: "samsung-16gb-1",
        description: "Samsung 16GB (1x16GB) DDR5 4800MHz PC5-38400 ",
        price: 300000,
      },
      {
        id: 6,
        logo: "https://ae01.alicdn.com/kf/S8a65d99fb37242e599af9b4127b7fd3cK.png_640x640.png_.webp",
        name: "RAM DDR5 Laptop Samsung 16GB Bus 4800Mhz",
        url: "RAM DDR5 Laptop Samsung 16GB Bus 4800Mhz",
        description: "RAM DDR5 Laptop Samsung 16GB Bus 4800Mhz",
        price: 300000,
      },
    ],
  },
  {
    id: 7,
    logo: "https://png.pngitem.com/pimgs/s/26-260215_logo-kingston-hd-png-download.png",
    name: "Kingston",
    url: "kingston",
    products: [
      {
        id: 8,
        logo: "https://bizweb.dktcdn.net/100/329/122/products/ram-laptop-kingston-ddr4-8gb-bus-3200mhz-kvr32s22s8-8.png?v=1638290363713",
        name: "Ram Laptop Kingston DDR4 8GB 3200MHz 1.2v KVR32S22S8/8",
        url: "kingsion-8gb",
        price: 300000,
        price: 300000,
        description: "Ram Laptop Kingston DDR4 8GB 3200MHz 1.2v KVR32S22S8/8",
      },
      {
        id: 9,
        logo: "https://techspace.vn/wp-content/uploads/2023/05/1-170.jpg",
        name: "RAM Kingston Fury Beast 1x8GB 3600 DDR4 RGB",
        url: "kingston-8gb-1",
        description: "RAM Kingston Fury Beast 1x8GB 3600 DDR4 RGB",
        price: 450000,
      },
      {
        id: 10,
        logo: "https://xgear.net/wp-content/uploads/2022/12/ktc-product-beast-ddr4-rgb-dimm-2-angled-kit-of-2-zm-lg-500x500.jpeg",
        name: "Ram PC Kingston Fury RGB DDR4 16GB Bus 3600Mhz (2x8GB)",
        url: "kingston-16gb",
        description: "Ram PC Kingston Fury RGB DDR4 16GB Bus 3600Mhz (2x8GB)",
        price: 1300000,
      },
      {
        id: 11,
        logo: "https://xgear.net/wp-content/uploads/2022/12/Fury_black_beast_compressed-500x500.jpg",
        name: "RAM PC Kingston Fury Beast 16GB DDR4 3200 Mhz (KF432C16BB/16)",
        url: "kingsion-16gb",
        description:"RAM PC Kingston Fury Beast 16GB DDR4 3200 Mhz (KF432C16BB/16)",
        price: 850000,
      },
    ],
  },
];

//CPU
export const cpuBrands = [
  {
    id: 12,
    logo: "https://e7.pngegg.com/pngimages/162/839/png-clipart-intel-developer-forum-logo-intel-blue-text-thumbnail.png",
    name: "Intel",
    url: "intel",
    products: [
      {
        id: 13,
        logo: "//product.hstatic.net/200000420363/product/_2023_-khung-sp-_1__00fa397c03804e91941afcfd4ad77357_master.jpg",
        name: "CPU Intel Core I5 12400 | LGA1700, Turbo 4.40 GHz, 6C/12T, 18MB, Box Công Ty",
        url: "intel-i5",
        description: "Bộ xử lý: I5 12400 – Alder Lake, Bộ nhớ đệm: 18 MB Cache (Total L2 Cache: 7.5 MB), Tần số cơ sở của bộ xử lý: 2.50 GHz, Tần số turbo tối đa: 4.40 GHz",
        price: 3000000,
      },
      {
        id: 14,
        logo: "https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/c/p/cpu-intel-core-i5-12400.jpg",
        name: " CPU Intel Core i5 12400 ",
        url: "intel-i5",
        description: "Intel Core i5 12400 là phiên bản vượt trội về mặt hiệu suất và mang lại năng lượng tuyệt vời. Phiên bản Intel Alder Lake là một sự lựa chọn không thể thiếu đối với các game thủ. Hiện, bộ vi xử lý Intel Core i5 12400 đang được bán tại cửa hàng CellphoneS trên toàn quốc và sẵn sàng lắp đặt phục vụ cho bạn.",
        price: 4300000
      },
      {
        id: 15,
        logo: "https://assets.dew.vn/bedf6685-20a3-41b8-9107-4fb78242a81b/derived/p_xl/i7-10700.webp",
        name: "CPU Intel Core i7-10700 / 8 cores / 16 threads / 2.9 - 4.8 GHz",
        url: "intel-i7",
        description: "CPU Intel Core i7-10700 / 8 cores / 16 threads / 2.9 - 4.8 GHz",
        price: 6500000
      },
      {
        id: 16,
        logo: "https://hanoicomputercdn.com/media/product/61448_cpu_intel_core_i7_12700k_3_8ghz_turbo_up_to_5_0ghz_12_nhan_20_luong_20mb_cache_125w_socket_intel_lga_1700_alder_lake_1.jpg",
        name: "CPU Intel Core i7-12700K (3.8GHz turbo up to 5.0Ghz, 12 nhân 20 luồng, 25MB  Cache, 125W) - Socket Intel LGA 1700/Alder Lake)",
        url: "intel-i7",
        description: "CPU Intel Core i7-12700K (3.8GHz turbo up to 5.0Ghz, 12 nhân 20 luồng, 25MB  Cache, 125W) - Socket Intel LGA 1700/Alder Lake)",
        price: 6800000
      },
    ],
  },
  {
    id: 17,
    logo: "https://w7.pngwing.com/pngs/318/793/png-transparent-amd-logo-logos-logos-and-brands-icon-thumbnail.png",
    name: "AMD",
    url: "amd",
    products: [
      {
        id: 18,
        logo: "//product.hstatic.net/200000420363/product/cpu-amd-ryzen-7-5800x_0ddca567ed0f410c92e463c92d28d23e_master.jpg",
        name: "CPU AMD Ryzen 7 5800X | AM4, Upto 4.70 GHz, 8C/16T, 32MB, Box Chính Hãng",
        url: "amd-ry7",
        description: "Socket: AM4 , AMD Ryzen 5000 Series, Tốc độ xử lý: 3.80GHz – 4.70GHz ( 8 nhân, 16 luồng), Bộ nhớ đệm: 32MB",
        price: 6300000,
      },
      {
        id: 19,
        logo: "//product.hstatic.net/200000420363/product/cpu-amd-ryzen-7-7800x3d-chinh-hang_0a5c928de63f4a42a90e0f89e8f0a440_master.png",
        name: "CPU AMD Ryzen 7 7800X3D | AM5, Upto 5.00 GHz, 8C/16T, 96MB, Box Chính Hãng",
        url: "amd-ry7",
        description: "Tên sản phẩm: CPU AMD Ryzen 7 7800X3D, CPU AMD Ryzen 7000 X3D Series mới, Số nhân: 8 nhân",
        price: 11700000,
      },
      {
        id: 20,
        logo: "/media/product/23315-cpu-amd-ryzen-9-7900xcpu-amd-ryzen-9-7900x.jpg",
        name: "CPU AMD Ryzen 9 7900X (4,7 GHz Boost 5,6 GHz | 12 Cores / 24 Threads | 64 MB Cache| PCIe 5.0)",
        url: "amd-ry9",
        description:"Thế hệ: AMD Ryzen 7000 series Số nhân - Luồng: 12 Cores / 24 Threads Xung nhịp: 4.7 GHz up to 5.6 GHz",
        price: 9000000,
      },
      {
        id: 21,
        logo: "//product.hstatic.net/200000420363/product/cpu-amd-ryzen-9-7900x_e43118939ea74b7a9ae77188830e2b2a_master.jpg",
        name: " CPU AMD Ryzen 9 7900X | AM5, Upto 5.60 GHz, 12C/24T, 64MB, Box Chính Hãng",
        url: "amd-ry9",
        description: " AMD Ryzen 9 7900X , Tốc độ: 4.7 GHZ, Socket: AM5",
        price: 12000000,
      
      },
    ],
  },
];

//SSD
export const ssdBrands = [
  {
    id: 22,
    logo: "https://images.samsung.com/is/image/samsung/assets/global/about-us/brand/logo/mo/256_144_1.png?$512_N_PNG$",
    name: "Samsung",
    url: "samsung",
    products: [
      {
        id: 23,
        logo: "//bizweb.dktcdn.net/thumb/grande/100/329/122/products/mz-v8v500-01.jpg?v=1683475237270",
        name: "SSD Samsung 980 500GB PCIe NVMe V-NAND M.2 2280 MZ-V8V500BW",
        url: "samsung-500gb",
        description: "Chuẩn SSD: M.2 NVMe Gen3 x4, Tốc độ đọc: 3100 MB/s, Tốc độ ghi: 2600 MB/s",
        price: 850000,
      },
      {
        id: 24,
        logo: "//bizweb.dktcdn.net/thumb/grande/100/329/122/products/pm9a1-512gb-01-1698e25e-b684-4ce5-926e-01162c35618d.jpg?v=1686364948653",
        name: "SSD Samsung NVMe PM9A1 512GB M.2 PCIe Gen4 x4 MZ-VL25120",
        url: "samsung-500gb",
        description: "Chuẩn SSD: M.2 NVMe Gen4 x4 (OEM Box vĩ nhựa), Tốc độ đọc: 6900 MB/s, Tốc độ ghi: 5000 MB/s",
        price: 1000000,
      },
      {
        id: 25,
        logo: "https://lagihitech.vn/wp-content/uploads/2022/08/SSD-Samsung-990-Pro-1TB-M2-PCIe-Gen-5.0-MZ-V9P1T0-hinh-3.jpg",
        name: "Ổ Cứng SSD Samsung 990 Pro 1TB M2 PCIe Gen 4.0 x 4 MZ-V9P1T0BW Best deal",
        url: "samsung-1tb",
        description: "Dung lượng 1TB, Tốc độ đọc ghi: 7450MB/s 6900MB/s, TBW: 600",
        price: 2000000,
      },
      {
        id: 26,
        logo: "//bizweb.dktcdn.net/thumb/grande/100/329/122/products/970-evo-plus-1tb-01-1689929004911.jpg?v=1694361771657",
        name: "SSD Samsung 970 EVO Plus 1TB PCIe NVMe V-NAND M.2 2280 MZ-V7S1T0BW",
        url: "samsung-1tb",
        description: "Chuẩn SSD: M.2 NVMe Gen3 x4, Tốc độ đọc: 3500 MB/s, Tốc độ ghi: 3300 MB/s",
        price: 1400000,
      },
    ],
  },
  {
    id: 27,
    logo: "https://png.pngitem.com/pimgs/s/26-260215_logo-kingston-hd-png-download.png",
    name: "Kingston",
    url: "kingston",
    products: [
      {
        id: 28,
        logo: "/media/product/18853_ssd_kingston_nv2_500gb_pcie_4_0_x4_nvme_m_2__snv2s_500g_.jpg",
        name: "Ổ cứng SSD Kingston NV2 500GB PCIe 4.0 x4 NVMe M.2 (SNV2S/500G)",
        url: "kingston-500gb",
        description: "Chuẩn SSD: M.2 NVMe Gen3 x4, Tốc độ đọc: 3500 MB/s, Tốc độ ghi: 3300 MB/s",
        price: 690000,
      },
      {
        id: 29,
        logo: "//product.hstatic.net/200000420363/product/1_e72af453cb5946d79af777eff75384e4_master.jpg",
        name: "Ổ Cứng SSD Kingston 500G NV2 | PCIe Gen4, M.2 NVMe, SNV2S/500G",
        url: "kingston-500gb-1",
        description: "SNV2S/500G, M.2 2280, 500GB",
        price: 700000,
      },
      {
        id: 30,
        logo: "https://hanoicomputercdn.com/media/product/67632_o_cung_ssd_kingston_snv2s_1tb_nvme_m__1_.jpg",
        name: "Ổ CỨNG SSD KINGSTON SNV2S 1TB NVME M.2 2280 PCIE GEN 4X4",
        url: "kingston-1tb",
        description: "Kích thước: M.2 2280, Giao diện: PCIe 4.0 x4 NVMe, Dung lượng: 1TB",
        price: 1200000,
      },
      {
        id: 31,
        logo: "//product.hstatic.net/200000420363/product/1_f81ef6b30bb34ffab78b2f493aa43428_master.jpg",
        name: "Ổ Cứng SSD 1TB Kingston NV2 | PCIe Gen4, M.2 NVMe, SNV2S/1000G",
        url: "kingston-1tb",
        description: "Kích thước: M.2 2280, Giao diện: PCIe 4.0 x4 NVMe, Dung lượng: 1TB, Tốc độ Đọc: 3,500MB/s; Ghi: 2,100MB/s",
        price: 1300000,
      },
    ],
  },
];

//Man hinh
export const monitorBrands = [
  {
    id: 32,
    logo: "https://images.samsung.com/is/image/samsung/assets/global/about-us/brand/logo/mo/256_144_1.png?$512_N_PNG$",
    name: "Samsung",
    url: "samsung",
    products: [
      {
        id: 33,
        logo: "//product.hstatic.net/200000420363/product/man-hinh-lcd-24-samsung-ls24r350fzexxv_1eb9340e2d7649f9b4bf2f2784d200a0_master.png",
        name: "Màn hình 24 inch Samsung LS24R350FZEXXV FHD IPS 75Hz Freesync Chính Hãng",
        url: "samsung-24inch",
        description: "Kích thước 23.8 inch, Tỷ lệ khung hình 16:9, Độ sáng 250cd/m2",
        price: 2600000,
      },
      {
        id: 34,
        logo: "https://www.sieuthimaychu.vn/datafiles/setone/16328023055730.jpg",
        name: "Màn Hình LCD Samsung 24inch FHD 75Hz LF24T350FHEXXV",
        url: "samsung-24inch",
        description: "Tấm nền IPS, Góc nhìn: 178 (H) / 178 (V), Tần số quét: 75Hz , Thời gian phản hồi 5 ms",
        price: 2700000,
      },
      {
        id: 35,
        logo: "https://lh3.googleusercontent.com/BQhFRVJJt-1kRsjvlf4OfQP5aWkL4tjfedbKBtvRCGtckpeTm9SI9cR6rcSW4hvJ5N8dxPwyhNhjObDF8jX5XlzPJoI-fYtA=w500-rw",
        name: "Màn hình LCD SAMSUNG 27inch LS27C360EAEXXV",
        url: "samsung-27inch",
        description: "Tấm nền VA, Góc nhìn: 178 (H) / 178 (V), Tần số quét: 75Hz , Thời gian phản hồi 4 ms, HIển thị màu sắc: 16.7 triệu màu",
        price: 3400000,
      },
      {
        id: 36,
        logo: "//product.hstatic.net/200000420363/product/ls27r350fhexxv_abba85318a1248a1917ae6830545b37f_master.jpg",
        name: "Màn hình 27 inch Samsung LS27R350FHEXXV IPS 75Hz Chính Hãng",
        url: "samsung-27inch-1",
        description: "Kích thước 26.8 inch, Tỷ lệ khung hình 16:9, Tấm nền IPS",
        price: 3500000,
      },
    ],
  },
  {
    id: 37,
    logo: "https://w7.pngwing.com/pngs/803/477/png-transparent-msi-logo-thumbnail.png",
    name: "MSI",
    url: "msi",
    products: [
      {
        id: 38,
        logo: "//product.hstatic.net/200000420363/product/man-hinh-lcd-24-msi-pro-mp241x_3150a28c5cde45aeacc276c0db337078_master.png",
        name: "Màn hình LCD 24 inch MSI Pro MP241X FHD VA 75Hz 8Ms",
        url: "msi-24inch",
        description: "Kích thước 26.8 inch, Model: MSI Pro MP241X, Độ sáng: 220 cd/m²",
        price: 2000000,
      },
      {
        id: 39,
        logo: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/a/gaming_14_2_.png",
        name: "Màn hình MSI PROMP243W 24 inch",
        url: "msi-24inch",
        description: "Kích thước 24 inch, độ phân giải Full HD mang đến trải nghiệm nhìn rõ nét",
        price: 2300000,
      },
      {
        id: 40,
        logo: "https://lh3.googleusercontent.com/yZlz5T21Jx9GZy9BIbI3Lrzn1LFNibJKrKpI3hPo1jRLadb2PhimDQeqA413JcESOJFzjbvtyI2r098sQAaMVeMLk79hM4z8=w500-rw",
        name: "Màn hình LCD MSI 27inch Pro MP273",
        url: "msi-27inch",
        description: "Kích thước: 27inch (1920 x 1080), Tỷ lệ 16:9, Kích thước: Tần số quét: 75Hz",
        price: 3200000,
      },
      {
        id: 41,
        logo: "https://lh3.googleusercontent.com/faiO1kVYn95SzjE-wnWptq-uiOXMXwK_UF6-2h0hrJSxwxljiaHm4rA9MU4e7PejLEQJXyqnC2Icw451v9AHZGvmzd8cDBMv=w500-rw",
        name: "Màn hình LCD MSI 27inch Optix G27C4X",
        url: "msi-27inch",
        description: "Kích thước: 27inch (1920 x 1080), Tỷ lệ 16:9, Tần số quét: 250Hz",
        price: 4800000,
      },
    ],
  },
];

//Chuot
export const mouseBrands = [
  {
    id: 42,
    logo: "https://ih0.redbubble.net/image.2999519614.5897/raf,360x360,075,t,fafafa:ca443f4786.jpg",
    name: "Logitech",
    url: "logitech",
    products: [
      {
        id: 43,
        logo: "//bizweb.dktcdn.net/thumb/grande/100/329/122/products/logitech-g403-01.jpg?v=1630418109683",
        name: "Chuột có dây Gaming Logitech G403 HERO 910-005634",
        url: "logitech-coday",
        description: "Loại sản phẩm: Chuột có dây, Độ phân giải: 25.600 DPI, Tốc độ báo cáo: 1000Hz (1ms)",
        price: 820000,
      },
      {
        id: 44,
        logo: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/f/r/frame_1_1__1_4.png",
        name: "Chuột có dây Gaming Logitech G203 Lightsync",
        url: "logitech-coday-1",
        description: "Đèn LED Lightsync RGB có thể tùy chỉnh màu theo tuỳ ý, Độ phân giải lên đến 8000 DPI giúp di chuột mượt mà",
        price: 500000,
      },
      {
        id: 45,
        logo: "https://lh3.googleusercontent.com/I6bdXxwM3NTqCFC01E5qlEv6reweFdmKi3dyC0NxRLp8kHg07rvctvXLWZcO5cKgQ2EBeOLxi8nrv-K5WbYEpLibbz4r5TYb=w500-rw",
        name: "Chuột gaming Logitech G402 (Đen)",
        url: "logitech-coday-2",
        description: "Cảm biến quang AM10 mạnh mẽ nhận diện tốt trên mọi bề mặt, 8 nút tuỳ chỉnh với phần mềm Logitech Gaming Software",
        price: 650000,
      },
      {
        id: 46,
        logo: "https://anphat.com.vn/media/product/33297_chu___t_logitech_g102_gen2_lightsync_apc.jpg",
        name: "Chuột Logitech G102 Gen2 LightSync",
        url: "logitech-coday-3",
        description: "Chuột Logitech G102 Gen2 LightSync, DPI từ 200 - 8000",
        price: 400000,
      },
      {
        id: 47,
        logo: "https://anphat.com.vn/media/product/26235_logitech_g304__1_.png",
        name: "Chuột Logitech G304 LIGHTSPEED Wireless",
        url: "logitech-khongday",
        description: "Độ phân giải: 12000DPI, Công nghệ không dây tiên tiến nhất Lightspeed",
        price: 750000,
      },
      {
        id: 48,
        logo: "https://lh3.googleusercontent.com/mpm_vqlIeh_n3AHPc0tlIZ1zS4QbrNXdx3KgOEwSnz_o4sdRaE2_s-b7o1Gb7jsqzMn1Kty_VoyYu4Quo8qIAhzBRL8wt4E4=w500-rw",
        name: "Chuột chơi game Logitech G304 Wireless (Đen)",
        url: "logitech-khongday-1",
        description: "Dạng cảm biến: HERO, Độ phân giải: 12000 DPI",
        price: 790000,
      },
      {
        id: 49,
        logo: "//bizweb.dktcdn.net/thumb/1024x1024/100/329/122/products/chuot-khong-day-logitech-lightspeed-g304-1.png?v=1694361618147",
        name: "Chuột không dây Logitech Lightspeed G304",
        url: "logitech-khongday-2",
        description: "Độ phân giải: 12000 DPI, Tốc độ báo cáo: 1000Hz",
        price: 720000,
      },
      {
        id: 50,
        logo: "/media/product/1666-logitech-g304-lightspeed-wireless-gaming-mouse---en.jpg",
        name: "Chuột không dây Logitech G304 Lightspeed Wireless Gaming Mouse",
        url: "logitech-khongday-3",
        description: "Độ phân giải: 12000 DPI, Chuẩn kết nối: Lightspeed Wireless",
        price: 760000,
      },
    ],
  },
  {
    id: 51,
    logo: "https://upload.wikimedia.org/wikipedia/vi/a/a1/Razer_snake_logo.png",
    name: "Razer",
    url: "razer",
    products: [
      {
        id: 52,
        logo: "https://lh3.googleusercontent.com/RTPOeR3mVP6mYl9jr9_CJIZn9c9PR8JUSG3A3c8ryj_anVFw7uEUkbfK2AalvO2nH0nIHSvxx4itBJOaza4wU833zMRJWQTgug=w500-rw",
        name: "Chuột gaming Razer DeathAdder Essential - RZ01-03850100-R3M1",
        url: "razer-coday",
        description: "Công tắc Cơ học Razer 10 triệu lần nhấp, Cảm Biến Quang Học 6.400 DPI",
        price: 450000,
      },
      {
        id: 53,
        logo: "https://anphat.com.vn/media/product/31864_31864_razer_deathadder_v2__13_1.jpg",
        name: "Chuột Razer DeathAdder V2",
        url: "razer-coday-1",
        description: "DPI tối đa 20.000, Nút bấm quang học 70 triệu click",
        price: 850000,
      },
      {
        id: 54,
        logo: "https://lh3.googleusercontent.com/brOCDTvay53Fagoe3p7gs_jLFp6c9XwFCNxYwxG9hff3e0lE40VnKgdVsewjns0CtZjZEz5F_Xhm5LmiBuokZATlbGHRFs4n=w500-rw",
        name: "Chuột gaming Razer Basilisk V3 (RZ01-04000100-R3M1)",
        url: "razer-coday-2",
        description: "Mắt cảm biến RAZER FOCUS+ 26000 DPI, Nút cuộn 4 chiều với tính năng tăng tốc ảo giúp cuộn nhanh hơn",
        price: 990000,
      },
      {
        id: 55,
        logo: "https://xgear.net/wp-content/uploads/2023/02/razer-viper-8khz-1-500x500.webp",
        name: "Chuột Razer Viper 8KHz (RZ01-03580100-R3M1)",
        url: "razer-coday-3",
        description: "Chuột Razer Viper 8KHz (RZ01-03580100-R3M1), DPI tối đa 20.000",
        price: 999000,
      },


      {
        id: 56,
        logo: "https://xgear.net/wp-content/uploads/2023/01/DA-V2-X-1-500x500.jpg",
        name: "Chuột không dây Razer Deathadder V2 X Hyperspeed (RZ01-04130100-R3A1)",
        url: "razer-khongday",
        description: "Chuột không dây Razer Deathadder V2 X Hyperspeed (RZ01-04130100-R3A1) Chuột không dây Razer Deathadder V2 X Hyperspeed (RZ01-04130100-R3A1) Thiết kế công thái học từng đoạt giải thưởng",
        price: 1050000,
      },
      {
        id: 57,
        logo: "https://hanoicomputercdn.com/media/product/55659_chuot_khong_day_razer_deathadder_v2_pro_rz01_03350100_r3a1_0002_3.jpg",
        name: "CHUỘT KHÔNG DÂY RAZER DEATHADDER V2 PRO (RZ01-03350100-R3A1)",
        url: "razer-khongday-1",
        description: "Kết nối : Wireless / Bluetooth / Cáp usb, Phiên bản wireless của huyền thoại Razer DeathAdder",
        price: 1700000,
      },
      {
        id: 58,
        logo: "https://anphat.com.vn/media/product/42623_razer_orochi_v2_white.jpg",
        name: "Chuột Razer Orochi V2 Wireless White",
        url: "razer-khongday-2",
        description: "2 kết nối không dây: 2.4 Ghz và Bluetooth, Cảm biến quang học với DPI lên tới 18.000",
        price: 989000,
      },
      {
        id: 59,
        logo: "//product.hstatic.net/1000333506/product/1573523114_71mnhvuvuvl._sl1500__470be7bad22a45ae8803d5d5925749ac_grande.jpg",
        name: "Razer Deathadder Elite Skt T1 Edition Ergonomic Gaming",
        url: "razer-khongday-3",
        description: "Cảm biến quang 16.000 DPI thật, Lên đến 450 IPS / tăng tốc 50 g",
        price: 1500000,
      },
    ],
  },
];

//Ban phim
export const keyboardBrands = [
  {
    id: 60,
    logo: "https://seeklogo.com/images/C/corsair-logo-6A2722AAB9-seeklogo.com.png",
    name: "Corsair",
    url: "corsair",
    products: [
      {
        id: 61,
        logo: "https://lh3.googleusercontent.com/1_OOCF4gUdYmC36ugWBsOKKLS_V6yMiM-RdUHjKXq6Jb0zBFF9AIb_uWHEdBs1t13edqMLggywBH2NRe3bDg9V4kBH-eLNAd=w500-rw",
        name: "Bàn phím cơ gaming Corsair K70 PRO BLK-MX Blue-RGB/CH-9109411-NA",
        url: "corsair-coday",
        description: "Bàn phím cơ, Kết nối: USB 3.0, Switch: Cherry MX Blue",
        price: 3550000,
      },
      {
        id: 62,
        logo: "//bizweb.dktcdn.net/thumb/grande/100/329/122/products/ban-phim-co-corsair-k70-rgb-pro-corsair-opx-ch-910941a-na.jpg?v=1675218569377",
        name: "Bàn phím cơ Corsair K70 RGB Pro Black CORSAIR OPX CH-910941A-NA",
        url: "corsair-coday-1",
        description: "Loại sản phẩm: Bàn phím cơ, Keyswitch: CORSAIR OPX, Dạng bàn phím: Fullsize",
        price: 3600000,
      },
      {
        id: 63,
        logo: "https://lh3.googleusercontent.com/qpdN0JbmutGBsmfR9Bj93UZIVBOJtHz9pmuvpRC-g3FMEpU8XIOulu4XZBHmG0C6zZPDCfGZtGsdy5Gvc5CFTUMKWXj4SB5q=w500-rw",
        name: "Bàn phím cơ CORSAIR K63",
        url: "corsair-coday-2",
        description: "Bàn phím cơ, Kiểu switch Cherry MX Red",
        price: 1780000,
      },
      {
        id: 64,
        logo: "//product.hstatic.net/200000722513/product/thumbphim_2ceafcd3b71942409b4724616258c73b_d44aa7fb2a70454d99b01bc9c1117f4f_master.png",
        name: "Bàn phím cơ Corsair K100 RGB",
        url: "corsair-coday-3",
        description: "Corsair OPX hoặc Cherry MX Speed, Keycap PBT Doubleshot",
        price: 5200000,
      },
      {
        id: 65,
        logo: "https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-se-productcard-tn.png",
        name: "Corsair",
        url: "corsair-khongday",
        description: "Không dây qua bluetooth  v4.2 hoặc usb receiver 2.4Ghz 1ms, 87 phím, Sạc pin:	Qua cổng usb vào máy tính",
        price: 2600000,
      },
      {
        id: 66,
        logo: "https://bizweb.dktcdn.net/100/329/122/products/ban-phim-co-khong-day-corsair-k70-pro-mini-rgb-white-1690118644260.jpg?v=1694361868913",
        name: "Bàn phím cơ không dây Corsair K70 PRO MINI RGB White MX RED/MX SPEED",
        url: "corsair-khongday-1",
        description: "Keyswitch: CHERRY® MX RED và SPEEED, Tần số gửi tín hiệu: Lên đến 8000Hz với AXON",
        price: 2290000,
      },
      {
        id: 67,
        logo: "https://bizweb.dktcdn.net/100/329/122/products/ban-phim-co-khong-day-corsair-k70-pro-mini-rgb-black-8-02060eb3-ce65-4545-9fa9-9ce56572ab00-1690118646852-93f161d7-950c-41ea-b89c-fac994c63bfb.jpg?v=1692600725363",
        name: "Bàn phím cơ không dây Corsair K70 PRO MINI RGB Black MX RED/MX SPEED",
        url: "corsair-khongday-2",
        description: "Keyswitch: CHERRY® MX RED và SPEEED, Tần số gửi tín hiệu: Lên đến 8000Hz với AXON",
        price: 2490000,
      },
      {
        id: 68,
        logo: "/media/product/17264-b--n-ph--m-c---corsair-k95-rgb-platinum-xt.png",
        name: "Bàn Phím Cơ Corsair K95 RGB PLATINUM XT - Blue/ Brown/ Red Cherry Switch",
        url: "corsair-khongday-3",
        description: "Keyswitch: CHERRY® MX RED và SPEEED, Tần số gửi tín hiệu: Lên đến 8000Hz với AXON",
        price: 4500000,
      },
    ],
  },
  {
    id: 69,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThOsz3FNcVDTBtmS725RtzMENKg-kO8vG8-P4DsEI&s",
    name: "Akko",
    url: "akko",
    products: [
      {
        id: 70,
        logo: "https://owlgaming.vn/wp-content/uploads/2023/05/ban-phim-co-monsgeek-mg108-black-cyan.jpg",
        name: "Bàn phím cơ MonsGeek MG108 Black & Cyan (White LED / AKKO cs switch)",
        url: "akko-khongday",
        description:"Kết nối: USB Type-C to Type-A (dây có thể tháo rời), LED nền đơn sắc (TRẮNG)",
        price: 1050000,
      },
      {
        id: 71,
        logo: "https://lh3.googleusercontent.com/VSREMIBoI8gnDAfOiGmnjc7XM_yfxLkV5a9OFTc6JLGLkEYwPQWCU84TH0-fxPtfsQQPxId8lu4fZ-k2vDKrZ5t1J_KXmC0BPA=w500-rw",
        name: "Bàn phím AKKO 3108 RF Ocean Star",
        url: "akko-khongday-1",
        description:"Kết nối: 2.4 GHz Wireless, USB Type-C, Switch: Akko Cream Yellow v3",
        price: 1490000,
      },
      {
        id: 72,
        logo: "//bizweb.dktcdn.net/thumb/1024x1024/100/329/122/products/ban-phim-co-akko-monsgeek-mg108-black-cyan-6.jpg?v=1692600731667",
        name: "Bàn phím cơ AKKO MonsGeek MG108 Black & Cyan",
        url: "akko-khongday-2",
        description: "Keyswitch: Akko CS Wine Red/ Wine White, Kết nối: USB",
        price: 1490000,
      },
      {
        id: 73,
        logo: "https://akkogear.com.vn/wp-content/uploads/2023/07/ban-phim-co-akko-3108-rf-world-tour-tokyo-01-510x631.jpg",
        name: "Bàn phím cơ AKKO 3108 RF World Tour Tokyo",
        url: "akko-khongday-3",
        description: "Keyswitch: Akko CS Wine Red/ Wine White, Kết nối: USB",
        price: 1900000,
      },
    ],
  },
];
