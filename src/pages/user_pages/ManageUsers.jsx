import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Card, CardText, CardTitle } from "reactstrap";
import { deleteUser, getAllUsers } from "../../services/user-service";
import { toast } from "react-toastify";
import { BASE_URL } from "../../services/helper";

function ManageUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers()
      .then((data) => {
        console.log(data);
        setUsers([...data]);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error in loading users!");
      });
  }, []);

  const handleDelete = (uid) => {
    console.log(uid);
    deleteUser(uid)
      .then((data) => {
        console.log(data);
        toast.success("User Deleted!");
        setUsers(users.filter((u) => u.uid !== uid));
      })
      .catch((error) => {
        toast.error("Error in deleting the user!");
        console.log(error);
      });
  };
  return (
    <div className="d-flex justify-content-start flex-wrap">
      {users &&
        users.map((user, index) => {
          return (
          
            <Card className="m-3 " style={{border: '1px solid black', width:"400px"}}>
              <div className="m-4">
              <center>
                <img
                  src={BASE_URL + "/users/pfp/" + user.propic}
                  height={100}
                  width={100}
                />
              </center>
              
              <CardTitle><b>Name: {user.name}</b></CardTitle>
              <CardText><b>Email: {user.email}</b></CardText>
              <CardText><b>About: {user.about}</b></CardText>
              
              <center><Button color="danger"  style={{width:"100px"}} onClick={() => handleDelete(user.uid)}>
                Delete
              </Button></center>
              </div>
            </Card>
          );
        })}
    </div>
  );
}

export default ManageUsers;
