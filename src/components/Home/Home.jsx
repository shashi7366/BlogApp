import {useSelector} from "react-redux";
import './Home.css';
import AllPost from "../AllPosts/AllPost";
import Animation from "./Animation";

function Home(){
const userData=useSelector((state)=>{
    return state.auth.userData;
})

console.log(userData);
    return <div >
        <div className="grid grid-cols-2 gap-2 w-full bg-[#fec016] h-96">
            <div className="h-112 flex flex-col items-center justify-center p-4">
            <h1 className="text-6xl font-bold my-4">Stay Curious.</h1>
            <p className="text-lg my-2">
            Discover stories, thinking, and expertise from writers on any topic.
            </p>
            <button className="border rounded-3xl px-8 py-2 bg-black text-white my-2">Get Started</button>
            </div>

            <div className="flex flex-col justify-center items-center h-96">
            <Animation/>
            </div>
            </div>
        <AllPost/>
    </div>
}

export default Home;