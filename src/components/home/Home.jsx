import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import ChangeThemeButton from "../theme/ChangeTheme";

const Home = () => {
    const { theme } = useContext(ThemeContext);

    const styles = {
        container: {
            background: theme === "claro" ? "#fff" : "#000",
            color: theme === "claro" ? "#000" : "#fff",
            minHeight: "100vh",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
        },
        article: {
            width: "100%",
            maxWidth: "60%",
            padding: "2rem",
            borderRadius: "10px",
            margin: "0 auto",
            textAlign: "center",
            background: theme === "claro" ? "#ECE7E7" : "#333",
            color: theme === "claro" ? "#0d00ff" : "#fff",
        },
        title: {
            fontSize: "2rem",
            marginBottom: "20px",
        },
    };

    return (
        <div style={styles.container}>
            <article style={styles.article}>
                <h1 style={styles.title}>Tema {theme}</h1>
                <ChangeThemeButton />
            </article>
        </div>
    );
};

export default Home;
