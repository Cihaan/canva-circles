"use strict";

const CANVAS = document.getElementById("masterpiece");
const COLORS = ["red", "blue", "pink", "purple", "yellow", "green", "magenta", "cyan"]

// window onload
window.onload = function() {
    // canvas context
    const CTX = CANVAS.getContext("2d");
    const canvasRect = CANVAS.getBoundingClientRect();


    // canvas mouse events
    CANVAS.addEventListener("mousedown", function(e) {
        const mouseX = e.clientX - canvasRect.left;
        const mouseY = e.clientY - canvasRect.top;

        let disk = new Disk(mouseX, mouseY, getRandomBetweenInterval(20, 50), COLORS.at(getRandomBetweenInterval(0, 7)))
        disk.draw(CTX)
    });
}

function getRandomBetweenInterval(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
