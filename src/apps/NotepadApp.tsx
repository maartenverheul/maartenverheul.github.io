import React from "react";
import AppShell from "../components/appshell/AppShell";
// TODO move
import Content from '../config/content.json';

type Props = {
  filename?: string
  content: string
}

export default class NotepadApp extends React.Component<Props> {

  args: any = {}

  constructor(props: any){
    super(props);
    this.args = (this.props.children as any).args;
  }

  state = {
    content: ""
  }

  componentDidMount(){
    this.getData();
  }

  // TODO move
  async getFilename(): Promise<string> {
    const filename = this.args[1]
    return (Content as {[name: string]: string})[filename];
  }

  async getData(){
    let filename = await this.getFilename();
    let data = await fetch(filename)
    .then(data => {
      return data.text();
    });
    this.setState({content: data});
  }

  render(){
    return (
      <AppShell title={`${this.args.filename||"Untitled"} - Notepad`} icon="icon" position={[100, 100]} size={[800, 600]}>
        <div style={{overflowY: "scroll", height: "100%", marginLeft: 3, paddingBottom: 10, fontFamily: 'consolas'}}>
          <p style={{whiteSpace: "pre"}}>{this.state.content}</p>
        </div>
      </AppShell>
    )
  }

}