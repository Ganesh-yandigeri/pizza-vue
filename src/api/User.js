import Api from './Api';
// import Csrf from './Csrf'
export default{
    login(form){
        // await Csrf.getCookie();
        return Api().post('/login',form);
    },
    logout(){
        // await Csrf.getCookie();
        return Api().post('/logout');
    },
    auth(){
        return Api().get('/user');
    },
    products(){
        return Api().get('/getPizzaProducts');
    },
    getAllOrders(){
        return Api().get('/getClientOrders');
    }
}