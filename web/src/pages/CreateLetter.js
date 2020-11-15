import React, { useState, useEffect } from "react";

import { useHistory } from 'react-router-dom';

import '../styles/pages/create-letter.css';
import Sidebar from "../components/Sidebar";


import api from '../services/api';

export default function CreateLetter() {
  const [name, setName] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [letter, setLetter] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");

  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);

  const history = useHistory();


  function buscarEstados() {
    return new Promise(function (resolve, reject) {

      var xhr = new XMLHttpRequest();
      xhr.open('GET', `https://servicodados.ibge.gov.br/api/v1/localidades/estados`);
      xhr.send(null);

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject("Erro");
          }
        }
      }
    });
  }

  function buscarCidade(state) {
    return new Promise(function (resolve, reject) {

      var xhr = new XMLHttpRequest();
      xhr.open('GET', `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/municipios`);
      xhr.send(null);

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject("Erro");
          }
        }
      }
    });
  }

  useEffect(() => {
    buscarEstados().then(function (response) {
      setStateList(response);
    });
  }, [])

  useEffect(() => {
    buscarCidade(state).then(function (response) {
      setCityList(response);
    });
  }, [state])

  async function hamdleOnSubmit(e) {
    e.preventDefault();

    const data = {
      name,
      state,
      city,
      letter,
      email,
      whatsapp,
    };

    try {
      const response = await api.post('letters', data);
      history.push('/result', response.data.success);

    } catch (err) {
      history.push('/result', false);
    }
  }
  return (
    <div id="page-create-letter">
      <Sidebar />
      <main>
        <form onSubmit={hamdleOnSubmit} className="create-letter-form">
          <fieldset>
            <legend>Dados</legend>


            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="input-group">
              <div className="input-block">
                <label htmlFor="state">Estado</label>
                <select
                  defaultValue=""
                  id="state"
                  value={state}
                  onChange={(e) => { setState(e.target.value) }}
                >
                  <option disabled hidden value="">Selecione uma opção</option>
                  {stateList.map((option, index) => {
                    return <option key={index} value={option.sigla}>{option.nome}</option>
                  })}
                </select>
              </div>
              <div className="input-block">
                <label htmlFor="city">Município</label>
                <select
                  defaultValue=""
                  id="city"
                  value={city}
                  onChange={(e) => { setCity(e.target.value) }}
                >
                  <option disabled hidden value="">Selecione uma opção</option>
                  {cityList.map((option, index) => {
                    return <option key={index} value={option.nome}>{option.nome}</option>
                  })}
                </select>
              </div>
            </div>

            <div className="input-block">
              <label htmlFor="letter">Cartinha <span>Máximo de 10.000 caracteres</span></label>
              <textarea id="letter"
                maxLength={10000}
                value={letter}
                onChange={(e) => setLetter(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="whatsapp">Numero do WhatsApp</label>
              <input id="whatsapp"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="email">Email</label>
              <input id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </div>

          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
      </main>
    </div>
  );
}