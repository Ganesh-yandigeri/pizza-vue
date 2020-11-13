<template>
<div>
    <Header />
    <router-view />
    <Footer />
</div>
</template>

<script>
// import AdminLogin from './components/AdminLogin'
import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'
export default {
    name: 'App',
    components: {
        Header,
        Footer
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 0.5px;
}
</style>
