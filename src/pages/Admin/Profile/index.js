import React from 'react';
import './index.css';

function Profile(){
    return(

        <div className="container-fluid">
            <div className="profile">
                <legend className="text-center text-white"><strong>DADOS PESSOAIS</strong></legend>
                <figure className="circle">
                    <img src="../img/funcionarios.png" alt=""/>
                </figure>

                <div className="text-center justify">
                    <h5 className="text-white">KÁTIA STRIITZEL</h5>
                    <h5 className="text-white">Data de Nascimento: 05/07/1986</h5>
                    <h5 className="text-white">RA: 49049</h5>
                    <hr className="bg"/>
                </div>

                <legend className="text-center text-white"><strong>DADOS DE FORMAÇÃO</strong></legend>
                <label className="fas fa-university fa-5x icon-profile"></label>
                <div className="text-center justify">
                    <h5 className="text-white mt-3">Curso de formação: Sistemas de Informação</h5>
                    <h5 className="text-white">Cargo: Coordenadora Pedagogica</h5>
                    <h5 className="text-white">Turno: Vespertino e Noturno</h5>
                    <hr className="bg"/>
                </div>

                <legend className="text-center text-white"><strong>DADOS DE ENDEREÇO</strong></legend>
                <label className="fas fa-map fa-5x icon-profile"></label>
                <div className="text-center justify">
                    <h5 className="text-white mt-3">Logradouro: Rua Américo Vazone - Nº 75</h5>
                    <h5 className="text-white">Bairro: Jardim Tereza Maria</h5>
                    <h5 className="text-white">Cidade: Itapecerica da Serra - SP</h5>
                    <h5 className="text-white">CEP: 06850-971</h5>
                    <a href="/student/editarPerfil"><button type="submit" className="btn btn-post zoom">Editar</button></a>
                    <hr className="bg"/>
                </div>

                <legend className="text-center text-white"><strong>DADOS DE CONTATO</strong></legend>
                <label className="fas fa-phone fa-5x icon-profile"></label>
                <div className="text-center justify">
                    <h5 className="text-white mt-3">Celular: (11) 96230-5100</h5>
                    <h5 className="text-white">Telefone: (11) 4706-6170</h5>
                    <a href="/student/editarPerfil"><button type="submit" className="btn btn-post zoom">Editar</button></a>
                    <hr className="bg"/>
                </div>
            </div>

            
        </div>

    );
}