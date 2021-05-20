const { Author } = require('../models/author.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createAuthor = (request, response) => {
    const { firstName, lastName } = request.body;
    Author.create({
        firstName,
        lastName
    })
        .then(author => response.json(author))
        .catch(err => response.status(400).json(err)); //just adding the response.status(400) to the create method for validations
}

module.exports.getAllAuthors = (request, response) => {
    Author.find()
        .then(authors => response.json(authors))
        .catch(err => response.json(err))
}

module.exports.getAuthor = (request, response) => {
    Author.findOne({_id:request.params.id})
        .then(author => response.json(author))
        .catch(err => response.json(err))
}

module.exports.updateAuthor = (request, response) => {
    Author.findById(request.params.id)
        .then((author) => {
            author
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

module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
