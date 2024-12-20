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
          loader:() => fetch('https://coffee-store-server-rouge-eta.vercel.app/coffee')
        },

        {
          path: "/addCoffee",
          element: <AddCoffee></AddCoffee>
        },

        {
          path: "/updateCoffee/:id",
          element: <UpdateCoffee></UpdateCoffee>,
          loader: ({ params }) => fetch(`https://coffee-store-server-rouge-eta.vercel.app/coffee/${params.id}`)
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
          loader: () => fetch('https://coffee-store-server-rouge-eta.vercel.app/users')
        }
      ]  
    },
  
    {
      path: "*",
      element: <h1>ERROR!</h1>
    }
  ]);


  export default router;