import Link from 'next/link';
import { SectionTitle } from '../SectionTitle';
import { DetalhesItem } from './DedalhesItem';
import { Container } from './styles';

interface IEmpresa {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface IEmpresaProps {
  empresas: IEmpresa[];
}

export function Detalhes({ empresas }: IEmpresaProps) {
  return (
    <Container>
      <SectionTitle title=" Detalhes" description="da Experiencia" />
      <section>
        {empresas.slice(0, 3).map(empresa => (
          <DetalhesItem
            key={empresa.slug}
            title={empresa.title}
            type={empresa.type}
            slug={empresa.slug}
            img={empresa.thumbnail}
          />
        ))}
      </section>
      <button type="button">
        <Link href="/empresas">
          <a>Ver todas as empresas</a>
        </Link>
      </button>
    </Container>
  );
}
