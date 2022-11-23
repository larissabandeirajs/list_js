const BotaoConcluir = () => {

    const botaoConcluir = document.createElement('button')    

    botaoConcluir.classList.add('check-button') // add class do css   

    botaoConcluir.innerText = 'Concluir' // nome do botão

    botaoConcluir.addEventListener('click', concluirTarefa)

        return botaoConcluir
    
}

const concluirTarefa = (evento) =>{ //saber o elemento clicado
    
    const botaoConcluir = evento.target //target quando clicar saber onde clicou

    const tarefaCompleta = botaoConcluir.parentElement // pegando o pai do elemento do (li)

    tarefaCompleta.classList.toggle('done') // criar elefeito de risco na 

}

export default BotaoConcluir