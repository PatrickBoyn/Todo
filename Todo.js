var li = document.querySelector("li");

li.addEventListener("mouseover", function(){
    li.style.color = "green";
});

li.addEventListener("mouseout", function(){
    li.style.color = "black";
});