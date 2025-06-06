import React, { useState } from "react";
import NavigationHeader from "../NavigationHeader";
import Footer from "../Footer";
import api from "../../api/axios";
import { useNavigate } from "react-router-dom";

const AdminLoginPage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login/", { login, password });
      if (res.status === 200) {
        localStorage.setItem("isAdmin", "true");
        navigate("/admin");
      }
    } catch (err) {
      setError("Неверный логин или пароль");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-orange-50">
      <NavigationHeader />
      <main className="flex flex-col flex-grow justify-center items-center py-16 px-4">
        <div className="bg-white rounded-xl shadow-lg p-10 w-full max-w-md">
          <h2 className="text-3xl font-semibold text-center mb-6 text-stone-700">Вход в админ-панель</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="login" className="block text-gray-700 mb-2">Логин</label>
              <input
                type="text"
                id="login"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-300"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-700 mb-2">Пароль</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-300"
                required
              />
            </div>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <button
              type="submit"
              className="w-full bg-orange-300 hover:bg-orange-400 text-white font-medium py-2 px-4 rounded-xl transition-colors"
            >
              Войти
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminLoginPage;
