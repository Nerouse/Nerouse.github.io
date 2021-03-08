import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'
function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
     



       {/* <Link className='cards__item__link' to={props.path}> */}
          
          <a class='cards_item_link' href={props.path} target="_blank" >
            
     


          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Project Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>


          </a>

        {/*</Link>*/}
      


      </li>
    </>
  );
}

export default CardItem;