import { useNavigate } from 'react-router-dom';

function StatoBase() {
  const navigate = useNavigate();

  const handleGoToHome = () => { navigate('/', { replace: true }); };

  return (
    <div className="container" style={{ textAlign: 'center' }}>
      Scopo di questo esercizio &egrave; ricreare il form che abbiamo fatto insieme martedì 15 ottobre.
      <br />
      5 campi testo e 1 bottone. Al click del bottone se tutti i campi sono compilati li stampiamo a schermo nella forma

      <code>NomeCampo: ValoreCampo</code>

      Se anche uno solo dei campi non è compilato mostriamo una scritta di errore che dice &quot;Compilare tutti i
      campi&quot;
      <br />
      Quando abbiamo mostrato i valori, se cambiamo i campi testo nel form i valori sotto non devono cambiare
      finch&egrave; non si ripreme sul bottone.

      <br />

      <br />

      <br />

      <button onClick={handleGoToHome} type="button">HOME PAGE</button>
    </div>
  );
}

export default StatoBase;
