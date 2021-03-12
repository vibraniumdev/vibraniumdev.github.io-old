---
title: "Introdução à Introdução Ao Git"
date: "2019-06-17"
draft: true 
path: "/blog/introducao-introducao-git"
---

Aprendendo a criar um repositório local usando o Git e hospedá-lo no GitHub

![Photo by [Yancy Min](https://unsplash.com/@yancymin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/git?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)](https://cdn-images-1.medium.com/max/10000/1*v6XeL5ZKVBpwwZlqHp-Isw.jpeg)*Photo by [Yancy Min](https://unsplash.com/@yancymin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/git?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)*

## Pré-requisitos

Para seguir o tutorial do início ao fim, alguns pré-requisitos são necessários:

* O Git instalado e configurado no seu computador. Recomendo que você utilize a documentação oficial para [instalar](https://git-scm.com/book/pt-br/v1/Primeiros-passos-Instalando-Git) o Git e depois [configurar](https://git-scm.com/book/pt-br/v1/Primeiros-passos-Configura%C3%A7%C3%A3o-Inicial-do-Git) seu usuário e seu e-mail nele

* Uma linguagem de programação instalada no seu computador (eu usarei Python 3)

* Uma conta no [GitHub](https://github.com/join)

* Um editor de textos ([Sublime Text](https://www.sublimetext.com/download), [Atom,](https://atom.io/) [Visual Studio Code,](https://code.visualstudio.com/download) [Vim](https://www.vim.org/download.php) etc.)

## Sobre este texto

Neste tutorial você vai aprender a criar um repositório no GitHub, criar um repositório Git no seu computador e, finalmente, conectar ambos para que você possa versionar seus arquivos. Usando os quatro comandos mais básicos do Git (git init,git add , git commit e git push) você terá em mãos as ferramentas essenciais para começar.

## Mas por que uma ‘introdução à introdução’?

Este texto cobre o necessário para que você crie e configure repositórios, saia por aí versionando alterações em arquivos. Já o conhecimento coberto pelo que a Documentação do Git ([que também é um livro](https://git-scm.com/book/en/v2)) considera uma introdução foge um pouco do nosso escopo, pois aqui nós não veremos nem *tagging* nem *aliases*. No final do post há, entretanto, referências com materiais que você pode consultar para aprender mais sobre eles. Para esta *introdução da introdução*, eles não serão necessários.

## Por que afinal o Git é importante?

Imagine-se trabalhando em um projeto no seu computador. Tudo está indo muito bem até que você precisa fazer uma alteração considerável que irá impactar uma parte importante da funcionalidade dele. Em suas mãos há algumas ferramentas disponíveis: você pode fazer uma cópia do seu código e salvá-la em um arquivo de backup e então poderá realizar alterações nele sem medo de perder o que estava funcionando até então. Você pode também também salvar seu projeto em algum serviço de hospedagem na nuvem, caso seu computador caia na piscina. Ambas opções até funcionam, mas dão muito trabalho e não parecem ser otimizadas para resolver os problemas que estamos tentando solucionar.

Agora imagine que você precise conferir como estava o seu código em um momento específico do desenvolvimento dele. O seu serviço de nuvem provavelmente não conseguirá entender em qual momento exato do tempo você deseja retroceder. Digamos que, para um Dropbox da vida, o mais importante é salvar arquivos em seu estado mais atualizado. Os *logs*, tão importantes para programadores, são colocados em segundo plano e tendem a ser descartados.

O Git resolve todos esses problemas porque ele funciona como um sistema de versionamento no qual cada alteração significativa em algum arquivo do seu projeto fica **salva no tempo** através do que chamamos de **commits** (pense em *commits* como fotografias empilhadas uma em cima da outra). Se você precisa realizar alterações sem comprometer o que já está feito, o Git possui uma ferramenta de *branches* (ramos) que têm seu próprio histórico de *commits* que podem ser mesclados (ou, com o perdão do anglicismo, “mergeados”) com a sua *branch* original. Assim, seu código está salvo, com o histórico preservado e dinâmico o suficiente para suportar as alterações que você porventura fará nele.

A utilização do Git se dá basicamente de duas maneiras: através do *shell* ou através de algum cliente para desktop (como o GitHub Desktop ou o GitKraken, por exemplo). Nós usaremos o *shell* — e eu recomendo fortemente que você aprenda a usar o Git nele antes de tentar ferramentas com interfaces visuais simplesmente porque aprender o passo a passo te permitirá entender melhor o funcionamento dos apps clientes (como os anteriormente citados).

## Criando um repositório local

Para começar a usar os comandos essenciais do Git, iremos criar no seu computador o projeto mais simples do mundo, conhecido por **Programa-Que-Printa-Um-Olá-Mundo-Na-Tela**. Eu utilizarei o Python, mas você pode utilizar a linguagem que preferir.

* Para criar um repositório local, abra o seu terminal e digite mkdir hello_world (*make directory*) para criar uma pasta chamada **hello_world**.

* Entre na pasta **hello_world** usando o comando cd hello_world (*change directory*).

* Uma vez dentro do nosso diretório de trabalho recém-criado, poderemos começar a usar o Git

### Inicializando o Git: git init

Para inicializar o Git, ou seja, para começar a monitorar as mudanças no nosso projeto que se iniciará, utilizaremos o comando git init. O seu terminal deve ter retornado uma mensagem parecida com essa:

    Initialized empty Git repository in /Users/guiemi/hello_world/.git/

O comando git init simplesmente criou uma pasta oculta chamada **.git** que contém dentro de si tudo o que o Git precisa para funcionar. Agora estamos prontos para ter nossos arquivos trackeados.

Se você usar o git status, verá a seguinte mensagem:

    On branch master
    
    No commits yet
    
    nothing to commit (create/copy files and use "git add" to track)

Essa mensagem significa que está tudo ok e que o Git está a postos caso você deseje criar um arquivo para ele trackear. É o que faremos:

* Eu criei um arquivo chamado hello_world.py. Você pode utilizar a extensão que preferir. Para isso, você pode utilizar comando **touch**:

    ```bash
    touch hello_world.py
    ```
    
    

Depois de criado esse novo arquivo, cheque novamente o status do Git (usando o git status) e veja o que ele mostra:

    On branch master
    
    No commits yet
    
    Untracked files:
      (use "git add <file>..." to include in what will be committed)
    
    hello_world.py
    
    nothing added to commit but untracked files present (use "git add" to track)

Essa nova mensagem significa que o Git já percebeu a atividade nova dentro da pasta. Significa também que ele espera que nós adicionemos o **hello_world.py** à lista (vazia por enquanto) de arquivos trackeados. É o que faremos então.

## Primeiros passos no Git

### git add

Utilizando o comando git add hello_world.py, adicionaremos nosso arquivo à lista de arquivos que farão parte do *commit*, que é aquela "fotografia" que fará parte de uma "pilha de fotografias".

Você deve ter adivinhado e acertado que o Git também reagiu a esse comando e que, através de um novo git status ele nos mostrará o que aconteceu:

    On branch master
    
    No commits yet
    
    Changes to be committed:
      (use "git rm --cached <file>..." to unstage)
    
    new file:   hello_world.py

Agora que o arquivo foi adicionado, o Git nos dá uma instrução para desfazer o git add, caso precisemos. Como não é o nosso caso, nosso próximo passo é inserir o arquivo adicionado na nossa fotografia (o *commit*).

### git commit
> DICA:
> Neste momento, é importante que você tenha configurado o **git** (lá nos pré-requisitos); caso contrário, ele não irá te reconhecer e perguntará quem é você.

Por intuição, você deve estar imaginando que para “commitar” o nosso **hello_world** é só digitar git commit. E você acertou. Mas tem um detalhe: o git commit abre um editor de texto presente no seu sistema operacional porque o processo de 'commitar' nada mais é que fotografar o estado em que está o nosso código e, em seguida, nomear esse estado para que possamos lembrar de tudo o que foi feito desde o último *commit*. No nosso caso, este é o nosso primeiro *commit*, então nada mais justo do que nomeá-lo assim. Como você e eu talvez tenhamos editores de texto diferentes, utilizaremos a *flag* -m (*message*) após o git commit para fins pedagógicos. Essa *flag* diz ao Git que o texto escrito entre aspas logo após ela servirá de nome, dispensando a necessidade do Git de tentar abrir um editor de textos.

    git commit -m "Primeiro commit!"

Ótimo! Você acabou de criar seu primeiro *commit*! Chegou a hora de criar um repositório remoto no GitHub.

## Criando e configurando um repositório no GitHub

### Criando um repositório

A partir daqui, **você precisa ter uma conta no GitHub,** pois é nele onde iremos criar o repositório remoto que vai interagir com nosso repositório local. Com o GitHub logado, o próximo passo é criar um repositório.

![](https://cdn-images-1.medium.com/max/2880/1*M64Oxdo_QpKTpzfg59g3kw.png)

1. Na barra de navegação superior, clique no “**+**” e depois em “**new repository**” — ou simplesmente entre em [https://github.com/new](https://github.com/new).

1. Nomeie seu repositório

1. Escreva uma pequena descrição para que outros usuários saibam do que se trata o seu projeto antes mesmo de lerem seu código

1. Defina-o como público

1. Desmarque a opção de *inicializar o repositório com um README*. Nós criaremos mais tarde um README localmente.

1. Aperte o botão **Create repository**

### Configurando seu repositório

![](https://cdn-images-1.medium.com/max/3024/1*9BjA-VnbIVkpUFp7Vijnyg.png)

Depois de criado, uma nova tela aparecerá. Ela te mostra quatro formas de conectar repositórios local e remoto:

1. copiando o endereço HTTPS ou o SSH (indicado para quem já sabe o que está fazendo)

1. criando um novo repositório no *shell* e, em seguida, conectá-lo ao remoto (indicado se você ainda não tem um repositório local. Não é o nosso caso)

1. “empurrando” para o GitHub um repositório local que já existe (**é o nosso caso!**)

1. importando código (indicado para quem está migrando de outro sistema de versionamento para o Git)

### git push

Agora que já sabemos qual dos métodos usar, usemos ele. Mas, antes, vamos entender o que essas linhas de código significam.

    git remote add origin [https://github.com/guiemi/ola_mundo.git](https://github.com/guiemi/ola_mundo.git)
    git push -u origin master

A primeira linha significa que você está pedindo ao **git** que adicione um **repositório remoto** e chame ele de **origin**. Após isso, você fornece o endereço desse repositório remoto; e o Git faz o resto. Se você quiser checar se o seu **origin** está mesmo com a URL dada, use o comando git remote -v (*verbose*).

Na segunda linha é onde a magia acontece:

O git push diz ao **git** que você quer "**empurrar**" para o seu repositório remoto (o *origin*) aquela pilha de fotografias (os *commits*). Lembra deles? O -u origin master são parâmetros especiais que usaremos apenas neste primeiro *push*. O -u é uma abreviação de set-upstream e espera que você passe como parâmetro dele um repositório remoto (no nosso caso, o *origin*) e, depois, uma *branch*.

As *branches* mereceriam um texto inteiro dedicado a elas, então por enquanto basta saber que, por convenção, o Git chama a *branch* padrão de **master**. É por isso que passamos esse nome como segundo parâmetro de -u.
> *Será pedido que você digite o usuário e senha do seu origin (o seu GitHub). Para evitar que isso aconteça nos próximos commits, confira a seção “**Próximos Passos**” no final do texto!*

    Enumerating objects: 3, done.
    Counting objects: 100% (3/3), done.
    Writing objects: 100% (3/3), 222 bytes | 74.00 KiB/s, done.
    Total 3 (delta 0), reused 0 (delta 0)
    To [https://github.com/guiemi/ola_mundo.git](https://github.com/guiemi/ola_mundo.git)
     * [new branch]      master -> master
    Branch 'master' set up to track remote branch 'master' from 'origin'.

![](https://cdn-images-1.medium.com/max/3022/1*ZhJXDQFuuUiddTOcxhaARw.png)

Pronto! O arquivo **hello_world.py** foi enviado para a *branch* **master** do repositório **ola_mundo**.

## Conclusão

Isso conclui o objetivo principal deste tutorial, que foi utilizar quatro comandos essenciais: **git status**, **git add**, **git commit** e **git push**. Nós vimos alguns outros, como o **git remote** , o **git init** etc., mas eles são acessórios e não serão usados necessariamente no seu dia a dia. Conforme for necessário, você aprenderá mais sobre *branches*, sobre *merging*, sobre *tags* e muitas outras funcionalidades dessa ferramenta fantástica sobre a qual aprendemos um pouco aqui.

As próximas seções contêm mais dois *commits* que faremos na nossa *branch* **master** — um composto pela função hello_world() de fato e outro composto por um pequeno arquivo README. Elas servirão para você praticar o que aprendeu.

Na última seção há dicas sobre **o que** e **onde** aprender mais sobre o Git.

Deixo um agradecimento especial ao **Guilherme Cardoso**, programador, linguista e brvxo nas horas vagas, pela revisão técnica deste tutorial. Muitíssimo obrigado; você é foda d+!

(Você pode encontrar o Gui Cardoso por aqui: [Lattes](http://lattes.cnpq.br/1075894507480608), [LinkedIn](https://www.linkedin.com/in/cardosogc/), [GitHub](https://github.com/cardosogc?tab=repositories), [Twitter](https://twitter.com/guilaolan).)

## Apêndice 1: Commitando a função mais simples do mundo

Agora que nossos repositórios local e remoto estão conversando entre si, vamos escrever algum código simples. Abra o arquivo “**hello_world**” no seu editor de texto preferido e escreva um código que printe a string “Olá, mundo!” na tela.

    # A primeira função do mundo!
    
    def hello_world():
        """Função que printa 'Olá, mundo!' quando chamada"""
    
    return "Olá, mundo!"
    
    print(hello_world())

Agora, repita o procedimento de **adicionar**, **commitar** e **dar push** que fizemos anteriormente.
> *Não se esqueça de:*
> *1. Usar o git status sempre que houver alguma dúvida*
> *2. Inserir uma mensagem de commit que explique de forma sucinta o que foi alterado/adicionado no código*
> *3. Usar git push agora, em vez de git push -u origin master, pois o Git já sabe qual é o endereço do nosso origin e também em qual branch estamos*

E *voilà*! Lá está o código, dentro do arquivo **hello_world**

![](https://cdn-images-1.medium.com/max/2872/1*yRhp0rt5XRj6jsLu0Ic8yA.png)

## Apêndice 2: Commitando um README

Mas ainda falta uma coisa importante: o README! Esses arquivos escritos em formato Markdown servem como documentação para o que colocamos em repositórios remotos. Eles introduzem nosso código para quem visita o repositório, mostrando de forma sucinta, entre outras coisas, os seguintes tópicos:

1. O que o seu código faz;

1. Para que ele serve;

1. Como baixar, instalar e utilizar suas funcionalidades;

1. Como contribuir também para o projeto.

Usando o comando **touch**, crie um arquivo chamado “README.md”, abra-o e escreva uma pequena descrição.

![](https://cdn-images-1.medium.com/max/3104/1*POPfK8tfJ_pCwGwXwl6D6g.png)

Depois de escrever um README simples, repita os passos (**git add**, **git commit**, **git push**) e veja como o seu repositório mudou:

![](https://cdn-images-1.medium.com/max/2880/1*5xerSbbsi8_inBgqg7lvGw.png)

## Apêndice 3: Próximos passos

* Uma breve história do Git ([git-scm](https://git-scm.com/book/pt-br/v1/Primeiros-passos-Uma-Breve-Hist%C3%B3ria-do-Git))

* Branching e merging ([git-scm](https://git-scm.com/book/pt-br/v1/Ramifica%C3%A7%C3%A3o-Branching-no-Git-B%C3%A1sico-de-Branch-e-Merge))

* git fetch e git pull ([quora](https://pt.quora.com/Qual-a-diferen%C3%A7a-entre-os-comandos-git-pull-e-git-fetch))

* git — guia prático ([Roger Dudler](https://rogerdudler.github.io/git-guide/index.pt_BR.html))

* git clone ([git-scm](https://git-scm.com/book/pt-br/v1/Git-Essencial-Obtendo-um-Reposit%C3%B3rio-Git#Clonando-um-Reposit%C3%B3rio-Existente))

* ebook gratuito Pro Git ([git-scm](https://git-scm.com/book/pt-br/v2))

* tutorial interativo sobre branching ([learngitbranching](https://learngitbranching.js.org/))

* [Git+GitHub] Evitando Informar Usuário e Senha a cada Push para o GitHub ([Anderson Gomes, no Medium](https://medium.com/@andgomes/git-github-evitando-informar-usu%C3%A1rio-e-senha-a-cada-push-para-o-github-d8edbb5c6de4))

**Não se esqueça de dar 50 claps se você gostou deste texto. É um pequeno gesto que ajuda este blog a chegar a mais pessoas! :)**

## Referências

* Most Basic Git Commands with Examples ([RubyGarage](https://rubygarage.org/blog/most-basic-git-commands-with-examples))

* Utilitários Unix ([Wikipédia](https://pt.wikipedia.org/wiki/Utilit%C3%A1rios_Unix))

* Linux Shell Commands ([Cardiff School of Computer Science & Informatics](https://docs.cs.cf.ac.uk/notes/linux-shell-commands/))

* Terminal for Beginners! ([Medium](https://medium.com/@grace.m.nolan/terminal-for-beginners-e492ba10902a))

* What does the command do “git remote add <name_of_your_remote> <url>” and what values need to be passed? ([Quora](https://www.quora.com/What-does-the-command-do-git-remote-add-name_of_your_remote-url-and-what-values-need-to-be-passed))

* git syncing ([Atlassian](https://www.atlassian.com/git/tutorials/syncing))

* Primeiros passos — Configuração Inicial do Git ([git-scm](https://git-scm.com/book/pt-br/v1/Primeiros-passos-Configura%C3%A7%C3%A3o-Inicial-do-Git))

* O que é origin? ([GitHowTo](https://githowto.com/pt-BR/what_is_origin))

* git push ([git-scm](https://git-scm.com/docs/git-push))

* What does ‘ — set-upstream’ do? ([stackoverflow](https://stackoverflow.com/questions/18031946/what-does-set-upstream-do))

* Docstrings ([Python Help](https://pythonhelp.wordpress.com/2011/02/14/docstrings/))

* Sublime Text download ([Sublime Text](https://www.sublimetext.com/download))

* Atom download ([Atom.io](https://atom.io/))

* Visual Studio Code download ([Visual Studio Code](https://code.visualstudio.com/download))

* Vim download ([Vim the editor](https://www.vim.org/download.php))
