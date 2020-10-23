import React from 'react';
import './index.css';

function Grid(){
    return(

        <div className="card">
            <form action="" method="POST" autocomplete="off">

                <div className="card-body">

                    <legend>Cadastro da Grade Curricular</legend>

                    <div className="form-row">
                        <div className="col-md-4 col-xs-12">
                            <label className="fas fa-graduation-cap spacing"></label><label>Turma</label>
                            <select name="turma" id="turma" className="custom-select">
                                <option>- Selecione -</option>
                                <option value="">A</option>
                                <option value="">B</option>
                            </select>
                        </div>

                        <div className="col-md-4 col-xs-12">
                            <label className="fas fa-th-large spacing"></label><label>Bloco de aula</label>
                            <select name="bloco" id="bloco" className="custom-select">
                                <option>- Selecione -</option>
                                <option value="">1º</option>
                                <option value="">2º</option>
                            </select>
                        </div>

                        <div className="col-md-4 col-xs-12">
                            <label className="fas fa-calendar spacing"></label><label>Dia da semana</label>
                            <select name="dia" id="dia" className="custom-select">
                                <option>- Selecione -</option>
                                <option value="">Segunda Feira</option>
                                <option value="">Terça Feira</option>
                                <option value="">Quarta Feira</option>
                                <option value="">Quinta Feira</option>
                                <option value="">Sexta Feira</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-row mt-4">
                        <div className="col-md-4 col-xs-12">
                            <label className="fas fa-id-badge spacing"></label><label>Nome do professor</label>
                            <input type="text" name="nome" id="nome" className="form-control"/>
                        </div>

                        <div className="col-md-4 col-xs-12">
                            <label className="fas fa-edit spacing"></label><label>Matéria</label>
                            <input type="text" name="materia" id="materia" className="form-control"/>
                        </div>

                        <div className="col-md-4 col-xs-12">
                            <label className="fas fa-image spacing"></label><label>Foto</label>
                            <input type="file" name="foto" id="foto" className="form-control-file"/>
                        </div>
                    </div>

                </div>

                <div className="card-footer text-center">
                    <div className="row">
                        <div className="col-md-12 col-xs-12">
                            <button type="submit" className="btn btn-post zoom">Cadastrar</button>
                            <button type="reset" className="btn btn-clear zoom">Limpar</button>
                        </div>
                    </div>
                </div>

            </form>
        </div>


    );
}