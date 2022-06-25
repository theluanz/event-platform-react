import { MonitorPlay } from 'phosphor-react';

export const Error = () => {
  return (
    <div className="flex flex-col items-center min-h-screen justify-center mx-auto bg-blur">
      <h1 className="text-4xl font-bold text-center w-2/3">
        Error 404 - Essa página ou aula não existe
      </h1>
      <img src="/src/assets/code-mockup.png" alt="" className="w-2/3" />
      <a
        href="/evento"
        className="p-4 text-sm bg-green-500 hover:bg-green-700 flex items-center font-bold uppercase gap-2 justify-center transition-colors w-2/3 mt-10">
        <MonitorPlay size={24} />
        Voltar a página de aulas
      </a>{' '}
    </div>
  );
};
