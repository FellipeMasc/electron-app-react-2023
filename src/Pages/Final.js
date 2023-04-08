import { useNavigate } from "react-router-dom"

const Final = () => {
    const navigate = useNavigate()

    const backhome = () => {
        navigate("/")
    }

    return (
        <div className="App">
            <div>Final</div>
            <button className="btn" onClick={backhome}>
                Voltar para tela inicial
            </button>
        </div>
    )
}

export default Final
