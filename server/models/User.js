import sequelize from '../config/sequelize.js';
import { DataTypes } from 'sequelize';

const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
})

User.associate = (models) => {
    User.hasOne(models.Cart, { foreignKey: 'userId', as: 'cart' })
}

export default User;