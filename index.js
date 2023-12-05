// Click main image to show light box 
let imgBtn = document.getElementById("imgBtn");
imgBtn.addEventListener("click", (a)=>{
    console.log(document.body.offsetWidth)
    if(document.body.offsetWidth >= "375") {
        console.log("entered")
        document.getElementById("lightBox").style.display = "flex";
        document.getElementById("closeBtn").addEventListener("click", ()=>{
            document.getElementById("lightBox").style.display = "none";
        })
    }
})

// Onclick function to change main image when clicked on thumbnail
var j = 0;
document.getElementById(`mainThumb1`).style.border = "2px solid hsl(26, 100%, 55%)"
document.getElementById(`mainThumb1`).style.filter = "opacity(50%)"
function changeMainImg(a, i) {
    document.getElementById(`mainThumb1`).style.border = "none"
    document.getElementById(`mainThumb1`).style.filter = "opacity(100%)"
    document.getElementById("mainImg").src = a;
    document.getElementById(`mainThumb${i}`).style.border = "2px solid hsl(26, 100%, 55%)"
    document.getElementById(`mainThumb${i}`).style.filter = "opacity(50%)"
    if(j!=0){
        document.getElementById(`mainThumb${j}`).style.border = "none"
        document.getElementById(`mainThumb${j}`).style.filter = "opacity(100%)"
    }
    j = i;
}



// Onclick function to show same main image in light box main image when clicked on main image
let imageNo;
let k = 0
let i;
function mainLightImg(){
    if(document.body.offsetWidth >= "375") {
        document.getElementById("lightBoxImg").src = document.getElementById("mainImg").src;
        // console.log(document.getElementById("lightBoxImg").src)
        if(document.getElementById("lightBoxImg").src=="http://127.0.0.1:5501/ecommerce-product-page-main/images/image-product-1.jpg"){
            imageNo = 4
            i = 1
            console.log("1")
        }
        else if(document.getElementById("lightBoxImg").src=="http://127.0.0.1:5501/ecommerce-product-page-main/images/image-product-2.jpg"){
            imageNo = 1
            i = 2
            console.log("2")
        }
        else if(document.getElementById("lightBoxImg").src=="http://127.0.0.1:5501/ecommerce-product-page-main/images/image-product-3.jpg"){
            imageNo = 2
            i = 3
            console.log("3")
        }
        else if(document.getElementById("lightBoxImg").src=="http://127.0.0.1:5501/ecommerce-product-page-main/images/image-product-4.jpg"){
            imageNo = 3
            i = 4
            console.log("4")
        }
        document.getElementById(`thumb${i}`).style.border = "2px solid hsl(26, 100%, 55%)"
        document.getElementById(`thumb${i}`).style.filter = "opacity(50%)"
        if(k!=0){
            // console.log("hi")
            document.getElementById(`thumb${k}`).style.border = "none"
            document.getElementById(`thumb${k}`).style.filter = "opacity(100%)"
        }
        k = i;
    }
    console.log(i)
}
// console.log(imageNo)

// Onclick function to change main image of light box when clicked on thumbnail
function changeLightImg(a, i) {
    document.getElementById("lightBoxImg").src = a;
    document.getElementById(`thumb${i}`).style.border = "2px solid hsl(26, 100%, 55%)"
    document.getElementById(`thumb${i}`).style.filter = "opacity(50%)"
    if(j!=0){
        document.getElementById(`thumb${j}`).style.border = "none"
        document.getElementById(`thumb${j}`).style.filter = "opacity(100%)"
    }
    j = i;
}

let imageSources  =  [
    "./images/image-product-1.jpg",
    "./images/image-product-2.jpg",
    "./images/image-product-3.jpg",
    "./images/image-product-4.jpg",
]

// Change image on click on next or previous button
function changeLightImgBtn(index){
    imageNo = (imageNo + index)%4;
    // console.log(imageNo);
    document.getElementById("lightBoxImg").src = imageSources[imageNo];
    document.getElementById(`thumb${imageNo+1}`).style.border = "2px solid hsl(26, 100%, 55%)"
    document.getElementById(`thumb${imageNo+1}`).style.filter = "opacity(50%)"
    if(imageNo==0){
        imageNo = 4
    } 
    if(index==1){
        document.getElementById(`thumb${imageNo}`).style.border = "none"
        document.getElementById(`thumb${imageNo}`).style.filter = "opacity(100%)"     
    }
    else{
        let imageValue
        if(imageNo==4){
            imageValue = 0
        }
        else if(imageNo==3){
            imageValue = -1
        }
        else{
            imageValue = imageNo
        }
        document.getElementById(`thumb${imageValue+2}`).style.border = "none"
        document.getElementById(`thumb${imageValue+2}`).style.filter = "opacity(100%)"
    }
}

// click on cart icon in navbar to show cart status
let cartBtn = document.getElementById("emptyCart");
let cartModal = document.getElementById("cartModal");
cartBtn.style.outline = "none"

cartBtn.addEventListener("click", ()=>{
    cartModal.style.display = 'flex';
})

// click outside of it to hide cart status
document.addEventListener('click', function(event) {
    if (event.target !== cartBtn && event.target !== cartModal && !cartModal.contains(event.target)) {
        cartModal.style.display = 'none';
    }
});

// Qunatity selection on click on plus or minus
let quantity = document.getElementById("quantity");
let plusBtn = document.getElementById("plusBtn");
plusBtn.addEventListener("click", ()=>{
    quantity.innerHTML++;
})
let minusBtn = document.getElementById("minusBtn");
minusBtn.addEventListener("click", ()=>{
    if(quantity.innerHTML != 0){
        quantity.innerHTML--;
    }
})

// Display product details in cart icon in navbar
let addToCart = document.getElementById("cartBtn");
addToCart.addEventListener("click", ()=>{
    if(quantity.innerText==0){
        alert("Please choose proper quantity")
        // confirm("Please choose proper quantity")
        // console.log("Please choose proper quantity")
    }
    else{
        document.getElementById("products").innerHTML = `
        <img src="images/image-product-1-thumbnail.jpg" alt="">
        <div id="details">
          <p id="title">Fall Limited Edition Sneakers</p>
          <div id="total">
            <p>$125.00 x ${quantity.innerText}</p>
            <b>$${125 * (quantity.innerText)+".00"}</b>
          </div>
        </div>
        `
        document.getElementById("delete").style.display = "flex"
        document.getElementById("checkBtn").style.display = "flex"
        document.getElementById("nProducts").style.display = "flex"
        document.getElementById("nProducts").innerText = quantity.innerText;
    }
})

// Delete products from cart
function deleteProduct(){
    document.getElementById("products").innerHTML = `<p id="empty">Your cart is empty.</p>`;
    document.getElementById("delete").style.display = "none"
    document.getElementById("checkBtn").style.display = "none"
    document.getElementById("nProducts").style.display = "none"
}

// Show navbar links on click on menu icon
let menu = document.getElementById("menu");
menu.addEventListener("click", ()=>{
    document.getElementById("container1").style.width = "100vw"
    document.getElementById("container1").style.transition = "width 1s"
})

// Hide navbar links on click on close icon
let closeBtn = document.getElementById("close");
closeBtn.addEventListener("click", ()=>{
    document.getElementById("container1").style.transition = "width 1s"
    document.getElementById("container1").style.width = "0"
})








