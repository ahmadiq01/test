import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home/home';
import Work from './pages/work/work';
import Subscribe from "./pages/subscribe/subscribe";
import Contact from "./pages/contact/contact";
import Clients from "./pages/clients/clients";
import Story from "./pages/story/story";
import Services from "./pages/services/services";
import Talk from "./pages/work/talktogather";
import Imgtogether from "./pages/work/imgtogether";
import Secondaryimg from "./pages/work/secondaryimg";
import Apply from "./pages/apply/apply";
import Getintouch from "./pages/getintouch/getintouch";
import Footer from './components/footer/footer';
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/story" element={<Story />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work/talktogather" element={<Talk />} />
        <Route path="/work/imgtogether" element={<Imgtogether />} />
        <Route path="/work/secondaryimg" element={<Secondaryimg />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/getintouch" element={<Getintouch />} />
      </Routes>
      <Footer />
    </Router>
  );
}