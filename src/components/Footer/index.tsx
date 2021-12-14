import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineInstagram
} from 'react-icons/ai';
import { Container } from './styles';

export function Footer() {
  function handleRedirect(url: string) {
    window.open(url);
  }

  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Container>
      <div className="container">
        <button type="button" onClick={handleScrollTop}>
          Voltar ao topo
        </button>
        <section>
          <AiOutlineInstagram
            onClick={() => handleRedirect('https://instagram.com/fteraoka')}
          />
          <AiOutlineGithub
            onClick={() => handleRedirect('https://github.com/fabioteraoka')}
          />
          <AiFillLinkedin
            onClick={() => handleRedirect('https://linkedin.com/fabioteraoka')}
          />
        </section>
      </div>
    </Container>
  );
}
