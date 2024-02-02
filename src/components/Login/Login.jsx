import auth from "../../appwrite/auth";
import {login} from "../../store/AuthSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {useForm} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Input from "../reusableComponents/Input";

function Login() {

    const dispatch=useDispatch();
    const [error,setError]=useState("");
    const {register,handleSubmit}=useForm();
    const navigate=useNavigate();



    function logIn(data){
        let authObj=new auth();

        authObj.userLogin(data.email,data.password)
        .then((res)=>{
            if(res){
                dispatch(login(res));
                navigate("/");
            }else{
                setError("either email or password is wrong");
            }
        })
        .catch((err)=>{
            setError("either email or password is wrong");
        })
    }


    return <div className='mx-auto py-4 px-2 w-1/4 min-h-fit flex flex-col items-center border-2 rounded-md border-slate-400 mt-40 bg-white'>

        <div className='text-2xl font-bold'><span className='text-red-600'>B</span><span className='text-blue-500'>l</span><span className='text-green-500'>o</span><span className='text-yellow-300'>g</span></div>
        
        <form onSubmit={handleSubmit(logIn)} className='w-full'>
            
            <div className='relative w-full flex items-center flex-col mt-2'>
                {/* <div className='opacity-100 w-2/3 flex justify-start relative top-3 left-3'>name</div> */}
                {error && <p className='text-red-500'>{error}</p>}
                <Input
                    type="text"
                    className='border rounded-md w-2/3 p-2 font-thin border-black h-12'
                    placeholder="email"
                    {...register("email", {
                        required: true,
                    })}
                />
            </div>

            <div className='relative w-full flex items-center flex-col mt-2'>
                {/* <div className='opacity-100 w-2/3 flex justify-start relative top-3 left-3'>name</div> */}
                <Input
                    type="text"
                    className='border rounded-md w-2/3 p-2 font-light border-black h-12'
                    placeholder="password"
                    {...register("password", { required: true })} />
            </div>

            <button type="submit" className='border rounded-md bg-blue-500 p-2 font-bold m-2 text-white'>Log in</button>

        </form>
    </div>
}

export default Login;