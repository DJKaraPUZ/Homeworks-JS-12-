/*Person Constructor ==== Переробить завдання createPerson на функцію конструктор Person. Для цього методи і властивості заносите 
                            не в об'єкт, що створюється, а в this всередині конструктора. */
    /*createPerson ==== Створіть функцію createPerson, яка приймає два параметри: name та surname, і повертає 
                    об'єкт із ключами name, surname, getFullName. getFullName має бути функцією, яка працює 
                    з об'єктом через this, а такОж готова до того, що в об'єкті потім додати ключ fatherName*/
{   
    function Person (name="НЕ_ЗАЗНАЧЕНО", surname="НЕ_ЗАЗНАЧЕНО"){
        this.name = name
        this.surname = surname
        this.getFullName = getFullName
        //this.fatherName
        function getFullName (){
            if(this.fatherName !== undefined){
                return this.name + " " + this.fatherName + " " + this.surname
            }else{
                return this.name + " " + this.surname
            }
        }
    }

    const a = new Person("Вася", "Пупкін")
    const a1 = new Person("Вася")
    const b = new Person("Ганна", "Іванова")
    const c = new Person("Єлизавета", "Петрова")

    console.log(a1.getFullName())
    console.log(a.getFullName()) // Василь Пупкін
    a.fatherName = 'Іванович' // Василь Іванович Пупкін
    console.log(a.getFullName()) // Василь Іванович Пупкін

    console.log(b.getFullName()) // Ганна Іванова
    console.log(c.getFullName())
}

/*Person Prototype ==== Переробіть попереднє завдання, винісши методи у прототип. Для цього замість присвоєння в this занесіть 
                        їх у об'єкт Person.prototype. Після цієї змiни все має працювати по старому:*/
{
    Person.prototype.getFullName = function getFullName(){
        if(this.fatherName !== undefined){
            return this.name + " " + this.fatherName + " " + this.surname
        }else{
            return this.name + " " + this.surname
        }
    }

    function Person (name="НЕ_ЗАЗНАЧЕНО", surname="НЕ_ЗАЗНАЧЕНО"){
        this.name = name
        this.surname = surname
    }

    const a = new Person("Вася", "Пупкін")
    const a1 = new Person("Вася")
    const b = new Person("Ганна", "Іванова")
    const c = new Person("Єлизавета", "Петрова")

    console.log(a1.getFullName())
    console.log(a.getFullName()) // Василь Пупкін
    a.fatherName = 'Іванович' // Василь Іванович Пупкін
    console.log(a.getFullName()) // Василь Іванович Пупкін

    console.log(b.getFullName()) // Ганна Іванова
    console.log(c.getFullName())
}

/*Store ==== Переробіть функцію createStore (та, яка сховище Redux) на конструктор Store. Прототип не використовуйте; залиште 
                змінні state, cbs та reducer замкнутими. Відповідно методи subscribe, dispatch та getState повинні бути оголошені 
                всередині функції-конструктора не можуть бути в прототипі. Перевірте перероблений конструктор на вашому ДЗ по кіоску;*/

{
    /** 
     * ЗРОБЛЮ  ОКРЕМИМ ФАЙЛОМ (ТЕКОЮ), БО Я НЕ УЯВЛЯЮ, ЯК ВСЮ ТУ ДОМАШКУ СЮДИ ЗАПИХНУТИ
     * ВИБАЧТЕ ЗА НЕЗРУЧНОСТІ 
     * 
     * UPD: Як виявилось зміни не дуже великі по масштабу. Нижче буде фрагменти. А все зароз лежить в теці поруч
     */

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

    const store = new Store(reducer)
}

/*Password ====  Напишіть функцію конструктор Password, яка буде в батьківському елементі (parent) створювати поле введення для пароля 
                    та кнопку/іконку/чекбокс, який перемикатиме режим перегляду пароля в полі введення. 
                    (видимий пароль чи ні, input type='text' або input type='password')
                    Параметри:
                    - parent - батьківський елемент
                    - open - стартовий стан
                    Методи:
                    - setValue/getValue - задають/читають значення
                    - setOpen/getOpen - задають/читають відкритість тексту у полі введення
                    Колбеки (функції зворотного виклику, що можливо, будуть задані зовні конструктора):
                    - onChange - запускається за подією oninput у полі введення, передає текст у колбек
                    - onOpenChange - запускається зі зміни стану відкритості пароля
                    Цi колбеки стануться в нагодi в наступних завданнях.
                    Для Password Verify додайте, також, метод setStyle, щоби мати можливiсть задати стиль input не втручаючись в код Password*/
{
    function Password(parent, open){
        const inputPassword = document.createElement("input")
        inputPassword.oninput = () => {
            this.onChange(inputPassword.value)
        }
        parent.append(inputPassword)
        const btn = document.createElement("button")
        btn.innerText = this.state ? "Hide" : "Show" 
        parent.append(btn)
        this.state = open
        btn.onclick = () => {
            this.setOpen(!this.state)
            this.onOpenChange(this.state)
        }

        this.setValue = (arg) => {
            inputPassword.value = arg
        }

        this.getValue = () => {
            return inputPassword.value
        }

        this.onChange = () => {            
            return inputPassword.value
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
        this.setOpen(open)
    }
    document.write("<br>")
    
    let p = new Password(document.body, true)
    let z = new Password(document.body, false)
    z.setValue('AU-AU-AU')
    console.log(z.getValue())
    
    p.onChange = data => console.log(data)  //буде корисно при виконаннi LoginForm та Password Verify
    p.onOpenChange = open => console.log(open)
    
    p.setValue('qwerty')
    console.log(p.getValue())
    
    p.setOpen(false)
    console.log(p.getOpen())
}

//LoginForm ==== За допомогою попереднього коду Password зробіть форму логіна, кнопка в якій буде активна лише якщо логин та пароль не порожні.

{//debugger
    function Password(parent, open){
        const inputPassword = document.createElement("input")
        inputPassword.oninput = () => {
            this.onChange(inputPassword.value)
        }
        parent.append(inputPassword)
        const btn = document.createElement("button")
        btn.innerText = this.state ? "Hide" : "Show" 
        parent.append(btn)
        this.state = open
        btn.onclick = () => {
            this.setOpen(!this.state)
            this.onOpenChange(this.state)
        }

        this.setValue = (arg) => {
            inputPassword.value = arg
        }

        this.getValue = () => {
            return inputPassword.value
        }

        this.onChange = () => {            
            return inputPassword.value
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
        this.setOpen(open)
    }
    
    document.write("<br>")

    const myDiv = document.createElement("div")
    myDiv.style.cssText = `display: flex; flex-direction: column; max-width: 320px`
    document.body.append(myDiv)
    const login = document.createElement("input")
    myDiv.append(login)
    const password = new Password(myDiv, true)
    const btnLogin = document.createElement("button")
    btnLogin.disabled = true
    myDiv.append(btnLogin)
    btnLogin.innerText = "LOGIN"

    login.oninput = password.onChange = () => {
        if(login.value !== "" && password.getValue().length > 0){
            btnLogin.disabled = false
        }else{
            btnLogin.disabled = true
        }
    }
}

//LoginForm Constructor ====  Оформіть попереднє завдання як функцію-конструктор. Продумайте та передбачте гетери, сетери та колбеки.
{
    function LoginAndPassword(parent = document.body, open){
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

    document.write("<br>")
    const loginForm = new LoginAndPassword(document.body, false)
    loginForm.onLoginChange = data => console.log("LOGIN: " + data)
    loginForm.onPasswordChange = data => console.log("PASSWORD: " + data)

}

/*Password Verify ==== За допомогою Password зробіть пару інпутів, які перевіряють введений пароль (у двох полях введення) на збіг. 
                        Підсвічуйте поля червоним кольором/бордером, коли паролі не збігаються При відкритому паролі у першому полі введення 
                        (яке реалізується за допомогою об'єкта класу Password друге поле введення має пропадати з екрану Таким чином:
                        - Коли Password у прихованому режимі - з'являється другий інпут (<input type='password'>) з паролем у прихованому режимі
                        - Коли Password у відкритому режимі – другий інпут зникає */
{
    function PasswordVerifyForm(parent = document.body){
        const myDiv = document.createElement("div")//Загальний блок
        myDiv.style.cssText = `background-color: black; display: flex; max-width: 400px; justify-content: space-between; padding: 2%;`
        parent.append(myDiv)
        const fieldDiv = document.createElement("div")//Блок під інпути
        fieldDiv.style.width = "80%"
        const buttonDiv = document.createElement("div")//Блок для кнопки
        buttonDiv.style.minWidth = "20%"
        buttonDiv.style.cssText = `display: flex; justify-content: center; align-self: start;`
        myDiv.append(fieldDiv)
        myDiv.append(buttonDiv)
        const inputPassword = document.createElement("input")
        inputPassword.style.width = "100%"
        fieldDiv.append(inputPassword)
        const inputPassword2 = document.createElement("input")
        inputPassword2.style.width = "100%"
        fieldDiv.append(inputPassword2)
        const btn = document.createElement("button")
        btn.innerText = this.state ? "Hide" : "Show" 
        buttonDiv.append(btn)
        this.state = true

        inputPassword.oninput = () => {
            this.onChangePassword()
            this.isMatch()
        }

        inputPassword2.oninput = () => {
            this.onChangePassword2()
            this.isMatch()
        }

        btn.onclick = () => {
            this.setOpen(!this.state)
            this.onOpenChange(this.state)
            this.hideOrShowPasswordInput(this.state)
        }

        this.hideOrShowPasswordInput = (arg) =>{
            if(arg){
                inputPassword2.style.display = "none"
            }else{
                inputPassword2.style.display = "block"
            }
        }

        this.setValue = (arg) => {
            inputPassword.value = arg
            inputPassword2.value = arg
            this.isMatch()
            
        }

        this.isMatch = () => {
            if(!(this.state) && (inputPassword.value !== inputPassword2.value)){
                inputPassword.style.cssText = `border: solid 2px red; width: 100%;`
                inputPassword2.style.cssText = `border: solid 2px red; width: 100%;`
            }else{
                inputPassword.style.cssText = `width: 100%;`
                if(!this.state){
                    inputPassword2.style.cssText = `width: 100%;`
                }
            }
        }

        this.getPasswordValue = () => {
            return inputPassword.value
        }

        this.getPassword2Value = () => {
            return inputPassword2.value
        }

        this.onChangePassword = () => {
            return inputPassword.value
        }

        this.onChangePassword2 = () => {
            return inputPassword2.value
        }

        this.onOpenChange = (arg) => {
            return arg
        }        

        this.setOpen = (state) => {
            this.state = state
            console.log(state)
            if(this.state){
                inputPassword.type='text'
            }else{
                inputPassword.type='password'
                inputPassword2.type='password'
            }
            btn.innerText = this.state ? "Hide" : "Show"
            this.isMatch()
            this.hideOrShowPasswordInput(state)
        }

        this.getOpen = () => {
            return this.state
        }

        this.setOpen(false)
    }

    document.write("<br>")
    const passwordVerifyForm = new PasswordVerifyForm()
}