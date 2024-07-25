import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Ooops!</h1>
      <p>Lo sentimos, ocurrió un error inesperado.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
};
