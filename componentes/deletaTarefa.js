const BotaoDeleta = () =>{

    const botaoDeleta = document.createElement('button')

    botaoDeleta.innerText = 'Deletar'

    botaoDeleta.addEventListener('click', deletarTarefa)
        return botaoDeleta
}

const deletarTarefa = (evento)  =>{
    const botaoDeleta = evento.target
    
    const tarefaCompleta = botaoDeleta.parentElement // pegando o elemento pai do html li

    tarefaCompleta.remove() //

    return botaoDeleta
}

export default BotaoDeleta