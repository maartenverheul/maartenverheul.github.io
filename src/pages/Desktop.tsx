import React from 'react';
import './Desktop.scss';
import ShortcutLayer from '../components/shortcutlayer/ShortcutLayer';
import Taskbar from '../components/taskbar/Taskbar';
import NotepadApp from '../apps/NotepadApp';
import Content from '../config/content.json';

class Desktop extends React.Component {

  state = {
    content: ""
  }  

  componentDidMount(){
    this.getData();
  }

  async getData(){
    
    let data = await fetch(Content.MaartenVerheul)
    .then(data => {
      return data.text();
    });
    this.setState({content: data});
  }

  render(){
    return (
      <div className="desktop screen show">
        <ShortcutLayer/>
        <NotepadApp filename="Maarten Verheul.txt" content={this.state.content} />
        <Taskbar />
      </div>
    )
  }
}

export default Desktop;
