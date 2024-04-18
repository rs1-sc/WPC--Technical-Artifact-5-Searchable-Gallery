import React from 'react';
import data from './data.js';
import { GalleryNSearch } from './components/Gallery.js'
import { Banner } from './components/Banner.js'
import './App.css';


function App() {
  return (
    <div>
      <Banner />
      <GalleryNSearch data={data.Movies} />
    </div>
  );
}

export default App;