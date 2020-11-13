<template>
<div class="container">
    <h2>cart details</h2>

    <div v-if="cartData.length != 0">
        <table id="cart" class="table table-hover table-condensed">
            <thead>
                <tr>
                    <th style="width: 12rem;">Product</th>
                    <th style="width: 12rem;">Image</th>
                    <th style="width: 12rem;">Price</th>
                    <th>Quantity</th>
                    <th class="text-center">Subtotal</th>
                    <th>Action</th>
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
                    <td class="actions" data-th="">
                        <button class="btn btn-danger btn-sm">X</button>
                    </td>
                </tr>
            </tbody>
            <br>
            <tfoot>
                <tr>
                    <td>
                        <router-link class="btn btn-warning" :to="'/'">Go Back Products</router-link>
                    </td>
                    <td colspan="2" class="hidden-xs"></td>
                    <td colspan="1" class="hidden-xs"></td>
                    <td class="hidden-xs text-center"><strong>Total $ {{ $store.state.cartSubtotal }}</strong></td>
                    <td>
                        <router-link class="btn btn-success" :to="'/check-out'">Checkout</router-link>
                    </td>
                </tr>
            </tfoot>
        </table>
    </div>
    <div v-else>
        <h1>Oh not available 😢</h1>
        <hr>
        <router-link class="btn btn-warning" :to="'/'">Go Back Products</router-link>
    </div>

</div>
</template>

<script>
export default {
    name: 'Cart',
    computed: {
        cartData() {
            return this.$store.state.cart;
        }

    }

}
</script>
