
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";



export default function Layout(){
    return(<>
    <Navbar/>
    <div className="mt-11 ms-5 me-5 mb-20">
        <Outlet/>
    </div>
    <Footer/>
    </>)
}