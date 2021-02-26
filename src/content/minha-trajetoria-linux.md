---
title: "Minha história no Linux"
date: "2018-10-22"
draft: false
path: "/blog/minha-trajetoria-linux"
---

O Linux divide opiniões. Se, por um lado, glorificam sua estabilidade e segurança, por outro, criticam o pequeno número de softwares presentes nele e seu parco apelo pelo primor estético. Em outras palavras, “linux é feio e não tem programa que roda nele”. Embora hoje em dia ainda dê para dizer que isso é verdade, houve um esforço para que pelo menos a acusação de despreocupação com a elegância seja deixada para trás. O desktop abaixo é um dos muitos exemplos disso.

![Continua não tendo programa, mas pelo menos é lindo. (Fonte: [https://www.reddit.com/r/unixporn/comments/9hiykj/openbox_under_the_dome/](https://www.reddit.com/r/unixporn/comments/9hiykj/openbox_under_the_dome/))](https://cdn-images-1.medium.com/max/2880/0*jofyB0KPB3Fnd-Tc.png)*Continua não tendo programa, mas pelo menos é lindo. (Fonte: [https://www.reddit.com/r/unixporn/comments/9hiykj/openbox_under_the_dome/](https://www.reddit.com/r/unixporn/comments/9hiykj/openbox_under_the_dome/))*

Eu sou usuário Linux há oito anos, o que não faz de mim necessariamente um usuário avançado conhecedor de cada detalhe sobre arquitetura de sistemas, tampouco um evangelizador. Sou um entusiasta que está passando pela 4ª transição desses oito anos. Você irá perceber, neste texto, que quase nada nessa história são flores; mas essa não é uma história sobre jardinagem, e sim sobre decidir quais tipos de espinhos valem mais a pena. Perceberá também que já houve tempos mais hostis e que hoje a curva de aprendizado para um curioso/entusiasta é incrivelmente baixa — sendo seguro até afirmar que é mais fácil um usuário novato aprender a usar um [Deepin OS](https://www.deepin.org/en/) do que um [Windows 10](https://www.microsoft.com/en-us/windows), como mostra este vídeo:

<center><iframe width="560" height="315" src="https://www.youtube.com/embed/U8Adzkyo4SM" frameborder="0" allowfullscreen></iframe></center>

Refletindo sobre isso e sistemas operacionais em geral, percebi que conheço pessoalmente apenas 6 linux users — e, dessas, apenas uma não trabalha diretamente com tecnologia. Já que quase todo mundo tem uma boa história para contar sobre como chegou a algum OS esquisitão, decidi contar aqui um resumo da minha trajetória, incluindo as quatro transições e seus porquês. Espero que você termine este texto familiarizado e interessado pelo tema.

## Parte 1: Como cheguei no Linux

A primeira vez que eu vi uma máquina que não rodava Windows foi na 6ª série do ensino fundamental, na disciplina de Educação, Relações Econômicas e Tecnologia (ERET.). Os computadores do laboratório de informática da minha escola tinham o [Kurumin](https://www.hardware.com.br/kurumin/) instalado. Eram tempos difíceis para nós, crianças que até então sabiam malemá abrir o Paint e prestes a descobrir o mágico mundo do Counter-Strike 1.6, do The Sims e dos MMORPGs. O Windows, mais ainda do que hoje, era tiranicamente hegemônico, então meu interesse não foi despertado pelo Kurumin. Não obstante, ele tinha seus problemas, alguns inerentes ao Linux em si, outros próprios do Kurumin, o que o ajudou a definitivamente não se popularizar entre nós.

![Kurumin Linux (Fonte: DistroWatch)](https://cdn-images-1.medium.com/max/2560/0*7hJ7jsfWEmkdgVFU.png)*Kurumin Linux (Fonte: DistroWatch)*

Não consegui encontrar uma foto de como era exatamente o desktop environment dele. Quem lembra, lembra; agora, para quem nunca viu: era meio que um [KDEzão](https://upload.wikimedia.org/wikipedia/commons/c/cc/Pclinuxos-2007-kde-ja.png) com ícones que tentavam remeter à flora e fauna brasileiras e fotos do [Tux](https://pt.wikipedia.org/wiki/Tux) usando um cocar.

Nos anos que se seguiram, o Windows foi quem proporcionou a diversão na época em que meus amigos e eu descobrimos a informática, os jogos para PC e a web em si. Isso durou até até meados de 2010, quando [um grande amigo](https://github.com/vitorprado) que na época estava começando a estudar programação instalou o Ubuntu no notebook dele e me deu de presente um CD do Ubuntu 10.04 (Lucid Lynx). Um mundo novo então nasceu.

## Parte 2: O Ubuntu

Lembro-me de estar eufórico por conhecer o que aquela coisa toda diferente do Windows tinha de especial a ponto da Canonical [distribuir gratuitamente](https://blog.ubuntu.com/2011/04/05/shipit-comes-to-an-end) CDs do Ubuntu e do Ubuntu Server para o mundo inteiro. Instalei, mexi, brinquei e, como qualquer criança normal, quebrei meu novo brinquedo favorito. Aquele Ubuntu foi destruído e reinstalado incontáveis vezes, fato que me ajudou a 1) perder o medo e a 2) conhecê-lo melhor. Ele era notadamente mais rápido, mais estável, mais amigável e mais simples — além de ser gratuito. As únicas coisas que ele não tinha eram os games e os softwares do Windows, fato que foi um peso na época e continua sendo, embora não de forma tão impactante hoje em dia.

Por esse motivo, me obriguei a ter ambos sistemas operacionais em dual boot por um bom tempo, utilizando um para tarefas diárias enquanto preparava o outro para receber uma migração completa. Acabei fazendo da minha chegada ao Linux uma caminhada sutil e confortável.

![Ubuntu 10.4 Lucid Lynx, o último SO da Canonical a vir com o Gnome 2 (fonte: Tecnoblog)](https://cdn-images-1.medium.com/max/2000/0*kNiZoAFC2Eq2Jppv.jpg)*Ubuntu 10.4 Lucid Lynx, o último SO da Canonical a vir com o Gnome 2 (fonte: Tecnoblog)*

## Parte 3: migração e caça às distros

A transição completa aconteceu em 2015, quando adquiri meu notebook atual. A princípio, o fato dele ter vindo com o Windows 8 de fábrica não incomodou tanto quanto ele ter sido feito pela Samsung. A vontade de entrar de cabeça no Linux, somada aos softwares de otimização de desempenho — instalados de fábrica pela Samsung — transformarem a máquina em uma carroça movida a eletricidade, fizeram eu passar o rolo compressor no disco rígido para destruir qualquer traço original da Samsung nele [(tanto por dentro quanto por fora)](https://imgur.com/a/zwV9YHt). Foi essa gota d’água que constituiu *a primeira transição*.

Essa foi a época em que meu laptop foi mais vezes formatado, basicamente por eu não ser adepto a máquinas virtuais. Eu quis sentir cada sistema funcionando no mundo real, dentro do meu workflow diário. Meu Samsung se transformou, mais do que em uma máquina de trabalho e estudos, em uma máquina de testes. Acabaram passando por ele o Linux Mint, o Elementary OS, o Ubuntu Mate, o Linux Deepin, o Fedora, o Ubuntu Gnome, o KDE Neon e o OpenSUSE. Até o MacOS Sierra chegou a ser instalado através do [Hackintosh](https://hackintosh.com/).

![Linux Mint (Fonte: [https://cinnamon-spices.linuxmint.com/themes/view/Mint-Y-Yltra-Dark](https://cinnamon-spices.linuxmint.com/themes/view/Mint-Y-Yltra-Dark))](https://cdn-images-1.medium.com/max/2880/0*MV8MyeLrI0mbYew3.png)*Linux Mint (Fonte: [https://cinnamon-spices.linuxmint.com/themes/view/Mint-Y-Yltra-Dark](https://cinnamon-spices.linuxmint.com/themes/view/Mint-Y-Yltra-Dark))*

A caça às distros[*](https://www.techopedia.com/definition/28592/distro-linux) chegou ao fim quando elegi o Mint como a que melhor me atendeu. Sua facilidade de personalização, sua estabilidade, sua elegância, sua leveza e desempenho e o cuidado que os desenvolvedores têm com o Cinnamon me ganharam.

## **Parte 4: Windows 10, a universidade e produtividade**

Dois anos depois, uma mudança drástica aconteceu: precisei voltar para o Windows 10. Estava eu tendo que usar o Inkscape em uma disciplina onde estávamos sendo introduzidos ao Adobe Illustrator, quando eu simplesmente meti o johnson[*](https://www.dicionarioinformal.com.br/meter+o+johnson/). Somada a essa angústia de apanhar para a curva de aprendizado do Inkscape havia uma vontade que eu tinha de testar se fazer anotações das aulas em cadernos eletrônicos era mais efetivo que em cadernos de papel. Sim, eu abandonei o Linux Mint porque queria usar o Illustrator e o Evernote naquele semestre — e, por consequência, porque o Inkscape é complexo demais e tanto o Evernote Web quanto seus clientes para Linux são vergonhosos. Em 2017, o Windows 10 já estava consolidado como a melhor versão do Windows já feita pela Microsoft, então não foi uma decisão difícil.

![Windows 10. (Fonte: [https://www.thurrott.com/windows/windows-10/173920/microsoft-release-patch-tuesday-updates-for-windows-10#](https://www.thurrott.com/windows/windows-10/173920/microsoft-release-patch-tuesday-updates-for-windows-10#))](https://cdn-images-1.medium.com/max/2560/0*76MkgNoz5QBHUbfT.jpg)*Windows 10. (Fonte: [https://www.thurrott.com/windows/windows-10/173920/microsoft-release-patch-tuesday-updates-for-windows-10#](https://www.thurrott.com/windows/windows-10/173920/microsoft-release-patch-tuesday-updates-for-windows-10#))*

Como eu disse, não sou um evangelizador. Eu sabia que estavam à minha frente dois caminhos que possibilitariam vantagens e desvantagens ao mesmo tempo; a única grande questão era decidir quais tipos de problemas valiam mais a pena serem enfrentados naquele momento. Essa foi *a segunda transição*.

Essa espécie de segunda chance ao Windows durou um semestre, e sobre ele não há muito o que dizer. A Microsoft de Satya Nadella consertou alguns erros da Microsoft de Steve Ballmer; já outros ela deixou permanecerem como sempre estiveram. Nesse meio-tempo, houve uma tentativa de integração com o Ubuntu e houve o [Creators Update](https://tecnoblog.net/209259/novidades-windows-10-creators-update/). No geral, minha experiência foi bastante satisfatória, pois ele é ótimo para o usuário médio.

## Chegada ao Manjaro

O fim dessa curta jornada aconteceu quando do plot twist mais inesperado possível: desejando [criar um site hospedado no GitHub](https://pages.github.com/), fui impedido de instalar o [Jekyll](https://jekyllrb.com/) porque ele só é compatível com sistemas Linux e com o macOS. Inexplicavelmente e inesperadamente supreendente. No fundo é sempre uma questão de escolher quais tipos de problemas você está disposto a resolver. Cerca de 6 meses depois, em uma tarde qualquer, provavelmente uma quarta-feira modorrenta (pois todas as tardes quaisquer se parecem com quartas-feiras modorrentas), formatei minha máquina para instalar o belíssimo Deepin OS, culminando na minha *terceira grande transição*, já que a lição aprendida é que um sistema operacional que não te atende é descartável.

Infelizmente o Deepin OS durou pouco mais de alguns minutos nas minhas mãos porque a primeira atualização pós-instalação devorou a sua própria tela de login, acontecimento que me levou a tentar novamente o KDE Neon e, depois dele, o Manjaro com KDE.

E foi no Manjaro que tudo mudou.

![Manjaro KDE (Fonte: [https://www.diolinux.com.br/2016/05/um-leigo-no-manjaro-kde.html](https://www.diolinux.com.br/2016/05/um-leigo-no-manjaro-kde.html))](https://cdn-images-1.medium.com/max/2732/0*vUSPcMKATpY6aohP.png)*Manjaro KDE (Fonte: [https://www.diolinux.com.br/2016/05/um-leigo-no-manjaro-kde.html](https://www.diolinux.com.br/2016/05/um-leigo-no-manjaro-kde.html))*

O Manjaro é uma distro baseada no Arch; ambos compartilham o mesmo gerenciador de pacotes, o Pacman. Numa distro, o gerenciador de pacotes diz muito sobre como você interage com os programas instalados, então ele é de suma importância no dia a dia do usuário. Muitos desenvolvedores, como os do Deepin OS e os do Mint, são ótimos em tirar da frente do usuário essa preocupação, graças a lojas de aplicativos que automatizam o trabalho de instalar, atualizar e desinstalar apps. Já no Manjaro não; sua ferramenta de gerenciamento de pacotes serve como se fosse a loja. Apesar disso, usar o Manjaro e o Pacman foi supreendentemente gratificante. Todos os comandos são mais simples no terminal dele do que nos de distros baseadas em Debian (Ubuntu, Deepin OS, Mint etc.), fato que tirou meu medo de explorar esse novo universo particular.

![Pamac.](https://cdn-images-1.medium.com/max/2732/1*Z8ihXJbA2-vDAW8sbv7JwQ.png)*Pamac.*

Pouco tempo depois, estava eu no Manjaro i3 Community Edition, a minha distro atual, e essa foi *a quarta e última transição*. Embora não seja perfeito, tampouco user-friendly, ele me fez perder a saudade de qualquer outra coisa que eu já usei. Este assunto merece um texto escrito especialmente para ele, mas dá para resumir aqui os pontos principais: essa edição do Manjaro é notável pela sua leveza, consumindo pouco mais de 300mb de RAM após o boot. Outro detalhe é ele ser 100% keyboard-driven: como o nome já diz, tudo o que, no teclado, pode substituir ações feitas pelo mouse, ganha um atalho específico. A experiência foi tão satisfatória que, mais recentemente, optei por instalá-lo no computador do trabalho também.

![Meu desktop atual.](https://cdn-images-1.medium.com/max/2732/1*TBv5tUtjaoGVNs0wxRkg1Q.png)*Meu desktop atual.*

## Considerações finais

O mundo open source é incrível e vasto, uma grande conquista para os computadores pessoais e para a computação em si — e o Linux é, ao mesmo tempo, uma das ferramentas e um dos resultados dessa revolução. Hoje em dia, espetar o pendrive na porta USB do seu computador e sair testando um sistema operacional é inacreditavelmente mais fácil do que há 10 anos, e há 10 anos era mais fácil do que há 20 (também porque na época as portas USB ainda não tinham sido inventadas). Não é verdade que “*linux é difícil*”, ao passo que também não é verdade que “*windows é fácil*”; você provavelmente só está mais acostumado com um do que com outro. Como mostrei neste texto, durante bastante tempo eu usei ambos, o que tornou a eventual transição quase que natural.

Espero que este texto tenha ajudado você a obter uma compreensão atualizada do assunto e expandida suficientemente para extrapolar o universo que, devido à sua popularidade, geralmente restringe Linux a Ubuntu. Espero também que tal compreensão te traga mais segurança quando, e se, você resolver se aventurar pelos muitos “sabores” do Linux, facilmente encontráveis internet afora.

**Não se esqueça de dar 50 claps se você gostou deste texto. É um pequeno gesto que ajuda este blog a chegar a mais pessoas! :)**

## Referências:

Deepin OS: [https://www.deepin.org/en/](https://www.deepin.org/en/)

Microsoft Windows 10: [https://www.microsoft.com/en-us/windows](https://www.microsoft.com/en-us/windows)

Kurumin Linux: [https://www.hardware.com.br/kurumin/](https://www.hardware.com.br/kurumin/)

Tux: [https://pt.wikipedia.org/wiki/Tux](https://pt.wikipedia.org/wiki/Tux)

Vitor Prado (GitHub): [https://github.com/vitorprado](https://github.com/vitorprado)

ShipIt comes to an end: [https://blog.ubuntu.com/2011/04/05/shipit-comes-to-an-end](https://blog.ubuntu.com/2011/04/05/shipit-comes-to-an-end)

Hackintosh: [https://hackintosh.com/](https://hackintosh.com/)

Significado de “meter o johnson”: [https://www.dicionarioinformal.com.br/meter+o+johnson/](https://www.dicionarioinformal.com.br/meter+o+johnson/)

Windows 10 Creators Update: [https://tecnoblog.net/209259/novidades-windows-10-creators-update/](https://tecnoblog.net/209259/novidades-windows-10-creators-update/)

GitHub Pages: [https://pages.github.com/](https://pages.github.com/)

Jekyll: [https://jekyllrb.com/](https://jekyllrb.com/)

“Why Linux is so ugly?”: [https://www.reddit.com/r/linux/comments/1zd1wx/honest_question_why_is_linux_so_ugly/](https://www.reddit.com/r/linux/comments/1zd1wx/honest_question_why_is_linux_so_ugly/)
