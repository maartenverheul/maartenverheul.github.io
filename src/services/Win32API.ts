import React from "react";
import App from "../apps/App";
import NotepadApp from "../apps/NotepadApp";
import Process from "../types/Process";
import { ShortcutConfig } from "../types/ShortcutConfig";


type Executable = (...args: string[]) => (typeof React.Component)|null;

interface PublicApi {

  registerApp(name: string, app: Executable): void,
  run(command: string): void
  getIcon(command: string): string,
  createShortcut(config: ShortcutConfig): boolean,
  getProcesses(): Process[]
  openURL(url: string): void
}

class Win32API implements PublicApi {
  
  private appRegistry: {[name: string]: Executable} = {};

  registerApp(name: string, app: Executable): void {
    if(this.appRegistry.hasOwnProperty(name)) throw new Error(`An app with name ${name} has already been registered!`);
    this.appRegistry[name] = app;
    console.log(`App "${name}" has been successfully registered`);
  }

  getApp(name: string): Executable {
    return this.appRegistry[name]||null;
  }

  run(command: string){
    return new Error("Win32 run has not been not implemented yet!");  
  }

  getIcon(command: string): string {
    const app = command.split(" ")[0];
    switch(app){
      case "open": return "edge";
      default: return app;
    }
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

  openURL(url: string){
    window.open(url, "_blank");
  }

}

export default new Win32API();