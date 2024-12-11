import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";



const MainLayout = () => {
    return (
        <div className="rancho-font">

            {/* Navbar */}
            <nav>
            <Navbar></Navbar>
            </nav>

            <main>
            <div>
                {/* Dynamic part */}
                <Outlet></Outlet>
            </div>
            </main>
            
            {/* Footer */}
            <footer>
            <Footer></Footer>

            <div style={{backgroundImage: `url('https://i.ibb.co.com/cr8yKW7/15.jpg')`}} className='py-3'>
                <h3 className="text-white text-xl font-normal text-center">@Copyright Espresso Emporium ! All Rights Reserved</h3>
            </div>

            </footer>
        </div>
    );
};

export default MainLayout;