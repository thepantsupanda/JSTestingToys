class Counter {

    constructor(countLabelElement) {
        this.countLabelElement = countLabelElement
        this.initializeCount()
    }

    initializeCount() {
        this.count = 0
        this.updateElement()
    }

    increaseCount() {
        this.count++
        this.updateElement()
    }

    decreaseCount() {
        this.count--
        this.updateElement()
    }

    updateElement() {
        this.countLabelElement.innerText = this.count
    }

}

const countLabelElement = document.querySelector("#count")
const decreaseButton = document.querySelector("#btnDecrease")
const resetButton = document.querySelector("#btnReset")
const increaseButton = document.querySelector("#btnIncrease")

const counter = new Counter(countLabelElement)

decreaseButton.addEventListener('click', () => {
    counter.decreaseCount()
})

resetButton.addEventListener('click', () => {
    counter.initializeCount()
})

increaseButton.addEventListener('click', () => {
    counter.increaseCount()
})
