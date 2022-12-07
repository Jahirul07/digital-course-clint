import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Category from "../../Pages/Category/Category/Category";
import Course from "../../Pages/Course/Course";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import PremiumCourse from "../../Pages/PremiunCourse/PremiumCourse";
import Profile from "../../Pages/Profile/Profile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`https://digital-course-server-delta.vercel.app/category/${params.id}`)
            },
            {
                path: '/courses/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({params}) => fetch(`https://digital-course-server-delta.vercel.app/courses/$a{params.id}`)
                
            },
            {
                path: '/courses',
                element: <Course></Course>,
                loader: () => fetch('https://digital-course-server-delta.vercel.app/courses')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: 'premium-course',
                element: <PrivateRoute><PremiumCourse></PremiumCourse></PrivateRoute>
            }

        ]
    }
])