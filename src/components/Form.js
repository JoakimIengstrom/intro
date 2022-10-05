import * as React from "react";
import "./Styling/divStyling.css";
import "./Styling/text.css";
import "./Styling/form.css";
import "./Styling/reusable.css"


export default function form() {



  return (
    <div className="form-container">
      <p className="formText" id="Paragraph-2">
        <b id="heading-1">ÄR DET DIG VI SÖKER?</b> <br />
        <br />
        Fyll i formuläret om du är intresserad av Sommarfisk och skulle vilja
        veta mer eller vara delaktig i hur tjänsten kommer utformas. <br />{" "}
        <br /> Vi hör av oss till dig men dina uppgifter kommer ej sparas om du
        inte längre vill delta. Dina uppgifter kommer aldrig användas för något
        annat.
      </p>
      <div className="form-div form form-font">
        <form
          name="contact"
          method="post"
          onSubmit="submit"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />

          <div hidden>
            <input name="bot-field" />
          </div>
          <br />

          <div>
            <label>
              <p id="form-font">
                Namn* <br />
              </p>
              <input type="text" name="name" required />
            </label>
          </div>
          <br />

          <div>
            <label>
              <p id="form-font">
                E-postaddress* <br />
              </p>
              <input type="email" name="email" required/>
            </label>
          </div>
          <br />

          <div>
            <label>
              <p id="form-font">Vad skulle du vilja veta mer om?</p>
              <br />
              <textarea name="subject" maxLength="504"></textarea>
            </label>
          </div>
          <br />

          <div>
            <label>
              <p id="form-font">
                Med rätt support och guidning, hade du haft möjlighet och plats
                för sommarfisk?
              </p>
              <br />
              <textarea name="question" maxLength="504"></textarea>
            </label>
          </div>
          <br />

          <button type="submit" id="formButton">
            Skicka
          </button>
        </form>
      </div>
    </div>
  );
}
