import React from 'react';
import './index.css';


export default function ServiceRequest() {
    return (

    <div className="container-fluid">
        <table className="table table-sm table-light table-striped table-hover">
            <thead className="bg-custom">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Requerimento</th>
                    <th scope="col">Data de requerimento</th>
                    <th scope="col">Data de conclusão</th>
                    <th scope="col">Status</th>
                    <th scope="col">Responsável pelo requerimento</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <th scope="col">1</th>
                    <td>Carteirinha escolar</td>
                    <td>17/10/2019</td>
                    <td>-</td>
                    <td>Andamento...</td>
                    <td>Paulo Henrique Pires Cordeiro - 3º DSN</td>
                </tr>

                <tr>
                    <th scope="col">2</th>
                    <td>Aproveitamento de estudos</td>
                    <td>17/10/2019</td>
                    <td>27/10/2019</td>
                    <td>Realizado</td>
                    <td>Thais Franco Dias - 3º DSN</td>
                </tr>
            </tbody>
        </table>
    </div>

    );
}