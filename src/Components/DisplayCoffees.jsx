import cup1 from './../assets/cups/Rectangle 9.png';
import cup2 from './../assets/cups/Rectangle 10.png';
import cup3 from './../assets/cups/Rectangle 11.png';
import cup4 from './../assets/cups/Rectangle 12.png';
import cup5 from './../assets/cups/Rectangle 13.png';
import cup6 from './../assets/cups/Rectangle 14.png';
import cup7 from './../assets/cups/Rectangle 15.png';
import cup8 from './../assets/cups/Rectangle 16.png';

const DisplayCoffees = () => {
    return (
        <div className="w-10/12 mx-auto mb-32">
            <p className="text-center text-[#1B1A1A] text-xl font-normal font-sans mb-3">Follow Us Now</p>
            <h3 className="text-center text-[#331A15] text-5xl font-bold mb-12">Follow On Instagram</h3>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-14'>
                <img className='' src={cup1} alt="" />
                <img className='' src={cup2} alt="" />
                <img className='' src={cup3} alt="" />
                <img className='' src={cup4} alt="" />
                <img className='' src={cup5} alt="" />
                <img className='' src={cup6} alt="" />
                <img className='' src={cup7} alt="" />
                <img className='' src={cup8} alt="" />
            </div>
            
        </div>
    );
};

export default DisplayCoffees;