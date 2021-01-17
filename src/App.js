import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';
import GoogleMapField from './components/GoogleMapField';

function App() {
  const [cords, setCords] = useState({ lat: null, lng: null });

  return (

    <div className="App">
        <div>
          GoogleMapField value
        </div>
        <div>
            {JSON.stringify(cords, null, 4)}
        </div>
        <div>
          <GoogleMapField onChange={(newCords) => setCords(newCords)} />
        </div>
    </div>
  );
}

export default App;
