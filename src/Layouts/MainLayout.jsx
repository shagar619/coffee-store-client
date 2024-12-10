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

            <div className='bg-navbar py-3'>
                <h3 className="text-white text-xl font-normal text-center">@Copyright Espresso Emporium ! All Rights Reserved</h3>
            </div>

            </footer>
        </div>
    );
};

export default MainLayout;