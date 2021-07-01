const product = document.getElementById("product");
const sell = document.getElementsByClassName("sell");

fetch('http://localhost:3000/product')
    .then(response => response.json())
    .then(data => {
        for (const key of data) {
            product.innerHTML += `
            <div class="product-card">
                <div class="img">
                <img class="img-product" src="${key.img}" alt="">
                <img class="img-product-hover" src="${key.imgHover}" alt="">
                <a href="">Quick View</a>
                </div>
                <p class="product-title">${key.title}</p>
                <p class="price">${key.price}</p>
                <p class="sell">Best Seller</p>
            </div>
        `
        }
    });

    fetch('http://localhost:3000/product')
    .then(response => response.json())
    .then(data => {
        for (const ty in data) {
            let type = data.filter((ty) => ty.data === "men");
            console.log(type);
        }
    }
    );