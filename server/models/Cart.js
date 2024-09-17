import sequelize from '../config/sequelize.js';
import { DataTypes } from 'sequelize';

const Cart = sequelize.define('Cart', {
    totalPrice: DataTypes.FLOAT
})

Cart.associate = (models) => {
    Cart.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    Cart.belongsToMany(models.cartProduct, { through: 'CartProducts', as: 'items', foreignKey: 'cartId' })
}

export default Cart;