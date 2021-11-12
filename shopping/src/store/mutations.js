export const setProducts = (state, products) => {
    state.products = products;

}

export const setProduct = (state, product) => {
    state.product = product;
}

export const addToCart = (state, { product, quantity }) => {

    let productInCart = state.cart.find(item => {
        return item.product.id === product.id
    })

    if (productInCart) {
        productInCart.quantity += quantity;
        return;
    }

    state.cart.push({
        product,
        quantity
    })
}


// export const setCart = (state, cartItems) => {
//     state.cart = cartItems;
// }

export const removeProductFromCart = (state, product) => {
    state.cart = state.cart.filter(item => {
        return item.product.id !== product.id;
    })
}

export const clearCartItems = (state) => {
    state.cart = [];
}