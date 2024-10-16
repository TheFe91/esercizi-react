import { useNavigate } from 'react-router-dom';
import ImgSchema from '@Resources/schema.png';

function ChiamateDiRete() {
  const navigate = useNavigate();

  const handleGoToHome = () => { navigate('/', { replace: true }); };

  return (
    <div className="container" style={{ textAlign: 'center' }}>
      Scopo di questo esercizio &egrave; gestire delle chiamate di rete.
      <br />

      <span>
        Usa l&apos;API
        {' '}

        <a href="https://jsonplaceholder.typicode.com/guide">JSONPlaceholder</a>

        per effettuare una get dei primi 6 post e stampali a video.
      </span>

      <span>
        Ogni post stampato dovrà essere cliccabile. Al click su un post, il suo body dovrà essere riportato in un campo
        {' '}

        <code>&lt;input /&gt;</code>

        {' '}
        .
      </span>

      A questo punto modifica il body come vuoi tu e al click su un bottone invia un update della risorsa.

      <br />
      Fai riferimento all&apos;immagine sottostante per capire meglio

      <img alt="schema" src={ImgSchema} />

      <br />

      <button onClick={handleGoToHome} type="button">HOME PAGE</button>
    </div>
  );
}

export default ChiamateDiRete;
