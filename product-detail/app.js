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