import React, { useEffect, useState } from "react";
import { Badge, ListGroup, ListGroupItem } from "reactstrap";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { loadAllCategories } from "../services/category-service";
import { loadPostbyCategory } from "../services/post-service";

function CategorySideMenu() {
  const [categories, setCategories] = useState([]);
  const [batchNumbers, setBatchNumbers] = useState({});

  useEffect(() => {
    loadAllCategories()
      .then((data) => {
        console.log(data);
        setCategories([...data]);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error in loading categories!");
      });
  }, []);

  useEffect(() => {
    const fetchBatchNumber = async (categoryId) => {
      try {
        const posts = await loadPostbyCategory(categoryId, 0, 10);
        const batchNumber = posts.totalElements;
        setBatchNumbers((prevBatchNumbers) => ({
          ...prevBatchNumbers,
          [categoryId]: batchNumber,
        }));
      } catch (error) {
        console.log(error);
        toast.error("Error in loading blog count!");
      }
    };

    categories.forEach((cat) => {
      fetchBatchNumber(cat.categoryId);
    });
  }, [categories]);

  return (
    <div>
      <ListGroup>
        <ListGroupItem action tag={Link} to="/blogs">
          All Blogs
        </ListGroupItem>

        {categories.map((cat, index) => (
          <ListGroupItem className="my-2 " key={index} action tag={Link} to={`/categories/${cat.categoryId}`}>
            {cat.categoryTitle} <Badge className="bg-success" style={{float :"right"}}>{batchNumbers[cat.categoryId]}</Badge>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}

export default CategorySideMenu;
