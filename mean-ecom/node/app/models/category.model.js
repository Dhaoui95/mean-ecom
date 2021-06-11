module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define("categories", {
        cName: { type: Sequelize.STRING },
        cSlug: { type: Sequelize.STRING },
        cStatus: { type: Sequelize.BOOLEAN, defaultValue: true },
        cDesc: { type: Sequelize.TEXT },
        cImage: { type: Sequelize.STRING },
        createdAt: {
            field: 'created_at',
            type: Sequelize.DATE,
        },
        updatedAt: {
            field: 'updated_at',
            type: Sequelize.DATE,
        },
    });

    return Category;
};