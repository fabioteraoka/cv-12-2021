import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { EmpresasItem } from '../../components/EmpresasItem';
import { Header } from '../../components/Header';
import { EmpresasContainer } from '../../styles/empresasStyles';
import { getPrismicClient } from '../../services/prismic';

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

export default function Empresas({ empresas }: IEmpresaProps) {
  return (
    <EmpresasContainer>
      <Header />
      <main className="container">
        {empresas.map(empresa => (
          <EmpresasItem
            key={empresa.slug}
            title={empresa.title}
            type={empresa.type}
            slug={empresa.slug}
            imgUrl={empresa.thumbnail}
          />
        ))}
      </main>
    </EmpresasContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const empresaResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'empresa')],
    { orderings: '[document.first_publication_date desc]' }
  );

  const empresas = empresaResponse.results.map(empresa => ({
    slug: empresa.uid,
    title: empresa.data.title,
    type: empresa.data.type,
    description: empresa.data.description,
    link: empresa.data.link.url,
    thumbnail: empresa.data.thumbnail.url
  }));

  return {
    props: {
      empresas
    },
    revalidate: 86400
  };
};
