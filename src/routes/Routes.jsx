import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import AddCoffee from "../Pages/AddCoffee";
import UpdateCoffee from "../Pages/UpdateCoffee";
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";
import Users from "../Pages/Users";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
          path: "/",
          element: <Home></Home>,
          loader:() => fetch('http://localhost:5000/coffee')
        },

        {
          path: "/addCoffee",
          element: <AddCoffee></AddCoffee>
        },

        {
          path: "/updateCoffee/:id",
          element: <UpdateCoffee></UpdateCoffee>,
          loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
        },

        {
          path: "/signUp",
          element: <SignUp></SignUp>
        },

        {
          path: "/signin",
          element: <SignIn></SignIn>
        },

        {
          path: "/users",
          element: <Users></Users>,
          loader: () => fetch('http://localhost:5000/users')
        }
      ]  
    },
  
    {
      path: "*",
      element: <h1>ERROR!</h1>
    }
  ]);


  export default router;