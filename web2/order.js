const orderQuantity = document.getElementById('orderQuantity');
const singlePrice = document.getElementById('singleprice');
const totalPrice = document.getElementById('totalprice');
const singlePriceText = parseFloat(singlePrice.textContent);

 orderQuantity.addEventListener("change", function() {
  const quantity = orderQuantity.value;
  const totalAmount = singlePriceText * quantity;

  totalPrice.innerHTML = totalAmount;
 })
totalPrice.innerHTML = singlePriceText;


let dateInput = document.getElementById("start-date");
dateInput.min = new Date().toISOString().slice(0,new Date().toISOString().lastIndexOf(":"));
//new Date().toISOString() = convert date format to something like this "2023-09-09T12:34:56.789Z"

//.slice(0, new Date().toISOString().lastIndexOf(":")) = .slice(0,(ending part)): .slice(0) mean extract the string start from the index 0 of the string aka the first word until the end

//new Date().toISOString().lastIndexOf(":") = tell the system need to extract until where,  in this case we will extract the time string until the last ":" (e.g., ":56.789Z")


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
        closePopup.addEventListener("click",function(){
            popupOrder.classList.remove("active");
            
        })
    }else if(orderQuantity.value<=0){
        popupTextTitle.innerHTML=("Invalid Quantity")
        popupText.innerHTML=("Quantity must be at least one")
        closePopup.addEventListener("click",function(){
            popupOrder.classList.remove("active");
            orderQuantity.focus();
        })
    }else if(orderQuantity.value> 20){
        popupTextTitle.innerHTML=("Order Quantity out of limit")
        popupText.innerHTML=("Maximum 20 per order")
        closePopup.addEventListener("click",function(){
            popupOrder.classList.remove("active");
            orderQuantity.focus();
        })
    }else if(dateInput.value == ''){
        popupTextTitle.innerHTML=("Invalid Time")
        popupText.innerHTML=("Please fill in the appointment time")
        closePopup.addEventListener("click",function(){
            popupOrder.classList.remove("active");
            dateInput.focus();
        })
    }

})
