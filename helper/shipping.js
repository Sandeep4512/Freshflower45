const shipping= (req, res)=> {
    console.log(req.userInfo);
    res.render('shipping.ejs')
};
module.exports=shipping;