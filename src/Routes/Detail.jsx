import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "../Styles/detail.css"


const Detail = () => {
 
  const params = useParams()
  const [dentists, setDentists] = useState({})
  
const url = `https://jsonplaceholder.typicode.com/users/` + params.id

useEffect(() => {
    axios(url).then((respuesta) => {
      console.log(respuesta.data)
      setDentists(respuesta.data)
    })
  
  } ,[]);

  return (

    <div className='detail-container'> 
      <h1>Detalle del dentista {dentists.id} </h1>
      <h2> Nombre: {dentists.name}</h2>
      <h2> Apellido:{dentists.username}</h2>
      <h2> Telefono:{dentists.phone}</h2>
      <h2> Website: {dentists.website}</h2>
      
    
     
    </div>
  )
}

export default Detail