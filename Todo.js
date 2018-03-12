var li = document.querySelectorAll("li");

li.addEventListener("mouseover", function(){
    li.style.color = "green";
});

li.addEventListener("mouseout", function(){
    li.style.color = "black";
});