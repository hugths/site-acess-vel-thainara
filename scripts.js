document.addEventListener('DOMContentLoaded', function(){
    const botaoAumentarFonte = document.getElementById('aumentar-fonte')
    //Pega o botão de aumentar fonte e coloca na constante

    let tamanhoDaFonte = 1
    // define o tamanho da fonte na variável

    const botaoAcessibildade = document.getElementById('botao-acessiblidade')
    const opcaoAcessibilidade = document.getElementById ('opcoes-acessibilidade')

    botaoAumentarFonte.addEventListener('click', function(){
        tamanhoDaFonte = tamanhoDaFonte + 0.1
        document.body.style.fontSize = `${tamanhoDaFonte}rem`
    })

    const botaoDiminuirFonte = document.getElementById('diminuir-fonte')

    botaoDiminuirFonte.addEventListener('click', function(){
        tamanhoDaFonte = tamanhoDaFonte - 0.1
        document.body.style.fontSize = `${tamanhoDaFonte}rem`
    })



    botaoAcessibilidade.addEventListener('click',function(){
        botaoAcessibildade.classList.toggle('rotacao-botao');
        opcaoAcessibilidade.classList.toggle('apresenta-lista');
    } )

})