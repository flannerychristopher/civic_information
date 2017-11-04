import React from 'react';
import ExternalLink from './ExternalLink';

const CurrentMember = ({ currentMember }) => {
  console.log('rendering current member: ', currentMember);
  let currentRole = currentMember.roles[0];

  return (
    <div>
      <div className='heading'>Extended Information</div>
      <div>Date of Birth: {currentMember.date_of_birth}</div>
      <div>Most Recent Vote: {currentMember.most_recent_vote}</div>
      <div>Office Address: {currentRole.office}</div>
      <div>Phone: {currentRole.phone}</div>
      <ExternalLink url={currentMember.url} id=' ' text='website' />
      <ExternalLink url={currentMember.rss_url} id=' ' text='RSS feed' />

      <div>
        <div className='heading'>Current Subcommittees</div>

        {
          currentRole.subcommittees.map(committee => {
            return (
              <div key={committee.code}>
                {committee.name}
              </div>
            );
          })

        }
      </div>
      <div>
        <div className='heading'>Congressional Career</div>
        {
          currentMember.roles.map(role => {
            return (
              <div key={role.congress}>
                <div className='subheading'>{role.title}, {role.state} - {role.party}</div>
                <div>{role.chamber} {role.congress}, {role.start_date} to {role.end_date}</div>
                <div>Bills Sponsored: {role.bills_sponsored}</div>
                <div>Bills Cosponsored: {role.bills_cosponsored}</div>
                <div>% of Votes with Party: {role.votes_with_party_pct}</div>
                <div>% of Missed Votes: {role.missed_votes_pct}</div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default CurrentMember;