require('dotenv').config();

let express = require('express');
let bodyParser = require("body-parser");
let cookieParser = require("cookie-parser");
let mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL);

let userRoute = require('./routes/user.route');
let authRoute = require("./routes/auth.route");
let productRoute = require("./routes/product.route");
let cartRoute = require("./routes/cart.route");
let transferRoute = require("./routes/transfer.route");

let apiProductRoute = require("./api/routes/product.route");

let authMiddleware = require("./middlewares/auth.middleware");
let sessionMiddleware = require("./middlewares/session.middleware");

let port = 3000;

let app = express();
app.set('views', './views');
app.set('view engine', 'pug');

app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(sessionMiddleware);

app.use(express.static('public'));

app.get("/", function(req, res) {
    res.render('index', {
        name: 'AAA'
    })
});

// Routes
app.use('/users', authMiddleware.requireAuth, userRoute);
app.use('/auth', authRoute);
app.use('/products', productRoute);
app.use('/cart', cartRoute);
app.use('/transfer', authMiddleware.requireAuth, transferRoute);

// API
app.use('/api/products', apiProductRoute);

// Listen port
app.listen(port, () => {
    console.log('Server listening on port ' + port);
})