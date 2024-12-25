import React from "react";
import Card from "../Components/Card";
import { useDentistState } from "../Context/GlobalContext";
import "../Styles/favs.css"


const Favs = () => {
 const {
 state: {favs }} = useDentistState()


  return (
    <div className="favsGeneral">
      <h1>Dentistas favoritos</h1>
      <div className="card-grid">
       {favs.length === 0 ? (
        <p className="favs"> No tienes agregado ningún dentista en favoritos.</p> 
        ) : (
        favs.map(( dentist  ) => (
          <Card key={dentist.id} dentist={dentist} />
          ))
        )}

  
      </div>
    </div>
  );
};

export default Favs;
