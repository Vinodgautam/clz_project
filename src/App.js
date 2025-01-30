import React from 'react';
import Loginpage from './components/Loginpage';
import Warehouse from './components/Warehouse';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Accounts from './components/Accounts';
import Addproduct from './components/Addproduct';
import Reportbug from './components/Reportbug';




const App = () => {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path="/*" element={<Loginpage/>}></Route>
    <Route path="/warehouse" element={<Warehouse/>}></Route>
   <Route path='/account' element={<Accounts/>}></Route>
   <Route path='/addproduct'element={<Addproduct/>}></Route>
   <Route path ='/reportbug' element={<Reportbug/>}></Route>

  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
