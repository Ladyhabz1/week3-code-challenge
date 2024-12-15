//DOM render functions
function renderFilm(film){
    const card = document.createElement('div');
    card.className = 'card'
    const capacityAvailable = film.capacity - film.tickets_sold;

    //The card with HTML layout
    card.innerHTML = `
        <img src="${film.poster}" alt="film Poster" class="film-poster">
        <div class="card-content">
        <h3> ${film.title}</h3>

        <div class="details">
            <span>${film.runtime}</span>
            <span>${film.showtime}</span>
            <span>${capacityAvailable}</span>
        </div>    

        <div class="button">
            <button class="book-button" ${capacityAvailable === 0? "disabled" : ""}>
                ${capacityAvailable === 0? "sold Out!" : "Buy Ticket"}
            </button>
        </div>
        </div>       
    `;
    //add the card in the container
    document.querySelector('.container').appendChild(card);
}
renderFilm(film);