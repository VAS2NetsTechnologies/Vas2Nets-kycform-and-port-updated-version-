import React, { useEffect } from "react";
import { useLoginContext } from "../context/loginContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import RecTabs from "../components/records/RecTabs";

const Records = () => {
  const { isSessionExpired, setIsLoggedIn, customSession } = useLoginContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (isSessionExpired()) {
      console.log("...");

      Swal.fire({
        title: "Session Expired",
        text: "Your session has expired. What would you like to do?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Start New Session",
        cancelButtonText: "Logout",
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          const customSession = Date.now();
          localStorage.setItem("customSession", customSession.toString());
          Swal.fire(
            "New Session Started!",
            "You can continue using the application."
          );

          window.location.reload();
        } else {
          setIsLoggedIn(false);
          Swal.fire("Logged Out").then(
            () => {
              navigate("/admin/logout");
            }
          );
        }
      });
    }
  }, [customSession, isSessionExpired, navigate, setIsLoggedIn]);

  return (
    <section className="flex flex-col jusitfy-center px-10 font-poet">
     <RecTabs/>
    </section>
  );
};

export default Records;
