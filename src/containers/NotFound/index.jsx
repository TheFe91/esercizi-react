import NavigateButton from '@Components/NavigateButton';

function NotFound() {
  return (
    <div className="container">
      QUESTA PAGINA NON ESISTE

      <div>
        {/* Le props booleane vanno esplicitate solo se false, quindi qui replace equivale a replace={true} */}
        <NavigateButton replace to="/">BACK</NavigateButton>
      </div>
    </div>
  );
}

export default NotFound;
