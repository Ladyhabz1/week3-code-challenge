// Function to render a single film card
function renderFilm(film) {
    const card = document.createElement('div');
    card.className = "card";
    const capacityAvailable = film.capacity - film.tickets_sold;

    // Card's inner HTML with the layout
    card.innerHTML = `
        <img src="${film.poster}" alt="Film Poster" class="film-poster">
        <div class="description-button">
            <div class="description">
                <h2>${film.title}</h2>
                <h4>Showtime: ${film.showtime}</h4>
                <h4>Run time: ${film.runtime} minutes</h4>
                <span class="capacity">Available Tickets: ${capacityAvailable} seats</span>
            </div>
            <div class="button">
                <button class="book-button" ${capacityAvailable === 0 ? "disabled" : ""}>
                    ${capacityAvailable === 0 ? "Sold out" : "Buy Ticket"}
                </button>
            </div>
        </div>
    `;

    // Add the card into the container
    document.querySelector(".container").appendChild(card);

    // Add functionality to the seat button
    const bookButton = card.querySelector(".book-button");
    const capacityElement = card.querySelector(".capacity");

    bookButton.addEventListener("click", () => {
        // Check if there are seats available
        if (capacityAvailable > 0) {
            alert("You can book a seat!");

            // Update the tickets sold and capacity available
            film.tickets_sold += 1;
            const newCapacityAvailable = film.capacity - film.tickets_sold;
            capacityElement.textContent = `Available Tickets: ${newCapacityAvailable} seats`;

            // If sold out, disable the button and update its text
            if (newCapacityAvailable === 0) {
                bookButton.textContent = "Sold out";
                bookButton.disabled = true;
            }
        }
    });
}

// Function to fetch and render all films
function showAllFilms() {
    fetch('http://localhost:3000/films')
        .then(res => res.json())
        .then(filmData => {
            document.querySelector(".container").innerHTML = ""; // Clear existing films
            filmData.forEach(film => renderFilm(film));
        })
        .catch(error => console.error('Error fetching films', error));
}

// Function to handle search functionality
function handleSearch() {
    const searchBar = document.querySelector(".search-bar");
    const searchButton = document.querySelector(".search-button");

    searchButton.addEventListener("click", () => {
        const query = searchBar.value.toLowerCase();
        document.querySelector(".container").innerHTML = ""; // Clear previous results

        fetch('http://localhost:3000/films')
            .then(response => response.json())
            .then(films => {
                const filteredFilms = films.filter((film) =>
                    film.description.toLowerCase().includes(query)
                );

                if (filteredFilms.length === 0) {
                    document.querySelector(".container").innerHTML = `
                        <p>No films found matching "${query}"</p>`;
                } else {
                    filteredFilms.forEach((film) => renderFilm(film));
                }
            })
            .catch((error) => {
                console.error('Error fetching films', error);
                alert("An error occurred while searching.");
            });
    });
}

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
    // Check if the required DOM elements exist, create them if not
    if (!document.querySelector(".search-bar")) {
        const searchBar = document.createElement("input");
        searchBar.className = "search-bar";
        searchBar.type = "text";
        searchBar.placeholder = "Search for a film...";
        document.body.prepend(searchBar);
    }

    if (!document.querySelector(".search-button")) {
        const searchButton = document.createElement("button");
        searchButton.className = "search-button";
        searchButton.textContent = "Search";
        document.body.prepend(searchButton);
    }

    if (!document.querySelector(".container")) {
        const container = document.createElement("div");
        container.className = "container";
        document.body.appendChild(container);
    }

    // Initialize the functionality
    showAllFilms();
    handleSearch();
});