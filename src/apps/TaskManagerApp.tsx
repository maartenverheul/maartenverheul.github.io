import React from "react";
import AppShell from "../components/appshell/AppShell";
import App from "./App";

type State = {
  input: string
}

export default class TaskManagerApp extends React.Component implements App {

  public icon = "taskmgr";

  args: any = {}

  constructor(props: any){
    super(props);
    this.args = (this.props.children as any).args;
  }

  state: State = {
    input: ""
  }

  async destroy() {

  }

  render(){
    return (
      <AppShell title={`${this.args.filename||"Untitled"} - Notepad`} icon="icon" position={[100, 100]} size={[800, 600]}>
        <div style={{overflowY: "scroll", height: "100%", marginLeft: 3, paddingBottom: 10, fontFamily: 'consolas'}}>
          <p>Not implemented yet</p>
        </div>
      </AppShell>
    )
  }

}