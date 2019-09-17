import Home from '../view/home/home';
import productUploadingForm from '../view/productUploadingForm/productUploadingForm'


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
        name: "Contact",
        path: prePath + "/contact",
        component: null,
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