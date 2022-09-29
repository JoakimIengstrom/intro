import * as React from 'react'


export default function form() {
  return (
    <form name="contact" method="POST" data-netlify="true" onSubmit="submit" data-netlify-honeypot="bot-field">
       <input type="hidden" name="form-name" value="contact" />
       
       <div hidden>
        <input name="bot-field" />
       </div>


      <p>
        <label>
          Your Name: <input type="text" name="name" />
        </label>
      </p>

      <p>
        <label>
          Your Email: <input type="email" name="email" />
        </label>
      </p>

      <p>
        <label>
          Subject 1: <input type="text" name="test" />
        </label>
      </p>

      <p>
        <label>
          Message 1: <textarea name="message"></textarea>
        </label>
      </p>

      <p>
        <button type="submit">Send</button>
      </p>

    </form>
  );
}
