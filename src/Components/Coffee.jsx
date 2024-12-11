import { IoEyeSharp } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Coffee = ({ coffee, setCoffees, coffees }) => {
    const { _id, name, chef, photo, price } = coffee;

    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
            
            fetch(`http://localhost:5000/coffee/${id}`, {
                method: "DELETE",
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0) {
                Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success"
            }); 
            const remaining = coffees.filter(cof => cof._id !== _id);
            setCoffees(remaining);

                }
            })
            }
        });
    }

    return (
        <div className=" bg-[#F5F4F1] flex justify-center items-center py-8 px-4 rounded-lg">
            <div>
                <img className="h-60 w-48" src={photo} alt="" />
            </div>

            <div className="font-sans">
                <h3 className="text-xl font-medium text-[#5C5B5B]"><span className="text-[#1B1A1A] font-bold">Name</span> : {name}</h3>

                <h3 className="text-xl font-medium text-[#5C5B5B]"><span className="text-[#1B1A1A] font-bold">Chef</span> : {chef}</h3>

                <h3 className="text-xl font-medium text-[#5C5B5B]"><span className="text-[#1B1A1A] font-bold">Price</span> : {price}</h3>

            </div>
            <div className="ml-14 space-y-4">
                <p><button className="bg-[#D2B48C] p-2 rounded"><IoEyeSharp className="text-white"></IoEyeSharp></button></p>

            <p><Link to={`/updateCoffee/${_id}`}><button className="bg-black p-2 rounded"><MdEdit className="text-white"></MdEdit></button></Link></p>

                <p><button 
                onClick={() =>handleDelete(_id)}
                className="bg-[#EA4744] p-2 rounded"><MdDelete className="text-white"></MdDelete></button></p>
            </div>
        </div>
    );
};

export default Coffee;