<template>
<div class="container">
    <flash-message class="myCustomClass"></flash-message>
    <h2>All types pizza</h2>
    <div class="row">
        <div v-for="item in products" :key="item.id" class="cardstyle">
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" :src="'http://127.0.0.1:8000/'+item.image" alt="Card image cap" style="width: 17.9rem; height: 10rem;">
                <div class="card-body">
                    <h5 class="card-title">{{ item.name }}</h5>
                    <p class="card-text">{{ item.description }}</p>
                    <p class="card-text">{{ item.price }}</p>
                    <button class="btn btn-success" @click="addToCart(item)">Add to Cart</button>
                </div>
            </div>
        </div>

    </div>

</div>
</template>

<script>
import User from './../api/User';

export default {
    name: 'Products',
    data() {
        return {
            products: []
        }
    },
    mounted() {
        // let token = localStorage.getItem("token");
        // this.$http.get('http://localhost:8000/api/getPizzaProducts', {
        //         headers: {
        //             'Authorization': `Bearer ${token}`
        //         }
        //     })
        User.products()
            .then(response => (this.products = response.data.data))
    },
    methods: {
        addToCart(item) {
            this.flashSuccess('Pizza add to cart', {
                timeout: 300
            });
            this.$store.commit('addToCart', item);
        }
    },
}
</script>

<style>
.cardstyle {
    justify-content: center;
    margin: 30px;
}
</style>
