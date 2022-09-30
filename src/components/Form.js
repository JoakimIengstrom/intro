import * as React from "react";
import "./Styling/divStyling.css";
import "./Styling/text.css";
import "./Styling/grid.css";

export default function form() {
  return (
    <div class="form-div form">
      <form
        name="contact"
        method="post"
        data-netlify="true"
        onSubmit="submit"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />

        <div hidden>
          <input name="bot-field" />
        </div>
        <br />

        <div>
          <label>
            Namn* <br />
            <input type="text" name="name" />
          </label>
        </div>
        <br />

        <div>
          <label>
            E-postaddress* <br />
            <input type="email" name="email" />
          </label>
        </div>
        <br />

        <div>
          <label>
            Ämne: <br />
            <textarea name="subject"></textarea>
          </label>
        </div>
        <br />

        <div>
          <label>
            Fråga: <br />
            <textarea name="question"></textarea>
          </label>
        </div>
        <br />

        <button type="submit" id="formButton">
          Skicka
        </button>
      </form>
    </div>
  );
}
