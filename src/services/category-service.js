import {myAxios} from "./helper";
import { privateAxios } from "./helper";

export const loadAllCategories=()=>{
    return myAxios.get('/categories/').then(response=>{return response.data});
 }

export const updateCategory=(category,categoryId)=>{
    console.log(category)
    console.log(categoryId)
    return privateAxios.put(`/categories/${categoryId}`,category).then(response=>{return response.data});
}

export const deleteCategory = (categoryId) =>{
    return privateAxios.delete(`/categories/${categoryId}`).then((res) => res.data);
}

export const addCategory = (category) => {
    return privateAxios.post(`/categories/`,category).then(response=>{return response.data});
}