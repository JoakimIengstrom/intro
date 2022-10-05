import React from 'react'
import "./Styling/text.css"
import "./Styling/reusable.css"
import "./Styling/grid.css"

export default function Footer() {
  return (
    <div className='factDivflex justify-center align-center text-center footer'>
      <p id="infoText">Det här är ett samarbete mellan <b id='fat-font'>Humblebee Hive</b> <br /> 
        och <br /> <b id='fat-font'>pond fish and greens ab</b></p>
      <p id="infoText">för fler frågor - <br /> kontakta oss via mail: emma.tholin@humblebee.se</p>
    </div>
  )
}
