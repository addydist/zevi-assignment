
import React from 'react';
import './Card.scss';

type CardProps = {

  imgUrl: string,
  description: String,
  setSearchQuery: Function,
};

const Card = (props :CardProps) => {
  return (
    <div className='trends-card-container'
      onClick={()=>props.setSearchQuery(props.description)}>
      <img src={props.imgUrl} alt="Image"/>
      <div >{props.description}</div>
    </div>
  );
};

export default Card;
