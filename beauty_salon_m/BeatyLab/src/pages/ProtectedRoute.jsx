import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import api from "../api/axios";

const ProtectedRoute = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    api.get("/auth/check/") // должен быть реализован на Django
      .then((res) => {
        setIsAdmin(res.data.is_staff === true);
      })
      .catch(() => {
        setIsAdmin(false);
      });
  }, []);

  if (isAdmin === null) return <div className="text-center mt-20">Проверка доступа...</div>;
  if (!isAdmin) return <Navigate to="/login" replace />;

  return children;
};

export default ProtectedRoute;
