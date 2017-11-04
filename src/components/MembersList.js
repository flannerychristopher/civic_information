import React from 'react';
import { connect } from 'react-redux';
import { getMember, getVotes } from '../actions/actions_index';
import MemberInfo from './MemberInfo';

const MembersList = ({ members, getMember, getVotes, currentVotes, currentMember }) => {
  console.log('props mapped to MembersList: ', members);
  return (
    members.map((member, i) => {
      return (
        <MemberInfo
          member={member}
          getMember={getMember}
          currentMember={currentMember}
          getVotes={getVotes}
          currentVotes={currentVotes}
          key={i}
        />

      );
    })

  )
}

function mapStateToProps({ members, currentMember, currentVotes }) {
  return ({ members, currentMember, currentVotes });
}

export default connect(mapStateToProps, { getMember, getVotes })(MembersList);