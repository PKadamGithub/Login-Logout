import React from "react";
import {
  BrowserRouter as 
  Switch, useNavigate} from "react-router-dom";
import {
  Card,
  Button,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

const Dashboard = () => {
  let data = JSON.parse(localStorage.getItem("history")) || [];
  let name = data.username;
  let email = data.email;
  let num = data.num;

  const navigate = useNavigate();

  const action = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div>
      <div className="heading_container" style={{marginTop:"5%"}} >
                  <h2>Dashboard</h2>
                </div>
    
      <div className="employee_div">
        <div
          className="card"
          style={{
            marginTop: "20px",
            marginBottom: "50px",
            marginRight: "15px",
            paddingleft: "10px",
            float: "right",
          }}
        >
          <Card
            body
            inverse
            outline
            style={{
              width: "8rem",
            }}
          >
            <img
              style={{ tabSize: "small" }}
              alt="Sample"
              src="https://cdn-icons-png.flaticon.com/512/3789/3789820.png"
            />
            <br />
            <Button
              style={{ alignItems: "center" }}
              className="btn"
              onClick={action}
            >
              Signout
            </Button>
            <CardBody></CardBody>
          </Card>
        </div>

        <div className="details">
          <Card
            body
           
            outline
            style={{
              marginTop: "40px",
              width: "35rem",
              alignItems: "center",
              height: "20rem",
              marginLeft: "15px",
             
            }}
          >
            <CardBody>
              <CardTitle className="mb-2 text-muted">
                <h3> Employee Details </h3>
              </CardTitle>
              <br />
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                <h5>
                  {" "}
                  Name: <span style={{ fontWeight: "bold" }}> {name} </span>
                </h5>
                <h5>
                  {" "}
                  Email: <span style={{ fontWeight: "bold" }}>
                    {" "}
                    {email}{" "}
                  </span>{" "}
                </h5>
                <h5>
                  {" "}
                  Number:<span style={{ fontWeight: "bold" }}>
                    {" "}
                    {num}{" "}
                  </span>{" "}
                </h5>
              </CardSubtitle>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
