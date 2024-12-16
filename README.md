## FLATDANGO MOVIE BOOKING WEB APP

### Description
+ A simple movie ticket booking system that allows users to view movie details, including title, runtime, showtime, and available tickets. Users can also buy tickets for movies if they are available.
---
### Table of Contents
- [Description](#description)
- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Contribution](#how-to-contribute)
- [License](#license)
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

### 2. Navigate to the projcect directory

```bash
cd week3-code-challenge
```

### 3. Install JSON Server (if not already installed)

```bash
npm install -g json-server
```

### 4. Start the JSON Server

```bash
json-server --watch db.json
```

### 5. Open the Application in a Browser
+ Simply open the index.html file in your browser to view the project. You can do this by double-clicking the file or using a live server extension (e.g., in VS Code).
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