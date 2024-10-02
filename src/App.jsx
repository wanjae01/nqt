import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Start from './pages/Start';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-16"> {/* 헤더의 높이만큼 상단 패딩 추가 */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/start" element={<Start />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
