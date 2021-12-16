import { SectionTitle } from '../SectionTitle';
import { Form } from './Form';
import { Container } from './styles';

export function FormContato() {
  return (
    <Container data-aos="fade-up">
      <SectionTitle
        title=" Contato"
        description={
          <>
            Preencha o formulario abaixo que
            <br />
            irei retornar em breve.
          </>
        }
      />
      <Form />
    </Container>
  );
}
