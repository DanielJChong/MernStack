const routesCtl = require('../controllers/rentals.controller');

module.exports = app => {
    app.get('/api/rentals', routesCtl.getAllRentals);
    //path("api/rentals", views.get_all_rentals)


    //notice the "glue" between these two!
    app.post('/api/rentals', routesCtl.createRental);


    app.post('/api/rentals/:rentalId/likes', routesCtl.addLikes);
    //req.params will look like this

    app.delete('/api/rentals/:rentalId', routesCtl.deleteRental);

    app.get('/api/rentals/:rentalId', routesCtl.getOneRental);

    app.put('/api/rentals/:rentalId', routesCtl.updateRental);


}