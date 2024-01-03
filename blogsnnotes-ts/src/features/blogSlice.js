import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { isElementAccessExpression } from "typescript";

const initialState={
    publicBlogs:{
        loading:true,
        blogs:[],
        error:null
    },
    privateBlogs:{
        loading:true,
        blogs:[],
        error:null
    },
    currentBlog:{
        loading:true,
        blog:{},
        error:null,
        edit:false
    }
}

const host= "http://localhost:5000";

export const getPublicBlogs= createAsyncThunk('blogs/publicBlogs', async()=>{
    console.log("Running getPublicBlogs")
    try{
        let url = `${host}/api/blogs/publicBlogs`;
        let response = await fetch(url);
      // {
      //   "success": true,
      //   "blogs": [
      //     {
      //       "_id": "650836c555a27f1489e1219d",
      //       "title": "daadtahaf",
      //       "tag": [],
      //       "description": "\nLorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ipsam totam cumque laborum repellendus atque quaerat cum est eveniet laboriosam, corporis eaque quibusdam nulla repellat consequatur? Ipsum, at excepturi! Eius!",
      //       "public": true,
      //       "author": "Anonymous",
      //       "date": "2023-09-18T11:38:45.687Z",
      //       "__v": 0
      //     },
      //   ]
      // }
        let blogs = await response.json();
        return blogs;
    }catch(error){
        console.log("Error in getPublicBlogs");
        return error;
    }
})

export const addBlog = createAsyncThunk('blogs/addBlog', async(blog)=>{
    try{
        let url = `${host}/api/blogs/newBlog`
        const response = await fetch(url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
              "Content-Type": "application/json",
              "auth-token": localStorage.getItem("token"),
            },
            body: JSON.stringify({
              title: blog.title,
              content:blog.content,
              tags: blog.tags,
              public: blog.public
            }),
          });
        console.log("response in addBlog", response);
        return {success:true,response};
    }catch(error){
        console.log("error in addBlog",error);
        return {success:false,error};        
    }
});

export const currentBlog = createAsyncThunk(
    "blogSlice/currentBlog",
    async (id) => {
      console.log("Running getReadingBlogs")
      let url = `${host}/api/blogs/blog/${id}`;
      let response = await fetch(url, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        }
      });
      let res = await response.json();
      return res;
    }
  );

export const blogSlice = createSlice({
    name:'Blogs',
    initialState,
    reducers:{

    },
    extraReducers(builder){
        builder
            .addCase(getPublicBlogs.pending,(state,action)=>{
                console.log("getPublicBlogs.pending")
                state.publicBlogs.loading=true;                
            })
            .addCase(getPublicBlogs.rejected,(state,action)=>{
                console.log("getPublicBlogs.rejected")
                state.publicBlogs.loading=false;
                state.publicBlogs.error=action.error;
            })
            .addCase(getPublicBlogs.fulfilled,(state,action)=>{
                if(action.payload.success){
                    state.publicBlogs.blogs=action.payload.blogs;
                    console.log("getPublicBlogs.fulfilled success")
                }else{
                    console.log("action",action)
                    state.publicBlogs.error=action.error;
                    console.log("getPublicBlogs.fulfilled failed", state.publicBlogs.error)
                }
            })
            .addCase(addBlog.fulfilled,(state,action)=>{
                console.log("addBlog.fulfilled",action.payload);
            })
            .addCase(addBlog.rejected,(state,action)=>{
                console.log("addBlog.rejected");
            })
            .addCase(addBlog.pending,(state,action)=>{
                console.log("addBlog.pending");
            })
            .addCase(currentBlog.fulfilled,(state,action)=>{
                state.currentBlog.loading=false;
                if(action.payload.success){
                    console.log("currentBlog.fulfilled success",action.payload)
                    state.currentBlog.blog= action.payload.blog;
                    state.currentBlog.edit= action.payload.edit;
                }else{
                    console.log("currentBlog.fulfilled failed",action.payload)
                    state.currentBlog.error=action.payload.error;
                }
            })
            .addCase(currentBlog.pending, (state,action)=>{
                state.currentBlog.loading=true;
            })
            .addCase(currentBlog.rejected,(state,action)=>{
                loading= false;
                state.currentBlog.error= action.payload.error;
            })
    }
})

export const {getMyBlogs} = blogSlice.actions
export default blogSlice.reducer