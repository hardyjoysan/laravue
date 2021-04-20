<template>
    <div class="app">
        <Navbar></Navbar>
        <router-view></router-view>
    </div>
</template>

<script>
import '../scss/app.scss';

export default {
    name: 'app',
    components: {
        Navbar: () => import('./components/Navbar.vue'),
    }
}
</script>