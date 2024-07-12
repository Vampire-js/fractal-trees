import { c } from "../main"
import { Utils, Vector2d } from "../utils"

export class Line {
    constructor(){
      this.position = new Vector2d(0,0)
      this.rotation = -Math.PI/4
      this.length = 100
    }
    draw(){
      c.beginPath()
      c.moveTo(this.position.x , this.position.y)
      c.lineTo(
        Utils().getPolarCoords(this.position, this.length , this.rotation).x,
        Utils().getPolarCoords(this.position , this.length , this.rotation).y
      )
      c.strokeStyle = "white"
      c.stroke()
    }
    getEndPoint(){
        return Utils().getPolarCoords(this.position, this.length , this.rotation) 
    }
    update(){
      this.draw()
    }
  }
  