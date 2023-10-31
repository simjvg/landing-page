//? MODO 1
//!ERROR
        // Obtener datos de la API
        fetch('https://dummyjson.com/products')
            .then((response) => response.json())
        //    .then (response => console.log(response))
              .then((data) => {
                const productContainer = document.getElementById('product-container');
                
                data.forEach(productData => {
                    const articleElement = document.createElement('article');

                    const productImage = document.createElement('img');
                    productImage.src = productData.thumbnail;
                    articleElement.appendChild(productImage);

                    const productTitle = document.createElement('div');
                    productTitle.classList.add('product-title');
                    productTitle.textContent = productData.title;
                    articleElement.appendChild(productTitle);

                    const productDescription = document.createElement('div');
                    productDescription.classList.add('product-description');
                    productDescription.textContent = productData.description;
                    articleElement.appendChild(productDescription);

                    const productPrice = document.createElement('div');
                    productPrice.classList.add('product-price');
                    productPrice.textContent = `S/. ${productData.price}`;
                    articleElement.appendChild(productPrice);

                    productContainer.appendChild(articleElement);
                });
            });
//? MODO 2
//! ERROR
/*
// Obtener datos de la API
async function getData() {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json(); // obtener el objeto
      // console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  
  // Mostrar datos en el navegador
  async function showData() {
    const products = await getData(); // asignar el objeto
    const productContainer = document.getElementById('product-container');
  
    products.forEach((productData) => {
      const articleElement = document.createElement('article');
  
      const productImage = document.createElement('img');
      productImage.src = productData.thumbnail;
      articleElement.appendChild(productImage);
  
      const productTitle = document.createElement('div');
      productTitle.classList.add('product-title');
      productTitle.textContent = productData.title;
      articleElement.appendChild(productTitle);
  
      const productDescription = document.createElement('div');
      productDescription.classList.add('product-description');
      productDescription.textContent = productData.description;
      articleElement.appendChild(productDescription);
  
      const productPrice = document.createElement('div');
      productPrice.classList.add('product-price');
      productPrice.textContent = `S/. ${productData.price}`;
      articleElement.appendChild(productPrice);
  
      productContainer.appendChild(articleElement);
    });
  }
  
  showData();
*/
  