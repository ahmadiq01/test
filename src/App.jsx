import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home/Home';
import Work from './pages/work/Work';
import Subscribe from "./pages/subscribe/subscribe";
import Contact from "./pages/contact/contact";
import Clients from "./pages/clients/clients";
import Story from "./pages/story/story";
import Services from "./pages/services/services";
import Talk from "./pages/work/talktogather";
import Apply from "./pages/apply/apply";
// import Getintouch from "./pages/getintouch/getintouch";
import Getintouch from "./pages/getintouch/getintouch";



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
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/story" element={<Story />} />
        <Route path="/services" element={<Services />} />
        <Route path="/talktogather" element={<Talk />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/getintouch" element={<Getintouch />} />
        
      </Routes>
    </Router>
  );
}
