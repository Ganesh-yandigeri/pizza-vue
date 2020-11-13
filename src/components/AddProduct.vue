<template>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8 mt-4">
            <div class="card">
                <div class="card-header">Add product to Pizza list</div>

                <div class="card-body">
                    <div v-if="success != ''" class="alert alert-success" role="alert">
                        {{success}}
                    </div>
                    <form @submit="formSubmit" enctype="multipart/form-data">
                        <div class="form-group">
                            <label for="name"> Product Name: </label>
                            <input type="text" class="form-control" v-model="name" placeholder="Enter product name" required>
                        </div>
                        <div class="form-group">
                            <label for="name"> Product Price: </label>
                            <input type="text" class="form-control" v-model="price" placeholder="Enter produnct price" required>
                        </div>
                        <div class="form-group">
                            <label for="name"> Product Description: </label>
                            <textarea class="form-control" v-model="description" placeholder="Enter produnct descrption" required></textarea>
                        </div>
                        <div class="form-group">
                            <label for="name"> Product Image: </label>
                            <input type="file" class="form-control" v-on:change="onFileChange" required>
                        </div>
                        <br />
                        <button class="btn btn-primary btn-block"> Add </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
    mounted() {
        console.log('Component mounted.')
    },
    data() {
        return {
            name: '',
            file: '',
            success: '',
            description: '',
            price: '',
            errors: ''
        };
    },

    methods: {

        onFileChange(e) {
            this.file = e.target.files[0];
        },
        formSubmit(e) {
            var _this = this
            e.preventDefault();
            const config = {
                headers: {
                    'content-type': 'multipart/form-data',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            }
            let formData = new FormData();
            formData.append('pizza_img', this.file);
            formData.append('name', this.name);
            formData.append('description', this.description);
            formData.append('price', this.price);

            axios.post('http://localhost:8000/api/addPizzaProducts', formData, config)
                .then(function (response) {
                    if (response.data.status === "success") {
                        _this.$router.push({
                            path: '/'
                        });
                        // this.$router.push({name: "Products" })
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
