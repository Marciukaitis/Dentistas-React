import React from "react";
import { Link } from "react-router-dom";
import "../Styles/card.css"


import { useDentistState } from "../Context/GlobalContext";



const Card = ({ dentist } ) => {
 const {dispatch , state } = useDentistState()


  const findFav =  state.favs.some((fav) => fav.id === dentist.id)
  
  const toggleFav = () => {
    dispatch ({ type: findFav ? "DELETE_FAV" : "ADD_FAV", payload: dentist})
  }
  

  return (
    <div className="card">
        <img src="/images/doctor.jpg" alt= {dentist.name} className="card-image"/>
        <button className="favButton" onClick={toggleFav}> {findFav ? <img 
        src="/images/estrella (1).png" style={{ width: '16px', height: '16px', marginRight: '8px' }}  /> :  <img 
        src="/images/estrella.png" style={{ width: '16px', height: '16px', marginRight: '8px' }} />  } </button>
        <Link to={`/detail/${dentist.id}`}>
        <h3>{dentist.name}</h3>
        <p>{dentist.username}</p>
        </Link>
    
    </div>
    
  );
};

export default Card;
