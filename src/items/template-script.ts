import { Vector3 } from "@dcl/sdk/math"
import { parentClass } from "./parentClass"
import { Transform } from "@dcl/sdk/ecs"

export class myClass extends parentClass {

  // variables
  public myVariable: number = 0

  onSpawn() {
    console.log("SPAWNED")
  }

  onUpdate(dt: number) {
    // this.testVariable += dt
    // console.log("UPDATED", this.testVariable)
  }

  onPointerDown() {
  }

  myCustomFunction() {
  }
}