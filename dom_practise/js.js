

//selecting element by id (use single element)                          // heading is selected by id

let mainHeading = document.getElementById("main-heading");
console.dir(mainHeading);


//selecting elements by class name (use multiple elements)             // headings are selected by class name

let headings = document.getElementsByClassName("heading");              
console.dir(headings);

//selecting elements by tag name (use multiple elements)              //paragraphs are selected by tag name

let paragraphs = document.getElementsByTagName("p");
console.dir(paragraphs);


//selecting element by query selector (use single element)          // paragraph is selected by query selector

let queryParagraph = document.querySelector("p");
console.dir(queryParagraph);

//selecting elements by query selector all (use multiple elements)     // paragraphs are selected by query selector all

let queryParagraphs = document.querySelectorAll("p");
console.dir(queryParagraphs);