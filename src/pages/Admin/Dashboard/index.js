import React, { useState, useMemo } from 'react';

import './styles.css';

export default function Dashboard() {
  return(

    <div className="container-fluid">
    
      <div className="row mt-4">

        <div className="col-md-6 col-xs-12">
            <div className="card bg-light chart-border">
                <div className="card-header text-center bg-custom">
                    <h5 className="mt-2">Acessos Mensais</h5>
                </div>

                <div className="card-body">
                    <canvas id="access" width="300" height="150"></canvas>
                </div>
            </div>
        </div>

        <div className="col-md-6 col-xs-12">
            <div className="card bg-light chart-border">
                <div className="card-header text-center bg-custom">
                    <h5 className="mt-2">Acessos Semanais</h5>
                </div>

                <div className="card-body">
                    <canvas id="weekAccess" width="300" height="150"></canvas>
                </div>
            </div>
        </div>

    </div>

    <div className="card-deck mt-4">

        <div className="card bg-purple zoom">
            <a href="/insertArticle" className="nav-link text-white">
                <div className="card-body text-center">
                    <h5>Posts até agora: <span className="badge badge-light">15</span></h5>
                    <hr className="white"/>
                    <h3 className="mt-3"><strong><i className="fas fa-chevron-right"></i> CRIE UM NOVO POST</strong></h3>
                </div>
            </a>
        </div>

        <div className="card bg-green zoom">
            <a href="/newNotification" className="nav-link text-white">
                <div className="card-body text-center">
                    <h5>Criação rápida</h5>
                    <hr className="white"/>
                    <h3 className="mt-3"><strong><i className="fas fa-chevron-right"></i> NOTIFICAÇÃO</strong></h3>
                </div>
            </a>
        </div>

        <div className="card bg-blue zoom">
            <a href="/insertUser" className="nav-link text-white">
                <div className="card-body text-center">
                    <h5>Registro rápido</h5>
                    <hr className="white"/>
                    <h3 className="mt-3"><strong><i className="fas fa-chevron-right"></i> USUÁRIO</strong></h3>
                </div>
            </a>
        </div>

    </div>

  </div>
);
}