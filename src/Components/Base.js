import { Children } from "react"
import CustomNavBar2 from "./CustomNavbar2";

const Base=({title="Welcome to our Website!",children})=>{

return(
        <div className="container-fluid m-0 p-0">
            <CustomNavBar2 />

            {children}


           

    
        </div>


)



}
export default Base;
