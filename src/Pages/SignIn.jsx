import { useContext } from "react";
import { FaLeftLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";


const SignIn = () => {

    const { signInUser } = useContext(AuthContext);

    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/');
    }

    const handleSignIn = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
        .then(result => {
            console.log(result.user);

            // update last login time
            const lastSignInTime = result?.user?.metadata?.lastSignInTime;
            const loginInfo = { email, lastSignInTime };

            fetch(`http://localhost:5000/users`, {
                method: "PATCH",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(loginInfo)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        })
        .catch(error => {
            console.log(error);
        })


    }

    return (
        <div>

        <div className="w-9/12 mx-auto">
            <h3 className="text-[#374151] text-[30px] font-semibold flex items-center gap-6 my-12"><span onClick={handleBack} className="font-light"><FaLeftLong></FaLeftLong></span> Back to Home</h3>
        </div>
    
            <div style={{backgroundImage: `url('https://i.ibb.co.com/TkhqXxb/24.jpg')`}} className="rounded flex items-center h-[600px] mx-[315px] my-[100px] ">
    
            <div className="card w-7/12 mx-auto font-sans">
        <form onSubmit={handleSignIn} className="card-body">
    
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
            <label className="label">
                <a href="#" className="label-text-alt link link-hover text-red-700 text-lg font-bold">Forgot password?</a>
            </label>
            </div>
    
            <div className="form-control mt-6">
                <button className="btn btn-primary text-xl font-bold">Sign In</button>
            </div>
        </form>
    
        <h3 className="text-center text-white text-2xl">Don't have an account? <Link to="/signUp" className="font-bold underline">Sign Up</Link></h3>
        </div>
    
            </div>
        </div>
    );
};

export default SignIn;