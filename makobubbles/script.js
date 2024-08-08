const canvas = document.querySelector("canvas")
const context = canvas.getContext("2d")

document.body.onresize = () => {
    canvas.height = window.innerHeight
    canvas.width = window.innerWidth
}

document.body.onresize()

function Circle(x, y, upVelocity, radius) {

    this.x = x
    this.y = y
    this.upVelocity = upVelocity
    this.radius = radius

    this.draw = () => {
        context.beginPath()
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        context.fillStyle = "#00ff51"
        context.fill()
    }

    this.update = () => {
        this.y+=this.upVelocity
        this.draw()
    }

}

let circleArray = []

function animate() {

    context.clearRect(0, 0, canvas.width, canvas.height)

    if (Math.random() < 0.02) {
        let radius = (Math.random() * 3) + 1
        let x = Math.random() * canvas.width
        let y = canvas.height + 100
        let upVelocity = (Math.random() * -1.2) - 0.5
        circleArray.push(new Circle(x, y, upVelocity, radius))
    } 

    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update()
    }

    requestAnimationFrame(animate)
    console.log(circleArray.length)
}

animate()