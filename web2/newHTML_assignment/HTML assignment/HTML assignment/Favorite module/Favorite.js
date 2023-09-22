function plusFAV(element,name) 
{
    var firstarray =  element.className.split(" ");
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

    var store = document.getElementsByClassName("section");
    
    if (c == "all") c = "";
    
    for (var i = 0; i < store.length; i++) 
    {
      dumpFAV(store[i],"show");
      if (store[i].className.indexOf(c) > -1) plusFAV(store[i], "show");
    }
}


function dumpFAV (element,name) 
{
   
    var firstarray = element.className.split(" ");
    var secondarray = name.split(" ");

    for (var i = 0; i < secondarray.length; i++) 
    {
      while (firstarray.indexOf(secondarray[i]) > -1) 
      {
        firstarray .splice(firstarray.indexOf(secondarray[i]), 1); 
      }
    }
    element.className = firstarray.join(" ");
}
  




