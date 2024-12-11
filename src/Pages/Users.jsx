import { useState } from "react";
import { FaLeftLong } from "react-icons/fa6";
import { MdDelete, MdEdit } from "react-icons/md";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Users = () => {

    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/');
    }


    const handleUserDelete = (id) => {
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


                // Delete from the DB
            fetch(`https://coffee-store-server-rouge-eta.vercel.app/users/${id}`, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
            const remaining = users.filter(user => user._id !== id);
            setUsers(remaining);
                }
            })    
            }
        });
    }

    return (
        <div style={{backgroundImage: `url('https://i.ibb.co.com/MhqZ7n3/11.png')`}} className="bg-formBG">


            <div className="w-9/12 mx-auto">
                <h3 className="text-[#374151] text-[30px] font-semibold flex items-center gap-6 my-12"><span onClick={handleBack} className="font-light"><FaLeftLong></FaLeftLong></span> Back to Home</h3>
            </div>

            <h2 className="text-center text-3xl font-bold font-sans">Total Users : {users.length}</h2>


        <div className="overflow-x-auto w-9/12 mx-auto py-24 font-sans">
            <table className="table">
    {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>E-mail</th>
                        <th>Creation Time</th>
                        <th>Last Login Time</th>
                        <th>Action At</th>
                    </tr>
                </thead>
                <tbody>
                           {/* row  */}
                    {
                        users.map(user => 
                            <tr className="hover" key={user._id}>
                            <th>2</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.createdTime}</td>
                            <td>{user.lastSignInTime}</td>
                            <td className="space-x-2">
                            <button 
                    onClick={() => handleUserDelete(user._id)}
                    className="bg-[#EA4744] p-2 rounded"><MdDelete className="text-white"></MdDelete></button>

                    <button className="bg-black p-2 rounded"><MdEdit className="text-white"></MdEdit></button>

                            </td>
                        </tr>
                        )
                    }
            </tbody>
        </table>
</div>


        </div>
    );
};

export default Users;