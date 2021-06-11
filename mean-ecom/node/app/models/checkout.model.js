module.exports = (sequelize, Sequelize) => {
    const Checkout = sequelize.define("checkouts", {
        firstname: { type: Sequelize.STRING },
        lastname: { type: Sequelize.STRING },
        phone: { type: Sequelize.STRING },
        email: { type: Sequelize.STRING },
        adresse: {type:Sequelize.STRING},
        country: {type:Sequelize.STRING},
        city: {type:Sequelize.STRING},
        state: {type:Sequelize.STRING},
        zip: {type:Sequelize.STRING},
        subTotal: {type:Sequelize.INTEGER},
        shippingCost: {type:Sequelize.INTEGER},
        grandTotal: {type:Sequelize.INTEGER},
    });

    return Checkout;
};