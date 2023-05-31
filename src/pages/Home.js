import { useEffect } from "react"
import Base from "../Components/Base"
import NewFeed from "../Components/NewFeed"
import { Container } from "reactstrap"

const Home=()=> {

    return (
        <Base>
        <div >
            
            <Container className="mt-3">
            <NewFeed />
            </Container>
            
            
        </div>
        </Base>
    )
}
export default Home