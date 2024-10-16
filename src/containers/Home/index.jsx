import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleNavigateStato = () => { navigate('/stato-base'); };

  const handleNavigateChiamate = () => { navigate('/chiamate-di-rete'); };

  return (
    <div className="container">
      <button onClick={handleNavigateStato} type="button">Esercizio stato di base</button>

      <button onClick={handleNavigateChiamate} type="button">Esercizio con chiamate di rete</button>
    </div>
  );
}

export default Home;
