import { createBrowserRouter } from "react-router-dom";
import About from "../../About/About";
import ContactUs from "../../ContactUs/ContactUs";
import DentalServices from "../../DentalServices/DentalServices";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Reviews from "../../Reviews/Reviews";
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
                path: "/reviews",
                element: <Reviews></Reviews>
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
]);

export default route;