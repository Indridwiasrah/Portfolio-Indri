const Bars = document.querySelector(".bars");
const List = document.querySelector(".navigasi");

Bars.addEventListener("click", function(){
    if (window.innerWidth < 920)
    {
        if (List.style.display == "none") {
            List.style.display = "block";
        }
        else {
            List.style.display = "none";
        }
    }
});