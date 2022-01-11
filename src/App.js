import { ThemeContext, themes } from "./store/theme-context"
import './reset.css'
import { Container } from "./Container"
import { useState } from "react"
import { Route, Routes, Switch } from "react-router-dom"
import { MainPage } from "./mainPage/MainPage"
import { Finance } from "./Finance/Finance"

export default function App() {
    const [theme, setTheme] = useState("desert");

    return (
        <ThemeContext.Provider value={themes[theme]}>
            <Container>
                <Routes>
                    <Route exact path="/" element={<MainPage values={{theme, setTheme}} />} />
                    <Route exact path="/finance" element={<Finance values={{theme, setTheme}} />} />
                </Routes>
            </Container>
        </ThemeContext.Provider>
    )
} 