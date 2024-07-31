import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Videos from './components/Videos';
import Blogs from './components/Blogs';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-900 text-white p-4">
          <h1 className="text-center text-2xl">Meditation and Quantum Physics</h1>
          <nav className="flex justify-center space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/videos" className="hover:underline">Videos</Link>
            <Link to="/blogs" className="hover:underline">Blogs</Link>
          </nav>
        </header>
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
        </main>
        <footer className="bg-blue-900 text-white text-center p-4">
          <p>Contact us: info@meditationquantum.com</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
