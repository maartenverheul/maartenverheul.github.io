import React from "react";
import AppShell from "../components/appshell/AppShell";

const url = `https://raw.githubusercontent.com/maartenverheul/maartenverheul.github.io/master/content/CV%20Maarten%20Verheul%20-%20nederlands.txt`

export default class NotepadApp extends React.Component {

  state = {
    content: ""
  }

  componentDidMount(){
    this.getData();
  }

  async getData(){
    
    let data = await fetch(url)
    .then(data => {
      return data.text();
    });
    this.setState({content: data});
  }

  render(){
    return (
      <AppShell title="Maarten Verheul.txt - Notepad" icon="icon" position={[100, 100]} size={[800, 600]}>
        <div style={{overflow: "auto", height: "100%", marginLeft: 3, paddingBottom: 10, fontFamily: 'consolas'}}>
          {/* <p style={{whiteSpace: "pre"}}>{this.state.content}</p> */}
          <p>Welcome to the website of Maarten Verheul.<br/>
          <a target="blank" href="https://www.linkedin.com/in/maarten-verheul/">LinkedIn</a> -&nbsp;
          <a target="blank" href="https://www.instagram.com/meerofmindermaarten/">Instagram</a>
          </p><br/>
          <div className="img-coffee"></div>
        </div>
      </AppShell>
    )
  }

}