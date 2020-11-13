<template>
<div class="home col-5 mx-auto py-5 mt-3">
    <h1 class="text-center">Login</h1>
    <div class="card">
        <div class="card-body">
            <div class="form-group">
                <label for="email"> Email Address: </label>
                <input type="email" class="form-control" v-model="form.email" id="email">
                <span class="text-danger" v-if="errors.email"> {{ errors.email[0]}} </span>
            </div>
            <div class="form-group">
                <label for="password"> Password: </label>
                <input type="password" class="form-control" id="password" v-model="form.password">
                <span class="text-danger" v-if="errors.password"> {{ errors.password[0]}}</span>
            </div>
            <button @click.prevent="login" class="btn btn-primary btn-block">
                Login
            </button>
        </div>
    </div>
</div>
</template>

<script>
import User from './../api/User';
import {
    mapActions
} from 'vuex'

export default {
    name: 'AdminLogin',
    data() {
        return {
            form: {
                email: '',
                password: ''
            },
            errors: []
        }
    },
    methods: {
        ...mapActions([
            'store_login'
        ]),
        login() {
            User.login(this.form)
                .then((data) => {
                    localStorage.setItem("token", data.data.success.token);
                    this.$root.$emit("login", true)
                    localStorage.setItem("auth", "true");
                    this.$router.push({
                        name: "Products"
                    })
                })
                .catch(error => {
                    if (error.response.status === 422) {
                        this.errors = error.response.data.errors
                    }
                })
        }
    }
}
</script>

<style>
/* STRUCTURE */

.wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    min-height: 100%;
    padding: center;
}
</style>
