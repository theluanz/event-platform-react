import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from 'phosphor-react';
import { DefaultUi, Player, Youtube } from '@vime/react';
import '@vime/core/themes/default.css';
import { Loading } from './Loading';
import { useNavigate } from 'react-router-dom';
import { isPast } from 'date-fns';
import { useGetLessonBySlugQuery } from '../graphql/generated';

interface VideoProps {
  lessonSlug: string | null;
}

export const Video = (props: VideoProps) => {
  const navigate = useNavigate();
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: props.lessonSlug,
    },
  });

  if (!data || !data.lesson) {
    return <Loading />;
  }

  const isLessonAvailable = isPast(new Date(data.lesson.availableAt));
  if (data.lesson === null || !isLessonAvailable) {
    navigate('/404');
    return null;
  }
  return (
    <section className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video z-0">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <section className="p-8 max-w-[1100px] mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
          <header className="flex-1">
            <h1 className="text-2xl font-bold">{data.lesson.title}</h1>
            <p className="mt-4 text-gray-200 leading-relaxed">{data.lesson.description}</p>
            {data.lesson.teacher && (
              <div className="flex items-center gap-4 mt-6">
                <img
                  className="h-16 w-16 rounded-full border-2 border-blue-500"
                  src={data.lesson.teacher.avatarURL}
                  alt=""
                />
                <div>
                  <strong className="font-bold text-2xl block">{data.lesson.teacher.name}</strong>
                  <span className="text-gray-200 text-sm block">{data.lesson.teacher.bio}</span>
                </div>
              </div>
            )}
          </header>

          <div className="flex flex-col gap-4 w-full md:w-auto">
            <a
              href="https://discord.com"
              className="p-4 text-sm bg-green-500 hover:bg-green-700 flex items-center font-bold uppercase gap-2 justify-center transition-colors">
              <DiscordLogo size={24} />
              Comunidade do Discord
            </a>
            <a
              href="/desafio"
              className="p-4 text-sm border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-gray-900 flex items-center font-bold uppercase gap-2 justify-center transition-colors">
              <Lightning size={24} />
              Acessar Desafio
            </a>
          </div>
        </div>

        <div className="gap-8 mt-20 grid md:grid-cols-2">
          <a
            href=""
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
            <div className="bg-green-700 h-full flex items-center p-6">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed ">
              <strong className="font-bold text-2xl">Material complementar</strong>
              <p className="text-sm text-gray-200 mt-2">
                Acesse o material complementar para acelerar o seu desenvolvimento
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>

          <a
            href=""
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
            <div className="bg-green-700 h-full flex items-center p-6">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed ">
              <strong className="font-bold text-2xl">Material complementar</strong>
              <p className="text-sm text-gray-200 mt-2">
                Acesse o material complementar para acelerar o seu desenvolvimento
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </section>
    </section>
  );
};
