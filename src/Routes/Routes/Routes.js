import { createBrowserRouter } from "react-router-dom";
import About from "../../About/About";
import ContactUs from "../../ContactUs/ContactUs";
import DentalServices from "../../DentalServices/DentalServices";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AddDoctor from "../../Pages/Dashboard/AddDoctor/AddDoctor";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import ManageDoctors from "../../Pages/Dashboard/ManageDoctors/ManageDoctors";
import MyAppointment from "../../Pages/Dashboard/MyAppointment/MyAppointment";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import Signup from "../../Signup/Signup";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const route = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
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
        errorElement: <DisplayError></DisplayError>,
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: "/dashboard",
                element: <MyAppointment></MyAppointment>

            },
            {
                path: "/dashboard/all-users",
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>

            },
            {
                path: "/dashboard/add-doctor",
                element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>

            },
            {
                path: "/dashboard/manage-doctors",
                element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>

            },
            {
                path: "/dashboard/payment/:id",
                element: <AdminRoute><Payment></Payment></AdminRoute>,
                loader: ({ params }) => fetch(`https://doctors-portal-v2-server.vercel.app/bookings/${params.id}`)

            },
        ]
    }
]);

export default route;