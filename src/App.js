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
            <Header />
            <Info />
            <Aquaponic />
            <Reasons />
            <Form />
            <Greenhouse />
            <Facts />
            <Claria />
            <Footer />
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
