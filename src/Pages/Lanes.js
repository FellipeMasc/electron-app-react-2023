import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Lanes = (props) => {
    const navigate = useNavigate()

    const backhome = () => {
        navigate("/")
    }

    const { players, setPlayers } = props
    /* let jogador1, jogador2
    let contador = users.lenght

    const random = () => {
        for (let i = 0; i < contador; i++) {
            //jogador1 =
        }
    } */
    useEffect(() => {
        console.log(props)
    }, [])

    return (
        <div className="App">
            <div>
                {players ? (
                    players.map((element, i) => {
                        return <div key={i}>{element}</div>
                    })
                ) : (
                    <p>fala tu</p>
                )}
            </div>
            <button className="btn" onClick={backhome}>
                Voltar para tela inicial
            </button>
        </div>
    )
}

export default Lanes
