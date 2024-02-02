import { useEffect,useState} from "react";
import { useSelector } from "react-redux";
import {useNavigate} from "react-router-dom"


function ProtectedRoute({children}){

    const [auth,setAuth]=useState(false);
    const navigate=useNavigate();

    const authStatus=useSelector((state)=>{
        return state.auth.status;
    })

    useEffect(()=>{
        if(!authStatus){
            navigate("/login");
        }else{
            navigate("/");
            setAuth(true);
        }
    },[authStatus]);

    return auth==true?<>{children}</>:<div>Loading ....</div>;
}

export default ProtectedRoute;