import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import VideoGallery from './pages/VideoGallery';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import BlogPage from './pages/BlogPage';


import './Global.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/BlogPage" element={<BlogPage />} />
        <Route path="/video-gallery" element={<VideoGallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Resume" element={<Resume />}>

        </Route>
      </Routes>
    </Router>
  );
};

export default App;
