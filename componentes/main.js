import BotaoConcluir from './concluiTarefa.js'
import BotaoDeleta from './deletaTarefa.js'
  //( () =>{ // escopo para o usuario não ver o codigo || função de invocação imediata

     const criarTarefa = (evento) => {

    evento.preventDefault()

    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value
   
    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    const  conteudo = `<p class="content">${valor}</p>`

    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConcluir()) //anexando o botao dentro do elemento li

    tarefa.appendChild(BotaoDeleta())    // anexand o botão deleta no li do html

    lista.appendChild(tarefa)

    input.value = " "
  
 } 

 const novaTarefa = document.querySelector('[data-form-button]')
 
    novaTarefa.addEventListener('click', criarTarefa);


