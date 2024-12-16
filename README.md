## FLATDANGO MOVIE BOOKING WEB APP

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
  - [Clone the repository](#1-clone-the-repository)
  - [Open the project in a browser](#2-open-the-project-in-a-browser)
  - [Running Locally](#3-running-locally)
  - [Sample Data (db.json)](#4-sample-data-dbjson)
  - [Modifying the Movie Data](#5-modifying-the-movie-data)
- [Contribution](#how-to-contribute)
- [License](#license)

### Description
A simple movie ticket booking system that allows users to view movie details, including title, runtime, showtime, and available tickets. Users can also buy tickets for movies if they are available.
---
### Features 

- Displays a list of movies with their titles and posters.
- When a movie is clicked, its full details are shown, including:
  - Title
  - Runtime
  - Showtime
  - Tickets Available
- Users can buy tickets for a movie (if available).
- The available tickets are updated when a ticket is bought.
- The "Buy Ticket" button is disabled when no tickets are available for a movie.
---
### Project Structure

- **index.html**: Main HTML file that structures the page
- **script.js**: JavaScript file that handles dynamic content and logic
- **db.json**: Sample movie data in JSON format
- **styles.css**: CSS file to style the page
- **README.md**: Project documentation
---
### Technologies Used 

- **HTML**: Used for the basic structure of the page.
- **CSS**: Used for styling the page and providing a responsive design.
- **JavaScript**: Handles the dynamic functionality, such as displaying movie details and managing ticket purchases.
- **JSON**: A simple local JSON file (`db.json`) that contains the movie data, including the title, runtime, showtime, poster, and ticket information.
---
## Setup Instructions

### 1. Clone the repository

```bash
git clone git@github.com:Ladyhabz1/week3-code-challenge.git
```

### 2. Open the project in a browser

    Simply open the index.html file in your browser to see the project in action.


### 3. Running Locally

To run the project locally with live data (from the db.json file), you can use a local server. If you have VS Code installed, you can use the "Live Server" extension to quickly launch the project in your browser.

## 4. Sample Data (db.json)

The project uses a local JSON file (db.json) to simulate a database for movie details. 


---

## 5. Contribution

Contributions are welcome! If you'd like to improve or expand on these programs:

1. Fork the repo
2. create a new branch 

```bash
git checkout -b feature/yourfeature
```
3. Commit your changes 

```bash 
git commit -m "Add a new feature"
```

4. Push to the branch
``` bash
git push origin feature/YourFeature 
```

5. Open a pull request

---
## Contact
Can be reached by the email below for questions and comments 

[Email](guyohabibahassan@gmail.com)
---
## License
This project is licensed under the MIT License.