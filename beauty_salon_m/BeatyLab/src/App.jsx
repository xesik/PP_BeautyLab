import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Импортируем страницы
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import AdminPanel from './pages/entry_5/AdminPanel';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;