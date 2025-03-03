import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home/Home';
import Work from './pages/work/Work';
import Subscribe from "./pages/subscribe/subscribe";
import Contact from "./pages/contact/contact";


import Footer from './components/footer/footer';
import './App.css'; // Ensure Tailwind CSS is imported here

export default function App() {
  return (
    <Router>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
