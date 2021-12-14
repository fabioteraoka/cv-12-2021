import { Container } from './styles';

interface BannerEmpresaProps {
  title: string;
  type: string;
  imgUrl: string;
}

export function BannerEmpresa({ title, type, imgUrl }: BannerEmpresaProps) {
  return (
    <Container imgUrl={imgUrl}>
      <div className="overlay" />
      <section>
        <h1>{title}</h1>
        <h2>{type}</h2>
      </section>
    </Container>
  );
}
