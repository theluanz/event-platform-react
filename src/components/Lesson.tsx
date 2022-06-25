import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Link, useParams } from 'react-router-dom';

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export const Lesson = (props: LessonProps) => {
  const { slug } = useParams<{ slug: string }>();
  const isActiveLesson = slug === props.slug;

  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(props.availableAt, "EEEE '•' d 'de' MMMM '•' k'h'mm", {
    locale: ptBR,
  });

  return (
    <Link to={`/evento/aula/${props.slug}`} className="group">
      <span className="text-gray-300">{availableDateFormatted}</span>

      <div
        className={`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 transition-colors ${
          isActiveLesson ? 'bg-green-500' : ''
        } `}>
        {isActiveLesson && (
          <div className="border-solid border-r-green-500 border-r-8 border-y-transparent border-y-8 border-l-0 absolute -ml-6"></div>
        )}
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span
              className={`text-sm  font-medium flex items-center gap-2 ${
                isActiveLesson ? 'text-white' : 'text-blue-500'
              }`}>
              <CheckCircle size={20} />
              Conteúdo Liberado
            </span>
          ) : (
            <span className="text-sm  font-medium flex items-center gap-2 text-orange-500">
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span
            className={`text-xs rounded px-2 py-[0.125rem] text-white border border-green-300 font-bold
          ${isActiveLesson ? 'border-white' : 'border-green-300'}
          `}>
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>

        <strong
          className={` font-bold mt-5 block ${isActiveLesson ? 'text-white' : 'text-gray-200'}`}>
          {props.title}
        </strong>
      </div>
    </Link>
  );
};
