import React from 'react'
import "./Styling/text.css"
import "./Styling/images.css"
import "./Styling/divStyling.css"
import "./Styling/grid.css"
import "./Styling/reusable.css"
//<p id='heading-1'>Odla Din egen fisk!</p>

export default function info() {
  return (
    <div className='infoText'>
      
      <p id='Paragraph-1'>Med hjälp av pond kan du producera din egen fisk. 
        Du som har ett sommarvarmt växthus eller annan liten lokal kan under sommaren odla god fisk som du kan njuta av resten av året. 
        Med oss är det enkelt och kilmatsmart. </p>

        <img src="/img/Illustrationsystem.svg" alt="img" id='aquaponicImg'/> <br /> <br />
              
    
      <p id='heading-2'>PILOT 2023</p>
      <p id='Paragraph-1' className='text-left'> Under sommaren 2023 kommer konceptet att testas tillsammans med ett fåtal utvalda personer.</p>
    </div>
    
  )
}
