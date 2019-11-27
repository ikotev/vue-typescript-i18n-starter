<template>
    <div id="app">
        <h2>Teams Container</h2>
        <h3><span v-text="$t('message.hello')"></span></h3>
        <button v-on:click="inc">Inc</button>
        <span v-text="count"></span>

        <select v-on:change="changeLanguage">
            <option v-for="lang in languages"
                    v-bind:key="lang"
                    v-bind:selected="isCurrentLanguage(lang)"
                    v-bind:value="lang">
                {{lang}}
            </option>
        </select>        
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import store from './store';
    import { mapGetters } from 'vuex';
    import { mapMutations } from 'vuex';
    import { loadLanguageAsync, SUPPORTED_LANGUAGES } from '@/i18n';

    export default Vue.extend({
        name: 'TeamsContainer',
        data() {
            return {

            }
        },
        computed: {
            ...mapGetters('teams', ['count']),

            languages() {
                return SUPPORTED_LANGUAGES;
            },
            currentLanguage() {
                return this.$i18n.locale;
            }
        },
        mounted() {

        },
        created: function () {
            //if (!('teams' in this.$store._modules.root._children)) {
            this.$store.registerModule('teams', store);
            //}
        },
        methods: {
            ...mapMutations('teams', {
                inc: 'increment'
            }),

            changeLanguage(e: Event) {                
                const el = e.target as HTMLSelectElement;
                const lang = el.value;
                loadLanguageAsync(lang);
            },
            isCurrentLanguage(lang: string) {
                return this.currentLanguage === lang;
            }
        }
    });
</script>

<style>
</style>