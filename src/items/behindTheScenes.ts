

// processes that need to happen behind the scenes to make it easy to just write a script for an object

import { engine, Entity, InputAction, PointerEvents, pointerEventsSystem, PointerEventType, Schemas } from "@dcl/sdk/ecs";
import { coneScript } from "./cone";

// define a "scripted" component that can be added to any entity that has a script


export const Scripted = engine.defineComponent('scripted', {})

// create a map that lists the classes registered for each scripted object

export const classOfEachObject = new Map<Entity, any>()



// all items with a script need to be given a custom "scripted" component and registered on the classOfEachObject map

export function addScriptedComponent() {

  // cone
  const cone = engine.getEntityOrNullByName("Cone")

  if (cone) {
    if (!Scripted.has(cone)) {
      Scripted.create(cone)
    }

    const coneScriptInstance = new coneScript()
    classOfEachObject.set(cone, coneScriptInstance)
  }

  // hydrant (shares same script as cone)
  const hydrant = engine.getEntityOrNullByName("Hydrant")

  if (hydrant) {
    if (!Scripted.has(hydrant)) {
      Scripted.create(hydrant)
    }

    const coneScriptInstance2 = new coneScript()
    classOfEachObject.set(hydrant, coneScriptInstance2)
  }
}


export function onSceneInit() {


  for (const [entity] of engine.getEntitiesWith(Scripted)) {

    const myClass = classOfEachObject.get(entity)

    myClass.onSpawn()

    if (myClass.onPointerDown) {

      pointerEventsSystem.onPointerDown(
        {
          entity: entity,
          opts: {
            button: InputAction.IA_POINTER,
            hoverText: 'Click'
          }
        }, () => {
          myClass.onPointerDown()
        }

      )
    }

  }

  engine.addSystem(scriptedObjectsSystem)
}


export function scriptedObjectsSystem(dt: number) {
  for (const [entity] of engine.getEntitiesWith(Scripted)) {

    const myClass = classOfEachObject.get(entity)

    if (myClass.onUpdate) {
      myClass.onUpdate(dt)
    }
  }
}