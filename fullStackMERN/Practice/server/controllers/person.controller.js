const { Person } = require('../models/person.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

    // The method below is new
module.exports.createPerson = (request, response) => {
    const { firstName, lastName } = request.body;
    Person.create({
        firstName,
        lastName
    })
        .then(person => response.json(person))
        .catch(err => response.status(400).json(err)); //just adding the response.status(400) to the create method for validations
}

module.exports.getAllPeople = (request, response) => {
    Person.find({})
        .then(persons => response.json(persons))
        .catch(err => response.json(err))
}

module.exports.getPerson = (request, response) => {
    Person.findOne({_id:request.params.id})
        .then(person => response.json(person))
        .catch(err => response.json(err))
}

module.exports.updatePerson = (request, response) => {
    Person.findById(request.params.id)
        .then((person) => {
            person
                .updateOne(request.body, { runValidators: true })
                .then((status) => response.json(status))
                .catch((err) => response.status(400).json(err));
        })
        .catch((err) => {
            console.log(res);
            response.status(400).json(err);
        });
    // Person.findOneAndUpdate({_id: request.params.id}, request.body, {new: true, runValidators: true})
    //     .then(updatedPerson => response.json(updatedPerson))
    //     .catch(err => response.json(err))
}

module.exports.deletePerson = (request, response) => {
    Person.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
