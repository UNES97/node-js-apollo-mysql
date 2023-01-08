module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        firstname: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        lastname: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        phone: {
            type: Sequelize.STRING,
            allowNull: true,
            unique: {
                args:true,
                msg: 'Numéro de téléphone déjà utilisée !'
            }
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            validate:{
                notEmpty:{
                    args:true,
                    msg:"Email requis !"
                },
                isEmail:{
                    args:true,
                    msg:'Email valide requis !'
                }
            },
            unique: {
                args:true,
                msg: 'Adresse e-mail déjà utilisée !'
            }
        },
    },
    {
        paranoid: true,
        timestamps: true
    });
    return User;
};