import { useEffect } from "react"
import Base from "../Components/Base"
import NewFeed from "../Components/NewFeed"
import { Col, Container, Row } from "reactstrap"
import CategorySideMenu from "../Components/CategorySideMenu"

const Home=()=> {

    return (
        <Base>
        <div >
            
                <Row>
                    <Col md={2} className="border">
                        <CategorySideMenu />
                    </Col>

                    <Col md={10} className="border">
                        <NewFeed />
                    </Col>
                </Row>
            
            
            
        </div>
        </Base>
    )
}
export default Home