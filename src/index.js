import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StepProvider } from "./form/context/stepContext/stepContext";
import { FormCtxProvider } from "./form/context/formContext/formContext";
import { IndieCtxProvider } from "./form/context/formContext/IndieFormContext";
import { SoleCtxProvider } from "./form/context/formContext/soleContext";
import { LoginProvider } from "./admin/context/loginContext";
import { SidebarProvider } from "./admin/context/sidebarContext";
import { SingleRecordProvider } from "./admin/context/singleRecordContext";
import { SingleLlcRecordProvider } from "./admin/context/customSllc";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <StepProvider>
      <FormCtxProvider>
        <IndieCtxProvider>
          <SoleCtxProvider>
            <LoginProvider>
              <SidebarProvider>
                <SingleRecordProvider>
                  <SingleLlcRecordProvider>
                    <App />
                  </SingleLlcRecordProvider>
                </SingleRecordProvider>
              </SidebarProvider>
            </LoginProvider>

            <ToastContainer
              position="top-center"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              theme="light"
            />
          </SoleCtxProvider>
        </IndieCtxProvider>
      </FormCtxProvider>
    </StepProvider>
  </QueryClientProvider>
);
