import Cart from "../../models/Cart.js";
import CartProduct from "../../models/CartProduct.js";
import Product from "../../models/Product.js"
import User from "../../models/User.js"

const resolvers = {
    Query: {
        getUser: async (_, { userId }) => {
            const user = await User.findByPk(userId, { include: 'cart' })
            return user;
        },
        getAllProducts: async () => {
            const products = await Product.findAll()
            return products;
        },
        getProductById: async (_, { productId }) => {
            const product = await Product.findByPk(productId);
            return product;
        },
        getCart: async (_, { userId }) => {
            const cart = await Cart.findOne({ where: { userId }, include: [{ model: Product, as: 'items' }] })
            return cart;
        }
    },
    Mutation: {
        createUser: async (_, { name, email, password }) => {
            const user = await User.create({ name, email, password })
            await Cart.create({ userId: user.id, totalPrice: 0 });
            return user;
        },
        deleteUser: async (_, { userId }) => {
            const user = await User.findByPk(userId)
            if (!user) {
                return false
            }
            await user.destroy()
            return true;
        },
        createProduct: async (_, { name, description, price, img }) => {
            const product = await Product.create({ name, description, price, img })
            return product;
        },
        deleteProduct: async (_, { productId }) => {
            const product = await Product.findByPk(productId)
            if (!product) {
                return false
            }
            await product.destroy()
            return true
        },
        addToCart: async (_, { userId, productId, quantity }) => {
            const cart = await Cart.findOne({ where: userId })
            if (!cart) {
                return "User does not have a cart/ wrong user id"
            }
            const product = await Product.findByPk(productId)
            if (!product) {
                return "Product does not exist / wrong product id"
            }
            const cartProduct = await CartProduct.findOne({
                where: {
                    cartId: cart.id,
                    productId: product.id
                }
            })

            if (cartProduct) {
                cartProduct.quantity += quantity
            } else {
                const product = await Product.findByPk(productId)
                await Cart.create({ userId, totalPrice: product.price })
            }

            return cart;
        },
        updateCart: async (_, { userId, productId, quantity }) => {
            const cart = await Cart.findOne({ where: userId })
            if (!cart) {
                return "User does not have a cart/ wrong user id"
            }
            const product = await Product.findByPk(productId)
            if (!product) {
                return "Product does not exist / wrong product id"
            }
            const cartProduct = await CartProduct.findOne({
                where: {
                    cartId: cart.id,
                    productId: product.id
                }
            })
            if (cartProduct) {
                cartProduct.quantity += quantity
            } else {
                return "product does not exist"
            }
        },
        removeFromCart: async (_, { userId, productId }) => {
            const cart = await Cart.findOne({ where: userId })
            if (!cart) {
                return "User does not have a cart/ wrong user id"
            }
            const product = await Product.findByPk(productId)
            if (!product) {
                return "Product does not exist / wrong product id"
            }
            const cartProduct = await CartProduct.findOne({
                where: {
                    cartId: cart.id,
                    productId: product.id
                }
            })
            await cartProduct.destroy();
            return cart;
        }
    }
}

export default resolvers;