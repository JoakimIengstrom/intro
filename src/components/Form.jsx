import * as React from 'react'


export default function form() {
  return <div>
  <form
    name="contact"
    method="post"
    data-netlify="true"
    onSubmit="submit"
    data-netlify-honeypot="bot-field">

       <input type="hidden" name="form-name" value="contact" />

       <div hidden>
        <input name="bot-field" />
       </div><br />


      <div>
        <label>Your name: <br />
           <input type="text" name="first-name" />
        </label>
      </div><br /> 

      <div>
        <label>Your Email: <br />
           <input type="email" name="email" />
        </label>
      </div><br />

      <div>
        <label>Question: <br />
           <textarea name="question"></textarea>
        </label> 
      </div><br />

    
        <button type="submit">Send</button>
    

    </form>
  </div>
}
