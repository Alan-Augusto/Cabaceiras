import React, { useState } from 'react';
import { Carousel } from 'primereact/carousel';
import { useEffect } from "react";
import './Home.css'
import Header from '../../common/Header/Header';
import SearchBar from '../../common/SearchBar/SearchBar';


function Home() {
  useEffect(() => {
    document.documentElement.classList.add("full-height");
  }, []);

return (
    <div className="Home">
        <Header/>
        <SearchBar/>
    </div>
    
    
  );
}

export default Home;