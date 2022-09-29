import "./App.css";
import "./components/Styling/divStyling.css";
//import { DivStyling, Form, Images, Reusable, Text } from "./components/Styling";
import Info from "./components/Info";
import Form from "./components/Form";
import Reasons from "./components/Reasons";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Facts from "./components/Facts";

function App() {
  return (
    <div className="App">
      <body>
        <Header />
        <Info />
        <Reasons />
        <Form />
        <Facts />
        <Footer />
      </body>
    </div>
  );
}

export default App;
