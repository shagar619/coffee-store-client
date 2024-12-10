import { BsCup } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Coffee from "./Coffee";


const Products = ({ coffees, setCoffees }) => {

    const navigate = useNavigate();

    const handleAdd = () => {
        navigate('/addCoffee');
    }

    return (
        <div className="my-32 bg-products">
            <p className="font-sans text-xl text-[#1B1A1A] font-normal text-center">--- Sip & Savor ---</p>
            <h3 className="text-[#331A15] text-5xl font-bold text-center mb-6">Our Popular Products</h3>
            <p className="flex justify-center items-center"><button onClick={handleAdd} className="text-white text-2xl font-normal flex justify-between items-center gap-3 bg-[#E3B577] py-2 px-4 border border-black rounded-md">Add Coffee <span className="text-black"><BsCup></BsCup></span></button></p>

            <div className="w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 content-center py-8">
                {
                    coffees.map((coffee, idx) => <Coffee key={idx} coffee={coffee} setCoffees={setCoffees} coffees={coffees}></Coffee>)
                }
            </div>
            
        </div>
    );
};

export default Products;