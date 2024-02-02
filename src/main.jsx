import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { Provider } from "react-redux";
import store from "./store/store.js"
import { RouterProvider, createBrowserRouter, createRoutesFromElements,Route } from 'react-router-dom';
import {Home,SignUp,Login, PostForm,AllPost} from "./components";
import Post from './components/Post/Post.jsx';

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route index element={<Home/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="post/:post-id" element={<Post/>}/>
      <Route path="addPost" element={<PostForm/>}/>
      {/* <Route path="allPosts" element={<AllPost/>}/> */}
     </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
)
