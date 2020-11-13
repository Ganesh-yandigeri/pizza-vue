<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" :to="'/'">Online Pizz</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <router-link class="nav-link" :to="'/'">Products</router-link>
            </li>

            <li class="nav-item">
                <router-link class="nav-link" v-if="isLoggedIn" :to="'/add-products'">Add Products</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" v-if="isLoggedIn" :to="'/show-orders'">Orders</router-link>
            </li>
        </ul>

        <ul class="navbar-nav">
            <li class="nav-item active">
                <router-link class="nav-link" :to="'/cart'">cart ({{ $store.state.cartCount }}) <b-icon-cart-4></b-icon-cart-4>
                </router-link>
            </li>
            <li class=" nav-item">
                <router-link class="nav-link" v-if="!isLoggedIn" :to="'/admin-login'">AdminLogin</router-link>
                <a class="nav-item nav-link" href="#" @click.prevent="logout" v-if="isLoggedIn">Logout</a>
            </li>
        </ul>
    </div>

</nav>
</template>

<script>
import User from '../../api/User'
import {
    mapActions
} from 'vuex'

export default {
    name: 'Header',
    data() {
        return {
            isLoggedIn: false
        }
    },
    mounted() {

        this.$root.$on("login", (val) => {
            this.isLoggedIn = val;
        })
        this.isLoggedIn = !!localStorage.getItem('auth');
    },

    methods: {
        ...mapActions([
            'logout'
        ]),
        logout() {
            User.logout().then(() => {
                this.isLoggedIn = false;
                localStorage.removeItem("auth");
                this.$router.push({
                    name: 'Products'
                })
            })
        }
    }

}
</script>
