import React from "react";
import App from "../App";

export type ProcessConfig = {
  application: typeof React.Component,
  args?: any
}

class Process {

  constructor(
    public pid: number,
    public readonly application: typeof React.Component,
    public args?: any
  ){}

  kill(stopCode: number) {
    return this.destroy(stopCode);
  }

  destroy(stopCode: number = 0): void {
    throw new Error("Process destroy not implemented yet!");
  }
  
}

export default Process;