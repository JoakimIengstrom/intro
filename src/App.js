import "./App.css";
import Info from "./components/Info";
import Form from "./components/Form";
import FormTest from "./components/FormTest";

function App() {
  return (
    <div className="App">
      <header className="fishHeader">
        <div className="logo"></div>
        <h1 className="headline">Sommarfisk </h1>
      </header>
      <body>
        <Info />
        <div className="claria"></div>
        <Info />
        <Form />
        <FormTest />
      </body>
    </div>
  );
}

export default App;
