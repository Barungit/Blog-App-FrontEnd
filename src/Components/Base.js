import { Children } from "react"
import CustomNavBar from "./CustomNavbar";

const Base=({title="Welcome to our Website!",children})=>{

return(
        <div className="container-fluid m-0 p-0">
            <CustomNavBar />

            {children}


           

    
        </div>


)



}
export default Base;
