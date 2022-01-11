const db = require('../models/index'),
 products=(req, res)=> {
    db.Products.find()
        .then(function (products) {
            res.render("products.ejs", { productsArray: products });
        }).catch(function (err) {
            res.json(err);
        })
};
module.exports=products;