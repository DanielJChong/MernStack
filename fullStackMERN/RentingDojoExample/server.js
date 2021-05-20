const express = require('express');
const cors = require('cors');
const app = express();

require('./config/mongoose.config');

const app = express(); //notice invoking the Express function
app.use(express.json());
app.use(cors());

const rentalsRoutes = require('./routes/rentals.routes');
rentalsRoutes(app);


app.listen(8000, () => console.log('hello, listening on 8000!'));

