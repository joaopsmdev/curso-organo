import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario';
import Rodape from './components/Rodape';
import Time from './components/Time';
import { v4 as uuidv4 } from 'uuid';

function App() {

  
  const [times, setTimes] = useState([
  {
      id: uuidv4(),
      nome: 'Programação',   
      cor: '#D9F7E9'
  },
  {
      id: uuidv4(),
      nome: 'Caminhoneiros',
      cor: '#E8F8FF'
  },
  {
      id: uuidv4(),
      nome: 'Data Sciense',
      cor: '#F0F8E2'
  },
  {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#FDE7E8'
  },
  {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#FAE95F5'
  },
  {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFF5D9'
  },
  {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FFEEDF'
  },
]);

const inicial = [
  {
    id: uuidv4(),
    nome: 'Gustavo Passos',
    cargo: 'Desenvolvedor PHP: Profissionais homossexuais do Python',
    imagem: 'https://media.discordapp.net/attachments/817556626017222679/1054564842830311475/image.png',
    team: times[0].nome,
    favorito: false,
  },
  {
    id: uuidv4(),
    nome: 'João Branco',
    cargo: 'Engenheiro de Elden Ring',
    imagem: 'https://media.discordapp.net/attachments/406485097924001793/1055234346954522655/WhatsApp_Image_2022-12-19_at_00.30.23.jpg?width=377&height=671',
    team: times[0].nome,
    favorito: false,
  },
  {
    id: uuidv4(),
    nome: 'Nariga',
    cargo: 'Go Lingua',
    imagem: 'https://media.discordapp.net/attachments/664153632001884170/1055237088653606942/image.png',
    team: times[0].nome,
    favorito: false,
  },
  {
    id: uuidv4(),
    nome: 'Mario Jr',
    cargo: 'Caminhoneiro',
    imagem: 'https://media.discordapp.net/attachments/406485097924001793/1055235304824516708/WhatsApp_Image_2022-11-14_at_21.08.20.jpg?width=377&height=670',
    team: times[1].nome,
    favorito: false,
  },
  {
    id: uuidv4(),
    nome: 'Eu e Gustavo',
    cargo: 'Cientistas',
    imagem: 'https://media.discordapp.net/attachments/406485097924001793/1055235948880875630/WhatsApp_Image_2022-12-21_at_18.30.46.jpg?width=377&height=670',
    team: times[2].nome,
    favorito: false,
  },
]

  const [colaboradores, setColaboradores] = useState(inicial)

  const aoNovoColaborador = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }
  
  function mudaCorDoTime(cor, id) {
    setTimes(times.map(time =>{
      if(time.id === id){
        time.cor = cor;
    }
    return time
   }))
  }
  
  function onDelete(id){
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }
  
  function cadastrarTime(novoTime){
    setTimes([...times, { ...novoTime, id: uuidv4()}])
  }
  
  function resolverFavorito(id){
    setColaboradores(colaboradores.map(colaborador =>{
      if (colaborador.id === id) colaborador.favorito =!colaborador.favorito;
      return colaborador
    }))
  }
  return (
    <div className="App">
      <Banner />
      <Formulario 
          cadastrarTime={cadastrarTime}
          times={times.map(time => time.nome)}
          aoColaboradorCadastrado={colaborador => aoNovoColaborador(colaborador)} 
      />
      <section className="times">
        {times.map((time, indice) => 
        <Time 
          aoFavoritar={resolverFavorito}
          mudarCor={mudaCorDoTime}
          key={indice} 
          time={time} 
          colaboradores={colaboradores.filter(colaborador => colaborador.team === time.nome)} 
          aoDeletar={onDelete} />
        )}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
