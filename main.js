const VueApp = {
    el: '#app',
    data() {
        return {
            repetitions: 1,
            intervalMinutes: 1,
            intervalPauseMinutes: 0.5,
            timerActive: false,
        }
    },
    computed: {
        durationMins() {
            return this.repetitions * (this.intervalMinutes + this.intervalPauseMinutes)
        },
        activeInterval() {
            if (this.timerActive) {
                return 1
            } else {
                return 0
            }
        }
    }
}

Vue.createApp(VueApp).mount('#app')