import React from 'react';
import Topbar from './components/Topbar'
import Game from './components/Game'
import InfoPanel from './components/InfoPanel'
import Instructions from './components/Instructions'
import Camera from './components/Camera'

function App() {
  return (
    <div className='container' >
     <Topbar />
     <Game />
     <Camera />
     <InfoPanel />
     <Instructions />

    </div>
  );
}

export default App;
