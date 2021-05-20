const { Pet } = require('../models/pet.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createPet = (request, response) => {
    const { petName, petType, petDescription, skillOne, skillTwo, skillThree } = request.body;
    Pet.create({
        petName, 
        petType, 
        petDescription, 
        skillOne, 
        skillTwo, 
        skillThree
    })
        .then(pet => response.json(pet))
        .catch(err => response.status(400).json(err)); 
}

module.exports.getAllPets = (request, response) => {
    Pet.find()
        .then(pets => response.json(pets))
        .catch(err => response.json(err))
}

module.exports.getPet = (request, response) => {
    Pet.findOne({_id:request.params.id})
        .then(pet => response.json(pet))
        .catch(err => response.json(err))
}

module.exports.updatePet = (request, response) => {
    Pet.findById(request.params.id)
        .then((pet) => {
            pet
                .updateOne(request.body, { runValidators: true })
                .then((status) => response.json(status))
                .catch((err) => response.status(400).json(err));
        })
        .catch((err) => {
            console.log(res);
            response.status(400).json(err);
        });
}

module.exports.deletePet = (request, response) => {
    Pet.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}

module.exports.addLikes = (request, response) => {
    Pet.findByIdAndUpdate(
        request.params.id,
        {
            $inc: {
                likes: 1
            }
        },
        {
            new: true
        }
    )
    .then(updatedPet => response.json(updatedPet))
    .catch(err => response.json({error:err}))
}
