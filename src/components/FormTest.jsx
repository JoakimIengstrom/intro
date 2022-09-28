import React from 'react'

export default function FormTest() {
  return (
    //<!-- A little help for the Netlify post-processing bots -->
    <form name="contact" netlify netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
    </form>
  )
}
