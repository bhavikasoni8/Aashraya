import sequelize from '../config/sequelize.js'
import { DataTypes } from 'sequelize';

const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT,
    img: DataTypes.STRING,
})

export default Product;