import { privateAxios } from "./helper";
import { getToken } from "../auth";

export const createPost=(postData)=>{
    console.log(postData);
    return privateAxios.post(`/user/${postData.userId}/category/${postData.categoryId}/blogs`,postData).then(response=>console.log(response));
    
    
};

/*export const createPost=(postData)=>{
    console.log(postData)
    const token = getToken()
    console.log(token)
    return privateAxios.post('/user/',{userId : postData.userId},'/category/',{categoryId : postData.categoryId},'/blogs',{
        headers: {
            Authorization: 'Bearer ' + token,
        },
      },postData).then(response=>response.data);
    
}*/

/*
then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
      */