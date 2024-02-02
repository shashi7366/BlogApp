import { useDispatch } from "react-redux";
import {logout} from "../../store/AuthSlice";
import authObj from "../../appwrite/auth"
import auth from "../../appwrite/auth";

function Logout(){

    const dispatch=useDispatch();

    return <div
     className="pl-2 pr-4 font-bold text-black"
     onClick={()=>{
        let authObj=new auth();
        authObj.userLogout()
        .then((res)=>{
            console.log("response came for logout");
            console.log(res);
            dispatch(logout());
        })
        .catch((e)=>{
            console.log(e);
        })
        
     }}
    >logout</div>
}

export default Logout;