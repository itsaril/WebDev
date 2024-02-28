export interface Product {
  id: number;
  link: string;
  name: string;
  img: string[];
  price: number;
  description: string;
  rating: number;
  currentImageIndex: number;
}

export const products = [
  {
    id: 1,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/hcf/heb/84956503867422.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h1f/h98/84956503932958.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h24/hca/84956503998494.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/hd9/h2e/84956504129566.jpg?format=gallery-medium"],
    name: 'Сумка багет GUCCI 699514 DTDHT 9022 натуральная кожа белый, слоновая кость',
    price: 700000,
    description: 'тип сумки: сумка багет материал верха: натуральная кожа застежка: молния цвет: белый,слоновая кость для кого: для женщин',
    link: 'https://kaspi.kz/shop/p/sumka-baget-gucci-699514-dtdht-9022-natural-naja-kozha-belyi-slonovaja-kost--116021072/?m=513006&ref=shared_link',
    rating: 4.9,
    currentImageIndex:0,
  },
  {
    id: 2,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/hd6/h11/85162134994974.png?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h4a/h66/85162135060510.png?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h3e/h1c/85162135191582.png?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/hb3/hc8/85162135322654.png?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h95/ha5/85162135453726.png?format=gallery-medium"],
    name: 'Сумка кросс-боди CELINE 110413BF4.38NO натуральная кожа черный',
    price: 2035000,
    description: "тип сумки: сумка кросс-боди, способ ношения: на плече, через плечо, на руке, в руке , материал верха: натуральная кожа, застежка: защелка, для кого: для женщин, цвет: черный",
    link: 'https://kaspi.kz/shop/p/sumka-kross-bodi-celine-110413bf4-38no-natural-naja-kozha-chernyi-116609282/?c=750000000&sr=1&ref=shared_link',
    rating: 4,
    currentImageIndex:0,
  },
  {
    id: 3,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/h3a/h20/85135967453214.png?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/hca/hac/85135967518750.png?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/hd1/h29/85135967584286.png?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h13/h1b/85135967649822.png?format=gallery-medium"],
    name: 'Сумка кросс-боди Miu Miu 5BH226_2F7T_F0028_V_OOO шерсть розовый',
    price: 1356000,
    description: 'тип сумки: сумка кросс-боди , способ ношения: на плече, ,через плечо, ,на руке, ,в руке, материал верха: шерсть, застежка: молния, для кого: для женщин, цвет: розовый',
    link: 'https://kaspi.kz/shop/p/sumka-kross-bodi-miu-miu-5bh226-2f7t-f0028-v-ooo-sherst-rozovyi-116533665/?c=750000000&sr=6&ref=shared_link',
    rating: 4.5 ,
    currentImageIndex:0,
  },
  {
    id: 4,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/hb1/h47/85162244440094.jpg?format=gallery-medium", "https://resources.cdn-kaspi.kz/img/m/p/h96/h8c/85162244505630.jpg?format=gallery-medium", "https://resources.cdn-kaspi.kz/img/m/p/h06/h4a/85162244571166.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h21/h05/85162244636702.jpg?format=gallery-medium"],
    name: 'Сумка багет CELINE 193952FNM.05DS натуральная кожа карамельный, синий',
    price: 1155000,
    description: 'тип сумки: сумка багет\nспособ ношения: на плече, ,на руке,в руке\nматериал верха: натуральная кожа\nзастежка: молния\nдля кого: для женщин\nцвет: синий, ,карамельный',
    link: 'https://kaspi.kz/shop/p/sumka-baget-celine-193952fnm-05ds-natural-naja-kozha-karamel-nyi-sinii-116609285/?c=750000000&sr=11&ref=shared_link',
    rating: 4,
    currentImageIndex:0,
  },{
    id: 5,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/hd4/h5c/84533792997406.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h4d/h22/84533793226782.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h6f/h64/84533793423390.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h98/h61/84533793619998.jpg?format=gallery-medium"],
    name: 'Сумка тоут BOYY BOBBY 23 EPSOM/BUBBLE GUM натуральная кожа розовый',
    price: 832000 ,
    description: 'тип сумки: сумка тоут материал верха: натуральная кожа застежка: пряжка цвет: розовый для кого: для женщин',
    link: 'https://kaspi.kz/shop/p/sumka-tout-boyy-bobby-23-epsom-bubble-gum-natural-naja-kozha-rozovyi-114725884/?c=750000000&sr=30&ref=shared_link',
    rating:0,
    currentImageIndex:0,
  },{
    id:6,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/had/ha4/84804786782238.png?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h86/h9f/84804786978846.png?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h9b/hcd/84804787175454.png?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/hef/h3e/84804787961886.png?format=gallery-medium"],
    name: 'Сумка торба BOYY SQUARE SCRUNCHY SOFT MINKY EMERALD искусственный мех зеленый',
    price:462000 ,
    description: 'тип сумки: сумка торба материал верха: искусственный мех застежка: отсутствует цвет: зеленый для кого: для женщин',
    link: 'https://kaspi.kz/shop/p/sumka-torba-boyy-square-scrunchy-soft-minky-emerald-iskusstvennyi-meh-zelenyi-115719542/?c=750000000&sr=50&ref=shared_link',
    rating: 0,
    currentImageIndex:0,
  },{
    id:7,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/hf8/hf3/84163190030366.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/he8/h73/84163190095902.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h40/h62/84163190161438.jpg?format=gallery-medium"],
    name: 'Сумка кросс-боди Radley H8248629 натуральная кожа красный',
    price: 295394,
    description: 'тип сумки: сумка кросс-боди способ ношения: на плече материал верха: натуральная кожа застежка: молния для кого: для женщин цвет: красный',
    link: 'https://kaspi.kz/shop/p/sumka-kross-bodi-radley-h8248629-natural-naja-kozha-krasnyi-113755389/?c=750000000&sr=70&ref=shared_link',
    rating:0 ,
    currentImageIndex:0,
  }
  ,{
    id:8,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/hbe/h6a/83311142895646.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h9b/h3f/83311143878686.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h62/h74/83311145353246.jpg?format=gallery-medium"],
    name: 'Сумка тоут DOLCE&GABBANA Sicily Medium BB6002 AK108.8M417_U_231 натуральная кожа коричневый',
    price: 1490000 ,
    description: 'тип сумки: сумка тоут способ ношения: на плече материал верха: натуральная кожа застежка: магнит цвет: коричневый для кого: для женщин',
    link: 'https://kaspi.kz/shop/p/sumka-tout-dolce-gabbana-sicily-medium-bb6002-ak108-8m417-u-231-natural-naja-kozha-korichnevyi-112910869/?c=750000000&sr=4&ref=shared_link',
    rating: 0,
    currentImageIndex:0,
  },{
    id:9,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/ha0/hf8/84534544891934.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h6b/hd7/84534544957470.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h23/hae/84534545023006.jpg?format=gallery-medium"],
    name: 'Сумка тоут BOYY BOBBY SOFT/GRES натуральная кожа серый',
    price: 1040000,
    description: 'тип сумки: сумка тоут материал верха: натуральная кожа застежка: пряжка цвет: серый для кого: для женщин',
    link: 'https://kaspi.kz/shop/p/sumka-tout-boyy-bobby-soft-gres-natural-naja-kozha-seryi-114725885/?c=750000000&sr=18&ref=shared_link',
    rating: 0,
    currentImageIndex:0,
  },{
    id:10,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/h8a/hfb/84657600921630.jpg?format=gallery-medium"],
    name: 'Клатч 30049974_88899901 натуральная кожа черный',
    price: 1200000 ,
    description: 'тип сумки: клатч способ ношения: в руке, ,на плече, ,на поясе, ,на руке, ,через плечо материал верха: натуральная кожа застежка: ключевой замок, ,молния для кого: для мужчин цвет: черный',
    link: 'https://kaspi.kz/shop/p/klatch-30049974-88899901-natural-naja-kozha-chernyi-115164234/?c=750000000&sr=10&ref=shared_link',
    rating: 0,
    currentImageIndex:0,
  }
];