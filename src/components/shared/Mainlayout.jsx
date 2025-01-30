import React from 'react';
import Dashboard from '../Dashboard';
const Mainlayout = ({children}) => {
  return (
    <div>
     <Dashboard/>
     {children}
    </div>
  );
}

export default Mainlayout;
