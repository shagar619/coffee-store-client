import logo from './../assets/more/logo1.png';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
    return (
        <div style={{backgroundImage: `url('https://i.ibb.co.com/YXft9W1/13.jpg')`}} className="bg-footer flex justify-center items-center gap-32 pt-32 pb-12">

            <div>
                <img className='h-24 w-20 mb-3' src={logo} alt="" />
                <h3 className='text-[#331A15] text-4xl font-semibold'>Espresso Emporium</h3>
                <p className='font-sans py-6 text-[#1B1A1A] text-xl font-normal'>Always ready to be your friend. Come & Contact with us to share your <br /> memorable moments, to share with your best companion.</p>
                <div className='flex gap-6'>
                    <p className='text-3xl'><FaFacebook></FaFacebook></p>
                    <p className='text-3xl'><FaTwitter></FaTwitter></p>
                    <p className='text-3xl'><FaInstagram></FaInstagram></p>
                    <p className='text-3xl'><FaLinkedin></FaLinkedin></p>
                </div>
                <h3 className='text-4xl font-normal text-[#331A15] py-4'>Get in Touch</h3>
                <p className='flex items-center gap-4 font-sans text-xl'><IoCall></IoCall><span className='text-[#1B1A1A] text-xl font-normal'>+88 01533 333 333</span></p>
                <p className='flex items-center gap-4 font-sans py-3 text-xl'><IoMdMail></IoMdMail><span className='text-[#1B1A1A] text-xl font-normal'>ashagar@mail.com</span></p>
                <p className='flex items-center gap-4 font-sans text-xl'><FaLocationDot></FaLocationDot><span className='text-[#1B1A1A] text-xl font-normal'>72, Wall street, King Road, Dhaka</span></p>
            </div>


            <div>
                <h3 className='text-[45px] text-[#331A15] font-bold mb-8'>Connect with Us</h3>
                <p><input className='font-sans py-2 pl-3 text-gray-600 text-xl font-normal' type="text" name="name" id="" placeholder='Name' /></p>
                <p><input className='font-sans py-2 pl-3 text-gray-600 text-xl font-normal my-4' type="email" name="name" id="" placeholder='E-mail' /></p>
                <p><textarea placeholder="Message" className="textarea textarea-lg w-full max-w-xs font-sans text-gray-600 text-xl font-normal"></textarea></p>
                <button className='mt-3 py-2 px-3 border-2 border-[#331A15] text-[#331A15] text-2xl font-normal rounded-[30px]'>Send Message</button>
            </div>
            
            
        </div>
    );
};

export default Footer;