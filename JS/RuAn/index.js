//debugger
const mass = []
const massHide = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
const stateMass = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]
let currentNum = 0
let lastNum = 0
let lastCard
const freezeTime = 700
let isItFreeze = false
let isMusicOn = true

function getRandomState(stateMass){
    let djk = Math.floor(12 * Math.random())
    if(stateMass[djk]){        
        let res = stateMass[djk]
        stateMass[djk] = 0
        return res
    }else{        
        return getNextState(stateMass, djk)
    }
}

function getNextState(massive, index){
    index++    
    if(massive[index]){
        let res = massive[index]
        massive[index] = 0
        return res
    }else{
        if(index + 1 >= massive.length){
            index = -1
            return getNextState(massive, index)
        }else{
            return getNextState(massive, index)
        }
    }
}

for(let d = 0; d < 3; d++){//
    mass[d] = []
    for(let j = 0; j < 4; j++){
        mass[d][j] = getRandomState(stateMass)
    }
}

console.log(mass)
console.log(massHide)

//REDUX, але не METRO REDUX :( START
function createStore(reducer){//Боже бережи мого викладача з JS_12
    let state       = reducer(undefined, {}) 
    let cbs         = []                     
    const getState  = () => state            
    const subscribe = cb => (cbs.push(cb), () => cbs = cbs.filter(c => c !== cb)) 

    const dispatch  = action => { 
        const newState = reducer(state, action)
        if (newState !== state){
            state = newState
            for (let cb of cbs)  cb()
        }
    }
    
    return {
        getState,
        dispatch,
        subscribe
    }
}

function reducer(state, {type, cardRow, cardLine}){
    if (!state){
        return {
            mass : mass,
            massHide: massHide,
            isItFirstCard : true,
            lastCard : false,
            move : 0
        }
    }
    
    if (type === 'OPENCARD'){
        if(isItFreeze)
            return
        if(state.isItFirstCard){//перша карта
            return{
                ...state,
                [massHide]: massHide[cardRow][cardLine] = 1,
                isItFirstCard : false,
                lastCard : {cardRow, cardLine},
                move : state.move + 1 
            }
        }else{//НЕ перша карта
            isItFreeze = true                
            if(mass[cardRow][cardLine] === mass[state.lastCard.cardRow][state.lastCard.cardLine]){//Вгадала
                isItFreeze = false
                return{
                    ...state,
                    [massHide]: massHide[cardRow][cardLine] = 1,
                    isItFirstCard : true,
                    lastCard : false
                }
            }else{//НЕ Вгадала         
                setTimeout(() => {
                    store.dispatch({type: 'CLOSECARD', cardRow : cardRow, cardLine : cardLine})
                }, freezeTime )
                setTimeout(() => {
                    store.dispatch({type: 'CLOSECARD', cardRow : state.lastCard.cardRow, cardLine : state.lastCard.cardLine})
                }, freezeTime )
                return{
                    ...state,
                    [massHide]: massHide[cardRow][cardLine] = 1,
                    isItFirstCard : false,
                    lastCard : {cardRow, cardLine}
                }
            }            
        }
    }else if(type === 'CLOSECARD'){
        isItFreeze = false
        return{
            ...state,
            isItFirstCard : true,
            lastCard : false,
            [massHide]: massHide[cardRow][cardLine] = 0
        }        
    }
    return state
}

const store = createStore(reducer)
//const unsubscribe = store.subscribe(() => console.log(store.getState()))

store.subscribe(updateAll)
console.log(store.getState())

//REDUX block END

function updateAll(){    
    if(audio.paused && isMusicOn)
        audio.play()
    const djk = store.getState()
    console.log(djk)
    for(let d = 0; d < djk.mass.length; d++){
        for(let j = 0; j < djk.mass[d].length; j++){
            let cadrName = "card" + d + j
            if(djk.massHide[d][j]){
                const temp = document.getElementById([cadrName])
                temp.style.backgroundImage = `url(img/001/Card00${djk.mass[d][j]}m.jpg)`
            }else{
                const temp = document.getElementById([cadrName])
                temp.style.backgroundImage = `url(img/001/Cover001m.jpg)`
            }
        }
    }
    check1.innerText = "ЗНАЙДИ ПАРИ ОДНАКОВИХ КАРТ!!!   (Ходів зроблено: " + djk.move + " )"

    let doneCounter = 0

    for(let d = 0; d < djk.massHide.length; d++){        
        for(let j = 0; j < djk.mass[d].length; j++){
            doneCounter = doneCounter + djk.massHide[d][j]
        }
    }

    console.log("doneCounter")
    console.log(doneCounter)

    if(doneCounter === 12){
        setTimeout(() => {
            DN.style.display = "flex"
        }, 1500 )        
    }  
}

card00.onclick = () => {
    let myRow = 0
    let myLine = 0
    let n = store.getState()
    if(!isItFreeze){
        let nn = n.massHide[myRow]
        let x = nn[myLine]
        if(x){
            return
        }else{
            store.dispatch({type: 'OPENCARD', cardRow : myRow, cardLine : myLine})
        }
    }
}
card01.onclick = () => {
    let myRow = 0
    let myLine = 1
    let n = store.getState()
    if(!isItFreeze){
        let nn = n.massHide[myRow]
        let x = nn[myLine]
        if(x){
            return
        }else{
            store.dispatch({type: 'OPENCARD', cardRow : myRow, cardLine : myLine})
        }
    }
}
card02.onclick = () => {
    let myRow = 0
    let myLine = 2
    let n = store.getState()
    if(!isItFreeze){
        let nn = n.massHide[myRow]
        let x = nn[myLine]
        if(x){
            return
        }else{
            store.dispatch({type: 'OPENCARD', cardRow : myRow, cardLine : myLine})
        }
    }
}
card03.onclick = () => {
    let myRow = 0
    let myLine = 3
    let n = store.getState()
    if(!isItFreeze){
        let nn = n.massHide[myRow]
        let x = nn[myLine]
        if(x){
            return
        }else{
            store.dispatch({type: 'OPENCARD', cardRow : myRow, cardLine : myLine})
        }
    }
}

card10.onclick = () => {
    let myRow = 1
    let myLine = 0
    let n = store.getState()
    if(!isItFreeze){
        let nn = n.massHide[myRow]
        let x = nn[myLine]
        if(x){
            return
        }else{
            store.dispatch({type: 'OPENCARD', cardRow : myRow, cardLine : myLine})
        }
    }
}
card11.onclick = () => {
    let myRow = 1
    let myLine = 1
    let n = store.getState()
    if(!isItFreeze){
        let nn = n.massHide[myRow]
        let x = nn[myLine]
        if(x){
            return
        }else{
            store.dispatch({type: 'OPENCARD', cardRow : myRow, cardLine : myLine})
        }
    }
}
card12.onclick = () => {
    let myRow = 1
    let myLine = 2
    let n = store.getState()
    if(!isItFreeze){
        let nn = n.massHide[myRow]
        let x = nn[myLine]
        if(x){
            return
        }else{
            store.dispatch({type: 'OPENCARD', cardRow : myRow, cardLine : myLine})
        }
    }
}
card13.onclick = () => {
    let myRow = 1
    let myLine = 3
    let n = store.getState()
    if(!isItFreeze){
        let nn = n.massHide[myRow]
        let x = nn[myLine]
        if(x){
            return
        }else{
            store.dispatch({type: 'OPENCARD', cardRow : myRow, cardLine : myLine})
        }
    }
}

card20.onclick = () => {
    let myRow = 2
    let myLine = 0
    let n = store.getState()
    if(!isItFreeze){
        let nn = n.massHide[myRow]
        let x = nn[myLine]
        if(x){
            return
        }else{
            store.dispatch({type: 'OPENCARD', cardRow : myRow, cardLine : myLine})
        }
    }
}
card21.onclick = () => {
    let myRow = 2
    let myLine = 1
    let n = store.getState()
    if(!isItFreeze){
        let nn = n.massHide[myRow]
        let x = nn[myLine]
        if(x){
            return
        }else{
            store.dispatch({type: 'OPENCARD', cardRow : myRow, cardLine : myLine})
        }
    }
}
card22.onclick = () => {
    let myRow = 2
    let myLine = 2
    let n = store.getState()
    if(!isItFreeze){
        let nn = n.massHide[myRow]
        let x = nn[myLine]
        if(x){
            return
        }else{
            store.dispatch({type: 'OPENCARD', cardRow : myRow, cardLine : myLine})
        }
    }
}
card23.onclick = () => {
    let myRow = 2
    let myLine = 3
    let n = store.getState()
    if(!isItFreeze){
        let nn = n.massHide[myRow]
        let x = nn[myLine]
        if(x){
            return
        }else{
            store.dispatch({type: 'OPENCARD', cardRow : myRow, cardLine : myLine})
        }
    }
}


//Misuc  START
let audio = document.getElementById("audio")
let boombox = document.getElementById("boombox")

boombox.onclick = function(){
    isMusicOn = !isMusicOn
    if(audio.paused && !isMusicOn){
        audio.play();
    }else{
        audio.pause();
    }
}
//Misuc END