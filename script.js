const aluno1 = window.prompt("digite seu nome")
    const prova1 = window.prompt("digite a nota 1")
    const prova2 = window.prompt("digite a nota 2")
    const prova3 = window.prompt("digite a nota 3")
    const prova4 = window.prompt("digite a nota 4")

    const resultado = (parseInt(prova1) + parseInt(prova2) + parseInt(prova3) + parseInt(prova4)) / 4

    if (resultado < 5) {
        alert(aluno1 + " você precisa estudar mais, por que voçê foi reprovado(a) com a nota " + resultado)
    } else if ((resultado >= 5) && (resultado <= 7)) {
        alert(aluno1 + " você está em recuperação por que sua nota foi " + resultado)
    } else {
        alert(aluno1 + " você foi aprovado(a) por que sua nota foi " + resultado)
    }