function addButtons(buttons){
    let buttonsElement = document.querySelector('.buttons');
    buttons.forEach(button => {
        let btn = buttonsElement.appendChild(document.createElement("button"));
       btn.classList.add("header-button");
       btn.innerText = button;
    })
}
let buttons = ["Home","Movies","Tv Shows","My List"];
addButtons(buttons);