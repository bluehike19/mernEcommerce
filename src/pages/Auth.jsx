import React from "react";

const Auth = () => {
  const waveStyles = {
    position: "relative",
    width: "19.45em",
    height: "25.75em",
    background: "",
  };

  const waveImageStyle = {
    position: "absolute",
    bottom: "-70px",
    left: "0",
    width: "350%",
    height: "100%",
    zIndex: "-1",
    background: 'url("./src/assets/images/background-wave.png") repeat-x',
    animation: "wave 5s infinite linear",
  };
  return (
    <div style={waveStyles}>
      <div style={waveImageStyle}></div>
      <h1>login</h1>
    </div>
  );
};

export default Auth;
