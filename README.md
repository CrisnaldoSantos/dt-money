<h1 align="center">
    <img src="https://github.com/CrisnaldoSantos/dt-money/blob/main/public/favicon.png" width="20px">
    <br/>Dt Money
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/CrisnaldoSantos/dt-money?color=5429cc">

  <a href="https://www.crisnaldocarvalho.com.br">
    <img alt="Made by Crisnaldo" src="https://img.shields.io/badge/made%20by-Crisnaldo Carvalho-5429cc">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-5429cc">
</p>

## Descrição:

<p>
Micro dashboard contruído em ReactJS ao qual são registradas entradas e saídas financeiras, fornecendo acesso aos registros e indicadores. Foi desenvolvida no estudo do módulo 2 do curso de especialização Ignite da Recketseat.
</p>
<p>
A aplicação foi hospedada no Firebase, a distribuição ocorre através de deploy automático por GithubActions, e pode ser acessada através da url:
<a href="https://dtmoney-71863.web.app/" target="_blank">https://dtmoney-71863.web.app/</a>
</p>

## Tecnologias:

- ReactJS
- Typescript
- MirageJS
- GithubActions
- Firebase

## Considerações Tecnológicas

<p>
O desenvolvimento foi feito com CRA(create react app) com uso de typescript, o gerenciamento de estados ocorreu com Context Api, e seu uso pelos coponentes dado através da criação de hook próprio para a funcionalidade.
</p>

<p>
O presente front-end não dispõe de um servidor, e para tal fou utilizado o MirageJs, atuando como mock Http. A execução do mesmo ocorre em paralelo à aplicação, interceptando chamadas executadas pelo app para um endpoint o endereço da mesma com o sufixo <i>/api</i>.
</p>

## Screenshots

<p align="center">
    <img src="https://github.com/CrisnaldoSantos/dt-money/blob/feat/readme/src/assets/screen/dtmoney1.PNG" alt="página inicial">
</p>

<p align="center">
    <img src="https://github.com/CrisnaldoSantos/dt-money/blob/feat/readme/src/assets/screen/dtmoney2.PNG" alt="modal de registro">
</p>
