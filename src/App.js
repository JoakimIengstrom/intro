import "./App.css";
import "./components/Styling/divStyling.css";
import "./components/Styling/grid.css";
import "./components/Styling/reusable.css";
import Info from "./components/Info";
import Form from "./components/Form";
import Reasons from "./components/Reasons";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Facts from "./components/Facts";
import Aquaponic from "./components/Aquaponic";
import Greenhouse from "./components/Greenhouse";
import Claria from "./components/Claria";

function App() {
  return (
    <div className="App">
      <body>
        <div className="padding">
          <div class="gridLayout align-self">
            <div className="item1 align-self justify-self">
              <Header />
            </div>
            <div className="item2 align-self justify-self">
              <Info />
            </div>
            <div className="item3 align-self justify-self">
              <Aquaponic />
            </div>
            <div className="item5 align-self justify-self">
              <Reasons />
            </div>
            <div className="item6 align-self justify-self">
              <Form />
            </div>
            <div className="item4 align-self justify-self">
              <Greenhouse />
            </div>
            <div className="item7 align-self justify-self">
              <Facts />
            </div>
            <div className="item8 align-self justify-self">
              <Claria />
            </div>
            <div className="item9 align-self justify-self">
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
