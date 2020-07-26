import "core-js";
import 'core-js/es/map';
import 'core-js/es/set';
import React from 'react';
import './App.css';
import CounterComponent from './component/counter-component';
function App() {
  return (
    <div className="App">
		<CounterComponent />
    </div>
  );
}

export default App;
