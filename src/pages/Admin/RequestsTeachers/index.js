import React from 'react';
import './index.css';


function TeacherRequest() {
    return (

    <div className="container-fluid">
        <table className="table table-sm table-light table-striped table-hover">
            <thead className="bg-custom">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nome do professor</th>
                    <th scope="col">Data de requerimento</th>
                    <th scope="col">Data de entrega</th>
                    <th scope="col">Tipo de solicitação</th>
                    <th scope="col">RA</th>
                    <th scope="col">Descrição</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <th scope="col">1</th>
                    <td>Emerson Silva</td>
                    <td>21/10/2019</td>
                    <td>22/10/2019</td>
                    <td>Laboratório</td>
                    <td>45789</td>
                    <td>Desejo o Laboratório 3</td>
                    <td>Andamento...</td>
                </tr>
            </tbody>
        </table>
    </div>

    );
}