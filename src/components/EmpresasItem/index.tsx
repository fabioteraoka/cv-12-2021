import Link from 'next/link';
import { Container } from './styles';

interface EmpresasProps {
  title: string;
  type: string;
  imgUrl: string;
  slug: string;
}

export function EmpresasItem({ title, type, imgUrl, slug }: EmpresasProps) {
  return (
    <Container imgUrl={imgUrl}>
      <Link href={`/empresas/${slug}`}>
        <a>
          <div className="overlay">
            <section>
              <h1>{title}</h1>
              <h2>{type}</h2>
            </section>
          </div>
        </a>
      </Link>
    </Container>
  );
}
