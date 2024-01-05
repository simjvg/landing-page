const data = [
  {
  name: 'Auriculares Ear Force Recon',
  img: 'imagen1.jpg',
  price: 24.95,
  description: 'Chat cristalino: un micrófono ajustable y de alta sensibilidad capta tu voz fuerte y clara, y se puede quitar al ver películas o escuchar música',
  enlace: 'https://www.amazon.com/-/es/Auriculares-Ear-Force-Recon-Consola-videojuegos/dp/B00YXO5U40/ref=sr_1_1?_encoding=UTF8&content-id=amzn1.sym.8148f1e1-83ed-498f-85be-ff288b197da7&keywords=gaming+headsets&pd_rd_r=fb80249a-e1e3-4497-902c-cdd5dc5959aa&pd_rd_w=It5aY&pd_rd_wg=LlO9j&pf_rd_p=8148f1e1-83ed-498f-85be-ff288b197da7&pf_rd_r=W8QSXXKS3KBX30Y1KM6X&qid=1703690659&sr=8-1'
},
  {
  name: 'Snpurdiri Combo de teclado y mouse inalámbricos',
  img: 'imagen2.jpg',
  price: 46.95,
  description: '【Combo de teclado y mouse para juegos adecuado】El equipo de Snpurdiri ha estado trabajando duro para desarrollar el combo de juegos del tamaño justo que pueda equilibrar perfectamente el trabajo y los juegos.',
  enlace: 'https://www.amazon.com/Snpurdiri-inalámbricos-recargable-retroiluminación-membrana/dp/B0B7QQ4ZXC/ref=sr_1_2_sspa?crid=3OMFRLOKD604P&keywords=gaming%2Bkeyboard%2Band%2Bmouse&qid=1703691020&sprefix=gaming%2BKE%2Caps%2C445&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1'
},
  {
  name: 'ASUS Portátil para juegos ROG Strix G15 (2022)',
  img: 'imagen3.jpg',
  price: 950,
  description: '15" 16:10 FHD 144Hz, GeForce RTX 3050, AMD Ryzen™ 7 6800H/HS, 16GB DDR5, 512GB PCIe SSD, Wi-Fi 6E, Windows 11, G513RC-ES73, Eclipse Gray'
  enlace: 'https://www.amazon.com/-/es/ASUS-Portátil-para-juegos-Strix/dp/B0C25TM3JW/ref=sr_1_3?crid=1915WRQR2YCC3&keywords=gaming%2BLaptop&qid=1703691340&sprefix=gaming%2B%2Caps%2C255&sr=8-3&th=1',
},
{
  name: 'PlayStation DualSense',
  img: 'imagen4.jpg',
  price: 64,
  description: 'Da vida a los mundos de los juegos: siente tus acciones en el juego y el entorno simulado a través de la respuesta táctil. Experimenta diferentes fuerzas y tensiones al alcance de tu mano con los disparadores adaptables'
  enlace: 'https://www.amazon.com/-/es/PlayStation-DualSense-Wireless-Controller-Midnight-5/dp/B094WL86N5/ref=sr_1_3?crid=UTEZTZ8XRSCP&keywords=gaming%2Bcontroller&qid=1703691390&sprefix=gaming%2BCON%2Caps%2C376&sr=8-3&th=1'
},
{
  name: 'ASUS ROG Phone 6 Diablo Immortal Edition',
  img: 'imagen5.jpg',
  price: 599,
  description: 'Teléfono celular, 6.78 pulgadas FHD+ 2448x1080 165Hz, batería de 6000mAh, cámara de 50MP/13MP/5MP, 12MP frontal, 16GB RAM, 512GB de almacenamiento, 5G LTE'
  enlace: 'https://www.amazon.com/-/es/ASUS-Phone-Diablo-Immortal-AI2201-16G512G-DB/dp/B0BMP5GKJS/ref=sr_1_3?__mk_es_US=ÅMÅŽÕÑ&crid=2ZUZBC09XGCHE&keywords=gaming%2BIphone%2Bphone%2BROG&qid=1703691510&sprefix=gaming%2BIphone%2Bphone%2Brog%2Caps%2C163&sr=8-3&th=1'
},
{
  name: 'NIONIK Silla de videojuegos',
  img: 'imagen6.jpg',
  price: 159,
  description: 'silla de computadora con reposapiés y soporte lumbar de masaje, silla ergonómica de videojuegos para oficina, silla de jugadores para adultos con altura y respaldo ajustables (negro y rojo)'
  enlace: 'https://www.amazon.com/videojuegos-computadora-reposapiés-ergonómica-ajustables/dp/B0CMCWYM7D/ref=sr_1_1_sspa?crid=3RLNRGPCCE02B&keywords=gaming+Chair&qid=1703691558&sprefix=gaming+%2Caps%2C171&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'
}
];

// Función para cargar productos en el banner
function cargarProductosEnBanner() {
  const productBanner = document.getElementById('productBanner');

  // Iterar sobre los datos de productos y agregar al banner
  data.forEach(producto => {
      const productItem = document.createElement('div');
      productItem.className = 'product-item';

      const imgDiv = document.createElement('div');
      imgDiv.className = 'product-item_img';
      imgDiv.style.backgroundImage = `url('${producto.img}')`;

      const contentDiv = document.createElement('div');
      contentDiv.className = 'product-item_content';

      const title = document.createElement('h4');
      title.textContent = producto.name;

      const price = document.createElement('b');
      price.textContent = `S/ ${producto.price}`;

      const description = document.createElement('p');
      description.textContent = producto.description;

      contentDiv.appendChild(title);
      contentDiv.appendChild(price);
      contentDiv.appendChild(description);

      productItem.appendChild(imgDiv);
      productItem.appendChild(contentDiv);

      productBanner.appendChild(productItem);
  });
}

// Llamar a la función para cargar productos al cargar la página
window.onload = cargarProductosEnBanner;