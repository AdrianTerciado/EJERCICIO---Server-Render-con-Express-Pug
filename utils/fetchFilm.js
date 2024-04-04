const getFilm = async (title) => {
    let response = await fetch(`https://www.omdbapi.com/?t=${title}&apikey=${process.env.KEY}`);
    let film = await response.json();
    return film;
};

module.exports = {
    getFilm
}
/* getFilm("-")
    .then(data => console.log(data)); */