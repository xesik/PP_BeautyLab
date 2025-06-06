import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const [authorized, setAuthorized] = useState(null);

  useEffect(() => {
    fetch("/api/check-admin/", { credentials: "include" })
      .then(res => setAuthorized(res.ok))
      .catch(() => setAuthorized(false));
  }, []);

  if (authorized === null) return null; // или <Loader />

  return authorized ? <Outlet /> : <Navigate to="/admin_login" replace />;
};

export default ProtectedRoute;
