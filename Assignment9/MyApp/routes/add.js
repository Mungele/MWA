var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('add', { title: 'Express',message: '' });
});


router.post('/', function(req, res, next) {
    console.log("in post");
    req.assert('Name', 'Name is needed').notEmpty();
    req.assert('Category', 'Category is needed').notEmpty();
    req.assert('Longitude', 'Longitude is needed').notEmpty();
    req.assert('Latitude', 'Latitude is needed').notEmpty();
    const error = req.validationErrors(true);

    if (error) {
        console.log("in error");
        res.render('add', {title: 'Express',message: 'All Fields are needed'});
    } else{
        console.log("in result");
        const add = req.db.collection('homework8_1')
            .save({'Name': req.body.Name, 'Category': req.body.Category, 'Longitude': req.body.Longitude, 'Latitude': req.body.Latitude},
                function (err, data) {
                    console.log(data);
                });
        res.render('add', { title: 'Express',message: 'Data Added Successfully' });
    }

});

module.exports = router;
