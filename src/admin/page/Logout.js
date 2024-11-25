import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("customSession");
    navigate("/admin/login", { replace: true });
  }, [navigate]);
  return <div>Logout</div>;
};

export default Logout;
