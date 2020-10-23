import React from 'react';
import './index.css';


function StudentFrequency() {
    return (

    <div className= "container-fluid">
        <div className="row">
            <div className="col-md-3 col-xs-12 ">
                <input type="text" name="filtro_alunos" id="filtro_alunos" className="form-control" placeholder="Pesquisar"/>
            </div>

            <div className="col-md-6 col-xs-12"></div>

            <div className="col-md-3 col-xs-12">
                <select name="filtro_aluno_curso" id="filtro_aluno_curso" className="custom-select">
                    <option>- Filtrar por curso -</option>
                    <option value="administracao">Administração</option>
                    <option value="contabilidade">Contabilidade</option>
                    <option value="desenvolvimento">Desenvolvimento de Sistemas</option>
                    <option value="medio">Ensino Médio</option>
                    <option value="etim">E.T.I.M</option>
                    <option value="logistica">Logística</option>
                    <option value="redes">Redes de Computadores</option>
                </select>
            </div>
        </div>

        <div className="card-deck mt-4">

            <div className="card bg-light chart-border">

                <div className="card-header text-center bg-custom">
                    <h5 className="mt-2">1º Módulo</h5>
                </div>

                <div className="card-body">
                    <canvas id="admin_chart" width="300" height="150"></canvas>
                </div>
            </div>

            <div className="card bg-light chart-border">

                <div className="card-header text-center bg-custom">
                    <h5 className="mt-2">2º Módulo</h5>
                </div>

                <div className="card-body">
                    <canvas id="admin_chart2" width="300" height="150"></canvas>
                </div>
            </div>

            <div className="card bg-light chart-border">

                <div className="card-header text-center bg-custom">
                    <h5 className="mt-2">3º Módulo</h5>
                </div>

                <div className="card-body">
                    <canvas id="admin_chart3" width="300" height="150"></canvas>
                </div>
            </div>

        </div>
    </div>
    );
}