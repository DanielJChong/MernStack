const Rental = require('../models/Rental.model');
const rentalsRoutes = require('../routes/rentals.routes');

//CRUD methods for our rentals
module.exports.getAllRentals = (req, res) => {
    Rental.find()  //this returns a promise!
        .then(allRentals => res.json(allRentals))
        .catch(err => res.json({error:err}));  //in case of errors
}


//creates new rentals
module.exports.createRental = (req, res) => {
    console.log('this is the request body', req.body);

    //our request should have a body if we did things correctly
    Rental.create(req.body)  //returns a promise as well
        .then(newProperty => res.json({property:newProperty}))
        .catch(err => res.status(400).json(err));
}


module.exports.addLike = (request, response) => {

    Rental.findByIdAndUpdate(
        request.params.rentalId,
        {
            $inc: {
                likes: 1
            }
        },
        {
            new: true
        }
    )
    .then(updatedRental => response.json(updatedRental))
    .catch(err => response.json({error:err}))
}


module.exports.deleteRental = (req, res) => {
    //id comes from req.params       
    Rental.findByIdAndDelete(req.params.rentalId)
        .then(() => res.json({sucess: true}))
}


module.exports.getOneRental = (req, res) => {
    Rental.findOne({_id: req.params.rentalID})
        .then(retrievedRental => res.json(retrievedRental))
}


module.exports.updateRental = (req, res) => {
    Rental.findByIdAndUpdate(
        req.params.rentalId,
        req.body,  //this is the data from the request
        {
            new: true,
            runValidators: true
        }
    )
        .then(updatedRental => res.json(updatedRental))
        .catch(err => res.status(400).json(err));
}





