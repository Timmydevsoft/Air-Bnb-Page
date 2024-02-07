import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Euro from './components/Euro.jsx'
import Card from './components/Card.jsx'
import React from "react"
import image2 from "./assets/image_2.png";
import weddingPhoto from "./assets/wedding-photography_1.png";
import mountainBike from "./assets/mountain-bike_1.png";
import Footer from './components/Footer.jsx'
// import './App.css'
// import image2 from './assets/image_2.png';
// import weddingPhoto from './assets/wedding-photography_1.png';
// import mountainBike from './assets/mountain-bike_1.png';

function App() {

  const images = {
    imageOne : image2,
    imageTwo: weddingPhoto ,
    ImageThree: mountainBike,
  }
  
  return (
    <div className="main-app">
      <Navbar/>
      <Euro/>
      <div className="card-container">
            <Card image = {images.imageOne} ratins= "5" count="6" country = "USA" name="Life lessons with Katie Zaferes"  price="136"/>
            <Card image = {images.imageTwo}  price="125"/>
            <Card image = {images.ImageThree}  ratins= "5" count="6" country = "USA" name="Group Mountain Biking"  price="50"/>
           
        </div>

      <Footer/>

    </div>
  )
}

export default App
