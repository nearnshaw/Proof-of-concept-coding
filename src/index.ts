// We define the empty imports so the auto-complete feature works as expected.
import { } from '@dcl/sdk/math'
import { engine } from '@dcl/sdk/ecs'

import { addScriptedComponent, onSceneInit } from './items/behindTheScenes'


export function main() {

  addScriptedComponent()

  onSceneInit()

}
