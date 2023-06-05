import { useContext } from "react"
import Base from "../Components/Base"
import userContext from "../context/userContext"

const About=()=> {
    const user = useContext(userContext)
    return (
        <Base>
        <div>
           
            <p>Hi,Welcome {user.name}!</p>
            <h1>This is About page!</h1>
        </div>
        </Base>
    )
}
export default About