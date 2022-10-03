import "./App.css";
import "./components/Styling/divStyling.css";
import "./components/Styling/grid.css";
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
          <div class="gridLayout">
            <div className="item1">
              <Header />
            </div>
            <div className="item2">
              <Info />
            </div>
            <div className="item3">
              <Aquaponic />
            </div>
            <div className="item5">
              <Reasons />
            </div>
            <div className="item6">
              <Form />
            </div>
            <div className="item4">
              <Greenhouse />
            </div>
            <div className="item7">
              <Facts />
            </div>
            <div className="item8">
              <Claria />
            </div>
            <div className="item9">
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
