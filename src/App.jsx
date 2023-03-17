
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Store from './components/Store';
import ParticleJS from './components/ParticleJs';



function App() {
  return (
    <div>
      {/* <ParticleJS /> */}
      <>
        <Sidebar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/store" element={<Store />} />
        </Routes></>
    </div>
  );
}

export default App;
