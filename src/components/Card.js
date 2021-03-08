import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'
import supernova from '../assets/images/img-supernova.png'
import workoutTracker from '../assets/images/img-tracker.png'
import amino from '../assets/images/img-amino.png'
import bike from '../assets/images/biketurn.jpg'
import CardItem from './CardItem';




function Card() {
  return (
    <div className='cards'>
      <h1>Check out these Projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            
         

            <CardItem
              src={supernova}
              text="A platform for book lovers that helps solve the problem of spending hours choosing what book to read or buy by displaying critics' reviews and more"
              label='Supernova'
              path="https://play.google.com/store/apps/details?id=com.saarhaber.supernova"
            />

            <CardItem
              src={bike}
              text="This project is a bike turn signal based on Arduino. Designed to keep riders safe at night with working headlights and electronic bell system"
              label='Bike Turn Signal'
              path="https://github.com/Nerouse/Bike-Turn-Signal"
            />



          </ul>


          <ul className='cards__items'>
            

            <CardItem
              src={amino}
              text='This is a simulation of an amino acid and its respective Ramachandran plot. The 3-D animation is built on JSmol'
              label='Amino Acid Collision Viewer'
              path="https://nerouse.github.io/protein-collision/"
            />

            <CardItem
              src={workoutTracker}
              text='A program built with Swift designed to help users track their workout and provide motivation.'
              label='Workout Tracker'
              
            />

        

     
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;