import React from 'react';
import LikeButton from './LikeButton';

const Article = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <h3>Šm”F</h3>
      <LikeButton count={props.count} />
    </div>
  )
}

export default Article;