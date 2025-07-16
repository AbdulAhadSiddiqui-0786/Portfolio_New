import SnowBackground from './components/SnowBackground'; // Assuming SnowBackground is in this path
import './index.css'; // Assuming Tailwind CSS is imported here
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <SnowBackground />
      <Navbar />
      <Home />
      <Footer/>
    </>
  );
}

export default App;