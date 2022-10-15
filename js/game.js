/*
    player = 1 is first player
    player = 2 is second player
*/
let player = 1
let position = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

function setPosition(selector) {
    if (selector == '.line-1 .column-1') {
        if (!position[0][0]) {
            position[0][0] = player
            changeColor(selector)
        }
    } else if (selector == '.line-1 .column-2') {
        if (!position[0][1]) {
            position[0][1] = player
            changeColor(selector)
        } 
    } else if (selector == '.line-1 .column-3') {
        if (!position[0][2]) {
            position[0][2] = player
            changeColor(selector)
        }   
    } else if (selector == '.line-2 .column-1') {
        if (!position[1][0]) {
            position[1][0] = player
            changeColor(selector)
        }  
    } else if (selector == '.line-2 .column-2') {
        if (!position[1][1]) {
            position[1][1] = player
            changeColor(selector)
        } 
    } else if (selector == '.line-2 .column-3') {
        if (!position[1][2]) {
            position[1][2] = player
            changeColor(selector)
        } 
    } else if (selector == '.line-3 .column-1') {
        if (!position[2][0]) {
            position[2][0] = player
            changeColor(selector)
        } 
    } else if (selector == '.line-3 .column-2') {
        if (!position[2][1]) {
            position[2][1] = player
            changeColor(selector)
        } 
    } else if (selector == '.line-3 .column-3') {
        if (!position[2][2]) {
            position[2][2] = player
            changeColor(selector)
        } 
    } else {
        alert("error in method setPosition")
    }
}

function changeColor(selector) {
    document.querySelector(selector).style.background = determineColor()
}

function determineColor() {
    if (player == 1) {
        player++
        return 'green'
    } else if (player == 2) {
        player--
        return 'red'
    } else {
        return 'grey'
    }
}

function checkWinner() {
    //win player 1
    if (position[0][0] == 1 && position[0][1] == 1 && position[0][2] == 1) {
        setTimeout(() => {alert("Player 1 winner")}, 1)
    } else if (position[1][0] == 1 && position[1][1] == 1 && position[1][2] == 1) {
        setTimeout(() => {alert("Player 1 winner")}, 1)
    } else if (position[2][0] == 1 && position[2][1] == 1 && position[2][2] == 1) {
        setTimeout(() => {alert("Player 1 winner")}, 1)
    } else if (position[0][0] == 1 && position[1][0] == 1 && position[2][0] == 1) {
        setTimeout(() => {alert("Player 1 winner")}, 1)
    } else if (position[0][1] == 1 && position[1][1] == 1 && position[2][1] == 1) {
        setTimeout(() => {alert("Player 1 winner")}, 1)
    } else if (position[0][2] == 1 && position[1][2] == 1 && position[2][2] == 1) {
        setTimeout(() => {alert("Player 1 winner")}, 1)
    } else if (position[0][0] == 1 && position[1][1] == 1 && position[2][2] == 1) {
        setTimeout(() => {alert("Player 1 winner")}, 1)
    } else if (position[0][2] == 1 && position[1][1] == 1 && position[2][0] == 1) {
        setTimeout(() => {alert("Player 1 winner")}, 1)
    }
    //win player 2
    if (position[0][0] == 2 && position[0][1] == 2 && position[0][2] == 2) {
        setTimeout(() => {alert("Player 2 winner")}, 1)
    } else if (position[1][0] == 2 && position[1][1] == 2 && position[1][2] == 2) {
        setTimeout(() => {alert("Player 2 winner")}, 1)
    } else if (position[2][0] == 2 && position[2][1] == 2 && position[2][2] == 2) {
        setTimeout(() => {alert("Player 2 winner")}, 1)
    } else if (position[0][0] == 2 && position[1][0] == 2 && position[2][0] == 2) {
        setTimeout(() => {alert("Player 2 winner")}, 1)
    } else if (position[0][1] == 2 && position[1][1] == 2 && position[2][1] == 2) {
        setTimeout(() => {alert("Player 2 winner")}, 1)
    } else if (position[0][2] == 2 && position[1][2] == 2 && position[2][2] == 2) {
        setTimeout(() => {alert("Player 2 winner")}, 1)
    } else if (position[0][0] == 2 && position[1][1] == 2 && position[2][2] == 2) {
        setTimeout(() => {alert("Player 2 winner")}, 1)
    } else if (position[0][2] == 2 && position[1][1] == 2 && position[2][0] == 2) {
        setTimeout(() => {alert("Player 2 winner")}, 1)
    }
}

function restart() {
    document.querySelector('.line-1 .column-1').style.background = 'grey'
    document.querySelector('.line-1 .column-2').style.background = 'grey'
    document.querySelector('.line-1 .column-3').style.background = 'grey'
    document.querySelector('.line-2 .column-1').style.background = 'grey'
    document.querySelector('.line-2 .column-2').style.background = 'grey'
    document.querySelector('.line-2 .column-3').style.background = 'grey'
    document.querySelector('.line-3 .column-1').style.background = 'grey'
    document.querySelector('.line-3 .column-2').style.background = 'grey'
    document.querySelector('.line-3 .column-3').style.background = 'grey'
}

function update(selector) {
    setPosition(selector)
    checkWinner()
}