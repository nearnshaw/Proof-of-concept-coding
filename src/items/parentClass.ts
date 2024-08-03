import { Entity, Transform } from "@dcl/sdk/ecs";

export class parentClass {

  public transform

  constructor(public entity: Entity) {

    entity = entity
    this.transform = Transform.getMutable(this.entity)
  }


}