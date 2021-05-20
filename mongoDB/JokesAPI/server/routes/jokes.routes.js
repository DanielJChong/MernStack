const JokesController = require("../controllers/jokes.controllers");

module.exports = app => {
    app.get("/api/jokes/", JokesController.findAllJokes);
    app.get("/api/jokes/:_id", JokesController.findOneSingleJoke);
    // app.get("/api/jokes/random", JokesController.findRandomJoke);
    app.post("/api/jokes/new", JokesController.createNewJoke);
    app.put("/api/jokes/update/:_id", JokesController.updateExistingJoke);
    app.delete("/api/jokes/delete/:_id", JokesController.deleteAnExistingJoke);
};