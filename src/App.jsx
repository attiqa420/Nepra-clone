import {  Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Basic from './components/pages/Basic';
import Premium from './components/pages/Premium';
import Standard from './components/pages/Standard';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import data from './data';




function App() {
  return (
   <div className="w-full overflow-x-hidden">
    <NavBar />

    <Routes>
   <Route path="/" element={<Home />} />   
<Route path="/pricing/basic" element={<Basic />} />
<Route path="/pricing/standard" element={<Standard />} />
<Route path="/pricing/premium" element = {<Premium />} />
    </Routes>
 <Footer items={data} />
      
      
    </div>
   
  );
}

export default App;
