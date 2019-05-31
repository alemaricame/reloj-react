import React, {Component} from 'react';
import './App.css';
import Hora from './components/Hora';
import Fecha from './components/Fecha';

import './App.css';

class App extends Component {
 render(){
  return (
    <div className="App">
      <body>
      <p id="clock">
        <Hora/>
      </p>
      <p id="fecha">
        <Fecha/>
      </p>
      </body>
    </div>
  );
 }
}


export default App;

