import React from 'react'
import "./Styling/text.css"
import "./Styling/reusable.css"

export default function Footer() {
  return (
    <div className='factDivflex justify-center align-center text-center'>
      <p id="infoText">Det här är ett samarbete mellan Humblebee Hive <br /> 
        och <br /> pond fish and greens ab</p>
      <p id="infoText">för fler frågor - <br /> kontakta oss via mail: emma.tholin@humblebee.se</p>
    </div>
  )
}
