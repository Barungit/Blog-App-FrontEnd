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

//get the token
export const getToken=()=>{
    if(isLoggedIn()){
        return JSON.parse(localStorage.getItem("data")).token
    }else{
        return null;
    }
}

//check admin
export const checkAdmin=()=>{
    if(isLoggedIn()){
        var x= JSON.parse(localStorage.getItem("data")).user;
        if(x.roles[0].id == 1){
            console.log(x.roles[0].id);
            return true;
        }
        else{
            return false;
        }
        
    } else {
        return undefined;
    }
}