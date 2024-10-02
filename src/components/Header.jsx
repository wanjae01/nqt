import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between p-4 bg-white fixed top-0 w-full z-50">
      <Link to="/" className="text-2xl font-bold text-blue-600">GiveSheep</Link>
      <nav className="hidden md:flex space-x-4">
        <Link to="/about" className="text-gray-600 hover:text-blue-600">회사 소개</Link>
        <Link to="/notices" className="text-gray-600 hover:text-blue-600">공지사항</Link>
        <Link to="/receipts" className="text-gray-600 hover:text-blue-600">기부 영수증</Link>
        <Link to="/faq" className="text-gray-600 hover:text-blue-600">자주 묻는 질문</Link>
      </nav>
      <Button onClick={() => navigate("/login")}>로그인</Button>
    </header>
  );
};

export default Header;