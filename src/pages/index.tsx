import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { Experiencias } from '../components/Experiencias';
import { Header } from '../components/Header';
import { HomeHero } from '../components/HomeHero';
import { Detalhes } from '../components/Detalhes';
import { HomeContainer } from '../styles/homeStyle';
import { Skills } from '../components/Skills';
import { FormContato } from '../components/FormContato';
import { Footer } from '../components/Footer';
import { getPrismicClient } from '../services/prismic';

interface IEmpresa {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface HomeProps {
  empresas: IEmpresa[];
}

export default function Home({ empresas }: HomeProps) {
  return (
    <HomeContainer>
      <Header />
      <main className="container">
        <HomeHero />
        <Experiencias />
        <Detalhes empresas={empresas} />
        <Skills />
        <FormContato />
      </main>
      <Footer />
    </HomeContainer>
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
