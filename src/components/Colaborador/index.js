import './Colaborador.css'
import { AiFillCloseCircle } from "react-icons/ai"

const Colaborador = ({ colaborador, corDeFundo, aoDeletar}) => {
    return (<div className="colaborador">
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <AiFillCloseCircle className="deletar" size={30} onClick={aoDeletar} />

            <img src={colaborador.imagem} alt={colaborador.nome}  />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
        </div>
    </div>)
}

export default Colaborador