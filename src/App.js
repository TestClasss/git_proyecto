import Login from './pages/login/login';

import Admin from './pages/admin/Admin';
import User from './pages/user/User';
import NotFound from './pages/NotFound/NotFound';
import RedirectUser from './pages/redirect/redirect';
import Private from './Components/PrivateRoute/PrivateRoute';


import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Create from './pages/Create/Create';

// import {  } from ''

function App() {
  return (
    <BrowserRouter>
      <Routes>        
        <Route path="/login" element={<Login />} />
        
        <Route path="/redirect" element={<RedirectUser />}/>
        
        <Route path="/admin"  element={<Private role="admin"><Admin /></Private>} />
        <Route path="/user"   element={<Private role="user"> <User /> </Private>} />
        <Route path="/Create"  element={<Private role="admin"><Create /></Private>} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;