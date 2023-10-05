import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Auth = () => {
  const location = useLocation();
  const isSignIn = location.pathname === "/signin";

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div style={waveStyles}>
      <div className="container login">
        <div className=" login-container">
          <div className="">
            <div className="card shadow card-login">
              <div className="card-header  text-white">
                {isSignIn ? "Sign In to your account" : "Sign Up "}
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group input-name">
                    <label htmlFor="">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block submit-btn">
                    {isSignIn ? "Sign In" : "Sign up"}
                  </button>
                </form>
              </div>
              <div className="card-footer text-center">
                {isSignIn
                  ? "Don't have an account?"
                  : "Already have an account?"}
                <Link
                  className="footer-link"
                  to={isSignIn ? "/signup" : "/signin"}>
                  {isSignIn ? "Sign Up Here" : "Sign In Here"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={waveImage}></div>
      <div style={waveImageStyle}></div>
    </div>
  );
};

const waveStyles = {
  position: "relative",
  width: "19.45em",
  height: "24.75em",
  background: "",
};

const waveImage = {
  position: "absolute",
  bottom: "170px",
  transform: "rotate(180deg)",
  zIndex: "-1",
  width: "380%",
  height: "90%",
  background: 'url("./src/assets/images/background-wave.png") repeat-x',
  animation: "wave 5s infinite linear",
};

const waveImageStyle = {
  position: "absolute",
  bottom: "-100px",
  zIndex: "-1",
  top: "260px",
  width: "350%",
  height: "120%",
  background: 'url("./src/assets/images/background-wave.png") repeat-x',
  animation: "wave 5s infinite linear",
};

// const waveStyles = {
//   position: "relative",
//   width: "19.45em",
//   height: "25.75em",
//   background: "",
// };

// const waveImageStyle = {
//   position: "absolute",
//   bottom: "-70px",
//   left: "0",
//   width: "350%",
//   height: "100%",
//   zIndex: "-1",
//   background: 'url("./src/assets/images/background-wave.png") repeat-x',
//   animation: "wave 5s infinite linear",
// };

export default Auth;
