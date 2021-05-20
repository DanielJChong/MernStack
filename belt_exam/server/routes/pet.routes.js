const PetController = require('../controllers/pet.controller');


module.exports = function(app){
    app.get('/api', PetController.index);
    app.post('/api/pet', PetController.createPet);
    app.get('/api/pet', PetController.getAllPets);
    app.put('/api/pet/:id', PetController.updatePet);
    app.get('/api/pet/:id', PetController.getPet);
    app.delete('/api/pet/:id', PetController.deletePet);
    app.post('/api/pet/:id/likes', PetController.addLikes);
}