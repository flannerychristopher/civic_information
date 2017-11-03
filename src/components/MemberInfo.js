import React from 'react';

import CurrentMember from './CurrentMember';
import ExternalLink from './ExternalLink';

const MemberInfo = ({ member, getMember, currentMember }) => {
  return (
    <div className='MemberInfo'>
      <div>{member.name}, {member.party}</div>
      <div>{member.role}</div>
      <div>next election: {member.next_election}</div>
      <div>twitter: {member.twitter_id}</div>
      <div>{member.youtube_id ? 'YouTube: ' + member.youtube_id : ''}</div>
      <ExternalLink
        url={'https://www.youtube.com/'}
        id={currentMember.youtube_account}
        text='YouTube Account'
      />
      <ExternalLink
        url={'https://www.twitter.com/'}
        id={currentMember.twitter_account}
        text='Twitter Account'
      />

      {
        member.id === currentMember.member_id
          ? <CurrentMember currentMember={currentMember} />
          : <div onClick={e => getMember(member.id)}>
              get more information about this representative
            </div>
      }
    </div>
  );
}

export default MemberInfo;