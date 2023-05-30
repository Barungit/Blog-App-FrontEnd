import axios from "axios";
import { getToken } from "../auth";
export const BASE_URL='http://localhost:8090/api/v1';
export const myAxios=axios.create({
    baseURL:BASE_URL
});

export const privateAxios=axios.create({
    baseURL:BASE_URL
});

/*PrivateAxios.interceptors.request.use(config=> {
    const token = getToken();
    //const token = localStorage.getItem('data.token');
    console.log(token);
    config.headers.Authorization =  token ? `Bearer ${token}` : '';
    return config;
  });*/

privateAxios.interceptors.request.use((config)=>{
    const token = getToken();
    console.log(token)
    if(token){
        
        // return config.headers : {'Bearer' + token};
        config.headers.Authorization=`Bearer ${token}`;
        console.log(config.headers.Authorization);
    } return config;
},error=>Promise.reject(error));