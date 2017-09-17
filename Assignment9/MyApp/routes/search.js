var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('search', { title: 'Express',message: '' });
});

router.post('/', function(req, res, next) {
    console.log("in post");
    req.assert('Longitude', 'Longitude is needed').notEmpty();
    req.assert('Latitude', 'Latitude is needed').notEmpty();
    const error = req.validationErrors(true);

    if (error) {
        console.log("in error");
        res.render('search', {title: 'Express',message: 'Fields not accepted'});
    } else {
        var hw8 = req.db.collection('homework8_1');
        var find = hw8.find({});
        find.sort([['Longitude',1],['Latitude',1]]);
        find.limit(3);
        find.each(
            function (err, data) {
                if (err) throw err;
                else {
                    console.log("updated items" + data);
                    res.render('search' , {title: 'Express', message: 'updated successfully'});
                }

            }
            );

    }

    //res.render('update', { title: 'Express' });
});

module.exports = router;
