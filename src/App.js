import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageWrapper from './components/PageWrapper';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import PortFolio from './components/common/PortFolio';

import Contact from './components/Pages/Contact';





function App() {
  return (
    <div className="App">
      <Router>
      <PageWrapper>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route  path="/about/:#" element={<Home/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        </Routes>
        </PageWrapper>
      </Router>
     
    </div>
  );
}

export default App;
