import React, { useState } from "react";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "../../Assets/css/style.css";
import Navbar from '../Navbar'


const Login = () => {
  
const [print,setPrint]=useState("")
  //States: 
  const [formDetail, setFormDetail] = useState({
    email: "",
    pass: "",
  });
  const { email, pass } = formDetail;

  const [state, setState] = useState({ nameerror: false, passerror: false });
  const { nameerror, passerror } = state;

 //Functions:

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validation Code 

    if (formDetail.email === "") {
      setState({ nameerror: true });
    } else if (formDetail.pass === "") {
      setState({ passerror: true });
    } else {
      console.log(formDetail);

      let local = JSON.parse(localStorage.getItem("history"));
      let convert = JSON.stringify(local)
      let navValue = local.username;
      console.log(navValue);
      setPrint(navValue)
      
      

      if (convert.includes(formDetail.email) && convert.includes(formDetail.pass)) { 
        navigate("/Dashboard");
      } else {
        setState({ nameerror: true });
        setState({ passerror: true });
      }
    }


    
  };

  

  return (
    <div>

      <div>
      
        <div className="login-Top"></div>
        <div>
          <Form>
            <div
              className="kuchbhi"
              style={{
                height: "80vh",
                margin: "auto",
                width: "50%",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <div className="heading_container" style={{ marginTop: "5%" }}>
                <h2>Login</h2>
              </div>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="Enter Email"
                  value={formDetail.email}
                  onChange={(e) => {
                    setFormDetail({ ...formDetail, email: e.target.value });
                  }}
                />
                <div className="error" style={{ color: "red" }}>
                  {nameerror ? <label> Please Enter Valid Email </label> : ""}
                </div>
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="Enter Password"
                  value={formDetail.pass}
                  onChange={(e) => {
                    setFormDetail({ ...formDetail, pass: e.target.value });
                  }}
                />

                <div className="error" style={{ color: "red" }}>
                  {passerror ? (
                    <label> Please Enter Valid Password </label>
                  ) : (
                    ""
                  )}
                </div>
              </FormGroup>

              <div className="submit">
                <Button color="success" onClick={handleSubmit}>
                  {" "}
                  Submit{" "}
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
