import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type User {
        id: ID!
        name:String!
        email:String!
        cart:Cart
    }
    
    type Product {
        id:ID!
        name:String!
        description:String!
        price:Float!
        img:String!
    }

    type Cart {
        id:ID!
        totalPrice:Float!
        items: [CartItem]
    }

    type CartItem {
        product: Product!
        quantity:Int!
    }

    type Query {
        getUser(id:ID!): User
        getAllProducts: [Product]
        getProductById(id:ID!):Product
        getCart(userId:ID!): Cart
    }

    type Mutation {
        createUser(name: String! email: String! password: String!): User
        deleteUser(id:String!):Boolean
        createProduct(name:String!, description:String!,price:Float!,img:String!):Product
        deleteProduct(id:String!):Boolean
        addToCart(userId:String!,productId:String!,quantity:Int!):Cart
        updateCart(userId:String!,productId:String!,quantity:Int!):Cart
        removeFromCart(userId:String!,productId:String!):Cart
    }
`

export default typeDefs;