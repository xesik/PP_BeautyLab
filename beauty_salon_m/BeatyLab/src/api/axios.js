import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api/",  // Подстрой под свой сервер
  withCredentials: true,                  // если используешь куки/сессии
});

export default api;
