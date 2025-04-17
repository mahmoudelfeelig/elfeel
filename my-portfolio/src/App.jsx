import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { CV } from './pages/CV';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<CV />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
