function plusFAQ( element, name) 
{
    var firstarray = element.className.split(" ");  
    var secondarray = name.split(" ");

    for (var i = 0; i < secondarray.length; i++) 
    {
      if (firstarray.indexOf(secondarray[i]) == -1)   
      {
        element.className += " " + secondarray[i]; 
      }
    }
}

filterSelection("all")

function filterSelection(c) 
{
    var store = document .getElementsByClassName("topic"); 
    
    if (c == "all") c = ""; 
    
    for (var i = 0; i < store.length; i++) 
    {
      dumpFAQ(store[i], "show"); 
      if (store[i].className.indexOf(c) > -1)
      {
        plusFAQ(store [i], "show");
      }
    }
}


function dumpFAQ( element, name) 
{
    var firstarray = element.className.split(" ");
    var secondarray = name.split(" ");

    for (var i = 0; i < secondarray.length; i++) 
    {
      while (firstarray .indexOf(secondarray[i]) > -1) 
      {
        firstarray.splice(firstarray.indexOf(secondarray[i]), 1); 
      }
    }
    element.className = firstarray.join(" ");
}
  


var buttonboxes = document.getElementById("buttonbox"); 
var buttons = buttonboxes.getElementsByClassName("button"); 

for (var i = 0; i < buttons.length; i++) 
{
    buttons[i].addEventListener("click", function(){});
}



var FDIV = document.querySelectorAll("#QNA > .topic"); 
  
FDIV.forEach  
(function(FDIV) {
      
  var span =  FDIV.querySelector("span"); 
  span.addEventListener
  ("click", function() {

    var collapse = this.closest("li");

  
    collapse.classList.toggle("is-active");  
    var ANS = collapse.querySelector(".answer");

    if (collapse.classList.contains("is-active"))
    {
      ANS.style.display = "block"; 
    } 
    else 
    {
      ANS.style.display = "none";  
    }
  });
});