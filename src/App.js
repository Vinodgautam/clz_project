import React from 'react';
import Loginpage from './components/Loginpage';
import Warehouse from './components/Warehouse';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


const App = () => {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path="" element={<Loginpage/>}></Route>
    <Route path="/warehouse" element={<Warehouse/>}></Route>
   
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
