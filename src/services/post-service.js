import { privateAxios } from "./helper";
import { myAxios } from "./helper";
// send blog to server
export const createPost=(postData)=>{
    console.log(postData);
    return privateAxios.post(`/user/${postData.userId}/category/${postData.categoryId}/blogs`,postData).then(response=>{return response.data});
    //{return response.data}
    //console.log(response)
    
};

//get all post
 export const loadAllPost=(pageNumber,pageSize)=>{

    return myAxios.get(`/blogs?pageNumber=${pageNumber}&pageSize=${pageSize}`).then(response=>response.data);
 };

 //get blog by bid
 export const loadPost=(bid)=>{

    return myAxios.get(`/blogs/${bid}`).then(response=>response.data);
 };

 //add comment
 export const createComment=(comment,bid,uid)=>{
   return privateAxios.post(`/blog/${bid}/comments/${uid}`,comment).then(response=>response.data);;
 }

 //upload post image
 export const uploadPostImage=(bid, image)=>{
   let formData=new FormData();
   formData.append("image", image);

   return privateAxios.post(`/blogs/image/upload/${bid}`,formData,{
      headers:{
         'Content-Type':'multipart/form-data'
      }
   }).then((response)=>response.data);
 };

 //get cateroy ise post
 export const loadPostbyCategory=(categoryId,pageNumber,pageSize)=>{
   return privateAxios.get(`/category/${categoryId}/blogs?pageNumber=${pageNumber}&pageSize=${pageSize}`).then(res=>res.data)
 }

 //get blogs by uid
 export const loadPostbyUser=(uid,pageNumber,pageSize)=>{
   return privateAxios.get(`/user/${uid}/blogs?pageNumber=${pageNumber}&pageSize=${pageSize}`).then(res=>res.data)
 }

 //delete a blog
 export function deletePostService(bid) {
  return privateAxios.delete(`/blogs/${bid}`).then((res) => res.data);
 }

 //update the blog
 export function updatePostService(post,bid) {
  return privateAxios.put(`/blogs/${bid}`,post).then((resp => resp.data));
 }