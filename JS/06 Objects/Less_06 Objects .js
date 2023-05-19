/*Literals ==== Знайдіть кілька навколишніх об'єктів реального світу та створіть відповідні об'єкти Javascript. 
                Наприклад:
                const cat = {
                    //параметри кота
                }*/
{
    const cup = {
        volume: "0.4",
        color: "black",
        logo: "none"
    }

    const gamepad = {
        manufacturer: "SONY",
        platform : "PlayStation 5",
        brand: "DualSense",
        color: "white",        
    }

    const rozetka = {
        type: "e-shop",
        URL : "https://rozetka.com.ua/ua/",
        owner: "Temania Enterprises Ltd"
    }
}

/*Literals expand ==== Дайте можливість користувачеві додати будь-які дві властивості до цих об'єктів з 
                        будь-якими значеннями. Забезпечте введення назви ключа і значення через prompt 
                        прямо в літералі об'єкта {} */
{
    const cup = {
        volume: "0.4",
        color: "black",
        logo: "none",
        [prompt("Введіть новий ключ")] : prompt('Введіть значення для нового ключа'),
        [prompt("Введіть ще один новий ключ")] : prompt('Введіть значення для ще одного нового ключа')
    }

    const gamepad = {
        manufacturer: "SONY",
        platform : "PlayStation 5",
        brand: "DualSense",
        color: "white",
        [prompt("Введіть новий ключ")] : prompt('Введіть значення для нового ключа'),
        [prompt("Введіть ще один новий ключ")] : prompt('Введіть значення для ще одного нового ключа')
    }

    const rozetka = {
        type: "e-shop",
        URL : "https://rozetka.com.ua/ua/",
        owner: "Temania Enterprises Ltd",
        [prompt("Введіть новий ключ")] : prompt('Введіть значення для нового ключа'),
        [prompt("Введіть ще один новий ключ")] : prompt('Введіть значення для ще одного нового ключа')
    }
}

/*Literals copy ==== Нехай користувач введе ще одну властивість В змінну. Вставте цю змінну в новий об'єкт. 
                        Скопіюйте об'єкт із попереднього завдання на новий об'єкт. */
{
    const cup = {
        volume: "0.4",
        color: "black",
        logo: "none"
    }

    let newVariable = prompt('Введіть значення для нового ключа')

    const cupNew = {
        ...cup
    }
    cupNew.newVariable = newVariable
}

/*Html tree ====  Зробіть декларативну JSON-структуру для тегів вище, у якій:
                    -  кожен тэг буде об'єкто
                    -  ім'я тега буде полем tagName
                    -  Вкладені теги будуть у полі children
                    -  Набір аттрибутів тега буде в полі attrs.
                    Виведіть значення тексту в другій кнопці, використовуючи . та [].
                    Виведіть значення атрибуту id у другому input, використовуючи . та [].
                    <body>
                        <div>
                            <span>Enter a data please:</span><br>
                            <input type='text' id='name'>
                            <input type='text' id='surname'>
                        </div>
                        <div>
                            <button id='ok'>OK</button>
                            <button id='cancel'>Cancel</button>
                        </div>
                    </body>*/
{
    const body = {
        tagName : "body",
        attrs: {},
        children : [{
            tagName : "div",
            //attrs: {},
            children : [{
                tagName : "span",
                //attrs: {},
                children : ["Enter a data please:"]
            },
            {
                tagName : "br",
                //attrs: {},
                //children : []                
            },
            {
                tagName : "input",
                attrs: {
                    type :'text',
                    id : 'name'
                },
                //children : []                
            },
            {
                tagName : "input",
                attrs: {
                    type :'text',
                    id : 'surname'
                },
                //children : []                
            }]            
        },{
            tagName : "div",
            attrs: {},
            children : [{
                tagName : "button",
                attrs: {
                    id : 'ok'
                },
                children : ["OK"]
            },
            {
                tagName : "button",
                attrs: {
                    id : 'cancel'
                },
                children : ["Cancel"]
            }
        ]}]
    }

    alert(body.children[1].children[1].children[0])
    alert(body.children[0].children[3].attrs.id)
}

/*Parent ==== Додайте кожному об'єкту тега з попереднього завдання зв'язок з батьком, 
                використовуючи властивість parent та присвоєння */
{
    const body = {
        tagName : "body",
        attrs: {},
        children : [{
            tagName : "div",
            //attrs: {},
            children : [{
                tagName : "span",
                //attrs: {},
                children : ["Enter a data please:"]
            },
            {
                tagName : "br",
                //attrs: {},
                //children : []                
            },
            {
                tagName : "input",
                attrs: {
                    type :'text',
                    id : 'name'
                },
                //children : []                
            },
            {
                tagName : "input",
                attrs: {
                    type :'text',
                    id : 'surname'
                },
                //children : []                
            }]            
        },{
            tagName : "div",
            attrs: {},
            children : [{
                tagName : "button",
                attrs: {
                    id : 'ok'
                },
                children : ["OK"]
            },
            {
                tagName : "button",
                attrs: {
                    id : 'cancel'
                },
                children : ["Cancel"]
            }
        ]}]
    }
    body.children[0].parent = body
    body.children[1].parent = body
    body.children[0].children[0].parent = body.children[0]
    body.children[0].children[1].parent = body.children[0]
    body.children[0].children[2].parent = body.children[0]
    body.children[0].children[3].parent = body.children[0]
    body.children[1].children[0].parent = body.children[1]
    body.children[1].children[1].parent = body.children[1]
}

/*Change OK ==== Додайте (або змініть) будь-який введений користувачем атрибут тега <button id='ok'> 
                    із завдання HTML Tree. Також користувач вводить значення цього атрибута. */
{
    const body = {
        tagName : "body",
        attrs: {},
        children : [{
            tagName : "div",
            //attrs: {},
            children : [{
                tagName : "span",
                //attrs: {},
                children : ["Enter a data please:"]
            },
            {
                tagName : "br",
                //attrs: {},
                //children : []                
            },
            {
                tagName : "input",
                attrs: {
                    type :'text',
                    id : 'name'
                },
                //children : []                
            },
            {
                tagName : "input",
                attrs: {
                    type :'text',
                    id : 'surname'
                },
                //children : []                
            }]            
        },{
            tagName : "div",
            attrs: {},
            children : [{
                tagName : "button",
                attrs: {
                    id : 'ok'
                },
                children : ["OK"]
            },
            {
                tagName : "button",
                attrs: {
                    id : 'cancel'
                },
                children : ["Cancel"]
            }
        ]}]
    }
    body.children[1].children[0].attrs[prompt("Введіть новий ключ")] = prompt('Введіть значення для нового ключа')
}

/*Destructure ==== Використовуючи деструктуризацію структури із завдання HTML Tree:
                    - Виведіть значення тексту у тезі span,
                    - Виведіть значення тексту в другій кнопці      ---та---
                    - Виведіть значення атрибуту id у другому input.*/
{
    const body = {
        tagName : "body",
        attrs: {},
        children : [{
            tagName : "div",
            children : [{
                tagName : "span",
                children : ["Enter a data please:"]
            },
            {
                tagName : "br",
            },
            {
                tagName : "input",
                attrs: {
                    type :'text',
                    id : 'name'
                },
            },
            {
                tagName : "input",
                attrs: {
                    type :'text',
                    id : 'surname'
                },
            }]            
        },{
            tagName : "div",
            attrs: {},
            children : [{
                tagName : "button",
                attrs: {
                    id : 'ok'
                },
                children : ["OK"]
            },
            {
                tagName : "button",
                attrs: {
                    id : 'cancel'
                },
                children : ["Cancel"]
            }
        ]}]
    }

    const {children: [{children: [{children: spanText}]}]} = body
    alert("Значення тексту у тезі span = " + spanText)
    const {children: [,{children: [,{children: buttonText}]}]} = body
    alert("Значення тексту в другій кнопці = " + buttonText)
    const {children: [{children: [,,,{attrs:{id: djk}}]}]} = body
    alert("Значення атрибуту id у другому input = " + djk)
}


/*Destruct array ==== напишіть код, який використовуючи деструктуризацію покладе:
                        - парні числа в змінні even1, even2,
                        - непарні в odd1, odd2, odd3,
                        - Букви в окремий масив  */
{
    let arr = [1,2,3,4,5, "a", "b", "c"]
    const [odd1, even1, odd2, even2, odd3, ...restarr] = arr
    alert(`Початковий масив: arr = [1,2,3,4,5, "a", "b", "c"]
    odd1: ${odd1} even1: ${even1} odd2: ${odd2} even2: ${even2} odd3: ${odd3} букви: ${restarr}`)
}


/*Destruct string === напишіть код, який використовуючи деструктуризацію покладе:
                        - Число в змінну number
                        - літеру a в змінну s1
                        - літеру b у змінну s2
                        - літеру c у змінну s3 */
{
    let arr = [1, "abc"]
    const [number, [s1, s2, s3]] = arr
    alert(`Початковий масив: arr = [1, "abc"]
    number: ${number}  s1: ${s1}  s2: ${s2}  s3: ${s3}`)
}


/*Destruct 2 ==== вийміть використовуючи деструктуризацію імена дітей у змінні name1 та name2 */
{
    let obj = {name: 'Ivan',
        surname: 'Petrov',
        children: [{name: 'Maria'}, {name: 'Nikolay'}]}
    const {children: [{name: name1}, {name: name2}]} = obj
    alert(`name1: ${name1}   name2: ${name2}`)
}

/*Destruct 3 ==== вийміть використовуючи деструктуризацію об'єктів 
                    два перші елементи та довжину масиву в змінні a, b та length */
{
    let arr = [1,2,3,4, 5,6,7,10]
    const {0: a, 1: b, length} = arr
    alert(`arr = [1,2,3,4, 5,6,7,10]
    a: ${a}  b: ${b}  length: ${length}`)
}


/*Copy delete ==== Зробіть копію одного з об'єктів із завдання Literals без ключа, 
                    який введе користувач, з використанням деструктурiзацiї та rest.*/
{
    const gamepad = {
        manufacturer: "SONY",
        platform : "PlayStation 5",
        brand: "DualSense",
        color: "white",        
    }
    const {[prompt(`Який ключ видалити?`)]: djk, ...gamepadNew} = gamepad
}

/*Currency real rate ==== Нижче наведено код, який завантажує актуальну інформацію про курси 
                            валют. Скопіюйте посилання з нього вставте в браузер заради інтересу. 
                            Реалізуйте калькулятор обміну валют таким чином:
                            - Користувач вводить вхідну валюту
                            - Користувач вводить валюту, в яку відбувається конвертація
                            - Користувач вводить суму у вхідній валюті
                            - Користувач бачить результат конвертації
                            Врахуйте, що користувач може ввести якусь дичину або назву валют у неправильному регістрі
                            Врахуйте, що користувач може ввести якусь дичину або назву валют у неправильному регістрі*/
{
    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json()).then(data => {
        //ця функція запускається коли дані завантажуються.
        //Інший код працює РАНIШЕ.
        //тільки тут є змінна data з завантаженими даними
        //console.log(data)// Вивчіть структуру, що отримується з сервера в консолі
        const{rates: djk}  = data
        const userCurrency1 = prompt(`Оберіть валюту, яку плануєте продавати:\n` +  Object.keys(djk)).trim().toUpperCase()
        const amount = +prompt("Скільки саме ви хочете продати?")
        const userCurrency2 = prompt(`Оберіть валюту, яку плануєте купувати:\n` +  Object.keys(djk)).trim().toUpperCase()
        if(userCurrency1 === userCurrency2){
            alert(`На цьому обмін вважається таким, що відбувася. Чека не дамо :)`)
        }else{
            const {[userCurrency1]: uCurrency1 = "ERORR", [userCurrency2]: uCurrency2 = "ERORR"} = djk
            if(uCurrency1 !== "ERORR" && uCurrency2 !== "ERORR" && !(isNaN(amount)) && amount > 0){                
                alert(`При обміні ${amount} ${userCurrency1} на ${userCurrency2}, ви отримаєте:
                ${amount} / ${uCurrency1} x ${uCurrency2} = ${amount / uCurrency1 * uCurrency2} ${userCurrency2}`)
            }else{
                alert('Ви помилились при вводі даних')
            }
        }
    })
}

/*Currency drop down ==== Зробіть список, що випадає, з назвами всіх валют, використовуючи код з минулого завдання і накопичення 
                            HTML-тегів у рядковій змінній. Для списків, що випадають, в HTML передбачені теги <select> і <option>*/
{
    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json()).then(data => {
        const{rates: djk}  = data
        const currencies = Object.keys(djk)
        let   str = "<select>"
        for (const currency of currencies){
            str += "<option> " + currency + " </option>"
        }
        str+= "</select>"
        document.write(str) 
        })  
}

/*Currency table ==== Зробіть двовимірну таблицю з курсами між усіма можливими парами валют на кшталт таблиці Піфагора, 
                        використовуючи код із завдання Currency real rate. Використовуйте тільки один запит на сервер.
                        Використовуйте розрахунок кроскурсу для обчислення курсу між будь-якою парою валют*/
{
    {
        fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json()).then(data => {
            const{rates: djk}  = data
            let str = `<style>table, td {border: 1px solid; text-align: center}</style>`
            str += "<table><tr><th></th>"
            for (const currencyName of Object.keys(djk)){
                str += "<th>" + currencyName + "</th>"   
            }
            str += "</tr>"
            for (const [key1, value1] of Object.entries(djk)){
                str += "<tr><th>" + key1 + "</th>"
                for(const [key2, value2] of Object.entries(djk)){
                    if(key1 === key2){
                        str += "<td>" + "-1-" + "</td>"    
                    }else{
                        str += "<td>" + 1 * (value1 / value2).toFixed(3) + "</td>"
                    }                    
                }
                str += "</tr>"
            }            
            str += "</table>"
            document.write(str)
        })
    }
}

/*Form ==== Напишіть код, який будь-якого об'єкта створює форму HTML. Наприклад для такого об'єкту */
{
    //debugger
    const convecter = obj =>{//Метод, який з об'єкта будує рядок коду
        let result = "<form>"
        for(const [key, value] of Object.entries(obj)){
            result += "<label>" + key + ":" + " <input type="
            if(typeof(value) == "number"){
                result += `"number"`
            }else if(typeof(value) == "string"){
                result += `"text"`
            }else if(typeof(value) == "boolean"){
                result += `"checkbox"`
            }else{
                console.log("Проблема на визначенні типа для INPUT")
            }
            if(typeof(value) == "number" || typeof(value) == "string"){
                result += ` value="` + value + `"`
            }else if(typeof(value) == "boolean"){
                if(value == true){
                    result += " checked "
                }
            }else{
                console.log("Проблема на визначенні типа для VALUE")
            }
            result += "/>" + "</label>"
        }
        result += "</form>"
        console.log(result)
        return result
    }

    const car = {//Об'єкт тестовий
        "Name":"chevrolet chevelle malibu",
        "Cylinders":8,
        "Displacement":307,
        "Horsepower":130,
        "Weight_in_lbs":3504,
        "Origin":"USA",
        "in_production": false,
        "TEST_CHKBOX": true//===========
    }

    document.write(convecter(car))
}

/*Table ==== Дано будь-який масив з об'єктами Сформувати таблицю (використовуючи накопичення тегів HTML у рядку):*/
{
    const arr = [{//Об'єкт тестовий
        "Name":"chevrolet chevelle malibu",
        "Cylinders":8,
        "Displacement":307,
        "Horsepower":130,
        "Weight_in_lbs":3504,
        "Origin":"USA"
        },
        {
        "Name":"buick skylark 320",
        "Miles_per_Gallon":15,
        "Cylinders":8,
        "Displacement":350,
        "Horsepower":165,
        "Weight_in_lbs":3693,
        "Acceleration":11.5,
        "Year":"1970-01-01",
        },
        {
        "Miles_per_Gallon":18,
        "Cylinders":8,
        "Displacement":318,
        "Horsepower":150,
        "Weight_in_lbs":3436,
        "Year":"1970-01-01",
        "Origin":"USA"
        },
        {
        "Name":"amc rebel sst",
        "Miles_per_Gallon":16,
        "Cylinders":8,
        "Displacement":304,
        "Horsepower":150,
        "Year":"1970-01-01",
        "Origin":"USA"
        }
    ]

    const arrKeys = {}

    for(const obj of arr){ //Збираємо ключі, як умієм :(
        for(const [key, value] of Object.entries(obj)){
            arrKeys[key] = key
        }
    }

    let str = `<style>table, td {border: 1px solid; text-align: center}</style>`
    str += "<table><tr>"

    for (const key of Object.keys(arrKeys)){//Шапка таблиці
        str += "<th>" + key + "</th>"   
    }
    str += "</tr>"
    for(const obj of arr){//Перебираємо об'єкти в масиві
        str += "<tr>"
        for (const key of Object.keys(arrKeys)){//Перебираємо зібрані ключі
            str += "<td>"
            if(obj[key])//Щоб прибрати undefined
                str +=  obj[key]
            else
                str +=  " "//
            str += "</td>"
        }
        str += "<tr>"
    }
    str += "</table>"
    document.write(str)        
}