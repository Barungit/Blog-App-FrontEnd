import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { ListGroup, ListGroupItem, NavLink } from 'reactstrap'
import { loadAllCategories } from '../services/category-service'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

function CategorySideMenu() {

    const [categories, SetCategories]=useState([])

    useEffect(() => {
        loadAllCategories().then(data => {
            console.log(data);
            SetCategories([...data])
        }).catch(error => {
            console.log(error);
            toast.error("Error in loading categories!");
        })
    },[])

  return (
    <div>
        <ListGroup>
            <ListGroupItem action={true} tag={Link} to="/blogs">All Blogs</ListGroupItem>

        {categories && categories.map((cat,index) => {
            return (
                <ListGroupItem key={index} action={true} tag={Link} to={'/categories/'+ cat.categoryId}>
                    {cat.categoryTitle}
                </ListGroupItem>
            )
        })}
        </ListGroup>
    </div>
  )
}

export default CategorySideMenu