import './../css/styles.css';
// import components
import Navbar from './Navbar'
import Footer from './Footer'
// import pages
import Home from './../pages/Home'
import About from './../pages/About'

// add router
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
