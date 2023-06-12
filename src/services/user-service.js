import { myAxios, privateAxios } from "./helper";
//signup
export const signUp=(user)=>{
    return myAxios
    .post("/auth/register/",user)
    .then((response)=> response.data)

}
//login user
export const loginUser=(loginDetail)=>{
    return myAxios.post("/auth/login/",loginDetail).then((response)=>response.data)

}

//get use detail
export const getUserDetails=(uid)=>{
    return myAxios.get(`/users/${uid}`).then(response=>{return response.data});
} 

//update user details
export const updateUserDetails=(user,uid)=>{
    console.log(user)
    console.log(uid)
    return privateAxios.put(`/users/${uid}`,user).then(response=>{return response.data});
}
