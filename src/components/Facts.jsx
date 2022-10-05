import React from 'react'
import "./Styling/text.css"
import "./Styling/reusable.css"
import "./Styling/grid.css"

export default function Facts() {
  return (
    <div className='flex justify-center flex-column factDiv'>
        <h2 id="factSubTitle">VISSTE DU ATT?</h2>
        <p id="Paragraph-3">Clarias kan - till skillnad från andra arter -  leva tätt. De gillar sällskap! <br /> <br /> <br />
          Clarias Är en proteinmästare. från 100kg foder får man 90kg fisk. en höna ger 40kg. <br /> <br />
      </p>
            <p id='Paragraph-3'>
             Clarias serveras på några av sveriges bästa restauranger: <br /> <br />
            <b>Koizen</b> i Göteborg <br />
            <b>Soyokazes</b> I Stockholm  <br />
            <b>Pm <b id="specialSign">&</b> Vänner</b>* i Växjö
              
            </p>
         
        <p id="Paragraph-3">Systemet har möjlighet att användas på platser där det är brist på mat. <br /> <br />
        
          på några få kvadratmeter kan man få 150kg fisk under en sommar - crazy!
        </p>
    </div>
  )
}
