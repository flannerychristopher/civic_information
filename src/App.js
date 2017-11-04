import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMembers, clearMembers } from './actions/actions_index';
import { STATES } from './constants/constants';
import './App.css';
import MembersList from './components/MembersList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      STATE: 'AK',
      senate: false,
      house: false
    }
  }

  onQuerySubmit(event) {
    event.preventDefault();
    this.props.clearMembers();
    let { STATE, senate, house } = this.state;
    if (senate) {
      this.props.getMembers(STATE, 'senate');
    }
    if (house) {
      this.props.getMembers(STATE, 'house');
    }
  }

  render() {
    return (
      <div className="App">

        <select
          value={this.state.value}
          onChange={e => this.setState({ STATE: e.target.value })}
        >
          {STATES.map(s => <option value={s} key={s}>{s}</option>)}
        </select>

        <label>
          <input
            name="senate"
            type="checkbox"
            checked={this.state.senate}
            onChange={e => this.setState({ senate: !this.state.senate })}
          />
          Senate
          </label>
        <label>
          <input
            name="house"
            type="checkbox"
            checked={this.state.house}
            onChange={e => this.setState({ house: !this.state.house })}
          />
          House of Representatives
          </label>

        {
          this.state.senate || this.state.house
            ? <button onClick={e => this.onQuerySubmit(e)}>find my representatives</button>
            : ''
        }

        <MembersList />

      </div>
    );
  }
}


export default connect(null, { getMembers, clearMembers })(App);
