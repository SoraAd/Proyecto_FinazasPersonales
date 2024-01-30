import logo from './logo.svg';
import './App.css';
import React from "react";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api/movimientos/")
        .then((res) => res.json())
        .then((data) => setData(data));
      //Promise.all(data).then(allData)
      console.log(data.movimientos[0].cantidad)
  }, []);

  const movimientosElements = data.movimientos.map((movimiento, i) => (
              <p>{movimiento.cantidad}</p>
  ))
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>{movimientosElements}</p>
            </header>
        </div>
    );
}

export default App;
