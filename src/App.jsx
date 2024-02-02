import { useState,useEffect } from 'react'
import {useDispatch} from "react-redux";
import './App.css';
import  auth from './appwrite/auth';
import {login,logout} from "./store/AuthSlice"
import {Header,Input, PostForm, SignUp} from './components';
import { Outlet } from 'react-router-dom';

function App() {
  //console.log(import.meta.env.VITE_APPWRITE_URL);
  const [loading, setLoading] = useState(true);

  const dispatch=useDispatch();

  useEffect(()=>{
    let authObj=new auth();
    authObj.getUser()
    .then((res)=>{
      console.log(res);
      if(res){
        dispatch(login(res));
      }else{
        dispatch(logout());
      }
      
    })
    .catch((e)=>{
      console.log(e);
      dispatch(logout());
    }).finally(()=>{
      setLoading(false);
    })
  },[]);

  return (
   <>
   <Header/>
   <div className="mt-20">
   <Outlet />
   </div>
   
   
   </>
  )
}

export default App
