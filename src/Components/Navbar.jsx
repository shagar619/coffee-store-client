import { NavLink } from 'react-router-dom';
import logo from './../assets/more/logo1.png';


const Navbar = () => {
    return (
        <div style={{backgroundImage: `url('https://i.ibb.co.com/cr8yKW7/15.jpg')`}} className=" flex justify-between items-center px-12">

            <div></div>

        <div className='flex items-center justify-center gap-4'>
        <div className='py-4'>
                <img className='h-24 w-20' src={logo} alt="" />
            </div>

            <div>
                <h1 className='text-white text-[60px] font-medium'>Espresso Emporium</h1>
            </div>
        </div>

            <div className='flex items-center gap-4'>
                <NavLink to="/signUp" className="text-black font-sans text-xl font-bold btn">Sign Up</NavLink>

                <NavLink to="/users" className="text-black font-sans text-xl font-bold btn">Users</NavLink>
            </div>

        </div>
    );
};

export default Navbar;