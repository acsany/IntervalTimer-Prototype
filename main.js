const VueApp = {
    el: '#app',
    data() {
        return {
            repetitions: 1,
            intervalSeconds: 60,
            timerActive: false,
            totalTimerCount: 0,
        }
    },
    computed: {
        durationSeconds() {
            return this.repetitions * this.intervalSeconds
        },
        durationMins() {
            return this.durationSeconds / 60
        },
        activeInterval() {
            if (this.timerActive) {
                let activeInterval = this.durationMins / this.totalTimerCount
                console.log(activeInterval)
                return 1
            } else {
                return 0
            }
        },
        // totalTimerCount() {
        //     return 30
        // }
    },
    methods: {
        startTimer() {
            console.log("Starting Timer ...")
            this.timerActive = true
            this.totalTimerCount = this.durationSeconds
        },
        resetTimer() {
            console.log("... Timer reset.")
            this.timerActive = false
            this.totalTimerCount = this.durationSeconds
        },
    },
    watch: {
        totalTimerCount: {
            handler(value) {
                if (this.timerActive) {
                    //this.currentCountdown = duration
                    setTimeout(() => {
                        this.totalTimerCount--;
                    }, 1000);
                }
            }
        }
    }
}

Vue.createApp(VueApp).mount('#app')