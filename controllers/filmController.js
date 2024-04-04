const fetchFilm = require("../utils/fetchFilm");

// READ
const getFilm = async (req, res) => {
    try {
        const title = req.params.title;
        console.log(title);
        let film = await fetchFilm.getFilm(title); 
        if (film.Response == "True"){
        console.log(film);
        res.status(200).render('film.pug',film
        );
        }
        else{
            res.redirect("/home")
        }
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
        console.log(title);
        if(title){
           res.redirect("/film/" + title); 
        }
        else{
            res.status(404).redirect("/home")
        }
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