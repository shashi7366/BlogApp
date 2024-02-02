import {useForm} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {useSelector} from "react-redux";
import Services from "../../appwrite/services";
import { useCallback,useEffect,useRef } from "react";
import CustomEditor from "../Editor/CustomEditor";


function PostForm({post}){

    const editorRef=useRef();

    const {register,handleSubmit,watch,setValue,control,getValues}=useForm({
        defaultValues:{
            title:(post?.title||""),
            slug:post?.slug||'',
            content:post?.content||'',
            status:post?.status||'active'
        }
    });

    const navigate=useNavigate();

    const userData=useSelector((state)=>{
        return state.auth.userData;
    });

    const submit=async (data)=>{
        //console.log(data);
        let serviceObj=new Services();
        data.content=editorRef.current.getContent();
        console.log(data);
        if(post){
            let file=await data.image[0]?serviceObj.uploadImage(data.image[0]):null;

            if(file){
                await serviceObj.deleteImage(post.featuredImage);
            }

           let res=await serviceObj.updateBlog(post.$id,{...data,featuredImage:file?file.$id:undefined});
           console.log(res);
           if(res){
            navigate("/");
           }
        }else{
           // let file="";
            if(data.image[0]){
                serviceObj.uploadImage(data.image[0])
                .then((res)=>{
                    console.log(res);
                    return serviceObj.addBlog({...data,userId:userData.$id,featuredImage:res?res.$id:undefined});
                })
                .catch((err)=>{
                    console.log("error occured while uploading image",err);
                })
                .then((dbRes)=>{
                    console.log(dbRes);
                })
                .catch((err)=>{
                    console.log("error occured while uploading blog",err);
                })
            }
           
        }
    }

    const slugTransform=useCallback((value)=>{
        if(value && typeof value=='string'){
            const slug=value.toLowerCase().replace(/ /g,'-');
            //setValue('slug',slug);
            return slug;
        }
        return "";
    },[]);

    useEffect(()=>{
        const subscription=watch((value,{name})=>{
            if(name=='title'){
                console.log("watching title change from use effect");
                setValue('slug',slugTransform(value.title),{shouldValidate:true});
            }
        });

        return ()=>{
            subscription.unsubscribe();
        }
    },[watch,slugTransform,setValue]);



    return <div className="w-2/3 flex flex-col justify-center items-center shadow-lg p-2 mt-4 m-auto ">
    <h1>Create Post</h1>
        <form onSubmit={handleSubmit(submit)}
        className="flex flex-col justify-between items-center"
        >
        <input
            placeholder="title"
            {...register("title",{required:true})}
            className="w-full p-2 my-4 border rounded-md"
        />

        <CustomEditor defaultValue={post?getValues("content"):<p>Write your content here</p>} ref={editorRef}/>

        <input
            type="file"
            {...register("image",{required:!post})}
            className="border rounded-md my-4"
        />

        <button 
        type="submit"
        className="border rounded-md bg-[#FF004D] my-4 p-2"
        >{post?"update":"submit"}</button>
        </form>
    </div>
}

export default PostForm;