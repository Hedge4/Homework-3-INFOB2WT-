const loadedMovies = [
    {
        id: 0,
        image: 'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGQyMS0wMjE5OTktMzgwLmpwZw.jpg',
        title: 'The Flying Goldfish',
        description: 'A thrilling story about a goldfish who wants to explore the world. Prepare for a tear-filled 6 hours of raw emotion. As Billy the goldfish explores the world, he gets himself into all kinds of perilous situations. Brilliantly voiced by renowned voice actor Bob, this classic is sure to keep anyone entertained, from college kids to families with young kids. Learn about the beaty of fish, fear and poetry as you take a dive into the deep.',
        director: 'Susan Roach',
        cast: 'Bob',
        release: 'April 24th, 2024',
        duration: '400 minutes',
    }, {
        id: 1,
        image: 'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGQyMS0wMjE5OTktMzgwLmpwZw.jpg',
        title: 'The Flying Goldfish',
        description: 'A thrilling story about a goldfish who wants to explore the world. Prepare for a tear-filled 6 hours of raw emotion. As Billy the goldfish explores the world, he gets himself into all kinds of perilous situations. Brilliantly voiced by renowned voice actor Bob, this classic is sure to keep anyone entertained, from college kids to families with young kids. Learn about the beaty of fish, fear and poetry as you take a dive into the deep.',
        director: 'Susan Roach',
        cast: 'Bob',
        release: 'April 24th, 2024',
        duration: '400 minutes',
    }, {
        id: 2,
        image: 'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGQyMS0wMjE5OTktMzgwLmpwZw.jpg',
        title: 'The Flying Goldfish',
        description: 'A thrilling story about a goldfish who wants to explore the world. Prepare for a tear-filled 6 hours of raw emotion. As Billy the goldfish explores the world, he gets himself into all kinds of perilous situations. Brilliantly voiced by renowned voice actor Bob, this classic is sure to keep anyone entertained, from college kids to families with young kids. Learn about the beaty of fish, fear and poetry as you take a dive into the deep.',
        director: 'Susan Roach',
        cast: 'Bob',
        release: 'April 24th, 2024',
        duration: '400 minutes',
    }, {
        id: 3,
        image: 'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGQyMS0wMjE5OTktMzgwLmpwZw.jpg',
        title: 'The Flying Goldfish',
        description: 'A thrilling story about a goldfish who wants to explore the world. Prepare for a tear-filled 6 hours of raw emotion. As Billy the goldfish explores the world, he gets himself into all kinds of perilous situations. Brilliantly voiced by renowned voice actor Bob, this classic is sure to keep anyone entertained, from college kids to families with young kids. Learn about the beaty of fish, fear and poetry as you take a dive into the deep.',
        director: 'Susan Roach',
        cast: 'Bob',
        release: 'April 24th, 2024',
        duration: '400 minutes',
    }, {
        id: 4,
        image: 'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGQyMS0wMjE5OTktMzgwLmpwZw.jpg',
        title: 'The Flying Goldfish',
        description: 'A thrilling story about a goldfish who wants to explore the world. Prepare for a tear-filled 6 hours of raw emotion. As Billy the goldfish explores the world, he gets himself into all kinds of perilous situations. Brilliantly voiced by renowned voice actor Bob, this classic is sure to keep anyone entertained, from college kids to families with young kids. Learn about the beaty of fish, fear and poetry as you take a dive into the deep.',
        director: 'Susan Roach',
        cast: 'Bob',
        release: 'April 24th, 2024',
        duration: '400 minutes',
    }, {
        id: 5,
        image: 'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGQyMS0wMjE5OTktMzgwLmpwZw.jpg',
        title: 'The Flying Goldfish',
        description: 'A thrilling story about a goldfish who wants to explore the world. Prepare for a tear-filled 6 hours of raw emotion. As Billy the goldfish explores the world, he gets himself into all kinds of perilous situations. Brilliantly voiced by renowned voice actor Bob, this classic is sure to keep anyone entertained, from college kids to families with young kids. Learn about the beaty of fish, fear and poetry as you take a dive into the deep.',
        director: 'Susan Roach',
        cast: 'Bob',
        release: 'April 24th, 2024',
        duration: '400 minutes',
    },
];

// gets the user's movies from the database
async function fetchMovies() {
    // send request to database and await it, don't return until database was searched and loadedMovies was filled with the users's movies.
    return true;
}

// replace our "Loading..." text with actual movies
function populateTable() {
    const movieContainer = document.getElementById('movie-container');

    // generate all of our movie cards
    loadedMovies.forEach(movieObj => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');

        const image = document.createElement('img');
        image.src = movieObj.image;
        image.alt = movieObj.title + ' poster';
        movieCard.appendChild(image);

        const movieInfo = document.createElement('div');
        movieInfo.classList.add('movie-info');

        const title = document.createElement('h2');
        title.textContent = movieObj.title;
        movieInfo.appendChild(title);

        const description = document.createElement('p');
        description.textContent = movieObj.description;
        movieInfo.appendChild(description);

        // more details list
        const movieDetails = document.createElement('ul');
        movieDetails.classList.add('movie-details');

        const director = document.createElement('li');
        director.innerHTML = '<span>Director:</span> ' + movieObj.director;
        movieDetails.appendChild(director);

        const cast = document.createElement('li');
        cast.innerHTML = '<span>Cast:</span> ' + movieObj.cast;
        movieDetails.appendChild(cast);

        const release = document.createElement('li');
        release.innerHTML = '<span>Release date:</span> ' + movieObj.release;
        movieDetails.appendChild(release);

        const duration = document.createElement('li');
        duration.innerHTML = '<span>Duration:</span> ' + movieObj.duration;
        movieDetails.appendChild(duration);

        movieInfo.appendChild(movieDetails);
        movieCard.appendChild(movieInfo);

        // optionally save them to a list first, and do some sorting before adding to the DOM
        movieContainer.appendChild(movieCard);
    });

    // display error if something went wrong
    if (!loadedMovies.length) {
        const noResultsPara = document.createElement('p');
        noResultsPara.innerText = 'Something went wrong, and no previous movies could be found.';

        movieContainer.appendChild(noResultsPara);
    }
}

// executes when page loads
fetchMovies().then(populateTable);
