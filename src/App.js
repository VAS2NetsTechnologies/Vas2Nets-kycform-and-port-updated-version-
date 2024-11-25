import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Error, FormLayout, Forms, Landing, Success } from "./form/pages";
import Individual from "./form/components/individual/Individual";
import SoleProp from "./form/components/sole-proprietorship/SoleProp";
import Records from "./admin/page/Records";
import Layout from "./admin/page/Layout";
import Login from "./admin/page/Login";
import Logout from "./admin/page/Logout";
import SingleRecord from "./admin/page/SingleRecord";
import Documents from "./admin/page/Documents";
import Nin from "./admin/page/Nin";
import OldRecords from "./admin/page/OldRecords";
import OldDoc from "./admin/page/OldDoc";
import Slash from "./admin/page/Slash";

const App = () => {
  const routes = [
    {path:'/' , element:<Slash/>},
    // admin
    {
      path: "/admin",
      element: <Layout />,
      children: [
        {
          index: "records",
          element: <Records />,
        },
        {
          path: "records",
          element: <Records />,
        },
        {
          path: "old-records",
          element: <OldRecords />,
        },
        {
          path: "llc/records/:id",
          element: <SingleRecord />,
        },
        {
          path: "sole/records/:id",
          element: <SingleRecord />,
        },
        {
          path: "individual/records/:id",
          element: <SingleRecord />,
        },
        {
          path: "sole/documents/:id",
          element: <Documents />,
        },
        {
          path: "individual/documents/:id",
          element: <Documents />,
        },
        {
          path: "llc/documents/:id",
          element: <Documents />,
        },
        {
          path: "old-records/documents/:id",
          element: <OldDoc />,
        },
        {
          path: "nin",
          element: <Nin />,
        },

        // {
        //   path: "documents/:id",
        //   element: <Documents />,
        // },
      ],
    },
    { path: "/admin/login", element: <Login /> },
    { path: "/admin/logout", element: <Logout /> },
    // form routes
    {
      path: "/kycform",
      element: <Landing />,
      errorElement: <Error />,
    },
    {
      path: "/kycform/llc",
      element: <FormLayout />,
      children: [
        {
          index: true,
          element: <Forms />,
        },
      ],
    },
    {
      path: "/kycform/individual",
      element: <Individual />,
    },
    {
      path: "/kycform/sole-proprietorship",
      element: <SoleProp />,
    },
    { path: "/success", element: <Success /> },
  ];
  const router = createBrowserRouter(routes, {
    basename: "/VAS2NetsForm",
  });

  return <RouterProvider router={router} />;
};

export default App;
