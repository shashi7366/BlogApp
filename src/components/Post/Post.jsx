import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import Services from "../../appwrite/services";
import parse from "html-react-parser";

function Post(){
    let params=useParams();
    const [loading,setLoading]=useState(true);
    const [content,setContent]=useState("");

    let serviceObj=new Services();

    useEffect(()=>{
       

        //console.log(params["post-id"]);
        serviceObj.getBlog(params["post-id"])
        .then((res)=>{
            console.log(res);
            setContent(res);
          // console.log();
            setLoading(false);
        }).catch((err)=>{
            console.log("error occured while fething post",err);
        });
    },[]);

    return loading?<p>please wait while we load your post</p>:
    <div className="flex flex-col items-center w-2/3 m-auto">
        <h1 className="font-bold text-4xl mt-12 mb-12 font-sans font-normal">
            {content.title}
        </h1>

        <img src={(serviceObj.getImagePreview(content.featuredImage)).href} alt="image will appear here"
            className="w-full h-96"
        />

        <div className="text-left w-full mt-4">
            {parse(content.content)}
        </div>
    </div>;
}

export default Post;