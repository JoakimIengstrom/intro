import "./App.css";
import Info from "./components/Info";
import Form from "./components/Form";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <body>
        <Header />
        <Info />
        <div className="claria"></div>
        <Info />
        <Form />
        <Footer />
      </body>
    </div>
  );
}

export default App;
