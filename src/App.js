import { Routes,Route } from 'react-router-dom';
import './App.css';
import Contact from './components/contact';
import Home from './components/home';
import Navbar from "./components/navbar";
import About from './components/about';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
