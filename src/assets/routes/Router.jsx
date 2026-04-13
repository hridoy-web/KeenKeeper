import { createBrowserRouter } from "react-router";
import MainLayout from "../../layouts/MainLayout";
import ErrorPage from "../../pages/ErrorPage";
import Home from "../../pages/Home";
import FriendDetails from "../../pages/FriendDetails";
import TimeLine from "../../pages/TimeLine";
import Stats from "../../pages/Stats";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [

            {
                path: "/",
                element: <Home />
            },

            {
                path: "/friendDetails/:id",
                element: <FriendDetails />
            },

            {
                path: "/timeLine",
                element: <TimeLine />
            },

            {
                path: "/stats",
                element: <Stats />
            }

        ]
    }
])

export default router;