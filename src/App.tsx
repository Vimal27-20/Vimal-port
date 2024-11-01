import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Gallery from './pages/Gallery';
import VideoGallery from './pages/VideoGallery';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import './Global.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/video-gallery" element={<VideoGallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Resume" element={<Resume />}>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
