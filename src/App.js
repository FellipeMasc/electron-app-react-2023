import "./App.css"
import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SharedLayout from "./Pages/SharedLayout.js"
import Home from "./Pages/Home"
import Lanes from "./Pages/Lanes"
import Navbar from "./Components/Navbar"
import Final from "./Pages/Final"

function App() {
    const [name, setName] = useState("")
    const [players, setPlayers] = useState([])

    return (
        <div className="App-header">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SharedLayout />}>
                        <Route index element={<Home name={name} setName={setName} players={players} setPlayers={setPlayers} />} />
                        <Route path="lanes" element={<Lanes players={players} setPlayers={setPlayers} />} />
                        <Route path="final" element={<Final players={players} />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
