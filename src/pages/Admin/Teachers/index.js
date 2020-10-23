import React from 'react';
import './index.css';


export default function Teachers() {
    return (

    <div className="container-fluid">

        <table className="table table-sm table-light table-striped table-hover">
            <legend className="text-white">Desenvolvimento de Sistemas - 3º Modúlo</legend>
            <thead className="bg-custom">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nome do Professor</th>
                    <th scope="col">Matéria que leciona</th>
                    <th scope="col">Formação</th>
                    <th scope="col">Período</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Marcos Costa</td>
                    <td>Banco de Dados III</td>
                    <td>Ciência da Computação</td>
                    <td>Noturno</td>
                </tr>

                <tr>
                    <th scope="row">2</th>
                    <td>Aline Francisca</td>
                    <td>Programação de Aplicativos Mobile II, DTCC</td>
                    <td>Ciência da Computação</td>
                    <td>Noturno</td>
                </tr>
            </tbody>
        </table>
    </div>

    );
}