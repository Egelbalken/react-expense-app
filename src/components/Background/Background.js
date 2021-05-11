import React from 'react';
import './Background.css';

const Background = (props) => {
  const classes = 'body ' + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Background;
