import { Header } from '../components/Header';
import { Video } from '../components/Video';
import { Sidebar } from '../components/Sidebar';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from '../components/Footer';
import { Loading } from '../components/Loading';
import { useGetFirstLessonSlugQuery } from '../graphql/generated';

interface GetFirstLessonSlug {
  lessons: {
    slug: string;
  }[];
}

export const Event = () => {
  let { slug } = useParams<{ slug: string }>();

  const { data } = useGetFirstLessonSlugQuery();

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
      <Header mobileMenu={<Sidebar />} />
      <main className="flex flex-1 min-h-screen">
        {slug ? <Video lessonSlug={slug} /> : <Loading />}
        <Sidebar classesCSS="hidden md:block" />
      </main>
      <Footer />
    </div>
  );
};
