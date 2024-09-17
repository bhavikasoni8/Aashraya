import sequelize from "../config/sequelize.js";
import { DataTypes } from 'sequelize';

const CartProduct = sequelize.define('CartProduct', {
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
    cartId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Cart',
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    productId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Cart',
            key: 'id'
        },
        onDelete: 'CASCADE'
    }
})

export default CartProduct