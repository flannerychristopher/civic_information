import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getVoterInfo } from './actions/actions_index';
import './App.css';

class App extends Component {
  
  onFormSubmit(event) {
    event.preventDefault();
    this.props.getVoterInfo();
  }

  render() {
    return (
      <div className="App">
        <button onClick={e => this.onFormSubmit(e)}>voter info</button>
      </div>
    );
  }
}

function mapStateToProps(voterInfo) {
  return ({ voterInfo });
}

export default connect(mapStateToProps, { getVoterInfo })(App);
