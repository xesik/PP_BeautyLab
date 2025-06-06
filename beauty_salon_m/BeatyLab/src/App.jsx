import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Импортируем страницы
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import FullBlogPage from "./pages/FullBlogPage";
import AdminPanel from './pages/entry_5/AdminPanel';
import AdminLoginPage from "./pages/admin_login/AdminLoginPage";
import ProtectedRoute from "./pages/ProtectedRoute";
import BeautyLabLanding from "./pages/BeautyLabLanding";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<BeautyLabLanding />} />
        <Route path="/services" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/post/:id" element={<FullBlogPage />} />
        <Route path="/admin_login" element={<AdminLoginPage />} />

    <Route element={<ProtectedRoute />}>
  <Route path="/admin" element={<AdminPanel />} />
</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;