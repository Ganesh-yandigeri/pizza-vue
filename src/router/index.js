import  VueRouter from "vue-router";
import AdminLoginVue from '../components/AdminLogin.vue'
// import HelloWorldVue from '../components/HelloWorld.vue'
import AddProductVue from '../components/AddProduct.vue'
import ShowOrdersVue from '../components/ShowOrders.vue'
import ProductsVue from '../components/Products.vue'
import CartVue from '../components/Cart.vue'
import CheckOutVue from '../components/CheckOut.vue'

const routes = [
  // {
  //   path: "/",
  //   name: 'Home',
  //   component: HelloWorldVue,
  // },
  {
    path: "/admin-login",
    name: 'AdminLogin',
    component: AdminLoginVue,
  },
  {
    path: "/",
    name: 'Products',
    component: ProductsVue,
  },
  {
    path: "/cart",
    name: 'Cart',
    component: CartVue,
  },
  {
    path: "/check-out",
    name: 'CheckOut',
    component: CheckOutVue,
  },
  {
    path: "/add-products",
    name: 'AddProduct',
    component: AddProductVue,
    meta: {authOnly: true}
  }, 
  {
    path: "/show-orders",
    name: 'ShowOrders',
    component: ShowOrdersVue,
    meta: {authOnly: true}
  },
 
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes 
  })


  function loggedIn(){
    return localStorage.getItem("auth");
  }
  
  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authOnly)) {
      if (!loggedIn()) {
        next({
          path: '/admin-login',
        })
      } else {
        next()
      }
    } else if (to.matched.some(record => record.meta.guestOnly)) {
      if (loggedIn()) {
        next({
          path: '/products',
        })
      } else {
        next()
      }
    } else {
      next()
    }
  })

export default router;
