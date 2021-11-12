import Home from "./pages/Home.vue"
import Products from "./components/Products.vue"
import ProductCard from "./components/ProductCard.vue"
import ProductDeatils from "./components/ProductDetails.vue"

export default [
    {
        path: '/',
        component: Home,
        name: 'Home'
    },
    {
        path: '/products',
        component: Products,
        name: 'Products',
        props: true
    },
    {
        path: '/productcard',
        component: ProductCard,
        name: 'ProductCard'
    },
    {
        path: '/product/:id',
        component: ProductDeatils,
        name: 'ProductDetails',
        props: true
    }
]