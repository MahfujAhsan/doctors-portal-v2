import React from "react";
import { RouterProvider } from "react-router-dom";
import route from "./Routes/Routes/Routes";
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <React.Fragment>
      <section className="max-w-[1440px] mx-auto">
        <RouterProvider router={route}>

        </RouterProvider>
        <ToastContainer />
      </section>
    </React.Fragment>
  );
}

export default App;
