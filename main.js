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
            timerComplete: false,
            intervalID: undefined
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
            this.newInterval()
            this.countdown()
        },
        resetTimer() {
            console.log("... Timer reset.")
            this.timerActive = false
            this.currentInterval = 0
            this.totalTimerCount = 0
            this.intervalTimerCount = 0
            clearInterval(this.intervalID)
        },
        toggleTimer() {
            this.timerActive = !this.timerActive
            if (!this.timerActive) {
                clearInterval(this.intervalID)
            } else {
                this.countdown()
            }
        },
        newInterval() {
            this.intervalTimerCount = this.intervalSeconds
            this.currentInterval++
        },
        countdown() {
            if (this.totalTimerCount > 0 && this.timerActive) {
                this.intervalID = setInterval(() => {
                    this.totalTimerCount--
                    this.intervalTimerCount--

                    if (this.totalTimerCount == 0) {
                        this.resetTimer()
                        this.timerComplete = true
                    }

                    if (this.intervalTimerCount == 0 && !this.timerComplete) {
                        this.newInterval()
                    }
                }, 1000);
            }
        }
    }
}

Vue.createApp(VueApp).mount('#app')