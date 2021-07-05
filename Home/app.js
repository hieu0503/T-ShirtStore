const product = document.getElementById("product");

fetch("http://localhost:3000/product")
    .then((response) => response.json())
    .then((data) => {
        for (const key of data) {
            product.innerHTML += `
            <div class="product-card">
                    <div class="img">
                    <a href="../product-detail/index.html">
                        <img class="img-product" src="${key.img}" alt="">
                        <img class="img-product-hover" src="${key.imgHover}" alt=""></a>
                        <p><a href="../product-detail/index.html">Quick View</a></p>
                    </div>
                    <p class="product-title">${key.title}</p>
                    <p class="price">${key.price}</p>
                    
                </div>
        `;
        }
    });
