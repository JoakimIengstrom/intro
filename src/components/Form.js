import * as React from "react";
import "./Styling/divStyling.css";
import "./Styling/text.css";
import "./Styling/grid.css";

export default function form() {
  return (
    <div class="form-div form">
      <p>
        <b>Är det dig vi söker?</b>
        <br />
        Fyll i formuläret om du är intresserad av Sommarfisk och skulle vilja
        veta mer eller vara delaktig i hur tjänsten kommer utformas. Vi hör av
        oss till dig men dina uppgifter kommer ej sparas om du inte längre vill
        delta. Dina uppgifter kommer aldrig användas för något annat.
      </p>
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
            Vad skulle du vilja veta mer om?: <br />
            <textarea name="subject" maxLength="504"></textarea>
          </label>
        </div>
        <br />

        <div>
          <label>
            Med rätt support och guidning, hade du haft möjlighet och plats för
            sommarfisk? : <br />
            <textarea name="question" maxLength="504"></textarea>
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
