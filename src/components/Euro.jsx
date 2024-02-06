import React from "react"
import grouppics from '../assets/Group 77.png'

export default function Euro (){
    return(
        <section>
          <img className="grid-photo" src={grouppics} alt="group-image"/>
          <div className="text-wrapper">
              <h2 className="topic-head" color="green">Online Experiences</h2>
              <p className="intro-text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
          </div>
        </section>
    )
}