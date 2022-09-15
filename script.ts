let button: HTMLInputElement = <HTMLInputElement>(
  document.getElementById("recognise")
);
let pattern = document.querySelectorAll("input");
let display = document.querySelector(".output-display") as HTMLInputElement;

const characters = {
  " _ | ||_|   ": "0",
    "    _ | ||_|": "0",
    "|  |  |     ": "1",
    " |  |  |    ": "1",
    "  |  |  |   ": "1",
    "|  |        ": "1",
    " |  |       ": "1",
    "  |  |      ": "1",
    "   |  |     ": "1",
    "    |  |    ": "1",
    "     |  |   ": "1",
    "_|||_   ": "2",
    " _  _| _|   ": "3",
    "|  ||_|  |  ": "4",
    " _ |_  _|   ": "5",
    " _ |_ |_|   ": "6",
    " _   |  |   ": "7",
    " _ ||||   ": "8",
    " _ |_| _|   ": "9",
    " _ |_|| |   ": "A",
    "    _ |_|| |": "A",
    "    _ ||||": "B",
    "    _ |  |_ ": "C",
    " _ |  |_    ": "C",
    " _ | || ||_|": "D",
    "    _ |_ |_ ": "E",
    " _ |_ |_    ": "E",
    "_|__|  |  ": "F",
    "|_ |_||   ": "G",
    "   |_ |_||": "G",
    "| ||_ || |   ": "H",
    "   | ||_ || |": "H",
    "_ | _   ": "I",
    "   _ | _": "I",
    "_ | \\ |    ": "J",
    "   _ | \\ | ": "J",
    " |  |/ |\\ | ": "K",
    "|  |/ |\\ |  ": "K",
    "|  |  |__   ": "L",
    "   |  |  |__": "L",
    "   \\ /|_|| |": "M",
    "\\ /|_|| |   ": "M",
    "\\ /|_|| || |": "M",
    "| ||\\|| \\   ": "N",
    "   | ||\\|| \\": "N",
    " _ | || | _ ": "O",
    "    _ |_||  ": "P",
    "    _ | ||\\|": "Q",
    " _ |_|| \\   ": "R",
    "    _ |_  _|": "S",
    "       _  | ": "T",
    "      | ||_|": "u",
    "\\ / _       ": "V",
    "   \\ / _    ": "V",
    "    ": "w",
    "\\ / | / \\   ": "X",
    "\\ / \\ /     ": "y",
    "_ / /__   ": "Z",
    "   _ / /__": "Z",
};

window.onload = ()=>{
  pattern.forEach( input =>{
      input.addEventListener("keypress",(event:KeyboardEvent)=>{
          let str = "|_/\\";
          if(!str.includes(event.key))
          {
              alert(`only "|"   "_"  "\\"   "/" are allowed`);
              event.preventDefault();           
          }
      })
  })
}

let recognitionString: string = "";
let recognisedString: string = "";

function recognise() {
  pattern.forEach((input) => {

    if (input.value == "") 
        recognitionString += " ";
    else 
        recognitionString += input.value;
  });

  if (recognitionString in characters) {
    recognisedString = characters[recognitionString as keyof typeof characters];
    display.innerText = `Recognised character is "${recognisedString}"`;
  } else alert("Invalid string");
}

