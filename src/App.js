
import './App.css';

import { BrowserRouter, Routes,Route } from 'react-router-dom';
import { AboutUs, Contact, Services,Blog,Home } from './Pages';
import { Footer, Navbar } from './component';

function App() {
  return (
   <>
    <BrowserRouter>
        <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/contact" element={<Contact/>}/>

      </Routes>
      <Footer/>
    </BrowserRouter>
   </>
  );
}

export default App;
