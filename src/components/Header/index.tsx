import { NavLink } from './NavLink';
import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <ul>
        <NavLink title="Home" path="/" />
        <NavLink title="Experiencias" path="/empresas" includes />
      </ul>
    </Container>
  );
}
