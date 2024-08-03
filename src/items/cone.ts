import { Vector3 } from "@dcl/sdk/math"
import { parentClass } from "./parentClass"
import { Transform } from "@dcl/sdk/ecs"

export class coneScript extends parentClass {

  // variables
  public testVariable: number = 27
  public clickCount: number = 0

  onSpawn() {
    console.log("SPAWNED")
  }

  onUpdate(dt: number) {
    // this.testVariable += dt
    // console.log("UPDATED", this.testVariable)
  }

  onPointerDown() {
    this.clickCount++

    const transform = Transform.getMutable(this.entity)
    transform.scale = Vector3.add(transform.scale, Vector3.create(0.25, 0.25, 0.25))


    if (this.clickCount > 10) {

      this.myCustomFunction()
    }

    console.log("CLICKED", this.clickCount, transform.scale)
  }

  myCustomFunction() {
    console.log("CUSTOM FUNCTION")
  }
}