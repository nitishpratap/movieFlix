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

let imageCards = document.querySelectorAll('.image-card');
imageCards.forEach((imageCard) => {
    let movieDetailElement = imageCard.querySelector('.movie-details');
    console.log("movie details", movieDetailElement);
    console.log("image card", imageCard);
    imageCard.addEventListener('mouseenter', (e) => {
        console.log("movie enter");
        movieDetailElement.style.display = 'block';
    })
    imageCard.addEventListener('mouseleave', (e) => {
        console.log("movie leave", );
        movieDetailElement.style.display = 'none';
    })
})

let allButtons = document.querySelectorAll('.add-to-list');
allButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
       let movieKey = button.dataset.id;
       localStorage.setItem('moviesKey', movieKey);
    })
})