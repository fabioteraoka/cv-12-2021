import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import Head from 'next/head';
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
      <Head>
        <title>Experiências | Fabio Teraoka</title>
        <meta
          name="description"
          content="Sou engenheiro mecânico com experiencia em aeronavegabilidade e estou me tornando um desenvolvedor Front-end Jr"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Sou engenheiro mecânico com experiencia em aeronavegabilidade e estou me tornando um desenvolvedor Front-end Jr"
        />
      </Head>
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

  const empresas = JSON.parse(
    JSON.stringify(
      empresaResponse.results.map(empresa => ({
        slug: empresa.uid,
        title: empresa.data.title,
        type: empresa.data.type,
        description: empresa.data.description,
        link: empresa.data.link.url,
        thumbnail: empresa.data.thumbnail.url
      }))
    )
  );

  return {
    props: {
      empresas
    },
    revalidate: 86400
  };
};
