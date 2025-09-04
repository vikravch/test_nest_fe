import './App.css'
import {HomePage} from "./pages/HomePage.tsx";
import {LoginPage} from "./pages/LoginPage.tsx";
import {useState} from "react";

function App() {
    const [token, setToken] = useState(localStorage.getItem('token') || '');

    const handleLoginSuccess = () => {
        setToken(localStorage.getItem('token') || '')
    }

    if (token) {
        return <HomePage />
    } else {
        return <LoginPage onLoginSuccess={handleLoginSuccess} />
    }
}

export default App
