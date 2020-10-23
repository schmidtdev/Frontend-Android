import React from 'react';
import './index.css';


export default function Articles() {
    return (

        <div className="container-fluid">
            <div className="card-deck mt-2">
                <div className="card bg-orange">
                    <a href="#" className="nav-link text-white">
                    <div className="card-body text-center">
                        <h3><i className="fas fa-newspaper spacing"></i>Notícia</h3>
                        <hr className="white"/>
                        <h5 className="card-text"><i className="fas fa-bullhorn fa-4x"></i></h5>
                        <button className="btn btn-custom-orange-mural mt-2 zoom" data-toggle="modal" data-target="#modal"><label className="fas fa-chevron-right spacing"></label>Visualizar</button>
                    </div>
                    </a>
                </div>

                <div className="card bg-orange2">
                    <a href="#" className="nav-link text-white">
                    <div className="card-body text-center">
                        <h3><i className="fas fa-newspaper spacing"></i>Notícia</h3>
                        <hr className="white"/>
                        <h5 className="card-text"><i className="fas fa-bullhorn fa-4x"></i></h5>
                        <button className="btn btn-custom-orange2-mural mt-2 zoom" data-toggle="modal" data-target="#modal2"><label className="fas fa-chevron-right spacing"></label>Visualizar</button>
                    </div>
                    </a>
                </div>

                <div className="card bg-purple">
                    <a href="#" className="nav-link text-white">
                    <div className="card-body text-center">
                        <h3><i className="fas fa-newspaper spacing"></i>Notícia</h3>
                        <hr className="white"/>
                        <h5 className="card-text"><i className="fas fa-bullhorn fa-4x"></i></h5>
                        <button className="btn btn-custom-purple-mural mt-2 zoom" data-toggle="modal" data-target="#modal"><label className="fas fa-chevron-right spacing"></label>Visualizar</button>
                    </div>
                    </a>
                </div>
            </div>

            <div className="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="ModalLabel"><i className="fas fa-newspaper spacing"></i>Notícia</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <h5 className="justified">A escola ficará fechada nos dias 20, 21 e 23 de Setembro para dedetização. 
                            O prédio ficará fechado completamente nesse período, assim nenhum aluno será contaminado com os gases tóxicos contidos no local.</h5>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-dismiss="modal">Fechar</button>
                    </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="modal2" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="ModalLabel"><i className="fas fa-newspaper spacing"></i>Notícia</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h5 className="justified">O evento escola da família foi um sucesso, gostaríamos de agradecer todos os alunos que nos ajudaram nesse dia, e puderam comparecer.
                                Estamos bem animados com o feedback, e por conta disso em breve novos eventos desse tipo serão realizados.</h5>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-dismiss="modal">Fechar</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}