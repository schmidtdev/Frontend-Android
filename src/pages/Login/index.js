import React, { useState } from 'react';

import './styles.css';
import logo from '../../assets/image/logo_robo.png'
import api from '../../services/api';

export default function Login({ history }) {
  const [institution, setInstitution] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    const response = await api.post('/login', {username, password})

    const { user_id } = response.data

    localStorage.setItem('user', user_id)

    history.push('/dashboard')
  }

  return (
    <>
      <div className="row mt-4">
        <div className="col-md-6 col-xs-12 text-center">
          <img src={logo} alt="Logo" width="450" />

          <form onSubmit={handleSubmit}>
            <div className="row mt-4">
              <div className="col-md-3 offset-9">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-list-alt"></i></span>
                  </div>
                  <input type="number" name="instNumber" className="form-control" placeholder="Código ETEC" 
                  value="241" onChange={e => setInstitution(e.target.value)} />
                </div>
              </div>
            </div>

            <div className="row mt-2">
              <div className="col-md-12 col-xs-12">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                  </div>
                  <input type="text" name="username" className="form-control" placeholder="Usuário" 
                  value={username} onChange={e => setUsername(e.target.value)} />
                </div>
              </div>
            </div>

            <div className="row mt-2">
              <div className="col-md-12 col-xs-12">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-lock"></i></span>
                  </div>
                  <input type="password" name="password" className="form-control" placeholder="Senha" 
                  value={password} onChange={e => setPassword(e.target.value)} />
                </div>
              </div>
            </div>

            <hr className="border-light"/>

            <button type="submit" className="btn btn-primary btn-block">Entrar</button>
          </form>
        </div>

        <div className="col-md-6 col-xs-12">
          <div className="row">
            <div className="col-12">
              <h1 className="page-title text-white">Sistema Acadêmico Modular Definitivo</h1>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <article className="descricao-sistema text-white">
                  <p className="article-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim id est laborum.</p>
                  <p className="article-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim id est laborum.</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}