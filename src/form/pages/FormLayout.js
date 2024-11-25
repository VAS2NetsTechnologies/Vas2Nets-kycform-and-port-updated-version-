import React from "react";

import { Outlet } from "react-router-dom";
import ShapeDivider from "../components/clipPath/ShapeDivider";
import Header from "../components/header/Header";
import Navigator from "../components/navigator/Navigator";
import Down from "../components/clipPath/Down";


const FormLayout= () => {
  return (
    <main className="body">
      <section className="relative">
        <ShapeDivider />

        <div className="absolute left-6 py-4 lg:right-4 lg:py-4 lg:top-2 xl:top-1 xl:left-14 xl:py-2">
          <Header page="form" />
        </div>
        <div className="relative max-w-3xl mx-auto top-32 px-20 md:top-24 lg:px-10 xl:px-0">
          <Navigator />
        </div>
      </section>

      <section className="relative max-w-7xl mx-auto top-32 px-6 md:px-4">
        <Outlet />
      </section>
      <Down />
    </main>
  );
};

export default FormLayout;
