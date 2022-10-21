import React from "react";
import Botao from "../components/Botao";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

  const clientes = [
    new Cliente('Jefferson', 29, '1'),
    new Cliente('Taian', 19, '2'),
    new Cliente('Jader', 39, '3'),
    new Cliente('Lucia', 35, '4'),
  ]


  function clienteSelecionado(cliente: Cliente) {

  }

  function clienteExcluido(cliente: Cliente) {

  }


  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        <div className="flex justify-end">
          <Botao cor="blue" className="mb-4">Novo Cliente</Botao>
        </div>
        <Tabela clientes={clientes}
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido} />

      </Layout>
    </div>
  )
}
