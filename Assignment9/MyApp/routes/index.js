var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const cur = req.db.collection('homework8_1')
      .find({}).toArray(function (err,data) {
          console.log(data);
      });
  const add = req.db.collection('homework8_1')
      .save({'Name':'','Category':'','Longitude':'','Latitude':''});
  /*const update = req.db.collection('homework8_1')
        .update({'Name':'','Category':'','Longitude':'','Latitude':''});
  */const del = req.db.collection('homework8_1')
        .remove({'Name':'','Category':'','Longitude':'','Latitude':''},
            function (err,removed) {
                if(err) throw err;
                console.log("removed items" +removed);
            });
    res.render('index', { title: 'Express' });
});

module.exports = router;
