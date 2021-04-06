import React from 'react';
import Process, { ProcessConfig } from '../../types/Process';
import update from 'immutability-helper';
import yargs from 'yargs-parser';
import NotepadApp from '../../apps/NotepadApp';

type State = {
  processes: Process[]
}

class ProcessManager extends React.Component {

  state: State = {
    processes: []
  }

  componentDidMount(){
    (window as any).pm = this;
  }

  private getNewPid(){
    return Math.round(Math.random() * 15000)
  }

  run(command: string){
    let parsed = yargs(command);
    parsed._ = parsed._.map(e => e.replace(/"|'/g, ""));

    let component: any = null;

    switch(parsed._[0]){
      case "notepad":
        component = NotepadApp
        break;
      default:
        return false;
    }

    this.register({application: component, args: parsed._ });
  }

  private register(config: ProcessConfig){
    const pid = this.getNewPid();
    const process = new Process(
      pid,
      config.application, 
      config.args
    );
    let newProcesses = update(this.state.processes, {$push: [process]});
    this.setState({ processes: newProcesses });
    console.log(`New proces with pid ${pid} has been started`);
  }

  renderProcesses(){
    return this.state.processes.map((process, i) => {
      return React.createElement(process.application, {
        key: process.pid,
      }, {
        args: process.args,
      })
    })
  }

  render(){
    return (
      <div className="processmanager">
        {this.renderProcesses()}
      </div>
    );
  }
}

export default ProcessManager;
