import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffeeForm = ({ coffee }) => {

    const { _id, name, taste, category, chef, details, photo, price, supplier } = coffee;
    const navigate = useNavigate();

    const handleUpdateCoffee = (e) => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const price = form.price.value;

        const updatedCoffee = { name, chef, supplier, taste, category, details, photo, price }

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Success',
                    text: 'Coffee Updated successfully!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                });
                navigate(-1);

            }
        })

        
    }

    return (
        <div className="bg-[#F4F3F0] py-16 px-28">
            <h3 className="text-[#374151] text-5xl font-semibold text-center">Update Existing Coffee Details</h3>
            <p className="text-center text-lg font-normal font-sans text-gray-500 my-8">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at <br /> its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed <br /> to using Content here.</p>

        <form onSubmit={handleUpdateCoffee}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

{/* input field */}
<div>
<label className="form-control w-full">
<div className="label">
<span className="text-[#1b1a1acc] text-xl font-semibold font-sans mb-3">Name</span>
</div>
<input type="text" name="name" defaultValue={name} placeholder="Enter coffee name" className="text-[#1b1a1a99] text-[16px] font-normal font-sans border-none input input-bordered w-full" required />
</label>
</div>

<div>
<label className="form-control w-full">
<div className="label">
<span className="text-[#1b1a1acc] text-xl font-semibold font-sans mb-3">Chef</span>
</div>
<input type="text" name="chef" defaultValue={chef} placeholder="Enter coffee chef" className="text-[#1b1a1a99] text-[16px] font-normal font-sans border-none input input-bordered w-full" required />
</label>
</div>

<div>
<label className="form-control w-full">
<div className="label">
<span className="text-[#1b1a1acc] text-xl font-semibold font-sans mb-3">Supplier</span>
</div>
<input type="text" name="supplier" defaultValue={supplier} placeholder="Enter coffee supplier" className="text-[#1b1a1a99] text-[16px] font-normal font-sans border-none input input-bordered w-full" required />
</label>
</div>

<div>
<label className="form-control w-full">
<div className="label">
<span className="text-[#1b1a1acc] text-xl font-semibold font-sans mb-3">Taste</span>
</div>
<input type="text" name="taste" defaultValue={taste} placeholder="Enter coffee taste" className="text-[#1b1a1a99] text-[16px] font-normal font-sans border-none input input-bordered w-full" required/>
</label>
</div>

<div>
<label className="form-control w-full">
<div className="label">
<span className="text-[#1b1a1acc] text-xl font-semibold font-sans mb-3">Category</span>
</div>
<input type="text" name="category" defaultValue={category} placeholder="Enter coffee category" className="text-[#1b1a1a99] text-[16px] font-normal font-sans border-none input input-bordered w-full" required />
</label>
</div>

<div>
<label className="form-control w-full">
<div className="label">
<span className="text-[#1b1a1acc] text-xl font-semibold font-sans mb-3">Details</span>
</div>
<input type="text" name="details" defaultValue={details} placeholder="Enter coffee details" className="text-[#1b1a1a99] text-[16px] font-normal font-sans border-none input input-bordered w-full" required/>
</label>
</div>

<div>
<label className="form-control w-full">
<div className="label">
<span className="text-[#1b1a1acc] text-xl font-semibold font-sans mb-3">Photo</span>
</div>
<input type="url" name="photo" defaultValue={photo} placeholder="Enter photo URL" className="text-[#1b1a1a99] text-[16px] font-normal font-sans border-none input input-bordered w-full" required/>
</label>
</div>


<div>
<label className="form-control w-full">
<div className="label">
<span className="text-[#1b1a1acc] text-xl font-semibold font-sans mb-3">Price</span>
</div>
<input type="number" name="price" defaultValue={price} placeholder="Enter price" className="text-[#1b1a1a99] text-[16px] font-normal font-sans border-none input input-bordered w-full" required/>
</label>
</div>


</div>


<input type="submit" value="Update Coffee Details" className="bg-[#D2B48C] w-full py-3 border-2 border-[#331A15] rounded text-[#331A15] text-2xl font-medium mt-6" />

    </form>


    </div>
    );
};

export default UpdateCoffeeForm;