import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Button, Card, CardText, CardTitle } from 'reactstrap'
import { deleteUser, getAllUsers } from '../../services/user-service'
import { toast } from 'react-toastify'

function ManageUsers() {
    const [users,setUsers]=useState([])

    useEffect( ()=>{
        getAllUsers()       
        .then((data) => {
            console.log(data);
            setUsers([...data]);
          })
          .catch((error) => {
            console.log(error);
            toast.error("Error in loading users!");
          });
    },[])

    const handleDelete=(uid)=>{
        console.log(uid)
        deleteUser(uid).then(data =>{
            console.log(data);
            toast.success("User Deleted!")
      setUsers(users.filter(u => u.uid !== uid));
        }).catch(error=>{
            toast.error("Error in deleting the user!")
            console.log(error)
    })
    };
  return (
    <div>
        
        {users && (  users.map((user, index) => {
                return (
        
           <Card>
            <CardTitle>
              {user.name}
            </CardTitle>
            <CardText>
              {user.about}
            </CardText>
            <Button color='danger' onClick={() => handleDelete(user.uid)}>
              Delete
            </Button>
          </Card>
        );
        }))}
        
    </div>
  )
}

export default ManageUsers