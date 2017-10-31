import React from 'react';
import { getReps } from '../actions/actions_index';
import { connect } from 'react-redux';

const DivsList = ({ divs, getReps }) => {
  if (!divs.length) return '';
  return (
    <div className="DivsList">
      {
        divs.map(d => {
          return (
            <div key={d.divisionId} className="DivsItem">
              <div onClick={e => getReps(d.divisionId)}>
                search for {d.name} Representatives
              </div>
            </div>
          );
        })
      }
    </div>
  );
}

function mapStateToProps({ divs }) {
  return ({ divs });
}

export default connect(mapStateToProps, { getReps })(DivsList);