import aroma from './../assets/icons/1.png';
import quality from './../assets/icons/2.png';
import grades from './../assets/icons/3.png';
import roasting from './../assets/icons/4.png'

const Categories = () => {
    return (
        <div style={{backgroundImage: `url('https://i.ibb.co.com/gPS7nS9/10.png')`}} className="flex justify-center items-center gap-16 py-14">

            <div>
                <div>
                    <img src={aroma} alt="" />
                </div>
                <h3 className='text-[#331A15] text-[35px] font-medium'>Awesome Aroma</h3>
                <p className='text-[#1B1A1A] text-base font-normal'>You will definitely be a fan of the design <br /> & aroma of your coffee</p>
            </div>
            
            <div>
                <div>
                    <img src={quality} alt="" />
                </div>
                <h3 className='text-[#331A15] text-[35px] font-medium'>High Quality</h3>
                <p className='text-[#1B1A1A] text-base font-normal'>We served the coffee to you maintaining <br /> the best quality</p>
            </div>
            <div>
                <div>
                    <img src={grades} alt="" />
                </div>
                <h3 className='text-[#331A15] text-[35px] font-medium'>Pure Grades</h3>
                <p className='text-[#1B1A1A] text-base font-normal'>The coffee is made of the green coffee <br /> beans which you will love</p>
            </div>
            
            <div>
                <div>
                    <img src={roasting} alt="" />
                </div>
                <h3 className='text-[#331A15] text-[35px] font-medium'>Proper Roasting</h3>
                <p className='text-[#1B1A1A] text-base font-normal'>Your coffee is brewed by first roasting <br /> the green coffee beans</p>
            </div>
            
        </div>
    );
};

export default Categories;