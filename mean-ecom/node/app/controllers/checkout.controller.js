const db = require("../models");


const Checkout = db.Checkout;
const Op = db.Sequelize.Op;
exports.create=function(req,res,next){
    const body=req.body;
    const _data={
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        phone:req.body.phone,
        email:req.body.email,
        adresse:req.body.adresse,
        country:req.body.country,
        city:req.body.city,
        state:req.body.state,
        zip:req.body.zip,
        subTotal:req.body.subTotal,
        shippingCost:req.body.shippingCost,
        grandTotal:req.body.grandTotal
        
    };
    Checkout.create(_data)
    .then(obj => {
        res.status(200).send({ data: obj, message: "create one products" });
    })
    .catch(err => {
        res.status(500).send({ message: err.message });
    });
};