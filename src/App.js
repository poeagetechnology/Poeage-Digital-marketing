import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import Header from './Component/Header';
import Footer from './Component/Footer';
import SEO from "./Component/SEO";
import { Testimonials } from './Component/Testmonials';
import { Careers } from './Component/Careers';
import Services from './Component/Services';
import Solutions from './Component/Solutions';
import Insights from './Component/Insights';

  <SEO
  title="Poeage Digital | Enterprise Marketing"
  description="Leading digital marketing agency for enterprises."
/>

function App() {
  return (
    <div className="App">
      
      
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/testmonials' element={<Testimonials />}/>
        <Route path='/careers' element={<Careers />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/solutions' element={<Solutions />}/>
        <Route path='/insights' element={<Insights />}/>
      </Routes>
      <Footer />
     
    </div>
  );
}

export default App;
