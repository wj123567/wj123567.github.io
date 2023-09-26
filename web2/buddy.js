 //follow button
 let favouriteButton = document.getElementById("favouriteButton");
 let added = false;

 favouriteButton.addEventListener('click', ()=>{
     added = !added;

     if(added){
         favouriteButton.textContent="Added";
         favouriteButton.style.background="hsl(332, 66%, 55%)"
     }else{
         favouriteButton.textContent="+ Favourite"
         favouriteButton.style.background="hsl(266, 39%, 17%)"
     }
 })

 //slide image
 const imgs = document.querySelectorAll(".imageSelect a");// select all photo in a tag
 const imgBtns = [...imgs];// put all the photo into array
 let imgId = 1;// initialize the value


 imgBtns.forEach((imgItem)=>{
     imgItem.addEventListener('click',(event)=>{   // add click event listeners to imgItem
         event.preventDefault(); // prevent going to the image location
         imgId = imgItem.dataset.id;  // update the selected image from the data-id attribute
         slideImage(); // slide to the selected image
     });

 });

 function slideImage(){ // function for slideImage
         // calculate the display width of a single image
     const displayWidth = document.querySelector('.productImg img:first-child').clientWidth;
        // apply css transform to slide the image
     document.querySelector('.productImg').style.transform =`translateX(${- (imgId - 1) * displayWidth}px)`;
 }

 // adjust image position base on the windwos size
 window.addEventListener('resize', slideImage);

 //switch between div

 let aboutbuddy=document.getElementById("aboutbuddy");
 let comment=document.getElementById("comment");
 let skill=document.getElementById("skill");
 let gift=document.getElementById("gift");
 let aboutdiv=document.getElementById("aboutdiv");
 let commentdiv=document.getElementById("commentdiv");
 let skilldiv=document.getElementById("skilldiv");
 let giftdiv=document.getElementById("giftdiv");

 aboutbuddy.onclick=function(){
     aboutdiv.style.display=("block");
     commentdiv.style.display=("none");
     skilldiv.style.display=("none");
     giftdiv.style.display=("none");
     aboutbuddy.classList.add('active');
     comment.classList.remove('active');
     skill.classList.remove('active');
     gift.classList.remove('active');
 }

 comment.onclick=function(){
     aboutdiv.style.display=("none");
     commentdiv.style.display=("block");
     skilldiv.style.display=("none");
     giftdiv.style.display=("none");
     aboutbuddy.classList.remove('active');
     comment.classList.add('active');
     skill.classList.remove('active');
     gift.classList.remove('active');
 }

 skill.onclick=function(){
     aboutdiv.style.display=("none");
     commentdiv.style.display=("none");
     skilldiv.style.display=("block");
     giftdiv.style.display=("none");
     aboutbuddy.classList.remove('active');
     comment.classList.remove('active');
     skill.classList.add('active');
     gift.classList.remove('active');
 }

 gift.onclick=function(){
     aboutdiv.style.display=("none");
     commentdiv.style.display=("none");
     skilldiv.style.display=("none");
     giftdiv.style.display=("grid");
     aboutbuddy.classList.remove('active');
     comment.classList.remove('active');
     skill.classList.remove('active');
     gift.classList.add('active');
 }