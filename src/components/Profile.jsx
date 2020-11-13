import React from "react";
import { useHistory, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import loginImage from '../images/loginImage.jpg'
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/Image";
import { Navigation } from "./Navigation";


export const Profile = () => {

  const id = useParams().username;
  const history = useHistory()
  let loggedUser = JSON.parse(localStorage.getItem("LoggedUser"));
 

  return (
    <>
      {loggedUser.username === id ? (<div>
        <Navigation
        loggedPlayer={JSON.parse(localStorage.getItem("LoggedUser"))}
      />
      
      <div className='profile-wrapp'>
        <Col lg={6} >
                <Card className='wanted-card'>
                  <Card.Body className='wanted-card-content'>
                  <Image
                fluid
                className=" w-50 mb-3 wanted"
                src={loginImage}
                roundedCircle
              />
              <h3>{loggedUser.username}</h3>
              <h5 className='text-muted'>Personal infos</h5>
              <p>Your password is : {loggedUser.password}</p>

              <Button variant="primary" block onClick={()=>history.push("/user")}>Back</Button>
                  </Card.Body>
                </Card>
              </Col>
        
        </div>
        </div>
      ) : (
        <p>User With ID: {id} does not exists</p>
      )}
    </>
  );
};
