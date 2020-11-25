<template>
<div>
    <Header />
    <transition
    mode="out-in"
    enter-active-class="animate__animated animate__slideInLeft"
    leave-active-class="animate__animated animate__zoomOut"
    >
        <router-view />
    </transition>
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
