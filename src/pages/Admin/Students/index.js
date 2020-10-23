import React from 'react';
import './index.css';


export default function Student() {
    return (

        <div className="container-fluid">

            <table className="table table-sm table-light table-striped table-hover">
                <legend className="text-white">Desenvolvimento de Sistemas - 3º Modúlo</legend>
                <thead className="bg-custom">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome do aluno</th>
                        <th scope="col">RM</th>
                        <th scope="col">Período</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Paulo Henrique Pires Cordeiro</td>
                        <td>18597</td>
                        <td>Noturno</td>
                    </tr>

                    <tr>
                        <th scope="row">2</th>
                        <td>Lucas Conceição da Luz</td>
                        <td>17157</td>
                        <td>Noturno</td>
                    </tr>

                    <tr>
                        <th scope="row">3</th>
                        <td>João Schmidt de Carvalho</td>
                        <td>16190</td>
                        <td>Noturno</td>
                    </tr>
                </tbody>
            </table>
        </div>

    );
}