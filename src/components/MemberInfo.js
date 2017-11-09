import React from 'react';

import CurrentMember from './CurrentMember';
import CurrentVotes from './CurrentVotes';
import ExternalLink from './ExternalLink';

const MemberInfo = ({ member, getMember, getVotes, currentVotes, currentMember }) => {
  return (
    <div className='MemberInfo'>
      <div className='memberName heading'>{member.name}, {member.party}</div>
      <div>{member.role}{member.district ? ', District ' + member.district : ''}</div>
      <div>next election: {member.next_election}</div>
      <ExternalLink
        url={'https://www.youtube.com/'}
        id={member.youtube_id}
        text='YouTube Account'
      />
      <ExternalLink
        url={'https://www.twitter.com/'}
        id={member.twitter_id}
        text='Twitter Account'
      />
      <ExternalLink
        url={'https://www.facebook.com/'}
        id={member.facebook_account}
        text='Facebook Account'
      />
      <div className='seeMoreBtns'>
        {/* {
          member.id === currentVotes.member_id
            ? <CurrentVotes currentVotes={currentVotes} />
            : <button onClick={e => getVotes(member.id)}>See Voting History</button>
        } */}
        {
          member.id === currentMember.member_id
            ? <CurrentMember currentMember={currentMember} />
            : <button onClick={e => getMember(member.id)}>See More Info</button>
        }
      </div>
    </div>
  );
}

export default MemberInfo;