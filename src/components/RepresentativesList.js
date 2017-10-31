import React from 'react';
import { connect } from 'react-redux';

const RepresentativesList = ({ representatives }) => {
  console.log(representatives);
  return (
    representatives.map(rep => {
      return <RepInfo rep={rep} key={rep.name} />
    })
  )
}

const RepInfo = ({ rep }) => {
  return (
    <div className='RepInfo'>
      <div>
        <div>{rep.name}</div>
        <div>{rep.party} Party</div>
        {
          rep.photoUrl
            ? <img src={rep.photoUrl} className='repPhoto' alt={rep.name} />
            : ''
        }
      </div>
      <div>
        <div>{rep.phones.map(num => num + ' ')}</div>
        <div>{rep.email}</div>
        <div>
          {
            rep.channels ?
              rep.channels.map((site, i) => <div key={i}>{site.type}: {site.id}</div>)
              : ''
          }
        </div>
        <div>
          {rep.emails ? rep.emails.map(email => <div key={email}>{email}</div>) : ''}
        </div>
        <div>
          {rep.urls ? rep.urls.map(url => <div key={url}>{url}</div>) : ''}
        </div>
      </div>
    </div>
  );
}

function mapStateToProps({ representatives }) {
  return ({ representatives });
}

export default connect(mapStateToProps)(RepresentativesList);