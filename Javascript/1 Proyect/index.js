const carousel = document.querySelector(".carousel");
const arrowRight = document.querySelectorAll("#right");
const arrowLeft = document.querySelectorAll("#left");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;

let isDragging = false, startX, startScrollLeft;

arrowRight.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += firstCardWidth;
    });
});

arrowLeft.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft -= firstCardWidth;
    });
});
const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if (!isDragging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}
const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop); 