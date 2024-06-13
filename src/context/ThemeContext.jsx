import { createContext, useState } from "react";
import PropTypes from "prop-types";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("claro");

    const toggleTheme = () => {
        setTheme((previousTheme) => (previousTheme === "claro" ? "oscuro" : "claro"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { ThemeContext, ThemeProvider };

