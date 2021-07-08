const product=document.getElementById("product");
const cmt = document.getElementById("comment");
const sum = document.getElementById("summary"); 
const ttsum = document.getElementById("title-sum");
const mycart = document.getElementById("mycart");
fetch('http://localhost:3000/product')
    .then ( response => response.json())
    .then (data => {
        let sumcart = Number(0); 
        let total = Number(0);
        for (const key of data) {

            if (key.cart!=0) {

                let money= key.price * key.cart;
                let   productMoney = key.price *1; 
                let  num = key.cart;
                total = parseFloat(total) + money; 
                sumcart = sumcart + key.cart;
    
                    product.innerHTML += `
                    <ul> 
                    <div class="img">
                        <img class="product-img" src="${key.img}" alt="">
                        <div> 
                        <p class="product-title"> ${key.title}</p>
                        <p class="product-cost">${key.price}$</p>
                        </div>
                    </div>
                     
                    <div id ="form" class="input-group">
                    <span id="minus" type ="button" > -     </span>
                    <p id="quan" type="number"> ${num} </p>
                    <span id="plus"> +    </span>
                    </div>
                    <p class="product-subtotal" id="totalMoney">${money}$</p>
                    <button id="delete${key.id}" > x </button>
                    </ul>`
    
                   
    
            if (sumcart != 0) {
    
                ttsum.innerHTML = `Order Summary`
                sum.innerHTML = `
                <table> 
                    <tr> 
                        <td width=330>Subtotal</td>
                        <td id="subtotal" style ="text-align:right">${total} $</td>
                    </tr> 
                    <tr> 
                        <td>Shipping</td>
                        <td style ="text-align:right"> FREE</td>
                    </tr> 
                    <tr> 
                        <td style="font-st"> <ins> Viet Nam </ins></td>
                    </tr>
                </table>
                <table style="font-size:30px"> 
                    <tr> 
                        <td width=330>Total</td>
                        <td id="finaltotal"> ${total}$</td>
                    </tr> 
                </table>
                <button id="checkout">
                <i class="fas fa-shopping-bag">  Checkout</i>
                </button>
                `
                //tăng giảm số lượng thay đổi tiền và tổng tiền: 
                const sub=document.getElementById("subtotal");
                const final= document.getElementById("finaltotal");
                let quan = document.getElementById("quan");
                let t = document.getElementById("totalMoney"); 
                let plus = document.getElementById("plus");
                //tăng số lượng
                plus.onclick = function (e) {
                 e.preventDefault();
                 money=money+productMoney;
                 console.log(money);
                 t.innerText=`${money}$`;
                 num=num+1;
                 quan.innerText = `${num}`;
                 total=total + productMoney;
                 sub.innerText=`${total}$`;
                 final.innerText=`${total}$`;
                }
                //giảm số lượng
                
                let minus= document.getElementById("minus");
                minus.onclick = function() {
                    money=money-productMoney;
                    console.log(money);
                    t.innerText=`${money}$`;
                    num=num-1;
                    quan.innerText = `${num}$`;
                    total=total - productMoney;
                    sub.innerText=`${total}$`;
                    final.innerText=`${total}$`;
                   }
                //xóa lựa chọn: 
                   var del = document.getElementById(`delete${key.id}`).parentElement; 
                   del.onclick = function(event) {
                       event.preventDefault();
                       fetch(`http://localhost:3000/product/${key.id}`,
                       {
                               method: 'DELETE',
                       })  
                   }
            //Không có gì trong giỏ hàng
            } else {
                ttsum.style.border="none";
                mycart.style.width="1200px";
                mycart.style.margin="200px 0px 30px 350px"
                product.innerHTML=`
                <div class ="noproduct"> 
                <p> Cart is empty </p> 
                <a href="./home"> Continue Shopping </a>
                </div>`
                cmt.style.display="none";
            }

            }

    }
}
     )

