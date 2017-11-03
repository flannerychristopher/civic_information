import React from 'react';

const ExternalLink = ({ url, id, text }) => {
  if (!id || !url) return <div></div>;
  return (
    <div>
      <a href={url + id} target="blank">{text}</a>
    </div>
  );
}

export default ExternalLink;