import React from 'react';
import './index.css';


function StudentMentions() {
    return (

        <div className="container-fluid">
            <div className="row align-items-center dash-title">
                <div className="col-md-12 col-xs-12">
                    <h3 className="text-white">Média das Mensões</h3>
                </div>
            </div>

            <div className="container-fluid text-center">
                <legend className="text-white">Administração</legend>
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