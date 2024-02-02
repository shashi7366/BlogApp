
import {useState} from "react";
import {Link} from "react-router-dom";
import Logout from "./Logout";
import { useSelector } from "react-redux";
function BurgerButton({navItems}){

    const isLoggedIn=useSelector((state)=>{
        return state.auth.status;
    })

    const [active,setActive]=useState(true);
    return<div className="relative">
        <div onClick={()=>{
            console.log(active);
            setActive((active)=>{
                return !active;
            })
        }}
        className="w-8 h-8 bg-white border rounded-md"
        >
       <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 18L20 18" stroke="#000000" stroke-width="2" stroke-linecap="round"></path> <path d="M4 12L20 12" stroke="#000000" stroke-width="2" stroke-linecap="round"></path> <path d="M4 6L20 6" stroke="#000000" stroke-width="2" stroke-linecap="round"></path> </g></svg>
        </div>
        {active && <div className="flex flex-col items-center absolute top-10 right-4 border bg-white opacity-100 w-32 pt-2 pb-0 border-slate-300 rounded-md ">
            {navItems.map((item)=>{
                return item.isActive?<div className="border-b-2 border-slate-300 w-full font-bold">
                    <Link to={item.link} >{item.name}</Link>
                </div>:null;
            })}

           {isLoggedIn && <Logout/>} 
        </div>}
    </div>
}

export default BurgerButton;