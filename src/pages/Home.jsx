import React from "react";

const Home = () => {
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

  return (
    <>
      <div className="home-image"></div>
      <div style={waveStyles}>
        <h1>hello</h1>
        <img
          className="home-images"
          src="./src/assets/images/homepage-image.png"
          alt="family"
        />
        <div style={waveImage}></div>
        <div style={waveImageStyle}></div>
      </div>
    </>
  );
};

export default Home;
