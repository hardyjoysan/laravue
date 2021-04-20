<template>
    <div class="homepage">
        <h1>{{count}}</h1>
        <button @click="$store.commit('INCREMENT')">+</button>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'home',
    computed: {
        ...mapState({
            count: state => state.count
        })
    }
}
</script>