"use strict";
let button = (document.getElementById("recognise"));
let pattern = document.querySelectorAll("input");
let display = document.querySelector(".output-display");
const characters = {
    " _ | ||_|   ": "0",
    "     |  |   ": "1",
    " _  _||_    ": "2",
    " _  _| _|   ": "3",
    "   |_|  |   ": "4",
    " _ |_  _|   ": "5",
    " _ |_ |_|   ": "6",
    " _   |  |   ": "7",
    " _ |_||_|   ": "8",
    " _ |_| _|   ": "9",
    " _ |_|| |   ": "A",
    "    _ |_||_|": "B",
    "    _ |  |_ ": "C",
    " _ | || ||_|": "D",
    "    _ |_ |_ ": "E",
    "    _ |_ |  ": "F",
    "    _ |_ |_|": "G",
    "      |_|| |": "H",
    "       |  | ": "I",
    "       | _| ": "J",
    "      |/ |\\ ": "K",
    "      |  |_ ": "L",
    "": "M",
    " ": "N",
    "    _ | ||_|": "O",
    "    _ |_||  ": "P",
    "    _ | ||\\|": "Q",
    " _ |_|| \\   ": "R",
    "    _ |_  _|": "S",
    "       _  | ": "T",
    "      | ||_|": "u",
    "   ": "V",
    "    ": "w",
    "\\ / | / \\   ": "X",
    "\\ / \\ /     ": "y",
    "   _   / /_ ": "Z",
};
window.onload = () => {
    pattern.forEach(ele => {
        ele.addEventListener("keypress", (event) => {
            let str = "|_|?";
            if (!str.includes(event.key)) {
                alert(`only "|"   "_"  "\\"   "/" are allowed`);
                event.preventDefault();
            }
        });
    });
};
let recognitionString = "";
let recognisedString = "";
function recognise() {
    pattern.forEach((input) => {
        if (input.value == "")
            recognitionString += " ";
        else
            recognitionString += input.value;
    });
    if (recognitionString in characters) {
        recognisedString = characters[recognitionString];
        display.innerText = `Recognised character is "${recognisedString}"`;
    }
    else
        alert("Invalid string");
    pattern.forEach((input) => {
        input.value = "";
    });
}
