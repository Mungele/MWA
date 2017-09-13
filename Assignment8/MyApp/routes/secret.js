var express = require('express');
var router = express.Router();
var mongoClient  = require('mongodb').MongoClient;
const crypto = require('crypto');
const decipher = crypto.createDecipher('aes256','asaadsaad');

/* GET home page. */
router.get('/', function(req, res, next) {
    mongoClient.connect('mongodb://127.0.0.1:27017/homework7', (function(err,db){
        if(err) throw err;
        db.collection('homework7').findOne({},function(err,doc){
            if(err) throw err;
            db.close();
            var secret = decipher.update(doc.message,'hex','utf8');
            //console.log(secret);
            secret += decipher.final('utf8')
            console.log(secret);
            res.render('secret', {  message: secret });
        });

        console.dir("call findOne");
    }));

});

module.exports = router;