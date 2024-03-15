
document.addEventListener("DOMContentLoaded", function () {
    // Add event listeners for buttons
    document.getElementById("button1").addEventListener("click", function () {
        highlightButton("button1");
        showText("text1");
    });

    document.getElementById("button2").addEventListener("click", function () {
        highlightButton("button2");
        showText("text2");
    });

    document.getElementById("button3").addEventListener("click", function () {
        highlightButton("button3");
        showText("text3");
    });
});

function highlightButton(buttonId) {
    // Remove highlight class from all buttons
    document.querySelectorAll(".highlightable.clicked").forEach(function (el) {
        el.classList.remove("clicked");
    });

    // Highlight the clicked button
    document.getElementById(buttonId).classList.add("clicked");
}

function showText(textId) {
    // Hide all text paragraphs
    document.querySelectorAll("#text-container p").forEach(function (el) {
        el.classList.add("hidden");
    });

    // Show the text corresponding to the clicked button
    document.getElementById(textId).classList.remove("hidden");
}

