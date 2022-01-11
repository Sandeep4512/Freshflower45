 const db = require('../models/index'),
     remove=(req, res)=> {
    db.Products.remove({})
        .then(function (products) {
            res.json(products);
        }).catch(function (err) {
            res.json(err);
        })
};

module.exports=remove;