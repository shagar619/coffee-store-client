
import Swal from 'sweetalert2';

const AddCoffeeForm = () => {

    const handleAddCoffee = (e) => {
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

        const newCoffee = { name, chef, supplier, taste, category, details, photo, price }


        // send data to the server
        fetch('http://localhost:5000/coffee',{
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        }
        )
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    title: 'Success',
                    text: 'Coffee added successfully!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                });
                form.reset();
            }
        })
    }

    return (
        <div className="bg-[#F4F3F0] py-16 px-28">
            <h3 className="text-[#374151] text-5xl font-semibold text-center">Add New Coffee</h3>
            <p className="text-center text-lg font-normal font-sans text-gray-500 my-8">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at <br /> its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed <br /> to using Content here.</p>

        <form onSubmit={handleAddCoffee}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

{/* input field */}
<div>
<label className="form-control w-full">
<div className="label">
<span className="text-[#1b1a1acc] text-xl font-semibold font-sans mb-3">Name</span>
</div>
<input type="text" name="name" placeholder="Enter coffee name" className="text-[#1b1a1a99] text-[16px] font-normal font-sans border-none input input-bordered w-full" required />
</label>
</div>

<div>
<label className="form-control w-full">
<div className="label">
<span className="text-[#1b1a1acc] text-xl font-semibold font-sans mb-3">Chef</span>
</div>
<input type="text" name="chef" placeholder="Enter coffee chef" className="text-[#1b1a1a99] text-[16px] font-normal font-sans border-none input input-bordered w-full" required />
</label>
</div>

<div>
<label className="form-control w-full">
<div className="label">
<span className="text-[#1b1a1acc] text-xl font-semibold font-sans mb-3">Supplier</span>
</div>
<input type="text" name="supplier" placeholder="Enter coffee supplier" className="text-[#1b1a1a99] text-[16px] font-normal font-sans border-none input input-bordered w-full" required />
</label>
</div>

<div>
<label className="form-control w-full">
<div className="label">
<span className="text-[#1b1a1acc] text-xl font-semibold font-sans mb-3">Taste</span>
</div>
<input type="text" name="taste" placeholder="Enter coffee taste" className="text-[#1b1a1a99] text-[16px] font-normal font-sans border-none input input-bordered w-full" required/>
</label>
</div>

<div>
<label className="form-control w-full">
<div className="label">
<span className="text-[#1b1a1acc] text-xl font-semibold font-sans mb-3">Category</span>
</div>
<input type="text" name="category" placeholder="Enter coffee category" className="text-[#1b1a1a99] text-[16px] font-normal font-sans border-none input input-bordered w-full" required />
</label>
</div>

<div>
<label className="form-control w-full">
<div className="label">
<span className="text-[#1b1a1acc] text-xl font-semibold font-sans mb-3">Details</span>
</div>
<input type="text" name="details" placeholder="Enter coffee details" className="text-[#1b1a1a99] text-[16px] font-normal font-sans border-none input input-bordered w-full" required/>
</label>
</div>

<div>
<label className="form-control w-full">
<div className="label">
<span className="text-[#1b1a1acc] text-xl font-semibold font-sans mb-3">Photo</span>
</div>
<input type="url" name="photo" placeholder="Enter photo URL" className="text-[#1b1a1a99] text-[16px] font-normal font-sans border-none input input-bordered w-full" required/>
</label>
</div>


<div>
<label className="form-control w-full">
<div className="label">
<span className="text-[#1b1a1acc] text-xl font-semibold font-sans mb-3">Price</span>
</div>
<input type="number" name="price" placeholder="Enter price" className="text-[#1b1a1a99] text-[16px] font-normal font-sans border-none input input-bordered w-full" required/>
</label>
</div>


</div>


<input type="submit" value="Add Coffee" className="bg-[#D2B48C] w-full py-3 border-2 border-[#331A15] rounded text-[#331A15] text-2xl font-medium mt-6" />

    </form>


    </div>
    );
};

export default AddCoffeeForm;