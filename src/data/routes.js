import Home from '../view/home/home';
import productUploadingForm from '../view/productUploadingForm/productUploadingForm'
import cart from "../component/cart/cart"

const prePath = "/dashboard";
const routes = [
    {
        name: "Home",
        path: prePath + "/home",
        component: Home,
        layout: "/dashboard",
        icon: "home"
    },
    {
        name: "Cart",
        path: prePath + "/cart",
        component: cart,
        layout: "/dashboard",
        icon: "contacts"
    },
    {
        name: "Add Product",
        path: prePath + "/productUploadingForm",
        component: productUploadingForm,
        layout: "/dashboard",
        icon: "post_add"
    }
]

export default routes;