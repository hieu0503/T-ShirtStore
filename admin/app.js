const product = document.getElementById("list-product");
const form = document.getElementById("add-product");

fetch("http://localhost:3000/product")
    .then((response) => response.json())
    .then((data) => {
        for (const key of data) {
            product.innerHTML +=`
            <table class="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Image</th>
                    <th scope="col">Price</th>
                    <th scope="col">Description</th>
                    <th scope="col">Type</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>${key.id}</th>
                        <td>${key.title}</td>
                        <td style="width="150px" height="225px" alt=""">${key.img}</td>
                        <td>${key.price}</td>
                        <td>${key.des}</td>
                        <td>${key.type}</td>
                        <td>
                            <button class="${key.id}">Update</button>
                            <button class="del" id="del">Delete</button>
                            <br>
                            <a href="./add-product.html"><button class="add" id="add" style="width: 110px; margin-top:5px">Add</button></a>
                        </td>
                    </tr>
                </tbody>
            </table>
                `
                const del = document.getElementById("del").parentElement;
                del.onclick = () => {
                  fetch(`http://localhost:3000/product/${key.id}`,{
                    method: 'DELETE'
                  })
                }
        }
    }
     );

form.onsubmit = function() {
    fetch('http://localhost:3000/product',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title:`${form.title.value}`,
            img:`${form.img.value}`,
            price:`${form.price.value}`,
            type:`${form.type.value}`,
            des:`${form.des.value}`
            
        })
        
    })

}

