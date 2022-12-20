import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario';
import Rodape from './components/Rodape';
import Time from './components/Time';

function App() {

  
  const [times, setTimes] = useState([
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
  },
  {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
  },
  {
      nome: 'Data Sciense',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
  },
  {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
  },
  {
      nome: 'UX e Design',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE95F5'
  },
  {
      nome: 'Mobile',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9'
  },
  {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
  }
])

const inicial = [
  {
    nome: 'JULIANA AMOASEI',
    cargo: 'Desenvolvedora de software e instrutora',
    imagem: 'https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2022/10/04/overwatch-2-survey-asking-about-45-skins-not-indicative-of-f_4xhx-uveoy5srah5w.jpg',
    team: times[0].nome
  },
  {
    nome: 'DANIEL ARTINE',
    cargo: 'Engenheiro de Software na Stone Age',
    imagem: 'https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2022/10/04/overwatch-2-survey-asking-about-45-skins-not-indicative-of-f_4xhx-uveoy5srah5w.jpg',
    team: times[0].nome
  },
  {
    nome: 'GUILHERME LIMA',
    cargo: 'Desenvolvedor Python e JavaScript na Alura',
    imagem: 'https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2022/10/04/overwatch-2-survey-asking-about-45-skins-not-indicative-of-f_4xhx-uveoy5srah5w.jpg',
    team: times[0].nome
  },
  {
    nome: 'PAULO SILVEIRA',
    cargo: 'Hipster e CEO da Alura',
    imagem: 'https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2022/10/04/overwatch-2-survey-asking-about-45-skins-not-indicative-of-f_4xhx-uveoy5srah5w.jpg',
    team: times[0].nome
  },
  {
    nome: 'JULIANA AMOASEI',
    cargo: 'Desenvolvedora de software e instrutora',
    imagem: 'https://portalpopline.com.br/wp-content/uploads/2022/04/sojourn-overwatch-thumb.png',
    team: times[1].nome
  },
  {
    nome: 'DANIEL ARTINE',
    cargo: 'Engenheiro de Software na Stone Age',
    imagem: 'https://portalpopline.com.br/wp-content/uploads/2022/04/sojourn-overwatch-thumb.png',
    team: times[1].nome
  },
  {
    nome: 'GUILHERME LIMA',
    cargo: 'Desenvolvedor Python e JavaScript na Alura',
    imagem: 'https://portalpopline.com.br/wp-content/uploads/2022/04/sojourn-overwatch-thumb.png',
    team: times[1].nome
  },
  {
    nome: 'PAULO SILVEIRA',
    cargo: 'Hipster e CEO da Alura',
    imagem: 'https://e7.pngegg.com/pngimages/603/355/png-clipart-characters-of-overwatch-mei-d-va-heroes-of-the-storm-overwatch-miscellaneous-video-game.png',
    team: times[1].nome
  },
  {
    nome: 'JULIANA AMOASEI',
    cargo: 'Desenvolvedora de software e instrutora',
    imagem: 'https://e7.pngegg.com/pngimages/603/355/png-clipart-characters-of-overwatch-mei-d-va-heroes-of-the-storm-overwatch-miscellaneous-video-game.png',
    team: times[2].nome
  },
  {
    nome: 'DANIEL ARTINE',
    cargo: 'Engenheiro de Software na Stone Age',
    imagem: 'https://e7.pngegg.com/pngimages/603/355/png-clipart-characters-of-overwatch-mei-d-va-heroes-of-the-storm-overwatch-miscellaneous-video-game.png',
    team: times[2].nome
  },
  {
    nome: 'GUILHERME LIMA',
    cargo: 'Desenvolvedor Python e JavaScript na Alura',
    imagem: 'https://e7.pngegg.com/pngimages/603/355/png-clipart-characters-of-overwatch-mei-d-va-heroes-of-the-storm-overwatch-miscellaneous-video-game.png',
    team: times[2].nome
  },
  {
    nome: 'PAULO SILVEIRA',
    cargo: 'Hipster e CEO da Alura',
    imagem: 'https://e7.pngegg.com/pngimages/603/355/png-clipart-characters-of-overwatch-mei-d-va-heroes-of-the-storm-overwatch-miscellaneous-video-game.png',
    team: times[2].nome
  },
  {
    nome: 'JULIANA AMOASEI',
    cargo: 'Desenvolvedora de software e instrutora',
    imagem: 'https://e7.pngegg.com/pngimages/603/355/png-clipart-characters-of-overwatch-mei-d-va-heroes-of-the-storm-overwatch-miscellaneous-video-game.png',
    team: times[3].nome
  },
  {
    nome: 'DANIEL ARTINE',
    cargo: 'Engenheiro de Software na Stone Age',
    imagem: 'https://e7.pngegg.com/pngimages/603/355/png-clipart-characters-of-overwatch-mei-d-va-heroes-of-the-storm-overwatch-miscellaneous-video-game.png',
    team: times[3].nome
  },
  {
    nome: 'GUILHERME LIMA',
    cargo: 'Desenvolvedor Python e JavaScript na Alura',
    imagem: 'https://e7.pngegg.com/pngimages/603/355/png-clipart-characters-of-overwatch-mei-d-va-heroes-of-the-storm-overwatch-miscellaneous-video-game.png',
    team: times[3].nome
  },
  {
    nome: 'PAULO SILVEIRA',
    cargo: 'Hipster e CEO da Alura',
    imagem: 'https://e7.pngegg.com/pngimages/603/355/png-clipart-characters-of-overwatch-mei-d-va-heroes-of-the-storm-overwatch-miscellaneous-video-game.png',
    team: times[3].nome
  },
  {
    nome: 'JULIANA AMOASEI',
    cargo: 'Desenvolvedora de software e instrutora',
    imagem: 'https://e7.pngegg.com/pngimages/603/355/png-clipart-characters-of-overwatch-mei-d-va-heroes-of-the-storm-overwatch-miscellaneous-video-game.png',
    team: times[4].nome
  },
  {
    nome: 'DANIEL ARTINE',
    cargo: 'Engenheiro de Software na Stone Age',
    imagem: 'https://e7.pngegg.com/pngimages/603/355/png-clipart-characters-of-overwatch-mei-d-va-heroes-of-the-storm-overwatch-miscellaneous-video-game.png',
    team: times[4].nome
  },
  {
    nome: 'GUILHERME LIMA',
    cargo: 'Desenvolvedor Python e JavaScript na Alura',
    imagem: 'https://e7.pngegg.com/pngimages/603/355/png-clipart-characters-of-overwatch-mei-d-va-heroes-of-the-storm-overwatch-miscellaneous-video-game.png',
    team: times[4].nome
  },
  {
    nome: 'PAULO SILVEIRA',
    cargo: 'Hipster e CEO da Alura',
    imagem: 'https://e7.pngegg.com/pngimages/603/355/png-clipart-characters-of-overwatch-mei-d-va-heroes-of-the-storm-overwatch-miscellaneous-video-game.png',
    team: times[4].nome
  },
  {
    nome: 'JULIANA AMOASEI',
    cargo: 'Desenvolvedora de software e instrutora',
    imagem: 'https://e7.pngegg.com/pngimages/603/355/png-clipart-characters-of-overwatch-mei-d-va-heroes-of-the-storm-overwatch-miscellaneous-video-game.png',
    team: times[5].nome
  },
  {
    nome: 'DANIEL ARTINE',
    cargo: 'Engenheiro de Software na Stone Age',
    imagem: 'https://e7.pngegg.com/pngimages/603/355/png-clipart-characters-of-overwatch-mei-d-va-heroes-of-the-storm-overwatch-miscellaneous-video-game.png',
    team: times[5].nome
  },
  {
    nome: 'GUILHERME LIMA',
    cargo: 'Desenvolvedor Python e JavaScript na Alura',
    imagem: 'https://e7.pngegg.com/pngimages/603/355/png-clipart-characters-of-overwatch-mei-d-va-heroes-of-the-storm-overwatch-miscellaneous-video-game.png',
    team: times[5].nome
  },
  {
    nome: 'PAULO SILVEIRA',
    cargo: 'Hipster e CEO da Alura',
    imagem: 'https://e7.pngegg.com/pngimages/603/355/png-clipart-characters-of-overwatch-mei-d-va-heroes-of-the-storm-overwatch-miscellaneous-video-game.png',
    team: times[5].nome
  },
]

  const [colaboradores, setColaboradores] = useState(inicial)

  const aoNovoColaborador = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }
  function mudaCorDoTime(cor, nome) {
    setTimes(times.map(time =>{
      if(time.nome === nome){
        time.corSecundaria = cor;
    }
    return time
   }))
  }
  function onDelete(evento){
    console.log(evento.target.value)
  }
  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaborador(colaborador)} />

      <section className="times">
        {times.map((time, indice) => 
        <Time 
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
