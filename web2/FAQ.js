function searchFunction() 
{
    var input = document.getElementById('usersearch');
    var filter = input.value.toUpperCase();
    var ul = document.getElementById("QNA");
    var li = ul.getElementsByTagName('li');

    for (var i = 0; i < li.length; i++) 
    {
        var txtValue = (li[i].textContent || li[i].innerText).toUpperCase();
        li[i].style.display = txtValue.indexOf(filter) > -1 ? "" : "none";
    }
}

function faqAddClass(element, name) 
{
    var arr1 = element.className.split(" ");
    var arr2 = name.split(" ");

    for (i = 0; i < arr2.length; i++) 
    {
      if (arr1.indexOf(arr2[i]) == -1) 
      {
        element.className += " " + arr2[i];
      }
    }
}

filterSelection("all")

function filterSelection(c) 
{

    var x = document.getElementsByClassName("topic");
    
    if (c == "all") c = "";
    
    for (var i = 0; i < x.length; i++) 
    {
      faqRemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) faqAddClass(x[i], "show");
    }
}


function faqRemoveClass(element, name) 
{
   
    var arr1 = element.className.split(" ");
    var arr2 = name.split(" ");

    for (i = 0; i < arr2.length; i++) 
    {
      while (arr1.indexOf(arr2[i]) > -1) 
      {
        arr1.splice(arr1.indexOf(arr2[i]), 1); 
      }
    }
    element.className = arr1.join(" ");
}
  


var btnContainer = document.getElementById("buttonbox");
var btns = btnContainer.getElementsByClassName("buttonfaq");

for (var i = 0; i < btns.length; i++) 
{
    btns[i].addEventListener("click", function() 
    {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
}



document.addEventListener("DOMContentLoaded", function() {
    var filterDivs = document.querySelectorAll("#QNA > .topic");
  
    filterDivs.forEach
    (function(filterDiv) {
      
        var span = filterDiv.querySelector("span");
        span.addEventListener
        ("click", function() {

            var closestLi = this.closest("li");
            var siblings = closestLi.parentElement.querySelectorAll(".topic");
  
            siblings.forEach(function(sibling){
                if (sibling !== closestLi) 
                {
                    sibling.classList.remove("is-active");
                    sibling.querySelector(".answer").style.display = "none";
                }
            });
  
            closestLi.classList.toggle("is-active");
            var accordionPanel = closestLi.querySelector(".answer");

            if (closestLi.classList.contains("is-active")) 
            {
                 accordionPanel.style.display = "block";
            } 
            else 
            {
                accordionPanel.style.display = "none";
            }
        });
    });
});