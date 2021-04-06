import React from 'react';
import './Bluescreen.scss';
import { connect } from 'react-redux';
import { RootState } from '../store';

type Props = {
  onComplete?: () => void,
  stopcode?: string
}

class Bluescreen extends React.Component<Props> {
  
  state = {
    percentage: 0,
  }

  componentDidMount(){
    let timer = setInterval(() => {
      let addition = Math.round(Math.random() * 5);
      // addition = Math.random() < 0.45 ? addition : 0;
      let percentage = Math.min(this.state.percentage + addition, 100);
      this.setState({ percentage });
      if(percentage === 100 && this.props.onComplete) {
        clearInterval(timer);
        this.props.onComplete();
      }
    }, 1000)
  }

  render(){
    return (
      <div className="bluescreen screen">
        <div className="content">
          <div className="sadface">
            <p>:(</p>
          </div>
          <div className="top">
            <p>Your PC ran into a problem and needs to restart. We're just collecting some error info, and then we'll restart for you.</p>
            <p>{this.state.percentage}% complete</p>
          </div>
          <div className="bottom">
            <div className="qr"></div>
            <div className="right">
              <p>For more information about this issue and possible fixes, visit https://www.windows.com/stopcode</p><br/><br/>
              <p>If you call a support person, give them this info:</p><br/>
              <p>Stop code: <span>{this.props.stopcode||"UNKNOWN"}</span></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: RootState) => ({
  stopcode: state.stopcode
});

export default connect(mapStateToProps)(Bluescreen);