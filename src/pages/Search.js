import React from 'react'
import Base from '../Components/Base'
import { Col, Row } from 'reactstrap'
import CategorySideMenu from '../Components/CategorySideMenu'
import SearchBlogs from '../Components/SearchBlogs'
import { useParams } from 'react-router-dom'

function Search() {
    const {keywords}=useParams();
  return (
    <Base>
        <div >
            
                <Row>
                    <Col md={2} className="border">
                        <CategorySideMenu />
                    </Col>

                    <Col md={10} className="border">
                        
                        <SearchBlogs searchkey={keywords} />
                    </Col>
                </Row>
            
            
            
        </div>
        </Base>
  )
}

export default Search