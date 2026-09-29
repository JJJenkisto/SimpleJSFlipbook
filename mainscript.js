// DOM Element References
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const papers = [
    document.querySelector("#p1"),
    document.querySelector("#p2"),
    document.querySelector("#p3"),
];

// Constants
const PAPER_COUNT = papers.length;
const MAX_LOCATION = PAPER_COUNT + 1;

// State
let currentLocation = 1;

// Event Listeners
prevBtn.addEventListener("click", prevPage);
nextBtn.addEventListener("click", nextPage);

// Helpers
function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-300px)";   // was -180px
    nextBtn.style.transform = "translateX(300px)";    // was  180px
}

function closeBook(isAtBeginning) {
    book.style.transform = isAtBeginning ? "translateX(0%)" : "translateX(100%)";
    prevBtn.style.transform = "translateX(0)";
    nextBtn.style.transform = "translateX(0)";
}

function flipPaper(index, flipped) {
    const paper = papers[index];
    paper.classList.toggle("flipped", flipped);
    // z-index mirrors the paper order while flipping
    paper.style.zIndex = flipped ? index + 1 : PAPER_COUNT - index;
}

// Navigation
function nextPage() {
    if (currentLocation >= MAX_LOCATION) return;

    if (currentLocation === 1) openBook();

    flipPaper(currentLocation - 1, true);

    if (currentLocation === PAPER_COUNT) closeBook(false);

    currentLocation++;
}

function prevPage() {
    if (currentLocation <= 1) return;

    currentLocation--;

    flipPaper(currentLocation - 1, false);

    if (currentLocation === 1) closeBook(true);
    if (currentLocation === PAPER_COUNT) openBook();
}