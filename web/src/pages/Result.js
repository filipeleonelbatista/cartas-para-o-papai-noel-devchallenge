import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/pages/result.css';

const Result = (props) => {
  const status = props.location.state;
  if (status) {
    return (
      <div id="page-result" className="success">
        <div className="content-wrapper">
          <main>
            <h1>Ebaaa!</h1>
            <p>Sua cartinha foi para o Papai Noel!<br /> Agora só esperar :-)</p>
            <Link to="/" className="red-button">
              Voltar para o inicio
            </Link>
          </main>
        </div>
      </div>
    );

  }
  else {
    return (
      <div id="page-result" className="error">
        <div className="content-wrapper-error">
          <main>
            <h1>Opa!</h1>
            <p>Não conseguimos entregar sua cartinha para o Papai Noel!<br />
          Tente novamente mais tarde!</p>
            <Link to="/" className="red-button">
              Voltar para o inicio
          </Link>
          </main>
        </div>
      </div>
    );
  }
}

export default Result;