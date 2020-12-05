const VueApp = {
    el: '#app',
    data() {
        return {
            repetitions: 1,
            intervalMinutes: 1,
            intervalPauseMinutes: 0.5,
        }
    },
    computed: {
        durationMins() {
            console.log(this.repetitions)
            return this.repetitions * (this.intervalMinutes + this.intervalPauseMinutes)
        }
    }
}

Vue.createApp(VueApp).mount('#app')