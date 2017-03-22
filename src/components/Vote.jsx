import React, {Component} from 'react';

export default class Vote extends Component{
  render() {
    const getPair = this.props.pair || [];
    const isDisabled = !!this.props.hasVoted;

    return <div className="voting">
      {getPair.map(entry =>
        <button key={entry}
                disabled={isDisabled}>
          <h1>{entry}</h1>
        </button>
      )}
    </div>;
  }

  hasVotedFor(entry) {
    return this.props.hasVoted === entry;
  }

  handleClick(entry){
    return this.props.vote(entry);
  }
}
