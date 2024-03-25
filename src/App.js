import './App.css';
import { BrowserRouter, Routes, Route,redirect } from "react-router-dom";
import ResponsiveAppBar from './project/NavBar';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Home from './project/Home';
import FormEx from './form/FormEx';
import GetEx from './Http/GetEx';
import Tracker from './project/Tracker';
import Rough from './project/rough';
function App() {
  return (
    <div className='App'>
    
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Tracker/>}/>
    <Route path="about" element={<AboutUs/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path="/login" element={<FormEx/>}/>
    </Routes>
    </BrowserRouter>
    
    </div>
  );
}


export default App;
