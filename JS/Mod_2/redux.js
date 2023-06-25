//debugger
const ourAdress = "http://shop-roles.node.ed.asmer.org.ua/graphql"
//const waitPic = 'https://cdn.dribbble.com/users/63485/screenshots/1309731/infinite-gif-preloader.gif'
const waitPic = 'http://homeworks.djkarapuz.fe.a-level.com.ua/JS/15_Async_promise/wait.gif'
const errorPic = "http://homeworks.djkarapuz.fe.a-level.com.ua/JS/15_Async_promise/error.png"
const emptyCartPic = "https://a9p9n2x2.stackpathcdn.com/wp-content/blogs.dir/1/files/2018/06/giffy-think.gif"
const emptyCatPic = "https://media.makeameme.org/created/oooooooohhhhhhhhh-theres-nothing.jpg"
let goodPhotoIndex

function createStore(reducer){
    let state = reducer(undefined, {}) //стартовая инициализация состояния, запуск редьюсера со state === undefined
    let cbs = []                     //массив подписчиков
    
    const getState = () => state            //функция, возвращающая переменную из замыкания
    const subscribe = cb => (cbs.push(cb),   //запоминаем подписчиков в массиве
                             () => cbs = cbs.filter(c => c !== cb)) //возвращаем функцию unsubscribe, которая удаляет подписчика из списка
                             
    const dispatch  = action => { 
        if (typeof action === 'function'){ //если action - не объект, а функция
            return action(dispatch, getState) //запускаем эту функцию и даем ей dispatch и getState для работы
        }
        const newState = reducer(state, action) //пробуем запустить редьюсер
        if (newState !== state){ //проверяем, смог ли редьюсер обработать action
            state = newState //если смог, то обновляем state 
            for (let cb of cbs)  cb(state) //и запускаем подписчиков
        }
    }
    
    return {
        getState, //добавление функции getState в результирующий объект
        dispatch,
        subscribe //добавление subscribe в объект
    }
}

function combineReducers(reducers){
    function totalReducer(state={}, action){
        const newTotalState = {}
        for (const [reducerName, reducer] of Object.entries(reducers)){
            const newSubState = reducer(state[reducerName], action)
            if (newSubState !== state[reducerName]){
                newTotalState[reducerName] = newSubState
            }
        }
        if (Object.keys(newTotalState).length){
            return {...state, ...newTotalState}
        }
        return state
    }
    return totalReducer
}

const reducers = {
    promise: promiseReducer, //допилить много имен для многих промисо
    auth: localStoredReducer(authReducer, 'authToken'), //часть предыдущего ДЗ
    cart: localStoredReducer(cartReducer, 'cart'), //часть предыдущего ДЗ
}

const totalReducer = combineReducers(reducers) 
function promiseReducer(state={},  {name, type, status, payload, error}){
    if (type === 'PROMISE'){
        return{
            ...state,   
            [name] : {status, payload, error}
        }
    }
    return state
}

function actionPending (name){
    return {name, type: 'PROMISE', status: 'PENDING'}
}

function actionFulfilled (name, payload) {
    return {name, type: 'PROMISE', status: 'FULFILLED', payload}
}

function actionRejected  (name, error){
    return {name, type: 'PROMISE', status: 'REJECTED',  error}
}

const actionPromise = (name, promise) =>
    async dispatch => { 
        dispatch(actionPending(name)) //сигнализируем redux, что промис начался
        try{
            const payload = await promise //ожидаем промиса
            dispatch(actionFulfilled(name, payload)) //сигнализируем redux, что промис успешно выполнен
            return payload //в месте запуска store.dispatch с этим thunk можно так же получить результат промиса
        }
        catch (error){
            dispatch(actionRejected(name, error)) //в случае ошибки - сигнализируем redux, что промис несложился
        }
    }

const store = createStore(totalReducer) //не забудьте combineReducers если он у вас уже есть
store.subscribe(() => console.log(store.getState()))

store.subscribe(() => {//Малює категорію
    const [,route] = location.hash.split('/')
    if (route !== 'category') return

    const {status, payload, error} = store.getState().promise.catById || {}//.имя одно
    if (status === 'PENDING'){
        main.innerHTML = `<img src=${waitPic} alt = "Зачекайте"/>`
    }
    if (status === 'FULFILLED'){
        const {name, goods} = payload
        main.innerHTML = `<h1>${name}</h1>`
        if(Array.isArray(goods) && goods.length > 0){
            for (const {_id, name, price, images} of goods){
                main.innerHTML += `<div class = "goodsDiv">
                <a href="#/good/${_id}"><img src = "http://shop-roles.node.ed.asmer.org.ua/${images[0].url}" alt = "${name}"></a>
                    <div class = "goods2Div">
                        <a href="#/good/${_id}">${name}</a>
                        <span class="spanPrice">${price} грн.</span>
                        <a href="#/good/${_id}"><button>Детальніше</button></a>
                    <div>
                <div>`
            }
        }else{
            main.innerHTML += `<h2>В цій категорії немає товарів</h2>
            <img style="max-width: 70%;" src=${emptyCatPic} atl="Пуста категорія" >`
        }        
    }
    if(status === 'REJECTED'){
        main.innerHTML = `
        <div style = "display: flex; min-width: 40vmin; min-height: 40vmin; align-items: center; justify-content: center;">
            <img src = ${errorPic} alt = "Помилка :'(">
        </div>`        
    }
})

store.subscribe(() => {//Малює товар++
    const [,route] = location.hash.split('/')
    if (route !== 'good') return

    const {status, payload, error} = store.getState().promise.goodById || {}//.имя одно
    if (status === 'PENDING'){
        main.innerHTML = `<img src=${waitPic} alt = "Зачекайте"/>`
    }
    if (status === 'FULFILLED'){
        const {name, price, _id, categories, description, images} = payload
        if(images.length <= 1){
            main.innerHTML = `
            <div class = "goodTable">
                <a href="#/category/${categories[0]._id}">
                    <span class="goodCategoryViewer">Категорія: ${categories[0].name}</span>
                </a>
                <h1>${name}</h1>
                <img src = "http://shop-roles.node.ed.asmer.org.ua/${images[0].url}" alt = "${name}"></a>
                <div class = "priceAndButton">
                    <h2>${price} грн</h2>
                    <button id="buyGoodButton" >Купити</button>
                </div>
                <div class = "goodDescription">${description}</div>
            </div>`
            const buyGoodButton = document.getElementById("buyGoodButton")
            buyGoodButton.onclick = () => {
                store.dispatch(actionCartAdd({_id, name, price, images}, 1))
            }            
        }else{
            main.innerHTML = `
            <div class = "goodTable">
                <a href="#/category/${categories[0]._id}"><span class="goodCategoryViewer">Категорія: ${categories[0].name}</span></a>
                <h1>${name}</h1>
                <img id="photoIMG" src = "http://shop-roles.node.ed.asmer.org.ua/${images[0].url}" alt = "${name}"></a>
                <br>
                <button id="nextPhotoButton">Наступне фото</button>
                <div class = "priceAndButton">
                    <h2>${price} грн</h2>
                    <button id="buyGoodButton" >Купити</button>
                </div>
                <div class = "goodDescription">${description}</div>
            </div>`
            goodPhotoIndex = 0
            nextPhotoButton.onclick = () => {
                goodPhotoIndex++
                if(goodPhotoIndex >= images.length)
                    goodPhotoIndex = 0
                photoIMG.src = `http://shop-roles.node.ed.asmer.org.ua/${images[goodPhotoIndex].url}`
            }
            const buyGoodButton = document.getElementById("buyGoodButton")
            buyGoodButton.onclick = () => {
                store.dispatch(actionCartAdd({_id, name, price, images}, 1))
            }            
        }
    }
    if(status === 'REJECTED'){
        main.innerHTML = `
        <div style = "display: flex; min-width: 40vmin; min-height: 40vmin; align-items: center; justify-content: center;">
            <img src = ${errorPic} alt = "Помилка :'(">
        </div>`        
    }
})
 
store.subscribe(() => {//Малє бокове меню категорій+-
    const {status, payload, error} = store.getState().promise.rootCats//.имя 
    if (status === 'FULFILLED' && payload){
        aside.innerHTML = ''
        for (const {_id, name} of payload){
            aside.innerHTML += `<a href="#/category/${_id}">${name}</a>`
        }
    }
})

/*function gql(adress, query, variables){//Виявляється тебе треба переробить :(
    return fetch(adress, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json',
            ...(store.getState().auth.token ? {authorization: "Bearer "+store.getState().auth.token} : {})
        },
        body: JSON.stringify({query, variables})
    }).then(res => res.json())
}*/

const gql=getGql(ourAdress)
function getGql (lockAdress){
    return function gql(query, variables={}){
        return fetch(lockAdress,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                ...(store.getState().auth.token ? {authorization: "Bearer "+store.getState().auth.token} : {})
            },
            body: JSON.stringify({query, variables}),
        }).then(result => result.json())
            .then(res=>{
                if(!res.data && res.errors){//Косячить на реєстрації
                    throw(new Error(JSON.stringify(res.errors)))
                }else{
                    return Object.values(res.data)[0]
                }
            })
    }
}

function gqlRootCats (){//++
    return gql(`query cats($q: String){
        CategoryFind(query: $q){
            _id name
        }
    }`, {q: JSON.stringify([{parent:null}])})
}

function gqlCatById(_id){//++
    return gql(`query catById($q: String){
        CategoryFindOne(query: $q){
          name parent {_id name} 
              subCategories{_id name}
              goods{_id name price images{url}}
        }
      }`, 
      {q : JSON.stringify([{_id}])}
      )
}

function gqlGoodById(_id){//++
    return gql(`query goodById($gID : String){
        GoodFindOne(query: $gID){
        _id
        price
        name
        description
        categories{
          _id
          name
        }
        images{
          url
        }
        }
    }`, 
      {gID : JSON.stringify([{_id}])}
      )
}

function actionRootCats () {
    return actionPromise('rootCats', gqlRootCats())
}

store.dispatch(actionRootCats())

const actionCatById = (_id) => actionPromise('catById', gqlCatById(_id))
const actionGoodById = (_id) => actionPromise('goodById', gqlGoodById(_id))

const actionLogin = (login, password) => actionPromise("gqlLogin", gqlLogin(login, password))
const actionRegistration = (login, password) => actionPromise("gqlRegistration", gqlRegistration(login, password))

function LoginForm(parent = document.body, open){
    const loginDiv = document.createElement("div")
    loginDiv.style.cssText = `display: flex; flex-direction: column; max-width: 400px; padding: 2%;`
    const inputLogin = document.createElement("input")
    const inputPassword = document.createElement("input")
    const btn = document.createElement("button")
    const btnLogin = document.createElement("button")
    this.state = open
    btnLogin.innerText = "LOGIN"
    btn.innerText = this.state ? "Hide" : "Show" 
    btnLogin.disabled = true
    parent.append(loginDiv)
    loginDiv.append(inputLogin)
    loginDiv.append(inputPassword)
    loginDiv.append(btn)
    loginDiv.append(btnLogin)
    
    inputLogin.oninput = () => {
        this.onLoginChange(inputLogin.value)
        this.loginButtonCheker()
    }

    inputPassword.oninput = () => {
        this.onPasswordChange(inputPassword.value)
        this.loginButtonCheker()
    }

    btnLogin.onclick = () => {                    
        store.dispatch(actionFullLogin(this.getLoginValue(), this.getPasswordValue()))
    }

    this.getLoginAndPassword = () => {
        if(this.getLoginValue().length > 0 && this.getPasswordValue().length > 0){
            console.log({login: this.getLoginValue(), password: this.getPasswordValue()})            
            return {login: this.getLoginValue(), password: this.getPasswordValue()}
        }else{
            return false//До цього дійти б не мало, але най буде
        }
    }        
    
    btn.onclick = () => {
        this.setOpen(!this.state)
        this.onOpenChange(this.state)
    }

    this.setLoginValue = (arg) => {
        inputLogin.value = arg
    }

    this.setPasswordValue = (arg) => {
        inputPassword.value = arg
    }

    this.getPasswordValue = () => {
        return inputPassword.value
    }

    this.getLoginValue = () => {
        return inputLogin.value
    }

    this.onPasswordChange = () => {            
        return inputPassword.value
    }

    this.onLoginChange = () => {            
        return inputLogin.value
    }

    this.onOpenChange = (arg) => {
        return arg
    }        

    this.setOpen = (state) => {
        this.state = state
        if(this.state){
            inputPassword.type='text'
        }else{
            inputPassword.type='password'
        }
        btn.innerText = this.state ? "Hide" : "Show" 
    }

    this.getOpen = () => {
        return this.state
    }

    this.loginButtonCheker = () => {
        if(this.getLoginValue().length > 0 && this.getPasswordValue().length > 0){
            btnLogin.disabled = false
        }else{
            btnLogin.disabled = true
        }
    }
    this.setOpen(open)
}

function RegisterForm(parent = document.body, open){
    const loginDiv = document.createElement("div")
    loginDiv.style.cssText = `display: flex; flex-direction: column; max-width: 400px; padding: 2%;`
    const inputLogin = document.createElement("input")
    const inputPassword = document.createElement("input")    
    const btnLogin = document.createElement("button")    
    btnLogin.innerText = "Реєстрація"    
    btnLogin.disabled = true
    parent.append(loginDiv)
    loginDiv.append(inputLogin)
    loginDiv.append(inputPassword)    
    loginDiv.append(btnLogin)

    inputLogin.oninput = () => {
        this.onLoginChange(inputLogin.value)
        this.loginButtonCheker()
    }

    inputPassword.oninput = () => {
        this.onPasswordChange(inputPassword.value)
        this.loginButtonCheker()
    }

    btnLogin.onclick = () => {
        store.dispatch(actionFullRegistration(this.getLoginValue(), this.getPasswordValue()))
    }

    this.getLoginAndPassword = () => {
        if(this.getLoginValue().length > 0 && this.getPasswordValue().length > 0){
            console.log({login: this.getLoginValue(), password: this.getPasswordValue()})
            return {login: this.getLoginValue(), password: this.getPasswordValue()}
        }else{
            return false//До цього дійти б не мало, але най буде
        }
    }        

    this.setLoginValue = (arg) => {
        inputLogin.value = arg
    }

    this.setPasswordValue = (arg) => {
        inputPassword.value = arg
    }

    this.getPasswordValue = () => {
        return inputPassword.value
    }

    this.getLoginValue = () => {
        return inputLogin.value
    }

    this.onPasswordChange = () => {            
        return inputPassword.value
    }

    this.onLoginChange = () => {            
        return inputLogin.value
    }

    this.loginButtonCheker = () => {
        if(this.getLoginValue().length > 0 && this.getPasswordValue().length > 0){
            btnLogin.disabled = false
        }else{
            btnLogin.disabled = true
        }
    }
}

function authReducer (state = {}, {type, token}) {
    if(type === "AUTH_LOGOUT"){
        return {}
    }
    if(type === "AUTH_LOGIN"){
        let payload = jwtDecode(token)
        if(payload){
            return {token, payload}
        }        
    }    
    return state
}

function jwtDecode(token){
    console.log("token: " + token)
    let midlePart
    let result
    if(token){
        let djk = token.split(".")
        midlePart = djk[1]
        if(midlePart){
            console.log("midlePart: " + midlePart)
            try {
                midlePart = atob(midlePart)
                console.log("midlePart: " + midlePart)
                result = JSON.parse(midlePart)    
            } catch (error) {
                return result
            }                
            console.log(result)
        }
    }
    return result
}

const actionAuthLogin  = token => ({type: 'AUTH_LOGIN', token})
const actionAuthLogout = ()    => ({type: 'AUTH_LOGOUT'})

//const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOiI2NDhjMzY5ODZhZDE3NDIzNThhZWZjZGIiLCJsb2dpbiI6IkRKS2FyYVBVWiIsImFjbCI6WyI2NDhjMzY5ODZhZDE3NDIzNThhZWZjZGIiLCJ1c2VyIl19LCJpYXQiOjE2ODY5MTA2NzF9.o0f-qqWA6YKVyUrrcOUhMDvTENozQcJzza7U3-ym_Ss"
//store.dispatch(actionAuthLogin(token))

store.subscribe(() => {//Малює Логін/Анлогін
    const payload = store.getState().auth.payload
    if(payload){
        username.innerHTML = payload.sub.login
        loginBar.innerHTML = "Вітаю, " + payload.sub.login
        logoutButton = document.createElement("button")
        logoutButton.innerText = "Вийти"
        logoutButton.onclick = () => {
            store.dispatch(actionAuthLogout())
        }
        loginBar.append(logoutButton)
        cartIcon.style.cssText = "display: block"
        const historyButton = document.createElement("button")
        historyButton.onclick = () => {
            location.hash = "#/history"
        }
        historyButton.innerText = "Історія"
        loginBar.append(historyButton)
    }else{
        username.innerHTML = " Не в системі "
        loginBar.innerHTML = ` `
        loginButton = document.createElement("button")
        loginButton.innerText = "Увійти"
        loginButton.onclick = () => {
            location.hash = "#/login"
            onhashchange()//На випадок, якщо ми з #/login "переходимо" на #/login, бо ця зараза не бачить змін
            /*loginBar.innerHTML = " "
            const loginForm = new LoginForm(loginBar)*/
        }
        loginBar.append(loginButton)

        registerButton = document.createElement("button")
        registerButton.innerText = "Реєстрація"
        registerButton.onclick = () => {
            location.hash = "#/register"
            onhashchange()//На випадок, якщо ми з #/register "переходимо" на #/register, бо ця зараза не бачить змін
            /*loginBar.innerHTML = " "
            const loginForm = new RegisterForm(loginBar)*/
        }
        loginBar.append(registerButton)
        //cartIcon.style.cssText = "display: none"
    }
})

function gqlLogin(login, password){//Запит на ЛОГІН, якщо воно колись запрацює...
    console.log(JSON.stringify({login : login, password : password}))
    return gql(`query Login($login : String, $password : String){
        login (login: $login, password :$password)
      }`,
      JSON.stringify({login : login, password : password})
    )
}

const actionFullLogin = (login, password) =>
    async dispatch => {        
        let token = await dispatch(actionLogin (login, password))
        token = token
        console.log(JSON.stringify(token))
        if(jwtDecode(token))
            dispatch(actionAuthLogin(token))
        else
            console.log(token)
    }

//Registration
function gqlRegistration(login, password){//Запит на РЕЄСТРАЦІЮ, якщо воно колись запрацює...
    //console.log(login)
    //console.log(password)
    //console.log("==============")
    console.log(JSON.stringify({login : login, password : password}))
    return gql(`mutation register($login:String, $password: String){
        UserUpsert(user: {login:$login, password: $password}){
            _id login createdAt
        }
    }`,
      JSON.stringify({login : login, password : password})
    )
}

const actionFullRegistration = (login, password) =>//--
    async dispatch => {
        await dispatch(actionRegistration(login, password))
        dispatch(actionFullLogin(login, password))
        /*let djk = await dispatch(actionRegistration(login, password))
        console.log("+++++++++++++" + djk)
        if(djk.errors === undefined){//Реєстрація без помилок
            if(djk.data.UserUpsert.login === login.toString()){
                store.dispatch(actionFullLogin(login, password))
            }
        }
        if(djk.data.UserUpsert === null){//Якщо така комбінація логін/пароль уже існують
            const temp = djk.errors[0].message.split(" ")
            console.log(temp)
            if (temp[0] === "User" && temp[1] === login && temp[2] === "already" && temp[3] === "exists") {
                store.dispatch(actionFullLogin(login, password))    
            }
            
        }*/
    }
//Login & Registration END

//localStorage
function localStoredReducer(originalReducer, localStorageKey){
    function wrapper(state, action){
        if(state === undefined){            
            try {
                return JSON.parse(localStorage[localStorageKey])
            } catch (error) {
                console.log("Ексепшен в localStoredReducer " + error)
            }
        }
        let newState = originalReducer(state, action)
        localStorage[localStorageKey] = JSON.stringify(newState)
        return newState
    }    
    return wrapper
}
//localStorage END

//cartReducer & cart
const actionCartAdd = (good, count=1) => ({type: 'CART_ADD', count, good})
const actionCartSub = (good, count=1) => ({type: 'CART_SUB', count, good})
const actionCartDel = (good) => ({type: 'CART_DEL', good})
const actionCartSet = (good, count=1) => ({type: 'CART_SET', count, good})
const actionCartClear = () => ({type: 'CART_CLEAR'})

function cartReducer(state={}, {type, count, good}){
    newState={...state}
    
    if(type==='CART_ADD'){
        if(newState[good._id]){
            newState[good._id].count+=count
        }else{
            newState={...newState, ...{[good._id]:{"count": count, good}}}
        }        
        return newState
    }
    if(type==="CART_SUB"){
        if(newState[good._id]){
            newState[good._id].count-=count
            if(newState[good._id].count < 1){
                delete newState[good._id]
            }
        }
        return newState
    }
    if(type==="CART_DEL"){
        if(newState[good._id]){
            delete newState[good._id]
        }
        return newState
    }
    if(type==="CART_SET"){
        if(newState[good._id] && count > 0){
            newState[good._id].count=count
        }else if(newState[good._id] && count <= 0){
            delete newState[good._id]
        }else if(count > 0){
            newState={...newState, ...{[good._id]:{'count': count, good}}}
        }
        return newState
    }
    if(type==='CART_CLEAR'){
        return {}
    }
    return newState
}

store.subscribe(showCart)

function showCart(){//Малює кошик
    const [,route] = location.hash.split('/')
    if (route !== 'cart') return
    main.innerHTML = ` `
    let finalSumm = 0
    const cartGoods = store.getState().cart

    if(Object.entries(cartGoods).length){
        const headOfCart = document.createElement("h1")
        headOfCart.innerText =`У кошику:`
        main.append(headOfCart)
        console.log(store.getState().cart)
        for(const [key, value] of Object.entries(cartGoods)){
            const goodInboxDiv = document.createElement("div")
            goodInboxDiv.className = "goodInbox"
            main.append(goodInboxDiv)
            const goodInboxImage = document.createElement("img")
            goodInboxImage.src = `http://shop-roles.node.ed.asmer.org.ua/${value.good.images[0].url}`
            goodInboxImage.alt = `${value.good.name}`
            goodInboxDiv.append(goodInboxImage)

            const firstDivInGoodInbox = document.createElement("div")
            goodInboxDiv.append(firstDivInGoodInbox)
            const nameOfGood = document.createElement("p")
            nameOfGood.innerHTML = `<b>Товар:</b> ${value.good.name}`
            firstDivInGoodInbox.append(nameOfGood)
            const countOfGood = document.createElement("p")
            countOfGood.innerHTML = `<b>Кількість:</b> ${value.count}`
            firstDivInGoodInbox.append(countOfGood)
            const priceOfGood = document.createElement("p")
            finalSumm += value.good.price * value.count
            priceOfGood.innerHTML = `<b>До сплати:</b> ${value.good.price * value.count}`
            firstDivInGoodInbox.append(priceOfGood)
            
            const secondDivInGoodInbox = document.createElement("div")            
            goodInboxDiv.append(secondDivInGoodInbox)
            const moreGoodButton = document.createElement("button")
            moreGoodButton.innerText = `Збільшити`
            moreGoodButton.onclick = () => {
                store.dispatch(actionCartAdd(cartGoods[key].good))
            }
            secondDivInGoodInbox.append(moreGoodButton)
            const lessGoodButton = document.createElement("button")
            lessGoodButton.innerText = `Зменшити`
            lessGoodButton.onclick = () => {
                store.dispatch(actionCartSub(cartGoods[key].good))
            }
            secondDivInGoodInbox.append(lessGoodButton)
            const deleteGoodButton = document.createElement("button")
            deleteGoodButton.innerText = `Видалити`
            deleteGoodButton.onclick = (() => {
                store.dispatch(actionCartDel(cartGoods[key].good))
            })
            secondDivInGoodInbox.append(deleteGoodButton)
        }
        const finalCost = document.createElement("span")
        finalCost.innerHTML = `<b>Всього до сплати: </b>${finalSumm} грн`
        finalCost.className = "finalCostSpan"
        main.append(finalCost)
        if(store.getState().auth.payload){
            const goodInboxEndDiv = document.createElement("div")
            goodInboxEndDiv.className = "goodInboxEndDiv"
            main.append(goodInboxEndDiv)
            const cancelCart = document.createElement("button")
            cancelCart.innerText = "Очистити кошик"
            cancelCart.onclick = (() => {
                store.dispatch(actionCartClear())
            })
            goodInboxEndDiv.append(cancelCart)
            const orederCart = document.createElement("button")
            orederCart.innerText = "Офрмити замовлення"
            orederCart.onclick = () => {
                store.dispatch(actionFullOrder())
            }
            goodInboxEndDiv.append(orederCart)
        }else{
            const goodInboxEndDiv = document.createElement("div")
            goodInboxEndDiv.className = "goodInboxEndDiv"
            goodInboxEndDiv.innerHTML = `<h2>Увійдіть (зареєструйтесь), щоб замовити товари</h2>`
            main.append(goodInboxEndDiv)            
        }
        
    }else{
        const emptyCartH1 = document.createElement("h1")
        emptyCartH1.innerText = "Кошик порожній"
        main.append(emptyCartH1)
        const emptyCartH2 = document.createElement("h2")
        emptyCartH2.innerText = "Якщо нічого не замовляти, то і \nне доведеться за щось платити."
        main.append(emptyCartH2)
        const emptyCartImg = document.createElement("img")
        emptyCartImg.src = emptyCartPic
        emptyCartImg.alt = "Кошик порожній"
        main.append(emptyCartImg)
    }
}

store.subscribe(counterPainter)

function counterPainter(){//Малює кількість товарів в кошику
    let counter = 0
    let djk = store.getState()
    for (const [key, value] of Object.entries(djk.cart)) {
        counter += value.count
    }
    cartIconCounter.innerText = counter
    return counter
}
//cartReducer END

//MakeOrder great again...
function actionFullOrder() {
    return  (dispatch, getState) => {
        const cartGoods = getState().cart
        console.log(cartGoods)
        if(Object.entries(cartGoods).length){
            const orderGoods = []
            for (const [key, value] of Object.entries(cartGoods)){
                //console.log(value)
                orderGoods.push({"good": {"_id" : value.good._id}, "count" : value.count})
            }
            console.log(orderGoods)
            store.dispatch(actionOrder(orderGoods))
            store.dispatch(actionCartClear())//Може якось інакше...
        }else{
            alert("Кошик порожній!")
        }
    }    
}

function actionOrder (orderGoods) {
    return actionPromise('order', gqlMakeOrder(orderGoods))
}

function gqlMakeOrder(orderGoods){//Запит на КУПІВЛЮ ТОВАРІВ з кошика++
    return gql(`mutation newOrder($orderGoods: [OrderGoodInput]) {
        OrderUpsert(order: {orderGoods: $orderGoods}) {
          _id
          createdAt
          total
        }
      }`,
      JSON.stringify({"orderGoods":orderGoods})
    )
}

function actionGetHistory(){
    return actionPromise('history', gqlHistory())
}    

function gqlHistory(){//Запит на ІСТОРІЮ++
    return gql(`query orderFind {
        OrderFind(query: "[{}]") {
          _id total createdAt orderGoods{
            good {_id  name} total price count
          }
        }
        }`)
}

store.subscribe(() => {//МАлює історію++
    const [,route] = location.hash.split('/')    
    if (route !== 'history') return

    const {status, payload, error} = store.getState().promise.history || {}
    if (status === 'PENDING'){
        main.innerHTML = `<img src=${waitPic} alt = "Зачекайте"/>`
    }
    if (status === 'FULFILLED'){
        main.innerHTML = ``
        for (const {_id, total, createdAt, orderGoods} of payload) {
            let tempDate = new Date(+createdAt)
            main.innerHTML += `
            <div class="orderInHistory">
                <span><b>ID замовлення: </b>${_id}</span>
                <span><b>Дата замовлення: </b>${tempDate.getDate() + "." + (tempDate.getMonth() + 1) + "." + tempDate.getFullYear() + " " + tempDate.toTimeString().slice(0, tempDate.toTimeString().indexOf(" "))}</span>
                    ${orderGoodsReader(orderGoods)}
                <span><b>Сума: </b>${total}</span>
            </div>`
        }
    }
    if(status === 'REJECTED'){
        main.innerHTML = `
        <div style = "display: flex; min-width: 40vmin; min-height: 40vmin; align-items: center; justify-content: center;">
        <img src = ${errorPic} alt = "Помилка :'(">
        </div>`        
    }

})

function orderGoodsReader(orderGoods){//Допомагає малювати історію, бо innerHTML сосе
    let result = ""
    for (const good of orderGoods){
        result += `
        <div class="goodInHistory">
            <span><b>Назва позиції: </b>${good.good.name}</span>
            <span><b>Кількість: </b>${good.count}</span>
            <span><b>Сума: </b>${good.total}</span>
        </div>`
    }
    return result
}
//MakeOrder great again... END

window.onhashchange = () => {
    const [,route, _id] = location.hash.split('/')

    const routes = {
        category() {
            console.log('category', _id)
            store.dispatch(actionCatById(_id))
        },
        good(){
            store.dispatch(actionGoodById(_id))
            console.log('good', _id)
        },
        login(){
            console.log('login')
            loginBar.innerHTML = " "
            const loginForm = new LoginForm(loginBar)            
        },
        register(){
            console.log('register')
            loginBar.innerHTML = " "
            const loginForm = new RegisterForm(loginBar)
        },
        cart(){
            console.log('cart')
            showCart()           
        },
        history(){
            console.log('history')
            store.dispatch(actionGetHistory())
        }
    }
    if (route in routes){
        routes[route]()
    }
}

/*;(async () => {
    const catQuery = `query cats($q: String){
                                        CategoryFind(query: $q){
                                            _id name
                                        }
                                    }`
    const cats = await gql(catQuery,  {q: "[{}]"})
    console.log(cats) //список категорій з _id name та всім таким іншим    
    
    /*const loginQuery = `query login($login:String, $password:String){
                            	login(login:$login, password:$password)
                        }`
    
    const token = await gql(ourAdress, loginQuery ,{login: "DJKaraPUZ", password: "StrongPass2#"})
    console.log(token)
})()*/

window.onhashchange()