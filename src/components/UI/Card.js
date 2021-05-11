import '../UI/Card.css';

// reuseable wrapper component of a card
const Card = (props) => {
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
