import { FaLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import AddCoffeeForm from "../Components/AddCoffeeForm";

const AddCoffee = () => {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }

    return (
    <div className="bg-formBG pb-32">
        <div className="w-10/12 mx-auto">
            <h3 className="text-[#374151] text-[30px] font-semibold flex items-center gap-6 my-12"><span onClick={handleBack} className="font-light"><FaLeftLong></FaLeftLong></span> Back to Home</h3>

            <AddCoffeeForm></AddCoffeeForm>
        </div>
    </div>
    );
};

export default AddCoffee;