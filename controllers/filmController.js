const fetchFilm = require("../utils/fetchFilm");

// READ
const getFilm = async (req, res) => {
    try {
        const title = req.params.title;
        console.log(title);
        let film = await fetchFilm.getFilm(title); 
        console.log(film);
        res.status(200).render('film.pug',film
        );
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
}

//POST
const postFilm = async (req, res) => {
   
    try {
        const title = req.body.title;
        
        res.redirect("/film/" + title);
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
}

module.exports = {
    getFilm,
    postFilm
}