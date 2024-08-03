import { Entity, Transform } from "@dcl/sdk/ecs";

export class parentClass {

  public transform

  constructor(public entity: Entity) {

    entity = entity
    // this.transform not working, seems to be a copy of the transform, not affecting the real entity
    this.transform = Transform.getMutable(this.entity)
  }


}