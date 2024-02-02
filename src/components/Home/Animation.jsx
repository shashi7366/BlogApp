import {useEffect, useRef, useState} from "react";
import "./Animation.css";

function Animation(){

   // const [toggle,setToggle]=useState(true);


    const [b1,setB1]=useState(true);
    const [b2,setB2]=useState(false);

    let bs=[1,2,3,4,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,4,4,4,4,1,1,2,2,1,3,2,4,5,2,4,4,6,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]

    useEffect(()=>{

        setInterval(()=>{
            setB1((b)=>{
                return !b;
            });

            setB2((b)=>{
                return !b;
            });
        },2000);

    },[]);

    // return <div className="grid grid-rows-6 grid-cols-12 w-full">
    // <span className="text-2xl font-bold" ref={b1}>B</span>
    // <span className="text-2xl font-bold" ref={b2}>B</span>
    // <span className="text-2xl font-bold" ref={b1}>B</span>
    // <span className="text-2xl font-bold" ref={b2}>B</span>
    // <span className="text-2xl font-bold" ref={b1}>B</span>
    // <span className="text-2xl font-bold" ref={b2}>B</span>
    // <span className="text-2xl font-bold" ref={b1}>B</span>
    // <span className="text-2xl font-bold" ref={b2}>B</span>
    // <span className="text-2xl font-bold" ref={b1}>B</span>
    // <span className="text-2xl font-bold" ref={b2}>B</span>
    // <span className="text-2xl font-bold" ref={b1}>B</span>
    // <span className="text-2xl font-bold" ref={b2}>B</span>
    // <span className="text-2xl font-bold" ref={b1}>B</span>
    // <span className="text-2xl font-bold" ref={b2}>B</span>
    // <span className="text-2xl font-bold" ref={b1}>B</span>
    // <span className="text-2xl font-bold" ref={b2}>B</span>
    // <span className="text-2xl font-bold" ref={b1}>B</span>
    // <span className="text-2xl font-bold" ref={b2}>B</span>
    // <span className="text-2xl font-bold" ref={b1}>B</span>
    // <span className="text-2xl font-bold" ref={b2}>B</span>
    // <span className="text-2xl font-bold" ref={b1}>B</span>
    // <span className="text-2xl font-bold" ref={b2}>B</span>
    // <span className="text-2xl font-bold" ref={b1}>B</span>
    // <span className="text-2xl font-bold" ref={b2}>B</span>
    // <span className="text-2xl font-bold" ref={b1}>B</span>
    // <span className="text-2xl font-bold" ref={b2}>B</span>
    // <span className="text-2xl font-bold" ref={b1}>B</span>
    // <span className="text-2xl font-bold" ref={b2}>B</span>
    // <span className="text-2xl font-bold" ref={b1}>B</span>
    // <span className="text-2xl font-bold" ref={b2}>B</span>
    // <span className="text-2xl font-bold" ref={b1}>B</span>
    // <span className="text-2xl font-bold" ref={b2}>B</span>
    // <span className="text-2xl font-bold" ref={b1}>B</span>
    // <span className="text-2xl font-bold" ref={b2}>B</span>
    // <span className="text-2xl font-bold" ref={b1}>B</span>
    // <span className="text-2xl font-bold" ref={b2}>B</span>
    // <span className="text-2xl font-bold" ref={b1}>B</span>
    // <span className="text-2xl font-bold" ref={b2}>B</span>
    // <span className="text-2xl font-bold" ref={b1}>B</span>
    // <span className="text-2xl font-bold" ref={b2}>B</span>
    // <span className="text-2xl font-bold" ref={b1}>B</span>
    // <span className="text-2xl font-bold" ref={b2}>B</span>
    // <span className="text-2xl font-bold" ref={b1}>B</span>
    // <span className="text-2xl font-bold" ref={b2}>B</span>
    // <span className="text-2xl font-bold" ref={b1}>B</span>
    // <span className="text-2xl font-bold" ref={b2}>B</span>
    // </div>

    return <div className="grid grid-rows-6 grid-cols-12 w-full">
        {bs.map((unit)=>{
        if(unit==1){
            return b1?<span className="text-xl font-bold">M</span>:<span> </span>;
        }else if(unit==2){
            return b2?<span className="text-xl font-bold">M</span>:<span> </span>;
        }else{
            return <span className="text-xl font-bold">M</span>
        }
    })}
    </div>
}

export default Animation;