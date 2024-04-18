import React, { useState } from 'react';
// import { Card } from '../components/Card.js';
import '../App.css';



export const GalleryNSearch = (props) => {

  let movies = props.data;

  const [searchValue, setSearchValue] = useState('');

  console.log(searchValue);
  console.log(movies);
  return (
    <div>
      {/* Search Bar  */}
      <div className="uk-margin">
        <form className="uk-search uk-search-default">
          <input className="uk-margin-xlarge-left uk-search-input" type="search" value={searchValue} onChange={(event) => setSearchValue(event.target.value)} placeholder="Search movie" />
        </form>
      </div>
      {/* Filtering of Gallery  */}
      <div>
        {movies.filter((movie) => movie.title.toLowerCase().includes(searchValue.toLowerCase())).map((movies, key) =>
          (<div>
            <div key={key} className="uk-margin-xlarge-left uk-margin-xlarge-right uk-card-default uk-card-body uk-card-hover">
              <h3 className="uk-card-title">{movies.title} | {movies.price}</h3>
              <img className="uk-height-small" src={movies.image} alt="..." />
            </div>
            <br></br>
          </div>))}
      </div>
    </div>
  );
}