const VueApp = {
    el: '#app',
    data() {
        return {
            repetitions: 4,
            intervalSeconds: 2,
            timerActive: false,
            currentInterval: 0,
            totalTimerCount: 0,
            intervalTimerCount: 0,
            timerComplete: false
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
            if (this.timerActive && this.totalTimerCount > 0) {
                return this.currentInterval
            } else {
                return 0
            }
        }
    },
    methods: {
        startTimer() {
            console.log("Starting Timer ...")
            this.timerComplete = false
            this.timerActive = true
            this.totalTimerCount = this.durationSeconds
            this.intervalTimerCount = this.intervalSeconds
            this.currentInterval = 1
        },
        resetTimer() {
            console.log("... Timer reset.")
            this.timerComplete = false
            this.timerActive = false
            this.totalTimerCount = this.durationSeconds
            this.currentInterval = 0
        },
    },
    watch: {
        totalTimerCount: {
            handler(value) {
                if (value > 0 && this.timerActive) {
                    //this.currentCountdown = duration
                    setTimeout(() => {
                        this.totalTimerCount--;
                        if (this.totalTimerCount == 0) {
                            this.resetTimer()
                            this.timerComplete = true
                        }
                    }, 1000);
                }
            }
        },
        intervalTimerCount: {
            handler(value) {
                if (value > 0 && this.timerActive) {
                    setTimeout(() => {
                        this.intervalTimerCount--;
                        if (this.intervalTimerCount == 0) {
                            this.intervalTimerCount = this.intervalSeconds
                            this.currentInterval++
                        }
                    }, 1000);
                }
            }
        }
    }
}

Vue.createApp(VueApp).mount('#app')