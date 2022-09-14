import React from 'react'
import { HashRouter } from 'react-router-dom';
import Routers from './Routers';


function AppMain() {
  return (
    <HashRouter>
      <Routers />
    </HashRouter>
  );
}

export default AppMain
