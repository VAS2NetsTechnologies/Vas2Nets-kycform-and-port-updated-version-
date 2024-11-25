import React, { useEffect } from "react";

import { Outlet, useNavigate } from "react-router-dom";
import { useSidebarContext } from "../context/sidebarContext";
import { useLoginContext } from "../context/loginContext";
import Sidebar from "../components/sidebar/Sidebar";
import Not from "../components/not-in-session/Not";
import Footer from "../components/footer/Footer";

const Layout = () => {
  const { expanded } = useSidebarContext();
  const { isLoggedIn, customSession } = useLoginContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      const redirectTimeout = setTimeout(() => {
        navigate("/admin/login");
      }, 1000);

      return () => clearTimeout(redirectTimeout);
    }
  }, [isLoggedIn, navigate, customSession]);

  return (
    <>
      {isLoggedIn ? (
        <main className="w-full h-full bg-gray-300/10 overflow-hidden">
          <section className="flex">
            {/* sidebar */}
            <Sidebar />

            {/* dashboard contents */}
            <main
              className={`h-full mt-14 z-10 ${
                expanded ? "w-3/4 ml-[25%]" : "w-full ml-0 "
              } transition-all relative`}
            >
              <header
                className={` bg-red-700 w-screen h-10 shadow-lg fixed top-0 `}
              ></header>
              <section className={`-z-50 ${expanded ? "" : "mx-auto ml-40"}`}>
                <Outlet />
              </section>
              <Footer />
            </main>
          </section>
        </main>
      ) : (
        <Not />
      )}
    </>
  );
};

export default Layout;
