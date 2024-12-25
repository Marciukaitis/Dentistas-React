import React from 'react'
import Card from '../Components/Card'
import { useDentistState } from '../Context/GlobalContext'
import "../Styles/index.css"


const Home = () => {
  const { state:
    {dentists}} = useDentistState()
  
  return (
    <main className="main-container " >
      {/* <h1>Clinica de dentistas</h1> */}
      <div className='card-grid'>
        {dentists.map ((dentist) => 
        <Card key={dentist.id}  dentist={dentist}/>
      )}
    
      </div>
    </main>
  )
}

export default Home