let num = 1;
document.getElementById("btn-reduce-product").onclick = btnReduce;
document.getElementById("btn-add-product").onclick = btnAdding;

function btnReduce() {
    if(num >= 2){
        num -= 1;
    }
    document.getElementById("count-number").value = parseInt(num);
}
function btnAdding() {
    if(num < 100){
        num+=1;
    }
    document.getElementById("count-number").value = parseInt(num)
}




const collapse = document.getElementsByClassName("info");

for (let i = 0 ; i< collapse.length; i++) {
    collapse[i].addEventListener("click", function(){
        this.classList.toggle("active");
        
        let content = this.nextElementSibling;
        let elToggle = this.getElementsByTagName('div');

        if (content.style.display === 'block') {
            content.style.display = 'none';
            elToggle.children[0].style.display = 'none';
            elToggle.children[1].style.display = 'block';
        } else {
            content.style.display = 'block';
            elToggle.children[0].style.display = 'block';
            elToggle.children[1].style.display = 'none'
        }
    })
    
}


// api show product
const product = document.getElementById("product");

fetch("http://localhost:3000/product")
    .then((response) => response.json())
    .then((data) => {
        
        for (const key of data) {
            // key = Storage.getItem(key);
            // let a = localStorage.getItem("myValue");
            product.innerHTML += `
            <div class="product-card" id="product-card">
                <div>${key.id}</div>
                <div class="image">
                <img class="img-product" src="${key.img}" alt="">
                <img class="img-product-hover" src="${key.imgHover}" alt="">
            </div>
            <div class="des">
                <h1>${key.title}</h1>
                <p class="price">${key.price}</p>
            </div>
        `;
        }
    });

