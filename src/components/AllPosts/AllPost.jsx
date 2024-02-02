import {useState, useEffect} from "react";
import Services from "../../appwrite/services";
import {Link} from "react-router-dom";
import './AllPost.css';
import parse from "html-react-parser";

function AllPost(){

    let serviceObj=new Services();

    let [posts,setPosts]=useState(null);
    let [loading,setLoading]=useState(true);

    useEffect(()=>{
        serviceObj.getAllBlogs()
        .then((res)=>{
            console.log(res);
            setPosts(res.documents);
            setLoading(false);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[]);

    return loading?<div>Please wait we are loading all posts</div>:
    <div className="container">
        {posts.map((post)=>{
            let date=(new Date(post.$createdAt)).toLocaleDateString();
            return <Link to={`/post/${post.$id}`}
            ><div className="flex items-center w-96">
                <img
                    src={(serviceObj.getImagePreview(post.featuredImage)).href}
                    className="w-24 h-24 border rounded-md"
                />
               <div className="flex flex-col items-start ml-2">
               <h2
                className="text-xl font-bold text-slate-500 postTitle"
                >
                {(post.title).substring(0,30)}
                </h2>
                <p className="font-thin text-slate-300">{date}</p>
                <p className="font-thin text-slate-300">{post.status}</p>
               </div>
               

                {/* <p className="text-start">{(parse(post.content))}</p> */}
            
            </div>
            </Link>
        })}
    </div>

}

export default AllPost;