import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Not = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate("/admin/logout");
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <div className="w-screen h-screen bg-pink-500">
      <p className="font-bold px-4">Not in session</p>
    </div>
  );
};

export default Not;
