//islogedin => if user details or token in the local storage then he is logged in

export const isLoggedIn=()=>{
    let data = localStorage.getItem("data");
    if(data == null) {
        return false;
    } else {
        return true;
    }
}

//dologin => data set to local storage
export const doLogin=(data,next)=>{
    localStorage.setItem("data",JSON.stringify(data));
    next()
}
//dologout => remove from local storage
export const doLogout = (next) => {
    localStorage.removeItem("data");
    next()
}

//getCurrent user deatails
export const getCurrentUserDetail = () =>{
    if(isLoggedIn()){
        return JSON.parse(localStorage.getItem("data")).user;
    } else {
        return undefined;
    }
}