import React from 'react';
import './index.css';


function Services() {
    return (

        <div className="container-fluid">
            <div className="card-deck mt-4">
                <div className="card bg-purple">
                    <a className="nav-link text-white">
                        <div className="card-body text-center">
                            <h3 className="mt-4"><strong><i className="fas fa-id-badge spacing"></i>Carteirinha de estudante</strong></h3>
                            <button className="btn btn-custom-purple-servicos mt-2 zoom"><label className="fas fa-chevron-right spacing"></label>Solicitações</button>
                        </div>
                    </a>
                </div>

                <div className="card bg-purple2">
                    <a className="nav-link text-white">
                        <div className="card-body text-center">
                            <h3 className="mt-4"><strong><i className="fas fa-edit spacing"></i>Declaração de matrícula</strong></h3>
                            <button className="btn btn-custom-purple2-servicos mt-2 zoom"><label className="fas fa-chevron-right spacing"></label>Solicitações</button>
                        </div>
                    </a>
                </div>

                <div className="card bg-orange">
                    <a className="nav-link text-white">
                        <div className="card-body text-center">
                            <h3 className="mt-4"><strong><i className="fas fa-id-card spacing"></i>Solicitação do cartão escolar</strong></h3>
                            <button className="btn btn-custom-orange-servicos mt-2 zoom"><label className="fas fa-chevron-right spacing"></label>Solicitações</button>
                        </div>
                    </a>
                </div>

                <div className="card bg-blue">
                    <a className="nav-link text-white">
                        <div className="card-body text-center">
                            <h3 className="mt-4"><strong><i className="fas fa-book spacing"></i>Aproveitamento de estudos</strong></h3>
                            <button className="btn btn-custom-blue-servicos mt-2 zoom"><label className="fas fa-chevron-right spacing"></label>Solicitações</button>
                        </div>
                    </a>
                </div>
            </div>
        </div>

    );
}