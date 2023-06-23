import React, { useState } from "react";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import { Button, FormGroup, Label, Input } from "reactstrap";
import "../../Assets/css/style.css";

const SignUp = () => {

  //STATES:form states
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    pass: "",
    confirmpass: "",
    num: "",
  });
  const {username,email,pass,confirmpass,num} = formData;

  //STATES:states for form validation
  const [state, setState] = useState({
    errorname: false,
    erroremail: false,
    errorpass: false,
    errorcpass: false,
    errornum: false,
    aterror: false,
  });
  const { errorname, erroremail, errorpass, errorcpass, errornum, aterror } =
  state;

  //STATES:For Routing and setting data to local storage
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();
  
  //Functions

  //For handeling the submit button

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "") {
      setState({errorname:true});
    } 
    else if (formData.email === "") {
      setState({erroremail:true})
    } 
    else if (!(formData.email).includes("@")) {
       setState({aterror:true})
     } 
    else if (formData.pass === "") {
      setState({errorpass:true})
    } 
    else if (formData.confirmpass === "") {
      setState({errorpass:true})
    } 
    else if (formData.confirmpass !== formData.pass) {
      setState({errorcpass:true})
    } 
    else if (formData.num === "" || (formData.num).length !== 10) {
      setState({errornum:true})
    } 
    else {
      formDirect();
    }
  };

  const formDirect = () => {
    console.log(formData);
    localStorage.setItem("history", JSON.stringify(formData));
    formRefresh();
    setRedirect(true);
   
  };
  
  if (redirect) {
    navigate("/Login") 
  }

  const formRefresh = () => {
    setFormData({username:" "});
    setFormData({email:" "});
    setFormData({pass:" "});
    setFormData({num:" "});
    alert("Sign-In Successful");   
  };

  return (
    <div className="Signup">
      

      <div
        className="Signup-Top"
        style={{
          margin: "auto",
          width: "50%",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div className="heading_container" style={{ marginTop: "5%" }}>
          <h2>Signup</h2>
        </div>
        <div className="Signup-form">
          <form>
            <div>
              <FormGroup>
                <Label>Username</Label>
                <Input
                  type="text"
                  name="username"
                  placeholder="Enter Username"
                  value={formData.username}
                  onChange={(e) => {
                    setFormData({...formData, username: e.target.value});
                  }}
                />
                <div className="error" style={{ color: "red" }}>
                  {errorname ? <label> Please Enter Name </label> : ""}
                </div>
              </FormGroup>
            </div>

            <div>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={formData.email}
                  Required
                  onChange={(e) => {
                    setFormData({...formData, email: e.target.value});
                  }}
                />
                <div className="error" style={{ color: "red" }}>
                  {erroremail ? <label> Please Enter Email </label> : ""}
                  {aterror ? <label> Must include '@' </label> : ""}
                </div>
              </FormGroup>
            </div>

            <div>
              <FormGroup>
                <Label>Password</Label>
                <Input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  value={formData.pass}
                  onChange={(e) => {
                    setFormData({...formData, pass: e.target.value});
                  }}
                />
                <div className="error" style={{ color: "red" }}>
                  {errorpass ? <label> Please Enter Password </label> : ""}
                </div>
              </FormGroup>
            </div>

            <div>
              <FormGroup>
                <Label>Confirm Password</Label>
                <Input
                  type="password"
                  name="password"
                  placeholder="Confirm Password"
                  value={formData.confirmpass}
                  onChange={(e) => {
                    setFormData({...formData, confirmpass:e.target.value});
                  }}
                />
                <div className="error" style={{ color: "red" }}>
                  {errorcpass ? <label> Password Missmatches </label> : ""}
                </div>
              </FormGroup>
            </div>

            <div>
              <FormGroup>
                <Label>Number</Label>
                <Input
                  type="number"
                  name="number"
                  placeholder="Enter Number"
                  value={formData.num}
                  onChange={(e) => {
                    setFormData({...formData, num: e.target.value});
                  }}
                />
                <div className="error" style={{ color: "red" }}>
                  {errornum ? (
                    <label> Please Enter valid 10 digit number. </label>
                  ) : (
                    ""
                  )}
                </div>
              </FormGroup>{" "}
            </div>

            <div className="submit">
              <Button color="success" onClick={handleSubmit}>
                {" "}
                Submit{" "}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
