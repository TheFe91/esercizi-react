import { useNavigate } from 'react-router-dom';

// Tutti i componenti in React accettano una prop speciale chiamata "children"
// che è quello che viene passato all'interno del tag del componente.
// Va da sè che quindi tu non puoi mai definire una prop che si chiama "children", perchè è riservata
// In TS sta roba la dichiari con il tipo speciale PropsWithChildren<TuoTipo>
function NavigateButton({ to, replace = false, children }) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(to, { replace });
  };

  return <button onClick={handleNavigate} type="button">{children}</button>;
}

export default NavigateButton;
