import React from 'react';
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

const Toggle = () => {
    const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <div className="switch">
          <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
      </div>
    </ThemeContext.Provider>
    );
};

export default Toggle;














// import Form from 'react-bootstrap/Form';

// function Toggle() {
//   return (
//     <Form>
//       <Form.Check 
//         type="switch"
//         id="custom-switch"
//       />
//     </Form>
//   );
// }

// export default Toggle;