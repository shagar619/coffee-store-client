import { useContext } from "react";
import { FaLeftLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";


const SignUp = () => {

  const { createUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }

    const handleSignUp = (e) => {
      e.preventDefault();

      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      
      

      
      createUser(email, password)
      .then(result => {
        console.log(result.user);
        const createdTime = result?.user?.metadata?.creationTime;
        const createdAt = result?.user?.metadata?.createdAt;

        const newUser = { name, email, createdAt, createdTime };

        // save new user info to the DB
        fetch('http://localhost:5000/users', {
          method: "POST",
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data => {
          if(data.insertedId){
            alert('user created successfully!');
          }
        })
      })
      .catch(error => {
        console.log(error.code);
      })
    }

    return (
    <div>

    <div className="w-9/12 mx-auto">
        <h3 className="text-[#374151] text-[30px] font-semibold flex items-center gap-6 my-12"><span onClick={handleBack} className="font-light"><FaLeftLong></FaLeftLong></span> Back to Home</h3>
    </div>

        <div className="bg-signinBG bg-cover rounded flex items-center h-[600px] mx-[315px] my-[100px] ">

        <div className="card w-7/12 mx-auto font-sans">
      <form onSubmit={handleSignUp} className="card-body">

        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl text-white font-bold">Name</span>
          </label>
          <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl text-white font-bold">Email</span>
          </label>
          <input type="email" name="email" placeholder="Enter Your E-mail" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl text-white">Password</span>
          </label>
          <input type="password" name="password" placeholder="Enter Your Password" className="input input-bordered text-xl" required />
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary text-xl font-bold">Sign Up</button>
        </div>
      </form>

      <h3 className="text-center text-white text-2xl">Already have an account? <Link to="/signin" className="font-bold underline">Sign In</Link></h3>
    </div>

        </div>
    </div>
    );
};

export default SignUp;