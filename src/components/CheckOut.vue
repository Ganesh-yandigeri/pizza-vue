<template>
<div class="container">
    <h2>check out page</h2>

    <div v-if="cartData.length != 0">
        <table id="cart" class="table table-hover table-condensed">
            <thead>
                <tr>
                    <th style="width: 12rem;">Product</th>
                    <th style="width: 12rem;">Image</th>
                    <th style="width: 12rem;">Price</th>
                    <th>Quantity</th>
                    <th class="text-center">Subtotal</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="cart in cartData" :key="cart.id">
                    <td>
                        <h4 class="nomargin">{{cart.name}}</h4>
                    </td>
                    <td data-th="Product">
                        <img class="card-img" :src="'http://127.0.0.1:8000/'+cart.image" alt="Cart image" style="border-radius: 50%; width:6rem;" />
                    </td>
                    <td data-th="Price">$ {{cart.price}}</td>
                    <td data-th="Quantity">

                        <span class="ml-1 mr-1">{{cart.quantity}}</span>

                    </td>
                    <td data-th="Subtotal" class="text-center">$ {{cart.totalPrice}}</td>

                </tr>
            </tbody>
            <br>
            <tfoot>

            </tfoot>
        </table>
        <hr>
        <form @submit="formSubmit">
            <td colspan="1" class="">
                <input type="text" v-model="client.name" name="name" placeholder="ur name" class="form-control col-md-11" required>
            </td>
            <td colspan="1" class="">
                <input type="text" v-model="client.mobile" name="mobile" placeholder="ur mobile" class="form-control col-md-11" required>
            </td>
            <td colspan="1" class="">
                <input type="text" v-model="client.address" name="address" placeholder="ur address" class="form-control col-md-11" required>
            </td>
            <td colspan="1" class="">
                <input type="text" v-model="client.grandTotal" name="address" disabled class="form-control col-md-11" required>
            </td>
            <td>
                <button type="submit" class="btn btn-success">purchase</button>
            </td>
        </form>
    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'CheckOut',
    data() {
        return {
            client: {
                name: '',
                mobile: '',
                address: '',
                grandTotal: `$ ${this.$store.state.cartSubtotal}`,
                clientCart: this.$store.state.cart
            }
        }
    },
    computed: {
        cartData() {
            return this.$store.state.cart;
        }
    },
    methods: {
        formSubmit(e) {
            e.preventDefault();
            this.flashSuccess(' Order was confirmed', {
                timeout: 3000
            });

            var _this = this;
            axios.post('http://localhost:8000/api/clientOrders', this.client)
                .then(function (response) {
                    if (response.data.status === "success") {
                        _this.$router.push({
                            path: '/'
                        });
                    }

                })
                .catch(function (error) {
                    if (error.response.status === 422) {
                        console.log(error)
                        this.errors = error.response.data.errors
                    }
                });
        }
    }

}
</script>
