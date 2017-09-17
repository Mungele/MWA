var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('update', { title: 'Express',message: '' });
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
        res.render('update', {title: 'Express',message: 'All Fields are needed'});
    } else {
        const update = req.db.collection('homework8_1')
            .update({'Name': req.body.Name},
                {
                    'Name': req.body.Name,
                    'Category': req.body.Category,
                    'Longitude': req.body.Longitude,
                    'Latitude': req.body.Latitude
                },
                function (err, data) {
                    if (err) throw err;
                    else {
                        console.log("updated items" + data);
                        res.render('update', {title: 'Express', message: 'updated successfully'});
                    }
                });
    }

    //res.render('update', { title: 'Express' });
});

module.exports = router;