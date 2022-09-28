import "./App.css";
import Info from "./components/Info";
//import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <header className="logo"></header>
      <body>
        <h1>Sommarfisk </h1>
        <Info />
        <div className="claria"></div>
        <Info />
      </body>
    </div>
  );
}

export default App;
