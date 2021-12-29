
var products = [
  {
    id: 1,
    image: "img/AKKO 1.jpg",
    name: "Keyboard AKKO 3087 DS Midnight R2  ",
    text: "Keycap: PBT Double-Shot, Cherry profile <br> Akko switch (Blue/Orange/Pink) v2",
    price: 1299000,
  },
  {
    id: 2,
    image: "img/logitech-g102.jpg",
    name: "Logitech G102 Lightsync RGB Black ",
    text: "New 100% - Fullbox ",
    price: 400000,
  },
  {
    id: 3,
    image: "img/microsoft-surface-studio-laptop.jpg",
    name: "Microsoft Surface Laptop Studio",
    text: "Intel Core i5 11300H <br> RAM 16GB, 512GB m.2 NVMe, 14.4 120Hz (2400 x 1600)",
    price: 49990000,
  },
  {
    id: 4,
    image: "img/pc.jpg",
    name: "PC Gaming - PCAP ASUS TUF ULTRA 1",
    text: "CPU AMD Ryzen 7 5800X <br> Tản nhiệt nước CPU ASUS TUF Gaming LC 240 <br> Mainboard ASUS TUF GAMING X570-PLUS AM4 ",
    price: 1740000,
  },
  {
    id: 5,
    image: "img/macbook-pro-16-inch-large.jpg",
    name: "Macbook pro 16 inch ",
    text: "Apple M1 Pro (10 Core)<br> RAM 16GB, 512GB NVMe <br> Apple GPU (16 Cores) ",
    price: 69990000,
  },
];

var product_list = document.getElementById("item-list");

for (var product of products) {
  product_list.innerHTML += `<div class="card" style="width: 16rem; col-6 col-sm-4 col-lg-3 mt-3 p-3 ">
                               <div class="product-img">
                                 <img src="${product.image}" alt="Product">
                               </div>
                               
                               <div class="product-name">${product.name}</div>
                               <div class="product-text">${product.text}</div>
                               <div class="product-price"> <strong>${product.price} VNĐ</strong></div>

                             </div>`;
}
 

