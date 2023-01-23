import { createBrowserRouter } from "react-router-dom";
import About from "../../About/About";
import ContactUs from "../../ContactUs/ContactUs";
import DentalServices from "../../DentalServices/DentalServices";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import MyAppointment from "../../Pages/Dashboard/MyAppointment/MyAppointment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: "/dashboard",
                element: <MyAppointment></MyAppointment>

            }
        ]
    }
]);

export default route;