<template>
    <div id="app">
        <h1>App</h1>
        <Teams />
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Teams from './modules/teams/index.vue';

    export default Vue.extend({
        name: 'App',
        components: { Teams },
        data() {
            return {

            }
        },
        mounted() {

        },
        created() {

        },
        methods: {

        }
    });
</script>

<style>
</style>