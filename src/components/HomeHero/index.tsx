/* eslint-dis'ab'le react/jsx-no-comment-textnodes */
import Image from 'next/image';
// import Picture from '../../../public/foto.png';
import { Container, TextContainer, InfosContainer, CodeItem } from './styles';

export function HomeHero() {
  return (
    <Container data-aos="fade-up">
      <Image
        className="image-container"
        src="/foto.png"
        alt="Landscape picture"
        width="300rem"
        height="400rem"
      />
      {/* <img src={picture} alt="Minha foto" /> */}
      <div>
        <TextContainer>
          <h1>Fábio Teraoka</h1>
          <h2>Engenheiro de Aeronavegabilidade</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem data-aos="zoom-in">
            {/* <span className="comment">//Apresentação</span> */}
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Nome: <span className="blue">Fábio Teraoka</span>
            </div>
            <div>
              Brasil - <span className="blue">São Paulo - SP</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem data-aos="zoom-in">
            {/* <span className="comment">//Formação Academica</span> */}
            <span className="purple">Formação Academica</span> {'\u007B'}
            <div>
              Engenheiro Mecânico <span className="blue">UNISANTA</span>
            </div>
            <div>
              Tecnico Mecânico <span className="blue">ETFSP</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}
