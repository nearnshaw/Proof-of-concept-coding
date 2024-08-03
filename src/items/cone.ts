export class coneScript {

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

    if (this.clickCount > 10) {
      this.myCustomFunction()
    }


    console.log("CLICKED", this.clickCount)
  }



  myCustomFunction() {
    console.log("CUSTOM FUNCTION")
  }


}