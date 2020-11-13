import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { postUser } from "../services";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/esm/Col";
import registerImage from '../images/phoenix.png'
export const Register = ({ newUser, setNewUser }) => {
  const history = useHistory();
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const handleNewUser = (e) => {
    const { name, value } = e.target;
    
    setNewUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value.toLowerCase(),
      };
    });
  };

  function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2500));
  }

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const loading = () => setLoading(true);

  const redirection = (e) => {
    e.preventDefault();
    if (!isLoading) {
      loading();
    }
    if (newUser.username !== "" && newUser.password !== "") {
      postUser(newUser)
        .then((res) => {
          

          if (errorMsg) {
            setErrorMsg(null);
          }
          localStorage.setItem("LoggedUser", JSON.stringify(newUser));
          setNewUser({ username: "", password: "" });
          history.push("/user");
        })
        .catch((err) => {
          console.log("AXIOS ERROR: ", err);
          setErrorMsg(`Username ${newUser.username} is already taken`);
          setNewUser({ username: "", password: "" });
        });
    }

    // history.push('/user')
  };
  let classes = errorMsg ? "placeholderRed" : "";
  return (<div className='register-section d-flex' style={{backgroundImage: `url(${registerImage})`}}>
    <div className="dark-overlay d-flex justify-content-center">
    <Col lg={4} className=" align-self-center">
      <Card bg="primary" text="center" className="card-form">
        <Card.Body>
          <h3>
            <strong>Register</strong>
          </h3>
          <Form onSubmit={redirection}>
            <Form.Group className="p-2 ">
              <Form.Control
                type="text"
                size="lg"
                placeholder={errorMsg ? errorMsg : "Enter Username"}
                className={classes}
                onChange={handleNewUser}
                value={newUser.username}
                name="username"
              />
            </Form.Group>

            <Form.Group className="p-2">
              <Form.Control
                name="password"
                type="password"
                size="lg"
                placeholder="Password"
                onChange={handleNewUser}
                value={newUser.password}
              />
            </Form.Group>
            <Form.Group className="p-2">
              <Button
                variant="outline-light"
                block
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Loading…" : "Submit"}
              </Button>
            </Form.Group>
            <Link className="linkovi" to="/">
              <Form.Text className="p-2 ">
                Already Registered? Click Here
              </Form.Text>
            </Link>
          </Form>
        </Card.Body>
      </Card>
    </Col>
    </div>
    </div>
   
  );
};
