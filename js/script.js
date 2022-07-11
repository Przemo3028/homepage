console.log("Hello!");
let body = document.querySelector(".body");
let button = document.querySelector(".button");
let themeName = document.querySelector(".themeName");
button.addEventListener("click", () => {
    body.classList.toggle("js-bodySecondaryBackground");
    themeName.innerText = body.classList.contains("js-bodySecondaryBackground") ? "Kremowe" : "Białe";
});

