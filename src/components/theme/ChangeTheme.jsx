import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const ChangeThemeButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [hovered, setHovered] = useState(false);

    // Estilos dinámicos basados en el tema y estado del hover
    const buttonStyles = {
        background: theme === "claro" ? "#007bff" : "#6c757d",
        color: "#fff",
        border: "none",
        padding: "10px 20px",
        cursor: "pointer",
        borderRadius: "5px",
        transition: "background 0.3s ease",
        marginTop: "10px",
    };

    const hoverStyles = {
        background: theme === "claro" ? "#0056b3" : "#5a6268",
    };

    return (
        <button
            onClick={toggleTheme}
            style={{ ...buttonStyles, ...(hovered && hoverStyles) }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            Cambiar a tema {theme === "claro" ? "oscuro" : "claro"}
        </button>
    );
};

export default ChangeThemeButton;


