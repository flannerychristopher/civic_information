import React from 'react';
import { connect } from 'react-redux';
import { getMember } from '../actions/actions_index';
import MemberInfo from './MemberInfo';

const MembersList = ({ members, getMember, currentMember }) => {
  console.log('props mapped to MembersList: ', members);
  return (
    members.map((member, i) => {
      return (
        <MemberInfo
          member={member}
          getMember={getMember}
          currentMember={currentMember}
          key={i}
        />

      );
    })

  )
}

function mapStateToProps({ members, currentMember }) {
  return ({ members, currentMember });
}

export default connect(mapStateToProps, { getMember })(MembersList);