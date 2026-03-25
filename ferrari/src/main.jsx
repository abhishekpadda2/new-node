import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from '../src/Pages/Login.jsx'
import Merge from '../src/Merge.jsx'
import Secure from './Pages/Secure.jsx'
import Phone from './Pages/Phone.jsx'
import Eight from './Pages/Eight.jsx'
import {BrowserRouter,Routes,Route} from "react-router";
createRoot(document.getElementById('root')).render(



<BrowserRouter>
<Routes>
  <Route path="/"  element={<Login/>}/>
  <Route path="/Merge" element={<Merge/>}/>
  <Route path="/Secure" element={<Secure/>}/>
  <Route path="/Phone" element={<Phone/>}/>
    <Route path="/Eight" element={<Eight/>}/>
   
  

  

</Routes>
</BrowserRouter>,
)
