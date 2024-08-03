import { Entity, Transform } from "@dcl/sdk/ecs";

export class templateScript {

  public transform

  constructor(public entity: Entity) {

    entity = entity
    this.transform = Transform.getMutable(this.entity)
  }


  onSpawn() {

  }

  onUpdate(dt: number) {

  }


  onPointerDown() {

  }

  myCustomFunction() {

  }


}