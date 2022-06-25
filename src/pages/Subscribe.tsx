import { FormEvent, useState } from 'react';
import { Logo } from '../components/Logo';
import { gql, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const CREATE_SUBSCRIBER_MUTATION = gql`
  mutation CreateSubscriber($name: String!, $email: String!) {
    createSubscriber(data: { name: $name, email: $email })
  }
`;

export const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const [createSubscriber, { loading }] = useMutation(CREATE_SUBSCRIBER_MUTATION);

  const navigate = useNavigate();
  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();
    await createSubscriber({ variables: { name: name, email: email } });
    navigate('/evento');
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-center mt-20 mx-auto flex-col md:flex-row md:justify-between">
        <div className="md:max-w-[640px] text-center mx-auto flex items-center flex-col md:items-start md:flex-auto md:text-left px-6 md:px-0">
          <Logo />
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma <strong className="text-blue-500"> aplicação completa</strong>, do zero,
            com <strong className="text-blue-500">React</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e
            com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded w-full mt-10 md:mt-0 md:w-auto ">
          <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>

          <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
            <input
              className="bg-gray-900 px-5 h-14 outline-none focus:border-green-500 focus:border border-gray-500 rounded"
              type="text"
              placeholder="Seu nome completo"
              onChange={({ target }) => setName(target.value)}
              required
            />
            <input
              className="bg-gray-900 px-5 h-14 outline-none focus:border-green-500 focus:border border-gray-500 rounded"
              type="email"
              placeholder="Digite seu e-mail"
              onChange={({ target }) => setEmail(target.value)}
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-green-500 py-4 font-bold text-sm rounded hover:bg-green-700 uppercase transition-colors disabled:opacity-50 disabled:cursor-wait">
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>

      <img
        src="/src/assets/code-mockup.png"
        className=" px-6 md:px-0 mt-2  mb-4 md:mt-10"
        alt="Imagem do Visual Studio Code com uma implementação de um código React"
      />
      <Footer />
    </div>
  );
};
