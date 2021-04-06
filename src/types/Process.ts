import React from "react";

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
  
}

export default Process;