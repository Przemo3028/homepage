console.log("Hello!");
let body = document.querySelector(".body");
let button = document.querySelector(".button");
let themeName = document.querySelector(".themeName");
button.addEventListener("click", () => {
    body.classList.toggle("body__SecondaryBackground");
    themeName.innerText = body.classList.contains("body__SecondaryBackground") ? "Kremowe" : "Białe";
});

