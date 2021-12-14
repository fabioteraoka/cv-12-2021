import { SectionTitle } from '../SectionTitle';
import { ExperienciasItem } from './experienciasItem';
import { Container } from './styles';

export function Experiencias() {
  return (
    <Container>
      <SectionTitle title=" Experiências" description="Profissionais" />
      <section>
        <ExperienciasItem
          year="Ago/21 - atual"
          title="PCA - Airworthiness"
          description="Analista de Planejamento na Itapemirim"
        />
        <ExperienciasItem
          year="Jun/18 - Mar/20"
          title="Connect Linhas Aereas"
          description="Gerente de engenharia"
        />
        <ExperienciasItem
          year="Fev/12 - Fev/18"
          title="Lider Signature S.A."
          description="Engenheiro de Planejamento"
        />
        <ExperienciasItem
          year="Ago/10 - Set/11"
          title="Latam Linhas Aereas"
          description="Gerente Geral de Engenharia"
        />
        <ExperienciasItem
          year="Nov/99 - Ago/10"
          title="Pantanal Linhas Aereas"
          description="Gerente Geral de Engenharia"
        />
      </section>
    </Container>
  );
}
