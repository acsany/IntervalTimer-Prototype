const VueApp = {
    el: '#app',
    data() {
        return {
            message: 'Hello World 🐶',
        }
    },
    computed: {
        vueVersion() {
            return Vue.version
        }
    }
}

Vue.createApp(VueApp).mount('#app')