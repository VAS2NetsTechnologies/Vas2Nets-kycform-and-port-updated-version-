import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Slash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();
    navigate("/kycform");
  }, [navigate]);

  return <div className="bg-black">...</div>;
};

export default Slash;
