import { Line } from "./js/Line"

const canvas = document.getElementById("canvas")
export const c = canvas.getContext("2d")
canvas.width = 400
canvas.height = 400


// const line = new Line()
// line.position.set(200,400)
// line.rotation = -Math.PI/2
// line.draw()

let branches = []
let angle = 0
let i = -1
function branch(len) {
  i++
  let line = new Line()
  angle += Math.PI / 4
  line.length = len
  line.rotation += angle
  if (i > 0) {
    line.position.set(branches[i - 1].getEndPoint().x, branches[i - 1].getEndPoint().y)
    console.log(branches[i - 1])
  } else {
    line.position.set(200, 200)
  }


  if (len > 4) {
    branches.push(line)
    branch(len * 2 / 3)

  }

}
branch(100)
branches.map(e => e.draw()
)
console.log(branches)

const animate = () => {
  c.fillStyle = "rgb(51,51,51)"
  c.fillRect(0, 0, canvas.width, canvas.height)

  branches.map(e => e.update())

  requestAnimationFrame(animate)
}

animate()