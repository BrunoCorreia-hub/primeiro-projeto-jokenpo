const tie = document.querySelector(".empate")
const humanPoint = document.querySelector(".ponto-humano")
const machinePoint = document.querySelector(".ponto-maquina")
let somaHuman = 1
let somaMachine = 1

const game_option = {
    stone: 'stone',
    scirssos: 'scirssos',
    paper: 'paper'
}

function playHuman(element){
    tie.innerHTML = ""
    playTheGame(element, playMachine())
}

function playMachine(){
    const variable = ['stone', 'paper', 'scirssos']
    const random = Math.floor(Math.random() * 3)
    return variable[random]
}

function playTheGame(human, machine){

    if(human === machine){
        tie.innerHTML = '&#x1F610; Empate'
    }

    else if(human === game_option.stone && machine == game_option.scirssos 
        || human === game_option.paper && machine === game_option.stone 
        || human === game_option.scirssos && machine === game_option.paper){
            tie.innerHTML = '&#x1F466; você ganhou!!!'
            humanPoint.innerHTML = ` ${somaHuman++}`
    } 

    else if(human === 'scirssos' && machine == 'stone' 
        || human === 'stone' && machine === 'paper' 
        || human === 'paper' && machine === 'scirssos'){
        tie.innerHTML = '&#x1F916; A maquina venceu'
            machinePoint.innerHTML = ` ${somaMachine++}`
    }
}



/*
        pedra > papel > tesoura
        stone > paper > scirssos
*/