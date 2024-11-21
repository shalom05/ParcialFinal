import { createBrowserRouter} from "react-router-dom";
import { Detail } from "../screens/Detail/Detail";
import { Intro } from "../screens/Intro/Intro";
import { Dashboard } from "../screens/Dashboard/Dashboard";
import { Form } from "../screens/Form/Form";


export const mainRouter = createBrowserRouter([

    {
        path: "/",
        element: <Intro></Intro>
    },
    {
        path: "/detail",
        element: <Detail></Detail>, 
    },
    {
        path: "/Form",
        element: <Form></Form>,
    },
    {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
    },
])