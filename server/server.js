'use strict';

var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
mongoose.connect('mongodb://localhost/gamenight');


var User        = require('./models/user')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

router.use(function(req, res, next) {
    console.log('Something is happening.');
    next();
});

router.get('/', function(req, res) {
  res.json({message: 'API is up'});
});

router.route('/users')

    .post(function(req, res) {
        
        var user = new User();      
        console.log(req.body);
        user.username = req.body.username; 

        user.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'User created!' });
        });
        
    })
    
    .get(function(req, res) {
    User.find(function(err, users) {
      if (err)
        res.send(err);
      
        res.send(users);
    });
  });

app.use('/api', router);

app.listen(port);

console.log('App is started on port: ', port);
