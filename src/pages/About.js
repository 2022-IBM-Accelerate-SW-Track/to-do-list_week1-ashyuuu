import React, { Component } from 'react';
import "./About.css";
// import <profile_pic> from "../assets/profile_pic.jpg";
// ^not sure why it expects a ; even though i have one.. 

export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              // Image goes here
              src = "../assets/profile_pic.jpg"
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Ashley Yu</div>
            <div className="brief_description">
              Hi! My name is Ashley. 
              - I am a second year computer science and engineering major at UC Irvine. 
              - I was born in New York but raised in Taipei (where I will be for the program!). 
              - I love KPOP and my favorite groups are BLACKPINK and ITZY!
            </div>
          </div>
        </div>
      </div>
    )
  }
}