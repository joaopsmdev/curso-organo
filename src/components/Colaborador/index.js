import './Colaborador.css'
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar}) => {
    function favoritar(){
        aoFavoritar(colaborador.id)
    }
    
    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }
    return (<div className="colaborador">
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <AiFillCloseCircle className="deletar" size={30} onClick={() => aoDeletar(colaborador.id)} />

            <img src={colaborador.imagem} alt={colaborador.nome}  />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className='favoritar'>
                {colaborador.favorito 
                ? <AiFillHeart {...propsFavorito} color='red'/> 
                : <AiOutlineHeart {...propsFavorito}/> 
                }
            </div>
        </div>
    </div>)
}

export default Colaborador