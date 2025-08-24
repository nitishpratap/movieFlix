// function addButtons(buttons){
//     let buttonsElement = document.querySelector('.buttons');
//     buttons.forEach(button => {
//         let btn = buttonsElement.appendChild(document.createElement("button"));
//        btn.classList.add("header-button");
//        btn.innerText = button;
//     })
// }
// let buttons = ["Home","Movies","Tv Shows","My List"];
// addButtons(buttons);



let homeButton = document.querySelector('.home');
homeButton.addEventListener('click', (e) => {
    window.location.href = 'index.html';
})
let moviesButton = document.querySelector('.movies');
moviesButton.addEventListener('click', (e) => {
    window.location.href = 'movies.html';
})
let tvShoesButton = document.querySelector('.tv-shows');
tvShoesButton.addEventListener('click', (e) => {
    window.location.href = 'shows.html';
})
let myListButton = document.querySelector('.my-list');
myListButton.addEventListener('click', (e) => {
    window.location.href = 'mylist.html';
})

let imageCard = document.querySelector('.image-card');
console.log("imageCard",imageCard);
imageCard.addEventListener('hover', (e) => {
    console.log("fgchvjbknlm")
})