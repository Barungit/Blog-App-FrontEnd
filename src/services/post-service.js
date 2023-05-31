import { privateAxios } from "./helper";
import { myAxios } from "./helper";
// send blog to server
export const createPost=(postData)=>{
    console.log(postData);
    return privateAxios.post(`/user/${postData.userId}/category/${postData.categoryId}/blogs`,postData).then(response=>console.log(response));
    
    
};

//get all post
 export const loadAllPost=()=>{

    return myAxios.get(`/blogs`).then(response=>response.data);
 };