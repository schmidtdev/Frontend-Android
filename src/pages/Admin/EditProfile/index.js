import React from 'react';
import './index.css';

export default function EditProfile(){
    return(

        <div className="container-fluid">

            <div className="card">
                <form action="" method="POST" autocomplete="off">

                    <div className="card-body">

                    <legend>Dados de Contato</legend>

                    <div className="form-row mt-3 align-items-center">
                        <div className="col-md-6 col-xs-12">
                        <label className="fas fa-mobile spacing"></label><label>Celular&nbsp;</label>
                        <input type="number" name="celular" id="celular" className="form-control"/>
                        </div>

                        <div className="col-md-6 col-xs-12">
                        <label className="fas fa-phone spacing"></label><label>Telefone&nbsp;</label>
                        <input type="number" name="telefone" id="telefone" className="form-control"/>
                        </div>
                    </div>

                    <legend className="mt-4">Dados de Endereço</legend>

                    <div className="form-row mt-3 align-items-center">
                        <div className="col-md-6 col-xs-12">
                        <label className="fas fa-map spacing"></label><label>Logradouro&nbsp;</label>
                        <input type="text" name="logradouro" id="logradouro" className="form-control"/>
                        </div>

                        <div className="col-md-6 col-xs-12">
                        <label className="fas fa-list-ol spacing"></label><label>Número&nbsp;</label>
                        <input type="number" name="numero" id="numero" className="form-control"/>
                        </div>
                    </div>

                    <div className="form-row mt-3 align-items-center">
                        <div className="col-md-6 col-xs-12">
                        <label className="fas fa-car spacing"></label><label>Bairro&nbsp;</label>
                        <input type="text" name="bairro" id="bairro" className="form-control"/>
                        </div>

                        <div className="col-md-6 col-xs-12">
                        <label className="fas fa-location-arrow spacing"></label><label>Cidade&nbsp;</label>
                        <input type="text" name="cidade" id="cidade" className="form-control"/>
                        </div>
                    </div>

                    <div className="form-row mt-3 align-items-center">
                        <div className="col-md-6 col-xs-12">
                        <label className="fas fa-compass spacing"></label><label>Estado&nbsp;</label>
                        <input type="text" name="estado" id="estado" className="form-control"/>
                        </div>

                        <div className="col-md-6 col-xs-12">
                        <label className="fas fa-envelope spacing"></label><label>CEP&nbsp;</label>
                        <input type="number" name="cep" id="cep" className="form-control"/>
                        </div>
                    </div>

                    <legend className="mt-4">Notificações</legend>

                    <div className="form-row mt-3">
                        <div className="custom-control custom-switch">
                            <input type="checkbox" className="custom-control-input" id="customSwitch1"/>
                            <label className="custom-control-label" for="customSwitch1">Notifições de eventos, vagas de estágio, notícias e comunicados.</label>
                        </div>
                    </div>

                    <div className="form-row mt-3">
                        <div className="custom-control custom-switch">
                            <input type="checkbox" className="custom-control-input" id="customSwitch2"/>
                            <label className="custom-control-label" for="customSwitch2">Notifições de datas de provas, seminários, atividades e novos materiais de aula.</label>
                        </div>
                    </div>
                    </div>

                    <div className="card-footer text-center">
                        <button type="submit" className="btn btn-post zoom">Salvar</button>
                        <button type="reset" className="btn btn-clear zoom">Cancelar</button>
                    </div>

                </form>
            </div>

        </div>

    );
}