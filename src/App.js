import React from "react";
import { RouterProvider } from "react-router-dom";
import route from "./Routes/Routes/Routes";


function App() {
  return (
    <React.Fragment>
      <section className="max-w-[1440px] mx-auto">
        <RouterProvider router={route}>

        </RouterProvider>
      </section>
    </React.Fragment>
  );
}

export default App;
