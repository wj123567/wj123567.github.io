var tabs = document.querySelectorAll(".lboard_tabs ul li");
var notable_gb = document.querySelector(".notable_gb");
var notable_gc = document.querySelector(".notable_gc");
var gifted_gb = document.querySelector(".gifted_gb");
var gifted_gc = document.querySelector(".gifted_gc");
var items = document.querySelectorAll(".lboard_item");

tabs.forEach(function(tab){
    tab.addEventListener("click", function(){
        var currentdatali = tab.getAttribute("data-li");
        
        tabs.forEach(function(tab){
            tab.classList.remove("active");       /*clear off the active class on top 5 notable gb leaderboard*/
        })

        tab.classList.add("active");

        items.forEach(function(item){
            item.style.display = "none";
        })


        if(currentdatali == "notable_gb"){
            notable_gb.style.display = "block";
        }
        else if(currentdatali == "notable_gc"){
            notable_gc.style.display = "block";
        }
        else if(currentdatali == "gifted_gb"){
            gifted_gb.style.display = "block";
        }
        else{
            gifted_gc.style.display = "block";
        }
    })
})