import React from 'react'
import "./Styling/text.css"
import "./Styling/reusable.css"
import "./Styling/grid.css"

export default function Facts() {
  return (
    <div className='flex justify-center align-center text-center flex-column factDiv facts'>
        <h2 id="factSubTitle">Visste du att?</h2>
        <p id="infoText">Clarias kan - till skillnad från andra arter -  leva tätt. De gillar sällskap!</p>
        <p id="infoText">Clarias Är en proteinmästare. från 100kg foder får man 90kg fisk. en höna ger 40kg.</p>
        <p id="infoText">Clarias serveras på några av sveriges bästa restauranger: <br /><br />  
            <b>Koizen</b> i Göteborg <br />
            <b>Soyokazes</b> I Stockholm  <br />
            <b>Pm <b id="specialSign">&</b> Vänner</b>* i Växjö
        </p>
        <p id="infoText">Systemet har möjlighet att användas på platser där det är brist på mat.</p>
        <p id="infoText">på några få kvadratmeter kan man få 150kg fisk under en sommar - crazy!</p>
    </div>
  )
}
