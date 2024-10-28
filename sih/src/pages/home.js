import React from 'react';
import NavBar from "../components/navbar";
import Hand from '../images/hand.jpg';
import Footer from '../components/footer';
import './home.css';

function Home(){
  return (
    <div>
        <NavBar active="home"/>
        <div className="context-grid">
          <div className="item" id="item1" >
            <img src={Hand} width="100%" height="100%" alt="hand"></img>
          </div>
          <div id="item2" className='item'>
            <h1>Brief of PhisHalt</h1>
          </div>
        </div>
        <div id="buttons-container">
          <button className="context-buttons">Discover More</button>
          <button className="context-buttons">Check URL</button>
        </div>
        <Footer/>
      </div>
    

  );
}

export default Home;
