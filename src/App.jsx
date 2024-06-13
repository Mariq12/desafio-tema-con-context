import { ThemeProvider } from "./context/ThemeContext"
import Home from "./components/home/Home"

function App() {

  return (
    <>
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </>
  )
}

export default App
