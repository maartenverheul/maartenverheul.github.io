import React from 'react';
import Process, { ProcessConfig } from '../../types/Process';
import update from 'immutability-helper';
import yargs from 'yargs-parser';
import NotepadApp from '../../apps/NotepadApp';
import { AppDispatch, RootState } from '../../store';
import { openURL } from '../../store/actions';
import { connect} from 'react-redux';
import Win32API from '../../services/Win32API';
import App from '../../apps/App';

type Props = {
  openURL: (url: string) => void
}
type State = {
  processes: Process[]
}


class ProcessManager extends React.Component<Props> {

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

    const executable = Win32API.getApp(parsed._[0]);
    if(!executable){
      // TODO popup
      console.log("That app does not exist!");
      return false;
    }
    let app = executable(...parsed._);
    // app(parsed._[1]);
    if(app) this.registerProcess({application: app, args: parsed._ });
  }

  private registerProcess(config: ProcessConfig){
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

const mapStateToProps = (state: RootState) => ({
  appstate: state.appstate
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  openURL: (url: string) => dispatch(openURL(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProcessManager);