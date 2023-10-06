import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Auth = () => {
  const navigate = useNavigate();
  // const history = useHistory();
  const location = useLocation();
  const isSignIn = location.pathname === "/signin";

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [successMessage, setSuccesMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // try {
    //   const response = await axios.post('/api/auth/signup', {
    //     email: formData.email,
    //     password: formData.password,
    //   })
    // }

    if (isSignIn) {
      setSuccesMessage("Welcome back! You are now logged in to your Account");
    } else {
      setSuccesMessage("Welcome! You have created an Account");
    }
    setTimeout(() => {
      navigate("/dashboard");
    }, 5000);
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
        {successMessage && (
          <div className="alert alert-success fixed-bottom mb-4 confirmation">
            {successMessage}
          </div>
        )}
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

export default Auth;
