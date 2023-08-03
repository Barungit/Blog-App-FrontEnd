import { myAxios, privateAxios } from "./helper";
//signup
export const signUp=(user)=>{
    return myAxios.post("/auth/register/",user).then((response)=> response.data)

}

//upload propic
export const uploadProPic=(uid, image)=>{
    let formData=new FormData();
    formData.append("image", image);
 
    return myAxios.post(`/users/pfp/upload/${uid}`,formData,{
       headers:{
          'Content-Type':'multipart/form-data'
       }
    }).then((response)=>response.data);
    
  };
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

//changePassowrd
export const changePassword=(user,uid)=>{
    console.log(user)
    console.log(uid)
    return privateAxios.put(`/users/password/${uid}`,user).then(response=>{return response.data});
}
//forgot and change pass
export const forgotAndChangePassword=(token,pass)=>{
    console.log(token)
    console.log(pass)
    return myAxios.put(`/users/forgotPassword/${token}/${pass}`).then(response=>{return response.data});
}
//sending email to change password to backend
export const sendtoMail=(email)=>{
    console.log(email)
    return myAxios.post(`/auth/fp/${email}`).then(response=>{return response.data});
}
//delete user
export const deleteUser= (uid) => {
    return privateAxios.delete(`/users/${uid}`).then(response=>{return response.data});
}

//get all user
export const getAllUsers=()=>{
    return privateAxios.get(`/users/`).then(response=>{return response.data});
}