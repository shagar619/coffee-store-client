import { FaLeftLong } from "react-icons/fa6";
import { useLoaderData, useNavigate } from "react-router-dom";
import UpdateCoffeeForm from "../Components/UpdateCoffeeForm";


const UpdateCoffee = () => {

    const navigate = useNavigate();

    const coffee = useLoaderData();

    const handleBack = () => {
        navigate(-1);
    }

    return (
        <div className="bg-formBG pb-32">
        <div className="w-10/12 mx-auto">
            <h3 className="text-[#374151] text-[30px] font-semibold flex items-center gap-6 my-12"><span onClick={handleBack} className="font-light"><FaLeftLong></FaLeftLong></span> Back to Home</h3>

            <UpdateCoffeeForm coffee={coffee}></UpdateCoffeeForm>
        </div>
    </div>
    );
};

export default UpdateCoffee;