import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Euro from './components/Euro.jsx'
import Card from './components/Card.jsx'
import Footer from './components/Footer.jsx'
// import './App.css'

function App() {
  return (
    <div className="main-app">
      <Navbar/>
      <Euro/>
      <div className="card-container">
            <Card image = "image_2.png"  ratins= "5" count="6" country = "USA" name="Life lessons with Katie Zaferes"  price="136"/>
            <Card image = "wedding-photography_1.png"  ratins= "5" count="6" country = "USA" name="Learn wedding photography"  price="125"/>
            <Card image = "mountain-bike_1.png"  ratins= "5" count="6" country = "USA" name="Group Mountain Biking"  price="50"/>
           
        </div>

      <Footer/>

    </div>
  )
}

export default App
