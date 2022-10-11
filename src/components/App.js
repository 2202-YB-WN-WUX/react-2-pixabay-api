import './../css/styles.css';
// import components
import Hero from './Hero'
import ImageGallery from './ImageGallery'
import Navbar from './Navbar'

const App = () => {

  return (
    <>
      <Navbar />
      <Hero />
      <ImageGallery />
    </>
  );
}

export default App;
