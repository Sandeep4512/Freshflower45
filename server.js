const Mongoose = require('mongoose'),

    ex = require('express'),
    port = process.env.PORT || 2020,
    db = require('./models/index'),
    verifyToken = require('./utils'),
    dotenv = require('dotenv'),
    // bcrypt = require('bcrypt'),
    root=require("./helper/root"),
    products=require("./helper/products"),
    addProducts=require("./helper/addproducts"),
    productsId=require("./helper/productsId"),
    remove = require("./helper/remove"),
    signin=require("./helper/signin"),
    signinApi=require("./helper/signinApi"),
    signup=require("./helper/signup"),
    signupApi=require("./helper/signupApi"),
    cart=require("./helper/cart"),
    Apiproduct=require("./helper/Apiproduct"),
    shipping=require("./helper/shipping"),
    jwt = require("jsonwebtoken");
    dotenv.config();
const app = ex();
app.use(ex.static("public"));   // static file use krne ke liye

app.use(ex.json());              //to parse the upcoming post request data    
app.get('/', root)
app.get('/addproducts',addProducts)
app.get('/remove',remove)
app.get('/products',products)
app.get('/product/:id',productsId)

//------------------ Authentication --------------------

app.get('/signin',signin)
app.post('/signin', signinApi)
app.get('/signup',signup)
app.post('/signup',signupApi)
app.get('/cart',cart)
app.get('/api/product/:pid', Apiproduct)
app.get('/shipping/:token', verifyToken, shipping)
app.get('/order/:token',verifyToken,(req,res)=>{res.render("order.ejs");})

Mongoose.connect('mongodb+srv://phulmala:phulmala@cluster0.f5oyo.mongodb.net/myDatabase?retryWrites=true&w=majority')
    .then(()=>{ console.log("Data base connected") })
    .catch(()=>{ console.log("Data base not connected") })

app.listen(port, ()=> { console.log(`server is running at ${port}`)})