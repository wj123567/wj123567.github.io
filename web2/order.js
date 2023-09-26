const orderQuantity = document.getElementById('orderQuantity');
const singlePrice = document.getElementById('singleprice');
const totalPrice = document.getElementById('totalprice');
const singlePriceText = parseFloat(singlePrice.textContent);

 function updateTotalPrice() {
  const quantity = orderQuantity.value;
  const totalAmount = singlePriceText * quantity;

  totalPrice.innerHTML = totalAmount;
 }
totalPrice.innerHTML = singlePriceText;
orderQuantity.addEventListener('input', updateTotalPrice);

let dateInput = document.getElementById("start-date");
dateInput.min = new Date().toISOString().slice(0,new Date().toISOString().lastIndexOf(":"));


const confirmOrder=document.getElementById("confirmOrder");
const popupOrder=document.getElementById("popupOrder")
const closePopup=document.getElementById("closePopup");
const popupTextTitle =document.getElementById("popupTextTitle");
const popupText =document.getElementById("popupText");

confirmOrder.addEventListener("click", function(){
    popupOrder.classList.add("active");
    if(orderQuantity.value>0&&orderQuantity.value<=20 && dateInput.value != ''){
        popupTextTitle.innerHTML=("Thank For Purchases")
        popupText.innerHTML=("Our buddy will contact you in a while")
    }else if(orderQuantity.value<=0){
        popupTextTitle.innerHTML=("Invalid Quantity")
        popupText.innerHTML=("Quantity must be at least one")
    }else if(orderQuantity.value> 20){
        popupTextTitle.innerHTML=("Order Quantity out of limit")
        popupText.innerHTML=("Maximum 20 per order")
    }else if(dateInput.value == ''){
        popupTextTitle.innerHTML=("Invalid Time")
        popupText.innerHTML=("Please fill in the appointment time")
    }

})
closePopup.addEventListener("click",function(){
    popupOrder.classList.remove("active");

})