const db = require('../models/index'),
   productsId=(req, res)=> {
    db.Products.findById(req.params.id)
        .then(function (selectedProduct) {
            res.render("show.ejs", { sp: selectedProduct })
        }).catch(function (err) {
            res.status(401).json({
                msg: "product does not found"
            })
        })
};
module.exports=productsId;