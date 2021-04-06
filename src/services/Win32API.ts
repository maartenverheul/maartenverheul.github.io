import Process from "../types/Process";
import { ShortcutConfig } from "../types/ShortcutConfig";

interface PublicApi {

  run(command: string): void
  createShortcut(config: ShortcutConfig): boolean,

  getProcesses(): Process[]

}

export default class Win32Api implements PublicApi {
  
  run(command: string){
    return new Error("Win32 run has not been not implemented yet!");  
  }

  /**
   * @returns false if there is no room to create one
   */
  createShortcut(config: ShortcutConfig): boolean {
    throw new Error("Win32 createShortcut has not been not implemented yet!"); 
  }

  getProcesses(): Process[] {
    throw new Error("Win32 getProcesses has not been not implemented yet!"); 
  }

}