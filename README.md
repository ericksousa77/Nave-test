# Entrega do teste para vaga de estagiário back-end

## Introdução:

- Utilizei a linguagem TypeScript para realizar o desafio back-end pois foi a linguagem que me senti seguro para realizar o projeto. Eu observei que vocês solicitaram que fosse feito em Javascript, caso não aceitem eu entendo a decisão;

- Os exercícios de lógica eu resolvi em JavaScript e eles estão [nesse](https://codesandbox.io/s/entrega-exercicios-logica-bz295) codesandbox.

- Para realizar os exercícios bônus eu optei por usar o Sqlite, utilizando [esse](https://sqliteonline.com/) site para rodar minhas queries que estão [aqui](https://github.com/ericksousa77/Nave-test/blob/main/extras/queries%20sqlite.txt).

 - Para o desafio back-end optei por utilizar o BD Sqlite.

 - Para organizar a estrutura do projeto utilizei o padrão `MVC`.

- Para testar as rotas utilizei o [Insomnia](https://insomnia.rest/download/) e exportei meu workspace que esta [aqui](https://github.com/ericksousa77/Nave-test/blob/main/extras/insomnia%20nave%20ts.json). Sendo assim basta baixa-lo e importar esse arquivo no Insomnia para ter acesso a todos os requests que já deixei prontos. 

- Para prosseguir com o projeto levei em consideração que não pode haver dois projects com o mesmo nome.

- Com relação a BD, além das tabelas `navers` e `projects` eu criei outra tabela chamada `projects_navers` que é responsável por armazenar as informações `naver_id` e `project_id`, ou seja, toda vez que um Naver participar de um Project essa informação estará guardada na tabela `projects_navers`.

- Para vincular um Naver a um Project basta ir no request `Naver join Project` no insomnia que redireciona para a rota `/storeprojectnaver` e informar no body do request o `project_name` e o `naver_id`.


## Instruções de execução do código desenvolvido:

 - Subi o repositório com o meu BD Sqlite que já esta criado e com alguns elementos cadastrados nas tabelas para agilizar no processo de testes. Caso opte por utilizar o BD que eu subi basta apenas instalar o yarn e rodar o comando `yarn dev`


- Caso queiram testar as Migrations e etc, basta:

```
1 - Apagar o BD database.sqlite que esta na pasta src/database. 

2 - Ter o sqlite instalado na sua máquina. Caso não tenha utilize o seguinte comando:

sudo apt install sqlite

3 - Tendo sqlite instalado agora precisamos instalar o Yarn, seguem os comandos para realizar essa instalação:

sudo apt install curl  (caso ja tenha o curl instalado pule esse passo).

curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -

echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

sudo apt update && sudo apt install --no-install-recommends yarn

Adicione ao arquivo ~/.bashrc (ou ~/.zshrc caso você utilize o shell zsh) a seguinte linha: 

export PATH="$PATH:`yarn global bin`"

yarn --version     (caso nao mostre a versao tente fechar e abrir o terminal)

Caso retorne a versão do Yarn (acima de 1.0, abaixo de 2.0), a instalação ocorreu com sucesso.

4 - Com o yarn já instalado devemos rodar as migrations com o seguinte comando:

yarn typeorm migration:run

5 - Após isso para deixar o processo em execução basta executar o comando abaixo:

yarn dev

6 - Para visualizar o BD e suas tabelas eu utilizo uma extensão para o vscode chamada SQLite. Após ter instalado ela basta ir em View > Command Palette (CTRL+SHIFT+P) e após isso digitar open database e selecionar o BD database.sqlite na pasta src/database, após isso no canto inferior da tela aparecerá o SQLITE EXPLORER, clicando nele o restante é bem intuitivo.
```
## Instruções Insomnia


- Na rota `/showespecifnaver/` após a ultima barra é necessário passar o uuid do naver que você deseja obter informações. Esse uuid pode ser obtido através da rota `/indexnavers `que lista todos os navers cadastrados.

- Na rota `/showespecificproject/` após a ultima barra é necessario informar o nome do project que você deseja obter informações. Esse nome pode ser obtido através da rota `/indexprojects` que lista todos os projects cadastrados.

- As demais rotas não precisam de nenhuma observação pois são bem intuitivas.

