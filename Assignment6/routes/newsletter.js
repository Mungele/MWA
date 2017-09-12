/**
 * Created by Aisha on 9/11/2017.
 */
var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET newsletter page */
router.get('/', function(req, res, next) {

    res.render('newsletter',{csrftoken:req.csrfToken()});
    //res.send('respond with a resource');
});


//get the email and save cookie
//if cookie already excist by path authentication

//getting the request from port and sending response
router.post('/subscribe',  function( req, res, next){
    console.log('in get post ');
    req.assert('email', 'email is needed').notEmpty();
    const error = req.validationErrors(true);

    if (error){

        res.render('newsletter',{message:'Email needed'});
    }else if (req.body.email) {
        var save_email = fs.appendFile(__dirname +'/subccribers.txt', req.body.email,
            function (err, data) {
                if (err) next(err);
                console.log('appended saved');
            });
        //res.render('thankyou',{greeting:"thank you"});
        res.redirect('/thankyou?email='+req.body.email);
    }
    //res.render(newsletter);
    //next();
});



module.exports = router;
