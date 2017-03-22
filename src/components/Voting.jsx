import React, {Component} from 'react';
import '../base.css';
import Winner from './Winner';
import Vote from './Vote';

export default class Voting extends Component{
  render() {
    return <div>
      {this.props.winner ?
        <Winner ref="winner" winner={this.props.winner} /> :
        <Vote {...this.props} />}
    </div>;
  }
};
