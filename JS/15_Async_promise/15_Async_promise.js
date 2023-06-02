/*fetch basic ==== Дослідіть сайт swapi.dev, розгляньте JSON-и, які надаються цим сервісом 
                    За допомогою наступного коду отримати та вивести інформацію про Люка Скайвокера:
                    Напишіть функцію для відображення будь-якого JSON у формі таблиці. Функція повинна приймати два параметри:
                    -DOM - елемент, у якому будується таблиця
                    -JSON, який потрібно відобразити.
                    Використайте цю функцiю для виведення iнформацiї про Люка або iнший об'єкт з сервicу swapi.dev*/

{//debugger
    function jsonTableDrawer (parent = document.body, jsonObject){
        const myDiv = document.createElement("div")
        myDiv.style.background = "silver"
        parent.append(myDiv)
        const myTable = document.createElement("table")
        myTable.style.cssText = `border: 1px solid;`
        myDiv.appendChild(myTable)
        let djk = 1
        for (const [key, value] of Object.entries(jsonObject)){            
            const myRow = document.createElement("tr")
            if(djk % 2 === 1)
                myRow.style.backgroundColor = "grey"
            const myCell = document.createElement("td")
            myCell.style.cssText = `border: 1px solid; font-weight : bolder;`
            myCell.innerText = key
            myRow.appendChild(myCell)
            const myCell2 = document.createElement("td")
            myCell2.style.cssText = `border: 1px solid; overflow-wrap: anywhere;`
            myCell2.innerText = value
            myRow.appendChild(myCell2)
            myTable.appendChild(myRow)
            djk++
        }
    }

    fetch('https://swapi.dev/api/people/1/')
    .then(res => res.json())
    .then(luke => jsonTableDrawer(document.body, luke))
}

/*fetch improved ==== Розширити функцію відображення:
                    - Якщо одне з полів рядок чи масив.
                    - Якщо рядки у масивi чи рядок містять у собі https://swapi.dev/api/
                    - То виводити замість тексту рядки кнопку, при натисканні на яку:
                        - робиться fetch даних за цим посиланням
                        - функція відображення запускає сама себе (рекурсивно) для відображення нових даних у тому елементі. */
{//debugger
    function jsonTableDrawer (parent = document.body, jsonObject){
        const errorImg = document.createElement("img")
        errorImg.src = 'http://homeworks.djkarapuz.fe.a-level.com.ua/JS/15_Async_promise/error.png'        
        const myDiv = document.createElement("div")
        //myDiv.appendChild(errorImg)
        myDiv.style.background = "silver"
        parent.append(myDiv)
        const myTable = document.createElement("table")
        myTable.style.cssText = `border: 1px solid;`
        myDiv.appendChild(myTable)
        let djk = 1
        for (const [key, value] of Object.entries(jsonObject)){
            //console.log("key : " + key + "    " + "value : " + value)
            const myRow = document.createElement("tr")
            if(djk % 2 === 1)
                myRow.style.backgroundColor = "grey"
            const myCell = document.createElement("td")
            myCell.style.cssText = `border: 1px solid; font-weight : bolder;`
            myCell.innerText = key
            myRow.appendChild(myCell)
            //console.log(value + ("   ") + typeof(value) + ("   ") +  Array.isArray(value))
            if(typeof(value) === "string" && value.slice(0,4) === "http"){
                //console.log("LINK")
                const myCell2 = document.createElement("td")
                myCell2.style.cssText = `border: 1px solid; overflow-wrap: anywhere;`
                const btn = document.createElement("button")
                btn.onclick = () => {
                    fetch(value)
                    .then(res => res.json())
                    .then(link => jsonTableDrawer(document.body, link)).catch(error => {
                        console.log(error)                        
                        myDiv.appendChild(errorImg)
                    })
                }
                btn.innerText = value
                myCell2.appendChild(btn)
                myRow.appendChild(myCell2)
            }else if(typeof(value) === "object" && Array.isArray(value)){
                //console.log("ARRAY DETECTED " + value.length)
                if(!value.length){
                    const myCell2 = document.createElement("td")
                    myCell2.style.cssText = `border: 1px solid; overflow-wrap: anywhere;`
                    myCell2.innerText = "+=+=+=+=+=+"
                    myRow.appendChild(myCell2)
                }else{
                    const myCell2 = document.createElement("td")
                    myCell2.style.cssText = `border: 1px solid; overflow-wrap: anywhere;`
                    for (const element of value) {
                        const btn = document.createElement("button")
                        btn.onclick = () => {
                            fetch(element)
                            .then(res => res.json())
                            .then(link => jsonTableDrawer(document.body, link)).catch(error => {
                                console.log(error)                        
                                myDiv.appendChild(errorImg)        
                            })
                        }
                        btn.innerText = element
                        myCell2.appendChild(btn)
                        myRow.appendChild(myCell2)
                    }                    
                }
            }else{
                const myCell2 = document.createElement("td")
                myCell2.style.cssText = `border: 1px solid; overflow-wrap: anywhere;`
                myCell2.innerText = value
                myRow.appendChild(myCell2)                
            }
            myTable.appendChild(myRow)
            djk++
        }
    }

    fetch('https://swapi.dev/api/people/1/')
    .then(res => res.json())
    .then(luke => jsonTableDrawer(document.body, luke))
}

/*race ==== Використовуючи Promise.race, запустіть запит на API (swapi.dev) паралельно з delay. За результатом визначте, що 
            було швидше, запит по мережі або певний інтервал часу. Підберіть параметр delay так, щоб результат був невідомий 
            спочатку, і при багаторазових запусках швидше був то delay, то myfetch.*/
{
    const delay = ms => new Promise(ok => setTimeout(() => ok(ms), ms))
    Promise.race([delay(73), fetch('https://swapi.dev/api/people/1/')]).then(result => console.log(result))
}//Ну зараз "різні" результати в мене при 73 мс

/*Promisify: confirm ==== Промісифікуйте confirm. Напишіть функцію, яка повертає проміс, який переходить у стан fulfilled при натисканні 
                            "OK" та редагується при натисканні "Cancel". Функція повинна приймати рядок для confirm: */
{
    function confirmPromise(text){        
        return new Promise((good, bad) => {
            let djk = confirm(text)
            if(djk){
                good()
            }else{
                bad()
            }        
        })        
   }
   
   confirmPromise('Проміси це складно?').then(() => console.log('не так вже й складно'),
                                               () => console.log('respect за посидючість і уважність'))
   
}

/*Promisify: prompt ==== Аналогічно до попереднього завдання промісифікуйте prompt. У разі натискання "ОК" проміс резолвиться та його 
                            результатом стає текст, введений користувачем у вікні 'prompt'. У разі натискання "Скасування" - проміс 
                            реджектиться. Параметром функції буде текст повідомлення в prompt*/
{
    function promptPromise(text){
        return new Promise((good, bad) => {
            let djk = prompt(text)
            if(djk){
                good(djk)
                    return djk
            }else{
                bad()
            }
        })
   }

   promptPromise("Як тебе звуть?").then(name => console.log(`Тебе звуть ${name}`),
                                          () => console.log('Ну навіщо морозитися, нормально ж спілкувалися'))
}

/*Promisify: LoginForm ==== Проміссифікуйте конструктор LoginForm. У промісифіковану функцію передається DOM-елемент - батько для 
                            форми, У колбеку, призначеному для отримання логіна та пароля в момент натискання кнопки "Login...", 
                            який ви призначаєте в об'єкті LoginForm, зарезолвіт проміс. Результатом промісу має бути об'єкт із 
                            ключами login та password, ключі повинні містити значення полів введення. */
    //LoginForm Constructor ====  Оформіть попереднє завдання як функцію-конструктор. Продумайте та передбачте гетери, сетери та колбеки.
{//debugger
    function LoginAndPassword(parent = document.body, open=false){
        const loginDiv = document.createElement("div")
        loginDiv.style.cssText = `background-color: black; display: flex; flex-direction: column; max-width: 400px; padding: 2%;`
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
            this.getLoginAndPassword()
        }

        this.getLoginAndPassword = () => {            
            if(this.getLoginValue().length > 0 && this.getPasswordValue().length > 0){
                console.log({login: this.getLoginValue(), password: this.getPasswordValue()})
                return {login: this.getLoginValue(), password: this.getPasswordValue()}
            }else{
                return false//До цього дійти б не мало, але най буде
            }
        }

        const formPromis = new Promise((resolve) => {
            btnLogin.addEventListener('click' , () => {
                resolve(this.getLoginAndPassword())
            })
        })

        /*/Це чітерство треба переписать
        const formPromis = new Promise((resolve) => {
            btnLogin.onmousedown = () => {
                resolve(this.getLoginAndPassword())
            }
        })//*/
        
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
        return formPromis
    }

    function loginPromise(parent){
        function executor(resolve, reject){
            const form = new LoginAndPassword(parent)
            resolve(form)
        }        
        return new Promise(executor)
    }
    
    loginPromise(document.body).then(({login, password}) => console.log(`Ви ввели ${login} та ${password}`))
}