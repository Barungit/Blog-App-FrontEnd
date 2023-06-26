import { useContext } from "react"
import Base from "../Components/Base"
import userContext from "../context/userContext"

const About=()=> {
    return (
        <userContext.Consumer>
            {(object) => (
                <Base>
                <div>
                   
                    <h1>Hi,Welcome {object?.user?.login && object?.user?.data?.user?.name}!</h1>
                    <h1>This is About page!</h1>
                    <marquee>Welcome to the Fun learn</marquee>
                </div>
                </Base>
            )}
        
        </userContext.Consumer>
    )
}
export default About