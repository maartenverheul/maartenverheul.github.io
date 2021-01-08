import React from 'react';
import './Taskbar.css';

class Taskbar extends React.Component {

  onWindowsButtonClick(){
    console.warn("You clicked the windows button, which doesn't have any action assigned to it yet.");
  }
  onSearchButtonClick(){
    console.warn("You clicked the search button, which doesn't have any action assigned to it  yet.");
  }
  onCortanaButtonClick(){
    console.warn("You clicked the cortana button, which doesn't have any action assigned to it yet.");
  }

  render(){
    return (
      <div className="taskbar">

        <div className="taskbar-button" onClick={() => this.onWindowsButtonClick()}>
          <div className="taskbar-icon icon-windows"></div>
        </div>
        <div className="taskbar-button" onClick={() => this.onSearchButtonClick()}>
          <div className="taskbar-icon icon-search"></div>
        </div>
        <div className="taskbar-button" onClick={() => this.onCortanaButtonClick()}>
          <div className="taskbar-icon icon-cortana"></div>
        </div>

        <div className="right">

        </div>
      </div>
    );
  }
}

export default Taskbar;
