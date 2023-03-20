
var stars = document.getElementsByClassName("fa-star")

for (let star of stars){
    star.addEventListener('click', (element) => { 
        console.log(element.target.classList["2"])
    }, false);
}