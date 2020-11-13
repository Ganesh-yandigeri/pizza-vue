<template>
<div class="container">
    <h3>Show Orders</h3>
    <hr>
    <div v-for="order in Allorders" :key="order.id">
        <h3> ({{"orde123"+order.id}}) {{order.name}} - {{order.mobile}}</h3>
        <table class="table">
            <thead>
                <tr class="bg-info">
                    <th scope="col">Id</th>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Ordered_at</th>
                </tr>
            </thead>
            <tbody>

                <tr v-for="ord in order['orders']" :key="ord.id">
                    <td>{{ ord.id }}</td>
                    <td>{{ord.product_name}}</td>
                    <td>{{ord.price}}</td>
                    <td>{{ord.product_qty}}</td>
                    <td>{{ord.created_at}}</td>

                </tr>

            </tbody>

        </table>
    </div>
</div>
</template>

<script>
import User from './../api/User';
export default {
    name: "ShowOrders",
    data() {
        return {
            Allorders: []
        }
    },
    mounted() {
        User.getAllOrders()
            .then(response => (this.Allorders = response.data))
    },
}
</script>
