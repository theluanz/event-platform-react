import { Header } from '../components/Header';
import { Player } from '../components/Player';
import { Sidebar } from '../components/Sidebar';

const Evento = () => {
  return (
    <div className="flex flex-col ">
      <Header />
      <main className="flex flex-1 min-h-screen">
        <Player />
        <Sidebar />
      </main>
    </div>
  );
};

export default Evento;
