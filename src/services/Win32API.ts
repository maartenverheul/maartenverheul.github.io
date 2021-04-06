import { ShortcutConfig } from "../types/ShortcutConfig";

interface PublicApi {

  run(command: string): void
  createShortcut(config: ShortcutConfig): boolean

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

}