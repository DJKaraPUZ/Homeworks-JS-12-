let red = 0
let green = 0;
let blue = 0;
let carIndex = 0
let goodDealIndex = -1
let sellCounter = 1
let inflationSpeed = 3//Одна з цін росте кожен Н-ний продаж
let inflationValue = 1.4 //У скільки разів збільшиться ціна
let angelsshare = 0.9
let priceCoefficient = 0.5 // Коєфіцієнт для "закупочної" ціни
let deputat = 24999
let voin = -2000

const buyButton = document.getElementById("buyButton")
const productAmountInput = document.getElementById("prodAmount")
const productTypeInput = document.getElementById("prodType")
const myMoneyInput = document.getElementById("myMoney")

const beerBox0 = document.getElementById("beerBox1")
const beerBox1 = document.getElementById("beerBox2")
const beerBox2 = document.getElementById("beerBox3")
const beerBox3 = document.getElementById("beerBox4")
const beerBox4 = document.getElementById("beerBox5")
const beerStore = document.getElementById("beerStore")

const marlStore = document.getElementById("marlStore")
const marlBox0 = document.getElementById("marlBox0")
const marlBox1 = document.getElementById("marlBox1")
const marlBox2 = document.getElementById("marlBox2")
const marlBox3 = document.getElementById("marlBox3")
const marlBox4 = document.getElementById("marlBox4")
const marlBox5 = document.getElementById("marlBox5")
const marlBox6 = document.getElementById("marlBox6")
const marlBox7 = document.getElementById("marlBox7")
const marlBox8 = document.getElementById("marlBox8")
const marlBox9 = document.getElementById("marlBox9")

const firstProductButton = document.querySelector("#button-holder :nth-child(1)")
const secondProductButton = document.querySelector("#button-holder :nth-child(2)")
const lastProductButton = document.querySelector("#button-holder :nth-child(3)")

const beerPriceOutput = document.getElementById("beerPriceOutput")
const hennPriceOutput = document.getElementById("hennPriceOutput")
const marlPriceOutput = document.getElementById("marlPriceOutput")

const beerOnStore = document.querySelector(".shop :nth-child(2)")
const hennOnStore = document.querySelector(".shop :nth-child(4)")
const marlOnStore = document.querySelector(".shop :nth-child(6)")

const moneyOnStore = document.getElementById("money")

const qr = document.getElementById("qr")
const qrText = document.querySelector("qr p")

const deputatScreen = document.getElementById("deputatBD")
const voinScreen = document.getElementById("voinBD")

const beerBoxArr = [beerBox0, beerBox1, beerBox2, beerBox3, beerBox4]
let beerBoxIndex = 5

const marlBoxArr = [marlBox0, marlBox1, marlBox2, marlBox3, marlBox4, 
                    marlBox5, marlBox6, marlBox7, marlBox8, marlBox9]

document.body.onmousemove = e => {
    const {layerX, layerY} = e
    green = layerX/document.body.clientWidth  * 252
    blue  = layerY/document.body.clientHeight * 252
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
    document.body.children[0].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
}

function getNewRed() {    
    red = (red + 25) % 255
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
    document.body.children[0].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
}

setInterval(getNewRed, 1000)

function blinkField(field, color = "red", times = 6, kd = 250){    
    field.style.backgroundColor = color
    let djk = true
    let counter = 0
    setInterval(() => {
        if(djk){
            field.style.backgroundColor = "white"
            djk = !djk
        }else{
            field.style.backgroundColor = color
            djk = !djk
        }
        counter++
        if(counter > times){
            field.style.backgroundColor = "white"
            return
        }            
    }, kd)
}

function setBeerBox(butlers = 100){    
    beerStore.innerHTML = ""
    for(let i = 0; i < Math.floor(butlers / 20); i++){
        beerStore.append(beerBoxArr[i])        
    }
}

function setMarlStore(sigarets = 100){    
    marlStore.innerHTML = ""
    for(let i = 0; i < Math.floor(sigarets / 10); i++){
        marlStore.append(marlBoxArr[i])        
    }
}

//Анімація доставки вантажівкою START
let curPosX = 0
let interval
let n = 3
let canMoveTruck = true
const img1 = document.getElementById("truck");

function move() {
    canMoveTruck = false
    img1.style.left = (curPosX += n) + "vmin";
    let djk = img1.style.left.slice(0, img1.style.left.indexOf("."))
    if (+djk > 50) {
        n = - 7
        updateAll()
    }
    if(+djk < -80){        
        canMoveTruck = true
        clearInterval(interval)
    }
}

function moveTruck(){
    if(canMoveTruck){
        curPosX = 0
        interval = setInterval(move, 100);
        n = 0.8
        canMoveTruck = false
        return true
    }
    return false
}
//Анімація доставки вантажівкою END

//Misuc  START
let audio = document.getElementById("audio")
let boombox = document.getElementById("boombox")

boombox.onclick = function(){
    if(audio.paused){
        audio.play();
    }else{
        audio.pause();
    }
}
//Misuc END

//Кнопка ХОЧУ! збирає наші забаганки з полів і шле їх...
buyButton.onclick = function letsTryToBuy(){
    //store.dispatch({type: 'BUY', productType: 'beer', productAmount: 5, money: 20})
    
    store.dispatch({type: 'BUY', productType: productTypeInput.value.trim().toLowerCase(), 
            productAmount: productAmountInput.value, money: myMoneyInput.value})
    myMoneyInput.value = 0
}

firstProductButton.onclick =  () => {
    productTypeInput.value = "beer"
}

secondProductButton.onclick =  () => {
    productTypeInput.value = "henn"
}

lastProductButton.onclick =  () => {
    productTypeInput.value = "marl"
}

//REDUX, але не METRO REDUX :( START

function Store(reducer){
    this.state = reducer(undefined, {}) 
    this.cbs = []
    this.getState  = () => this.state
    this.subscribe = cb => (this.cbs.push(cb), () => cbs = this.cbs.filter(c => c !== cb))
    this.dispatch  = action => { 
        const newState = reducer(this.state, action)
        if (newState !== this.state){
            this.state = newState
            for (let cb of this.cbs)  cb()
        }
    }
}

function reducer(state, {type, productType, productAmount, money}){
    if (!state){ //початкове прибирання в кіоску:
        return {
            beerPrice: 1,
            hennPrice: 3,
            marlPrice: 2,
            beer: 100,
            henn: 100,
            marl: 100,
            DBmoney: 0
        }
    }
    
    if (type === 'BUY'){//ПРОДАЄМ
        //Switch для ввода різних видів товарів
        if(productType === "beer" || productType === "піво" || productType === "півас" || productType === "рогань"){
            productType = "beer"
        }else if(productType === "henn" ||productType === "hennessy" ||productType === "бухло" ||productType === "коньяк"){
            productType = "henn"
        }else if(productType === "marl" || productType === "сіги" || productType === "marlboro" || productType === "цигарки"){
            productType = "marl"
        }else{        
            //alert("Проста тєкст па-дєбільнаму напісан!!!")
            console.log("productType: " + productType)
            blinkField(productTypeInput)
            DobkinSaysMassage(`ПРОСТА ТЕКСТ \nПА-ДЄБІЛЬНАМУ НАПИСАН`, 4000)
            return state
        }   
        
        let productPrice = productType + "Price"
        productPrice = state[productPrice]
        /*console.log("productPrice " + productPrice)
        console.log("money " + money)
        console.log("productAmount * productPrice >= money : " + (productAmount * productPrice <= money))*/
        
        if(productAmount <= 0){//ХОЧЕ КУПИТИ МЕНШЕ НУЛЯ
            blinkField(productAmountInput)
            DobkinSaysMassage(`Так. Атхаді асюдава...`, 4000)
        }

        if(productAmount * productPrice <= money){
            if(productAmount <= state[productType]){
                sellCounter++
                console.log("Успішний продаж " + productType + "  " + productAmount)
                return{                    
                    ...state,
                    [productType]: state[productType] - productAmount,
                    DBmoney : state.DBmoney + productPrice * productAmount
                }
            }else{//БІЛЬШЕ, НІЖ НА СКЛАДІ
                blinkField(productAmountInput)
                DobkinSaysMassage(`Многа хочєш, парніша. \nТут тєбє нє барабаха`, 4000)
            }            
        }else{//МАЛО ГРОШЕЙ
            blinkField(myMoneyInput, "red")
            DobkinSaysMassage(`У тєбя скушноє ліцо. Тєбє нікто БЕЗ ДЕНЕГ нічєго нє даст`, 4000)
        }
    }else if(type === 'NEWPRICE'){//НОВІ ЦІНИ
        let productPrice = productType + "Price"
        //productPrice = state[productPrice]
        console.log("НОВА ЦІНА " + productType)
        return{
            ...state,
            [productPrice]: (state[productPrice] * inflationValue).toFixed(1)
        }
    }else if(type === 'DELIVERY'){//ПОСТАВКА ТОВАРУ
        console.log("ДОСТАВКА ТОВАРУ " + productType + "  " + productAmount)
        return{
            ...state,
            [productType]: state[productType] + productAmount,
            DBmoney : state.DBmoney - ((money *  productAmount) + (money *  productAmount) * angelsshare)
        }
        //store.dispatch({type: 'DELIVERY', productType: needProduct, productAmount: 50, money: newPrice * 0.5})
    }
    return state
}

//const store = createStore(reducer)
const store = new Store(reducer)
const unsubscribe = store.subscribe(() => console.log(store.getState())) 
const subcriber = updateAll
store.subscribe(updateAll)

//REDUX block END

function updateAll(){    
    let djk = store.getState()
    beerPriceOutput.innerText = djk.beerPrice
    hennPriceOutput.innerText = djk.hennPrice
    marlPriceOutput.innerText = djk.marlPrice

    beerOnStore.innerText = "x" + djk.beer
    hennOnStore.innerText = "x" + djk.henn
    marlOnStore.innerText = "x" + djk.marl

    moneyOnStore.innerText = "$" + djk.DBmoney.toFixed(1)
    document.title = "РОЗОРИ ЛАРЬОК $" + djk.DBmoney.toFixed(1)

    delivetyChecker()

    if(djk.beer === 0 || djk.beer === 0 || djk.beer === 0){
        setTimeout(() => {
            DobkinSaysMassage("Гдє тот Геша? Єщє вчєра абєщал товар падвєзті...", 6000)
        }, 6000);
    }

    setBeerBox(djk.beer)
    setMarlStore(djk.marl)
    goodDeal()
    if(sellCounter % inflationSpeed === 0){
        sellCounter++
        let expensiveProduct = Math.random() * 3
        if(expensiveProduct <= 1){
            expensiveProduct = "beer"
        }else if(expensiveProduct <= 2){
            expensiveProduct = "henn"
        }else if(expensiveProduct <= 3){
            expensiveProduct = "marl"
        }else{
            alert("ТРИВОГА!")
        }
        store.dispatch({type: 'NEWPRICE', productType: expensiveProduct})
    }
    getNiceCar(djk.DBmoney)

    setTimeout(() => {
        hellOrHighWater(djk.DBmoney)
    }, 2000); 
}

function DobkinSaysMassage(massage, kd=5000){
    qr.style.display = "flex"
    qr.innerText = massage
    setTimeout(() => {
        qr.style.display = "none"
        
    }, kd);    
}

function goodDeal(){
    if(goodDealIndex === -1){
        goodDealIndex = 0
        return
    }
    const goodArr = ["В гарадской бюджет паступіт значітельно большє срєдств!", 
        "О! Тарговля ідьот!", "Скора куплю танк!", "Всє! Я рєшіл - іду в палітіку!", 
        "Вільна каса!!!", "Прібіль не щітал, но АБАРОТІ - БЄШЄНІЄ!"]

    if(goodDealIndex >= goodArr.length){
        goodDealIndex = 0
    }

    DobkinSaysMassage(goodArr[goodDealIndex])
    goodDealIndex++    
}

function getNiceCar(bablo){
    //car.setAttribute('src','')
    if(bablo < 50){
        carIndex = 0
    }else if(bablo < 150){
        carIndex = 1
    }else if(bablo < 250){
        carIndex = 2
    }else if(bablo < 500){
        carIndex = 3
    }else if(bablo < 1000){
        carIndex = 4
    }else if(bablo < 2000){
        carIndex = 5        
    }else if(bablo < 3000){
        carIndex = 6
    }else{
        carIndex = 7
    }
    car.setAttribute('src', 'img/car_'+ carIndex +'.png')    
}

function gepaDelivery(needProduct, needAmount){
    if(moveTruck()){
        moveTruck()
        console.log("Gepa tuta!!! " + needProduct)
        let needProductPrice = needProduct + "Price"
        //console.log(needProductPrice)
        let {[needProductPrice]: newPrice} = store.getState()
        //console.log(newPrice)
        store.dispatch({type: 'DELIVERY', productType: needProduct, productAmount: needAmount, money: newPrice * priceCoefficient })
        
    }
    return false
}

function delivetyChecker(){
    if(canMoveTruck){
        let djk = store.getState()
        if(djk.beer + djk.henn + djk.marl < 200){
            if(djk.beer <= djk.henn && djk.beer <= djk.marl){
                gepaDelivery("beer", 100 - djk.beer)
            }else if(djk.henn <= djk.beer && djk.henn <= djk.marl){
                gepaDelivery("henn", 100 - djk.henn)
            }else{
                gepaDelivery("marl", 100- djk.marl)
            }
        }
    }else{
        console.log("delivetyChecker()::: Машина занята!" )
    }
}

setInterval(() => {
    console.log("delivetyChecker() works. canMoveTruck = " + canMoveTruck)
    delivetyChecker()    
}, 10000);

updateAll()
DobkinSaysMassage(`Начной ларьок! Начной ларьок!!! \nЯ етай ночью адінок...`, 6000)
setBeerBox(100)
setMarlStore(100)

function hellOrHighWater(bablo){
    if(bablo > deputat){
        deputatScreen.style.display = "flex"
    }else if(bablo < voin){
        voinScreen.style.display = "flex"
    }
}