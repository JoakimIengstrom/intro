import React from 'react'
import "./Styling/text.css"
import "./Styling/images.css"
import "./Styling/divStyling.css"
import "./Styling/grid.css"

export default function info() {
  return (
    <div className='infoText'>
      <p id='infoTitle'>Sommarfisk
      <p id='infoText'>Med sommarfisk kan du producera din egen fisk. 
        Du som har ett sommarvarmt växthus eller annan liten lokal kan under sommaren odla god fisk som du kan njuta av resten av året. 
        Med oss är det enkelt och kilmatsmart. </p>
      
      <br />
        <p id='infoSubTitle'>Pilot 2023
        <p id='infoText'> Under sommaren 2023 kommer konceptet sommarfisk att testas tillsammans med ett fåtal utvalda personer.</p>
        </p>
      </p>

    </div>
    
  )
}
