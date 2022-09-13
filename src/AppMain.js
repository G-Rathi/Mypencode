import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Routers from './Routers';


function AppMain() {
  return (
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  );
}

export default AppMain
