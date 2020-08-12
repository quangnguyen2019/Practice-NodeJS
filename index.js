let express = require('express');
let bodyParser = require("body-parser");
let cookieParser = require("cookie-parser");

let userRoute = require('./routes/user.route');

let port = 3000;

let app = express();
app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cookieParser());

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static('public'));

app.get("/", function(req, res) {
    res.render('index', {
        name: 'AAA'
    })
});

// Routes
app.use('/users', userRoute);

// Listen port
app.listen(port, () => {
    console.log('Server listening on port ' + port);
})