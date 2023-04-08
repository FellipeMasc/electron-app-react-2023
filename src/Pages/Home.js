import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Home = (props) => {
    const [finish, setFinish] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setPlayers((prev) => {
            console.log([...prev, name])
            return [...prev, name]
        })
        if (players.length >= 9) navigate("/lanes")
    }

    const handleFinish = () => {
        navigate("/lanes")
    }

    const { name, setName, players, setPlayers } = props
    const navigate = useNavigate()

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <h3>Escolha o jogador</h3>
                    <label htmlFor="name" className="form-label">
                        Nome
                    </label>

                    <input
                        type="text"
                        className="form-input"
                        id="name"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                    />
                </div>
            </form>
            <button className="btn" onClick={handleFinish}>
                Iniciar o sorteio
            </button>
            <button className="btn">Resetar lista</button>
        </div>
    )
}

export default Home
