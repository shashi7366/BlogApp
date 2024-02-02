import {useDispatch} from 'react-redux';
import {set, useForm} from "react-hook-form";
import {useState} from "react";
import auth from "../../appwrite/auth";
import {login} from "../../store/AuthSlice";
import { useNavigate } from 'react-router-dom';

function SignUp(){
    const [error,setError]=useState({});
    const {register,handleSubmit}=useForm();
    const dispatch=useDispatch();
    const navigate=useNavigate();

    console.log("hi signup");

    function signIn(data){
        console.log(data);
        let authObj=new auth();
        authObj.userCreateAccount(data.email,data.password)
        .then((res)=>{
            console.log(res);

            authObj.userLogin(data.email,data.password)
            .then((res)=>{
                console.log("login success ",res);
                dispatch(login(res));
                navigate("/");
            }).catch((error)=>{
                console.log("error occured while login ",error);
            })
        })
        .catch((err)=>{
            console.log(err);
        })

    }

    return <div className='mx-auto px-2 py-4 w-1/4 min-h-fit flex flex-col items-center border-2 border-slate-400 rounded-md mt-40 bg-white'>
        
        <div className='text-2xl font-bold'><span className='text-red-600'>B</span><span className='text-blue-500'>l</span><span className='text-green-500'>o</span><span className='text-yellow-300'>g</span></div>
        <div className='text-xl font-medium mb-4'>Create an account</div>
        <form onSubmit={handleSubmit(signIn)} className='w-full'>
        <div className='relative w-full flex items-center flex-col mt-2'>
            {/* <div className='opacity-100 w-2/3 flex justify-start relative top-3 left-3'>name</div> */}
            <input
            type="text"
            className='border rounded-md w-2/3 p-2 font-light border-black'
            placeholder="name"
            {...register("name",{required:true})}
            />
        </div>

        <div className='relative w-full flex items-center flex-col mt-2'>
            {/* <div className='opacity-100 w-2/3 flex justify-start relative top-3 left-3'>name</div> */}
            {error.email!=null && <p className='text-red-500'>{error.email}</p>}
            <input
            type="text"
            className='border rounded-md w-2/3 p-2 font-light border-black'
            placeholder="email"
            {...register("email",{
                required:true,
                //pattern:/^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/gm,
                validate:{
                    matchPattern:(value)=>{
                        let t=/^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/gm.test(value);
                        if(!t){
                            console.log("validation failed");
                            setError({...error,email:"enter a valid email"});
                            return false;
                        }else{
                            console.log("validation passed");
                            
                                setError({...error,email:null})
                            
                            return true;
                        }
                    }
                }
            })}  
            />
        </div>

        <div className='relative w-full flex items-center flex-col mt-2'>
            {/* <div className='opacity-100 w-2/3 flex justify-start relative top-3 left-3'>name</div> */}
            <input
            type="text"
            className='border rounded-md w-2/3 p-2 font-light border-black'
            placeholder="password"
            {...register("password",{required:true})}/>
        </div>

        <button type="submit" className='border rounded-md bg-blue-500 p-2 font-bold m-2 text-white'>Sign up</button>

        </form>
    </div>
}

export default SignUp;