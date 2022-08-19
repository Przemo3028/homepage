{
    const welcome = () => {
        console.log("Witaj! Jak się masz? 🤗")
    }

    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const themeName = document.querySelector(".themeName");
        body.classList.toggle("body__SecondaryBackground");
        themeName.innerText = body.classList.contains("body__SecondaryBackground") ? "Kremowe" : "Białe";
    }

    const init = () => {
        const button = document.querySelector(".button");
        button.addEventListener("click", toggleBackground);

        welcome();
    }

    init();

}

