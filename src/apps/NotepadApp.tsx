import React from "react";
import AppShell from "../components/appshell/AppShell";

type Props = {
  filename?: string
  content: string
}

export default class NotepadApp extends React.Component<Props> {

  render(){
    return (
      <AppShell title={`${this.props.filename||"Untitled"} - Notepad`} icon="icon" position={[100, 100]} size={[800, 600]}>
        <div style={{overflowY: "scroll", height: "100%", marginLeft: 3, paddingBottom: 10, fontFamily: 'consolas'}}>
          <p style={{whiteSpace: "pre"}}>{this.props.content}</p>
        </div>
      </AppShell>
    )
  }

}