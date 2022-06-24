import { Header } from '../components/Header';
import { Video } from '../components/Video';
import { Sidebar } from '../components/Sidebar';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { useEffect } from 'react';

const GET_FIRST_LESSON_SLUG = gql`
  query MyQuery {
    lessons(first: 1, orderBy: availableAt_ASC) {
      slug
    }
  }
`;
interface GetFirstLessonSlug {
  lessons: {
    slug: string;
  }[];
}

export const Event = () => {
  let { slug } = useParams<{ slug: string }>();

  const { data } = useQuery<GetFirstLessonSlug>(GET_FIRST_LESSON_SLUG);

  const navigate = useNavigate();

  useEffect(() => {
    if (!slug) {
      if (data) {
        navigate(`aula/${data?.lessons[0].slug}`);
      }
    }
  }, [data]);

  return (
    <div className="flex flex-col ">
      <Header />
      <main className="flex flex-1 min-h-screen">
        {slug ? <Video lessonSlug={slug} /> : <div className="flex-1" />}
        <Sidebar />
      </main>
    </div>
  );
};
