import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDivs } from './actions/actions_index';
import './App.css';

import DivsList from './components/DivsList';
// import RepresentativesList from './components/RepresentativesList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queryTerm: '80108'
    }
  }

  onQuerySubmit(event) {
    event.preventDefault();
    this.props.getDivs(this.state.queryTerm);
    this.setState({ queryTerm: '' });
  }

  render() {
    return (
      <div className="App">

        <input
          value={this.state.queryTerm}
          onChange={e => this.setState({ queryTerm: e.target.value })}
          placeholder='enter address or zipcode ...'
        />
        <button onClick={e => this.onQuerySubmit(e)}>find my representatives</button>
        
        <DivsList />

      </div >
    );
  }
}

function mapStateToProps({ divs, reps }) {
  return ({ divs, reps });
}

export default connect(mapStateToProps, { getDivs })(App);
