import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        cart: [ ],
        cartCount: 0,
        cartSubtotal: 0
    },

      
  getters: {
    // Here we will create a getter
  },
  
  mutations: {
        addToCart(state, item) {
            let found = state.cart.find(product => product.id == item.id);
        
            if (found) {
                found.quantity ++;
                found.totalPrice = found.quantity * found.price;
            } else {
                state.cart.push(item);
        
                Vue.set(item, 'quantity', 1);
                Vue.set(item, 'totalPrice', item.price);
            }
            state.cartCount++;

            state.cartSubtotal = parseInt(state.cartSubtotal) + parseInt(item.price);
        }
  },
  
  actions: {
    // Here we will create Larry
  }
   
})

export default store;