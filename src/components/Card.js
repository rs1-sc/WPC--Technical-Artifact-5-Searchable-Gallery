import React from 'react';
import '../App.css';


export const Card = (props) => {
  //console.log(props)
  let item = props.data
  return (
    <div>
      <div className="uk-margin-xlarge-left uk-margin-xlarge-right uk-card-default uk-card-body uk-card-hover">
        <h3 className="uk-card-title">{item.title} | {item.price}</h3>
        <img className="uk-height-small" src={item.image} alt="..." />
      </div>
      <br></br>
    </div>
  );
}