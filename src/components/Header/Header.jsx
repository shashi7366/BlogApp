import { useSelector } from "react-redux";
import Logout from "./Logout";
import {NavItem} from "../containers";
import {Link} from "react-router-dom";
import './Header.css';
import {useState,useEffect,useRef} from "react";
import BurgerButton from "./BurgerButton";


function Header() {

    const isLoggedIn=useSelector((state)=>{
        return state.auth.status;
    });

    const [mobileView,setMobileView]=useState(false);

    const navItems=[
        {
            name:'Home',
            link:'/',
            isActive:true
        },
        {
            name:'sign up',
            link:'/sign-up',
            isActive:!isLoggedIn
        },
        {
            name:'login',
            link:'/login',
            isActive:!isLoggedIn
        },
        // {
        //     name:'all posts',
        //     link:'/allPosts',
        //     isActive:isLoggedIn
        // },
        {
            name:'Add Post',
            link:'/addPost',
            isActive:isLoggedIn
        }
    ]

    const headerRef=useRef();

    useEffect(()=>{
        const handleResize=()=>{
           // console.log(window.innerWidth);
            if(window.innerWidth<993){
                setMobileView(true);
            }else{
                setMobileView(false);
            }

           
        }

        const scrollHandler=()=>{
           // console.log(window.scrollY);
            if(window.scrollY>20){
                headerRef.current.classList.add("changeBg");
            }else{
                headerRef.current.classList.remove("changeBg");
            }
        }
        window.addEventListener("resize",handleResize);
        window.addEventListener("scroll",scrollHandler);
          return ()=>{
            window.removeEventListener("resize",handleResize);
            window.removeEventListener("scroll",scrollHandler);
          }  
    },[]);

    return <div>
        <div>

            <div ref={headerRef} className="flex px-2  w-full fixed top-0 left-0 h-20 items-center border-b-2 border-black z-20 opacity-100 mb-10 custom">

                <div className="w-1/2 flex justify-start items-center pl-16">
                <div className='text-2xl border rounded-full bg-white p-2'><span className='text-red-600'>B</span><span className='text-blue-500'>l</span><span className='text-green-500'>o</span><span className='text-yellow-300'>g</span></div>
                </div>

                <div className="w-1/2 flex justify-end items-center pr-8">
                    

                    {!mobileView?
                    <div className="w-1/2 flex justify-end items-center pr-8">
                    {navItems.map((item)=>{
                        return  (item.isActive)?(<NavItem key={item.name}><Link to={item.link}>{item.name}</Link></NavItem>):(null);
                    })}
                    
                    {isLoggedIn && <Logout/>}
                    </div>:
                    <BurgerButton navItems={navItems}/>
                    }

                    

                   

                </div>
            </div>


            {/* For not fixed part */}
            <div>

            </div>

        </div>
    </div>
}

export default Header;