import Link from 'next/link';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { DetalhesContainer } from './styles';

interface DetalhesProps {
  title: string;
  type: string;
  slug: string;
  img: string;
}

export function DetalhesItem({ title, type, slug, img }: DetalhesProps) {
  return (
    <DetalhesContainer imgUrl={img} data-aos="fade-up">
      <section>
        <div className="overlay" />
        <div className="text">
          <h1># {title}</h1>
          <h2>- {type}</h2>
        </div>
      </section>
      <button type="button">
        <Link href={`/empresas/${slug}`}>
          <a>
            Ver mais <AiOutlineRightCircle />
          </a>
        </Link>
      </button>
    </DetalhesContainer>
  );
}