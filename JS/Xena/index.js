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
    check1.innerText = " Ходів зроблено: " + djk.move
}

card00.onclick = () => {
    if(!isItFreeze)
    store.dispatch({type: 'OPENCARD', cardRow : 0, cardLine : 0})
}
card01.onclick = () => {
    if(!isItFreeze)
    store.dispatch({type: 'OPENCARD', cardRow : 0, cardLine : 1})
}
card02.onclick = () => {
    if(!isItFreeze)
    store.dispatch({type: 'OPENCARD', cardRow : 0, cardLine : 2})
}
card03.onclick = () => {
    if(!isItFreeze)
    store.dispatch({type: 'OPENCARD', cardRow : 0, cardLine : 3})
}


card10.onclick = () => {
    if(!isItFreeze)
    store.dispatch({type: 'OPENCARD', cardRow : 1, cardLine : 0})
}
card11.onclick = () => {
    if(!isItFreeze)
    store.dispatch({type: 'OPENCARD', cardRow : 1, cardLine : 1})
}
card12.onclick = () => {
    if(!isItFreeze)
    store.dispatch({type: 'OPENCARD', cardRow : 1, cardLine : 2})
}
card13.onclick = () => {
    if(!isItFreeze)
    store.dispatch({type: 'OPENCARD', cardRow : 1, cardLine : 3})
}

card20.onclick = () => {
    if(!isItFreeze)
    store.dispatch({type: 'OPENCARD', cardRow : 2, cardLine : 0})
}
card21.onclick = () => {
    if(!isItFreeze)
    store.dispatch({type: 'OPENCARD', cardRow : 2, cardLine : 1})
}
card22.onclick = () => {
    if(!isItFreeze)
    store.dispatch({type: 'OPENCARD', cardRow : 2, cardLine : 2})
}
card23.onclick = () => {
    if(!isItFreeze)
    store.dispatch({type: 'OPENCARD', cardRow : 2, cardLine : 3})
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