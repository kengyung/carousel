

//console.log(slides)

window.onload = function () {
    
    let slides = document.getElementsByClassName("carousel-item");
    let max_position = slides.length - 1; //since count starts at 0
    console.log(max_position)
    let position = 0;
    

    document.getElementById("carousel-button-prev").addEventListener("click", function () {
        //console.log("Removing item " + position);
        slides[position].classList.remove("carousel-item-visible");
        if (position == 0)
            position = max_position;
        else
            position--;
        //console.log("Adding item " + position);
        slides[position].classList.add("carousel-item-visible");
    });

    document.getElementById("carousel-button-next").addEventListener("click", function () {
        slides[position].classList.remove("carousel-item-visible");
        if (position == max_position)
            position = 0;
        else
            position++;
        slides[position].classList.add("carousel-item-visible");
    });
}