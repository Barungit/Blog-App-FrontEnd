import { myAxios } from "./helper";

export const createPost=(postData)=>{
    //console.log(postData)
    return myAxios.post(`/user/${postData.uid}/category/${postData.categoryId}/blogs`,postData).then(response=>response.data);
    
}