import { privateAxios } from "./helper";
import { myAxios } from "./helper";
// send blog to server
export const createPost=(postData)=>{
    console.log(postData);
    return privateAxios.post(`/user/${postData.userId}/category/${postData.categoryId}/blogs`,postData).then(response=>console.log(response));
    
    
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
 export const createComment=(comment,bid)=>{
   return privateAxios.post(`/blog/${bid}/comments`,comment);
 }