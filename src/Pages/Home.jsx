

import { useLoaderData } from "react-router-dom";
import Categories from "../Components/Categories";
import DisplayCoffees from "../Components/DisplayCoffees";
import Products from "../Components/Products";
import { useState } from "react";



const Home = () => {

     const loadedCoffees = useLoaderData();
     const [coffees, setCoffees] = useState(loadedCoffees);
     

     return (
     <>
     <div className="bg-hero p-80">

          <h2 className="text-white text-5xl mb-4 text-center">Would you like a Cup of Delicious Coffee?</h2>
          <p className="text-white text-base font-normal mb-8 text-center">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of <br /> every moment!!! Enjoy the beautiful moments and make them memorable.</p>
          <p className="text-center"><button className="text-[#242222] bg-[#E3B577] text-2xl font-normal py-2 px-3">Learn More</button></p>

     </div>

          <Categories></Categories>
          <Products coffees={coffees} setCoffees={setCoffees}></Products>
          <DisplayCoffees></DisplayCoffees>

     </>
);
};

export default Home;