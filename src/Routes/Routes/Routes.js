import { createBrowserRouter } from "react-router-dom";
import About from "../../About/About";
import ContactUs from "../../ContactUs/ContactUs";
import DentalServices from "../../DentalServices/DentalServices";
import Main from "../../Layout/Main";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Signup/Signup";

const route = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/dental-services",
                element: <DentalServices></DentalServices>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/contact-us",
                element: <ContactUs></ContactUs>
            },
            
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <Signup></Signup>
            },
        ]
    },
    {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
    }
]);

export default route;