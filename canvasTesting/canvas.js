const canvas = document.querySelector("canvas")
const context = canvas.getContext("2d")

document.body.onresize = () => {
    canvas.height = window.innerHeight
    canvas.width = window.innerWidth
}

document.body.onresize()

// //
// // This draws a rectangle to the screen.
// //
// // fillRect() takes 4 arguments, the X and Y position of the top
// // left corner of the shape, and the width and height of it.
// //
// // We can also change the color of the shape using the fillStyle
// // property. This can be any valid CSS color.
// context.fillStyle = 'lightgreen'
// context.fillRect(100,100,100,100)

// //
// // This draws a line to the screen.
// //
// // beginPath() starts a new path. This has to be called first.
// context.beginPath()
// // Then, moveTo() will set the first point in our new path.
// // It takes two arguments, the X and Y values of the starting point.
// context.moveTo(50, 100)
// // Then, lineTo() will set the second point in our new path.
// // It also takes the X and Y values of the point.
// context.lineTo(100, 250)
// // We can even do this again to create another point, and draw a
// // multi-line path.
// context.lineTo(300, 50)
// // We can also change the color of the stroke using the strokeStyle
// // property. This takes any valid CSS color.
// context.strokeStyle = 'pink'
// // Finally, stroke() will actually draw the line.
// context.stroke()

// //
// // This draws an arc, or a circle, to the screen.
// //
// // First, we use beginPath() to start a new path. If we don't do this,
// // it will actually be connected to our previous path.
// context.beginPath()
// // Then, we define the arc. This takes 4 arguments, the X and Y values
// // of where the shape should be, the radius, the "begin angle", and the
// // "end angle", both of which are measured in radians. The final
// // argument is a boolean that says whether it should be drawn
// // counterclockwise or not. For our purposes, we use false.
// context.arc(300, 300, 70, 0, Math.PI * 2, false)
// // We can also change the color in the same way we did earlier.
// context.strokeStyle = 'orange'
// // Finally, we call the stroke() function to draw the shape.
// context.stroke()


// // This generates a bunch of random circles on the screen
// for (let i = 0; i < 40; i++) {

//     let randX = Math.random() * canvas.width
//     let randY = Math.random() * canvas.height
//     let randSize = (Math.random() * 30) + 5 // 5 being the minimum size
//     let randR = Math.random() * 255
//     let randG = Math.random() * 255
//     let randB = Math.random() * 255

//     context.beginPath()
//     context.arc(randX, randY, randSize, 0, Math.PI * 2, false)
//     // context.strokeStyle = `rgba(${randR},${randG},${randB},1)`
//     // context.stroke()
//     context.fillStyle = `rgba(${randR},${randG},${randB},1)`
//     context.fill()

// }

// Random number testing
// let max = 100
// let min = 0
// let bias = 1
// let influence = 1
// let rnd = Math.random() * (max - min) + min
// let mix = Math.random() * influence
// let value = rnd * (1 - mix) + bias * mix
// console.log(Math.floor(value))

// context.beginPath()
// context.arc(200, 200, 30, 0, Math.PI * 2, false)
// context.fillStyle = "pink"
// context.fill()

function Circle(x, y, velocityX, velocityY, radius) {

    this.x = x
    this.y = y
    this.velocityX = velocityX
    this.velocityY = velocityY
    this.radius = radius

    this.draw = () => {
        context.beginPath()
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        context.fillStyle = "pink"
        context.fill()
    }

    this.update = () => {
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.velocityX = this.velocityX * -1
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.velocityY = this.velocityY * -1
        }
        this.x+=this.velocityX
        this.y+=this.velocityY
        this.draw()
    }

}

let circleArray = []

for (let i = 0; i < 30; i++) {
    let radius = (Math.random() * 30) + 5
    let x = Math.random() * (canvas.width - radius * 2) + radius
    let y = Math.random() * (canvas.height - radius * 2) + radius
    let velocityX = (Math.random() - 0.5) * 10
    let velocityY = (Math.random() - 0.5) * 10
    circleArray.push(new Circle(x, y, velocityX, velocityY, radius))
}

console.log(circleArray)

function animate() {
    requestAnimationFrame(animate)
    context.clearRect(0, 0, canvas.width, canvas.height)
    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update()
    }

}

animate()