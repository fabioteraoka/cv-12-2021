import { GetStaticPaths, GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { BannerEmpresa } from '../../../components/BannerEmpresa';
import { Header } from '../../../components/Header';
import { getPrismicClient } from '../../../services/prismic';
import { EmpresaContainer } from '../../../styles/EmpresaStyles';
import { LoadingScreen } from '../../../components/LoadingScreen';

interface IEmpresa {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface EmpresaProps {
  empresa: IEmpresa;
}

export default function Empresa({ empresa }: EmpresaProps) {
  const route = useRouter();

  if (route.isFallback) {
    return <LoadingScreen />;
  }
  return (
    <EmpresaContainer>
      <Head>
        <title>{empresa.title}</title>
        <meta name="description" content={empresa.description} />
        <meta property="og:image" content={empresa.thumbnail} />
        <meta property="og:image:secure_url" content={empresa.thumbnail} />
        <meta name="twitter:image" content={empresa.thumbnail} />
        <meta name="twitter:image:src" content={empresa.thumbnail} />
        <meta property="og:description" content={empresa.description} />
      </Head>
      <Header />
      <BannerEmpresa
        title={empresa.title}
        type={empresa.type}
        imgUrl={empresa.thumbnail}
      />
      <main>
        <p>{empresa.description}</p>
        <button type="button">
          <a href={empresa.link}>Ver site da empresa</a>
        </button>
      </main>
    </EmpresaContainer>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const empresas = await prismic.query([
    Prismic.Predicates.at('document.type', 'empresa')
  ]);

  const paths = empresas.results.map(empresa => ({
    params: {
      slug: empresa.uid
    }
  }));

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const prismic = getPrismicClient();
  const { slug } = context.params;

  const response = await prismic.getByUID('empresa', String(slug), {});

  const empresa = {
    slug: response.uid,
    title: response.data.title,
    type: response.data.type,
    description: response.data.description,
    link: response.data.link.url,
    thumbnail: response.data.thumbnail.url
  };

  return {
    props: {
      empresa
    },
    revalidate: 86400
  };
};
