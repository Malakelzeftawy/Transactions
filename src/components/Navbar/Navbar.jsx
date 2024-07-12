import { NavLink } from "react-router-dom";


export default function Navbar(){
    return (<>
    <nav className="bg-trasparent text-white py-5 shadow-inner shadow-gray-500">
        <div className="container">
            <div className=" flex justify-between items-center">
                <NavLink to="/" className={({isActive})=>{
                    return `font-bold text-3xl ${
                        isActive ? "text-pink-200" : ""
                    }`
                }}>
                    Home
                </NavLink>
                <div className="flex gap-4 lg:gap-20">
                    <NavLink to="/customers" className={({isActive})=>{
                    return `font-bold text-xl ${
                        isActive ? "text-pink-200" : ""
                    }`
                }} >Customers</NavLink>
                    <NavLink to="/transactions" className={({isActive})=>{
                    return `font-bold text-xl ${
                        isActive ? "text-pink-200" : ""
                    }`
                }}>Transactions</NavLink>
                 <NavLink to="/graphs" className={({isActive})=>{
                    return `font-bold text-xl ${
                        isActive ? "text-pink-200" : ""
                    }`
                }}>Transactions Graphs</NavLink>
                </div>
            </div>
        </div>
    </nav>
    </>)
}