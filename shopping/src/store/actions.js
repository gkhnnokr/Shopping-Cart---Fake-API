import axios from "axios";

export const getProducts = ({ commit }) => {
    axios.get('http://localhost:3000/products')
        .then(response => {
            commit('setProducts', response.data);
        })
}

export const getProduct = ({ commit }, productId) => {
    axios.get(`http://localhost:3000/products/${productId}`)
        .then(response => {
            commit('setProduct', response.data)
        })
}

export const addProductToCart = ({ commit }, { product, quantity }) => {
    commit('addToCart', { product, quantity });

    // axios.post('http://localhost:3000/cart', {
    //     product_id : product.id,
    //     quantity
    // });
}

// export const getCartItems = ({commit}) => {
//     axios.get('http://localhost:3000/cart')
//     .then(response => {
//         commit('setCart', response.data);
//     })
// }

export const removeProductFromCart = ({commit}, product) => {
    commit('removeProductFromCart', product);
}

export const clearCartItems = ({commit}) => {
    commit('clearCartItems');
}