import React from "react";
import { Link } from "react-router-dom";
import StudentIMage from "../Images/student4.jpg";
import AdminIMage from "../Images/admin2.jpg";

const Home = () => {
  return (
    <div className="HomePage">
      <div
        className="col-md-6 m-auto"
        style={{ display: "flex", backgroundColor: "white", padding: "5%" }}
      >
        <div className="card" style={{ marginLeft: "15%" }}>
          <img
            src={AdminIMage}
            alt="StudentIMage"
            style={{ height: "250px", width: "250px" }}
          />
          <br />
          <Link className="link_class" to="/adminLogin">
            {" "}
            <h3 style={{ fontFamily: "Oswald" }}>Signin as Admin</h3>
          </Link>
        </div>
        <div className="card" style={{ marginLeft: "10%" }}>
          <img
            src={StudentIMage}
            alt="StudentIMage"
            style={{ height: "250px", width: "250px" }}
          />
          <br />
          <Link className="link_class" to="/login">
            {" "}
            <h3 style={{ fontFamily: "Oswald" }}>Signin as Student</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;