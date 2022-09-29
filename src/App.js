import "./App.css";
import Info from "./components/Info";
import Form from "./components/Form";
import FunFacts from "./components/FunFacts";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <body>
        <Header />
        <Info />
{/*  {        <div className="IllustrationSystem"></div> }
 */}        <FunFacts />
        <Form />
        <Footer />
      </body>
    </div>
  );
}

export default App;
