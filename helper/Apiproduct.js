const db = require('../models/index'),
  Apiproduct=(req, res)=> {
    db.Products.findById(req.params.pid)
        .then(function (selectedProduct) {
            res.json(selectedProduct)
        }).catch(function (err) {
            res.status(401).json({
                msg: "product does not found"
            })
        })
};
module.exports=Apiproduct;