const product = document.getElementById("product");

fetch('http://localhost:3000/product')
    .then(response => response.json())
    .then(data => {
        for (const key of data) {
            product.innerHTML += `
        <div class="img">
            <img class="img-product" src="${key.img}" alt="">
            <img class="img-product-hover" src="${key.imgHover}" alt="">
            <a href="">Quick View</a>
        </div>
        <p class="product-title">${key.title}</p>
        <p class="price">${key.price}</p>
        <p class="sell">Best Seller</p>
        `
        }

    });