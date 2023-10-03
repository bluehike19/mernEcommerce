import React from "react";
import { useDarkMode } from "../context/DarkModeContext";
import { BsBrightnessHigh, BsMoonStars } from "react-icons/bs";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  console.log("isDarkMode:", isDarkMode);
  return (
    <div className="dark-mode-toggle" onClick={toggleDarkMode}>
      {isDarkMode ? <BsBrightnessHigh className="sun" /> : <BsMoonStars />}
    </div>
  );
}

export default DarkModeToggle;
