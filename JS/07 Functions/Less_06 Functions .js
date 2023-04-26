/*Temperature ==== Оформіть Temperature як функцію, яку параметром передається температура в одній системі, а повертається до іншої. 
                    Жодних prompt та console.log у коді бути не повинно, якщо ви хочете надалі користуватися цією функцією будь-де в 
                    коді зручно. Чи потрібен блок коду функції для вирішення цього завдання?*/
    /*Number: temperature ==== За допомогою prompt запитати у користувача температуру в градусах Цельсія та перевести їх у Фаренгейти та/або навпаки.
                                C => F за формулою (c × 1.8) + 32 = f °F

    let degree = +prompt("Скільки градусіів Цельсія треба конвертувати у градуси Фарангейти?")
    if(!isNaN(degree) ){
        alert(degree + ' градусів Цельсія становлять ' + (degree * 1.8 + 32) + " градусів Фаренгейта")
    }
    else{
        alert('Ви помилились при вводі даних ' )
    }*/
    
{
    const convectorC2F = temperatureC => (!isNaN(temperatureC) ? (temperatureC * 1.8 + 32) : false)

    alert(convectorC2F(-30))
    alert(convectorC2F(45))
    alert(convectorC2F("0"))
    alert(convectorC2F("fg"))
    alert(convectorC2F(!NaN))

}

/*RGB ==== Оформіть Number: RGB як функцію, яку параметрами передаються три числа (r, g, b) => . Функція повинна повертати рядок у нотації #RRGGBB. 
            Використовуючи умови або тернарний оператор Досягніть що б у результаті завжди було 7 символів, навіть коли значення кольору менше 15ти. 
            Чи потрібний блок коду цієї функції?
    /*Number: RGB ==== За допомогою prompt організуйте введення трьох констант red, green, blue у десятковій системі. 
                        Створіть із них CSS-колір у форматі #RRGGBB використовуючи шістнадцяткову систему числення. 
                        Значення менше 16ти поки що можна не враховувати.

    let red = +prompt("RED (Має бути більше за 15)")
    let green = +prompt("GREEN (Має бути більше за 15)")
    let blue = +prompt("BLUE (Має бути більше за 15)")
    let rgb
    if(!isNaN(red) && !isNaN(green) && !isNaN(blue)){
        if(red >15 && green > 15 && blue > 15 && red < 256 && green < 256 && blue < 256){
            alert(rgb = "#" + red.toString(16).toUpperCase() + green.toString(16).toUpperCase() + blue.toString(16).toUpperCase())
        }
        else{
            alert('Числа, які ви вводите мають бути більші за 15 та меншими за 256')
        }
    }
    else{
        alert('Ви помилились при вводі даних')
    */
{
    const convectorRedGreenBlue2RGB = (red, green, blue) => {
        let rgb = "#"
        if(!isNaN(red) && !isNaN(green) && !isNaN(blue) && red < 256 && green < 256 && blue < 256){            
            rgb += red <=15 ?  "0" + red.toString(16).toUpperCase() : red.toString(16).toUpperCase()
            rgb += green <=15 ?  "0" + green.toString(16).toUpperCase() : green.toString(16).toUpperCase()
            rgb += blue <=15 ?  "0" + blue.toString(16).toUpperCase() : blue.toString(16).toUpperCase()
            return rgb            
        }
        else
            return false
    }

    alert(convectorRedGreenBlue2RGB(255,255,255))
    alert(convectorRedGreenBlue2RGB(25,25,212))
    alert(convectorRedGreenBlue2RGB(0,0,0))
    alert(convectorRedGreenBlue2RGB(10,10,10))
    alert(convectorRedGreenBlue2RGB(10,14,256))
    alert(convectorRedGreenBlue2RGB(10,10,256))
    alert(convectorRedGreenBlue2RGB(255,"WTF",255))
}

/*Flats ==== Оформіть Number: flats як функцію. Продумайте достатню кількість параметрів для розв'язання задачі. 
                Функція повинна повертати об'єкт виду {entrance, floor}, де entrance - номер падiка, 
                floor - номер поверху, на якому знаходиться квартира.*/                    
{
    const deliveryBoy = (roomNumber, floors, roomsOnFloor) => {
        maxPorchRooms = roomsOnFloor * floors
        porch = Math.ceil(roomNumber / maxPorchRooms)
        floor = Math.ceil((roomNumber - (maxPorchRooms * (porch - 1))) / roomsOnFloor )
        return {entrance : porch, floor : floor}
    }
    
    deliveryBoy(44, 5, 3)
}

/*Credentials ==== Оформіть завдання String: credentials як функцію без параметрів. Використовуйте функцію capitalize із домашнього завдання з масивів. 
                    Функція повинна містити виклики prompt та повертати об'єкт виду {name, surname, fatherName, fullName} 
    /*String: credentials ==== Запитайте у користувача ПІБ, використовуючи prompt тричі. Викиньте зайві прогалини, використовуючи .trim
                            Використовуючи String: capitalize зробіть так, щоб кожне слово у ПІБ було з великої літери, а решта - маленькі
                            Об'єднайте ці три рядки в один змінний fullName і виведіть кудись (alert, console.log). Не забудьте прогалини між словами.*/

{   
    const credentials = () =>{
        let uName1 = prompt ("Введіть своє призвіще")
        let uName2 = prompt ("Введіть своє ім'я")
        let uName3 = prompt ("Введіть своє по-батькові")
        if(uName1 && uName2 && uName3){
            uName1 = capitalize(uName1.trim())
            uName2 = capitalize(uName2.trim())
            uName3 = capitalize(uName3.trim())
            let uFullName = uName1 + " " + uName2 + " " + uName3
            return {name : uName2, surname : uName1, fatherName: uName3, fullName : uFullName}
        }else{
            return false
        }
    } 

    const capitalize = str => {
        let result
        result = str[0].toUpperCase() + str.slice(1).toLowerCase()
        return result
    }

    credentials()
}

/*New line ==== Оформіть завдання String: new line як функцію з параметром-рядком. Функція повинна повертати рядок із справжніми переносами.
    /*String: new line ==== Попросіть користувача ввести рядок через prompt. prompt не дозволяє вводити БАГАТОрядкові рядки. 
                        Дамо користувачеві таку можливість - Користувач може вводити \n як маркер нового рядка.
                        Використовуючи split та join зробіть цей рядок воістину багаторядковим і виведіть в консоль або через alert.
    {
        let string = prompt ("Введіть кілька слів, розділивши їх за допомогою '\\n' ")
        string = string.split('\\n')
        string = string.join('\n')
        alert(string)
    }*/ 

{
    const newLine = string => {        
        string = string.split('\\n')
        string = string.join('\n')
        return string
    }

    alert(newLine("Ніби\nмає\nпрацювати\n???"))
    alert(newLine("Ура!\nВоно, як Тимошенчиха - \nВОНО\nПРАЦЮЄ!!!"))    
}

/*Prompt OR ==== Оформіть завдання Prompt: OR як функцію, яка приймає рядок для prompt та значення за замовчуванням. 
                    Функція повинна повертати введений текст або значення за замовчуванням у разі відмови користувача вводити щось. 
                    !!!!Використовуйте функцію без блоку коду (функція одного виразу)
    /*Prompt: or ==== Для завдання Number: age використовуючи АБО || вивести повідомлення про помилку (alert) 
                        якщо користувач не введе вік або натисне скасування (тобто prompt видасть порожній рядок або null, що інтерпретується як false).
        //Number: age ==== За допомогою prompt запитати у користувача його вік та підрахувати рік народження. Рік народження вивести за допомогою alert.
        let currentYear = 2023
        let year = prompt("Скільки вам років?") || alert('Ви не вказали свій вік. Залишайтесь вдома - СБУ уже в дорозі')
        if(year){
            year = currentYear - +year
            if(!isNaN(year) ){
                alert('Ви народились в ' + year)
            }
            else{
                alert('Ви помилились при вводі даних ' )
            }
        }*/
{
    const input = (promtString, defaultString) => (prompt(promtString) || defaultString)//Функція

    let currentYear = 2023
    let year = input("Скільки вам років?", 35)//Старий код, який використовує нову функцію
    if(year){
        year = currentYear - +year
        if(!isNaN(year) ){
            alert('Ви народились в ' + year)
        }
        else{
            alert('Ви помилились при вводі даних ' )
        }
    }//Я не впевнений, що правильно зрозумів завдання :(
}

/*Login And Password ==== Оформіть завдання Login And Password як функцію, яка приймає два параметри - правильний логін та пароль і повертає true 
                            якщо логін та пароль введені користувачами вірні, або false якщо користувач не зміг. Функція повинна містити в собі 
                            виклики prompt для введення логіну та пароля користувачем.
    /*Login and password ==== Напишіть код, який запитує логін, перевіряє його на вірність, якщо логін вірний,просить 
                            ввести пароль і перевіряє його. В разі розбіжності логіну чи пароля виводити alert з текстом помилки. 
                            У разі успішного логіну – alert з привітанням. Правильні логін: admin та пароль: qwerty. Використовуйте вкладені if та else.
    {
        let correctLogin = "admin"
        let correctPassword = "qwerty"
        let userLogin
        let userPassword        
        if((userLogin = prompt ("Введіть свій логін")) === correctLogin){
            if((userPassword= prompt ("Введіть пароль")) === correctPassword){
                alert('Ви успішно пройшли авторизацію')
            }else{
                alert('Ви помилились при вводі ПАРОЛЮ')
            }
        }else{
            alert('Ви помилились при вводі ЛОГІНУ')
        }
    }
 */
{
    const check = (correctLogin, correctPassword) => {
        let userLogin
        let userPassword        
        if((userLogin = prompt ("Введіть свій логін")) === correctLogin){
            if((userPassword= prompt ("Введіть пароль")) === correctPassword){
                return true
            }else{
                return false
            }
        }else{
            return false
        }
    }

    check("admin", "qwerty")
}

/*For Table ==== Оформіть завдання For Multiply Table як функцію, яка приймає будь-який масив з масивами, а повертає рядок 
                    HTML з тегом <table> і всякими tr та td.
    /*For Table Horizontal ==== Аналогічно, виконайте виведення імен в КОМІРКИ таблиці по горизонталі (один рядок з чотирма КОМІРКАМИ)
    {
    const names = ["John", "Paul", "George", "Ringo"]
    let   str = "<table>"
    for (const name of names){
    //    YOUR MAGIC HERE
        str += "<td>" + name + "</td>"
    //--------------------------------
    }
    str+= "</table>"
    document.write(str) //document.write відобразить ваш HTML на сторінці
    }*/
{
    //debugger
    const multiplyTable = arr =>{
        let   str = `<style>table, td {border: 1px solid; text-align: center}</style>\n` + "<table>\n"
        for (const arrItem of arr){
            str += "<tr>"
            for (const item of arrItem){
                str += "<td>" + item + "</td>"
            }
            str += "</tr>\n"
        }
        str += "</table>"
        return str
    }

    arrayName = [[ "item11", "item12", "item1N"], ["item21", "item22", "item2N"], ["itemM1", "itemM2", "itemMN"]]
    arrayDigit = [[1, 2, 3, 5, 7, 11,], [13, 17, 19, 23, 29, 31], [37, 41, 43, 47, 53, 59], [61, 67, 71, 73, 79, 83]]
    //console.log(multiplyTable(arrayName))
    //console.log(multiplyTable(arrayDigit))
    document.write(multiplyTable(arrayName))
    document.write(multiplyTable(arrayDigit))

}

/*Filter Lexics ==== Оформіть завдання Filter Lexics як функцію, яка приймає будь-який рядок для перевірки та масив некоректних 
                     слів (['бляха', 'муха', "пляшка", "шабля"], наприклад). Функція повинна повертати рядок без цих некоректних слів.*/

    /*Filter Lexics ==== Нехай користувач вводить рядок. Розбийте його за пробілами. Використовуючи filter 
                        поверніть true якщо елемент масиву не ЗНАХОДИТЬСЯ у визначеному масиві неприпустимих слів. 
                        Якщо елемент масиву - неприпустиме слово, функція, передана в filter повинна повертати false. 
                        Зберіть масив у рядок назад. 
    {    
        let wordsArray = prompt("Введіть кілька слів, серед яких будемо шукати погане").split(" ")
        const isWordGood = str => {
            const badWordsArray = ["путін", "волдеморт", "поребрик", "останній"]        
            return !(badWordsArray.includes(str.toLowerCase()))              
        }

        const resultArray = wordsArray.filter(isWordGood)
        let resultString = resultArray.join(" ")
        alert("Початковий рядок:\n" + wordsArray.join(" ") + "\nКінцевий рядок:\n" + resultString)
    }*/
{
    //debugger
    const lexicsFilter = (str, badWordsArray) => {
        const wordsArray = str.split(" ")
        const resultArray = []
        for (const word of wordsArray){
            if(!badWordsArray.includes(word))
                resultArray.push(word)
        }
        return resultString = resultArray.join(" ")
    }    

    badWords = ['бляха', 'муха', "пляшка", "шабля"]
    alert(lexicsFilter("бляха муха пляшка шабля додамо пару нормлаьних слів до цих матюків", badWords))
}

/*Currency Table ==== Оформіть завдання Currency Table як функцію без параметрів, яка складає отримані дані у внутрішній 
                        двовимірний масив, після чого відображає його використовуючи функцію із завдання For Table
    /*Currency table ==== Зробіть двовимірну таблицю з курсами між усіма можливими парами валют на кшталт таблиці Піфагора, 
                        використовуючи код із завдання Currency real rate. Використовуйте тільки один запит на сервер.
                        Використовуйте розрахунок кроскурсу для обчислення курсу між будь-якою парою валют
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
}*/
{
    const currencyTable = () =>{
        fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json()).then(data => {
            const{rates: djk}  = data
            resultArr = []
            resultArr[0] = []
            resultArr[0].push("<=>")
            for (const currencyName of Object.keys(djk)){
                resultArr[0].push(currencyName + "::")
            }
            let i = 1
            for (const [key1, value1] of Object.entries(djk)){
                resultArr[i] = []
                resultArr[i].push(key1 + ":")
                for(const [key2, value2] of Object.entries(djk)){
                    if(key1 === key2){
                        resultArr[i].push("-1-")
                    }else{                        
                        resultArr[i].push(1 * (value1 / value2).toFixed(3))
                    }                    
                }
                i++
            }   
            return (multiplyTable(resultArr))
        })
    }

    const multiplyTable = arr =>{
        //console.log(arr)
        let   str = `<style>table, td {border: 1px solid; text-align: center}</style>\n` + "<table>\n"
        for (const arrItem of arr){
            str += "<tr>"
            for (const item of arrItem){
                str += "<td>" + item + "</td>"
            }
            str += "</tr>\n"
        }
        str += "</table>"
        document.write(str)
        return str
    }

    currencyTable()
}

/*Form ==== Оформіть завдання Form як функцію, яка приймає будь-який об'єкт як параметр та створює форму на екрані.
    /*Form ==== Напишіть код, який будь-якого об'єкта створює форму HTML. Наприклад для такого об'єкту 
    {
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
    }*/
{
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
        document.write(result)
        return true
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

    convecter(car)
}

/*Array of objects sort ==== Зробіть узагальнену функцію сортування масиву з об'єктами. Функція дозволяє відсортувати 
                            будь-який набір даних по імені поля (другий параметр). Третім параметром іде 
                            необов'язковий 'Boolean', який у разі true робить сортування за зростанням, у разі false 
                            - за спаданням. За замовчуванням (без третього параметра) відбувається сортування за зростанням.*/

{
    /**
     * 
     * Це завдання було найважчим із усіх. В мене явно проблема з цим методом.
     * Залишаю його в такому вигляді, бо воно працює, але якщо детально
     * розпишите, що саме я роблю не так - Я БУДУ ДУЖЕ ВДЯЧНИЙ.
     * 
     */

    //debugger
    //var persons = [{name: "Іван", age: 17}, {name: "Марія", age: 35}, {name: "Олексій", age: 73}, {name: "Яків", age: 12}]
    var persons = [{name: "Іван", age: 17}, {name: "Марія", age: 35}, {name: "Олексій", age: 73}, {name: "Яків", age: 12}, 
        {name: "Марія", age: 14}, {name: "Іван", age: 12}]

    const sort = (obj, sortField, upOrDown) => {
        if(upOrDown == undefined || upOrDown){//Сортуємо за зростанням
            obj.sort(function(prev, next){
                console.log("---- Сортуємо за зростанням по " + sortField)
                if(prev[sortField] > next[sortField]){
                    return 1
                }else if(prev[sortField] < next[sortField]){
                    return -1
                }else{
                    return 0 
                }                
            });
        }else if(!upOrDown){
            obj.sort(function(prev, next){//Сортуємо за спаданням
                console.log("++++ Сортуємо за спаданням по " + sortField)
                if(prev[sortField] > next[sortField]){
                    return -1
                }else if(prev[sortField] < next[sortField]){
                    return 1
                }else{
                    return 0 
                }
            });
        }else{
            alert("ZOPA")
        }
    }

    console.log(sort(persons, "age")); //сортує за віком за зростанням
    //console.log(sort(persons, "age", false)); //сортує за віком за спаданням    
    //console.log(sort(persons, "name", false)); //сортує на ім'я за спаданням
    //console.log(sort(persons, "name", true)); //сортує на ім'я за зростанням
    console.log(persons)
    
}

/*Table ==== Оформіть завдання Table як функцію, яка приймає такі параметри:
                - будь-який масив об'єктів для відображення
                - поле, ЗА яким сортувати
                - порядок сортування (зменшення/зростання)
                Перед відображенням:
                - скопіюйте вихідний масив, щоб сортування не змінило оригінал;
                - відсортуйте за допомогою функції попереднього завдання
                Відображення візьміть із завдання Table*/

    /*Table ==== Дано будь-який масив з об'єктами Сформувати таблицю (використовуючи накопичення тегів HTML у рядку):*/
{
    const sortAndShow = (obj, sortField, upOrDown) =>{
        const objNew = [...obj]
        //console.log(obj)
        if(upOrDown == undefined || upOrDown){//Сортуємо за зростанням
            objNew.sort(function(prev, next){
                console.log("---- Сортуємо за зростанням по " + sortField)
                if(prev[sortField] > next[sortField]){
                    return 1
                }else if(prev[sortField] < next[sortField]){
                    return -1
                }else{
                    return 0 
                }                
            });
        }else if(!upOrDown){
            objNew.sort(function(prev, next){//Сортуємо за спаданням
                console.log("++++ Сортуємо за спаданням по " + sortField)
                if(prev[sortField] > next[sortField]){
                    return -1
                }else if(prev[sortField] < next[sortField]){
                    return 1
                }else{
                    return 0 
                }
            });
        }else{
            alert("ZOPA")
        }
        console.log(objNew)

        const arrKeys = {}

        for(const obj of objNew){ //Збираємо ключі, як умієм :(
            for(const[key, value] of Object.entries(obj)){
                arrKeys[key] = key
            }
        }

        let str = `<style>table, td {border: 1px solid; text-align: center}</style>`
        str += "<table><tr>"

        for (const key of Object.keys(arrKeys)){//Шапка таблиці
            str += "<th>" + key + "</th>"   
        }
        str += "</tr>"
        for(const obj of objNew){//Перебираємо об'єкти в масиві
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

    const arr = [{//Об'єкт тестовий
        "Name":"chevrolet chevelle malibu",
        "Cylinders":8,
        "Displacement":307,
        "Horsepower":130,
        "Weight_in_lbs":3504,
        "Origin":"USA"
        },{
        "Name":"buick skylark 320",
        "Miles_per_Gallon":15,
        "Cylinders":8,
        "Displacement":350,
        "Horsepower":165,
        "Weight_in_lbs":3693,
        "Acceleration":11.5,
        "Year":"1970-01-01",
        },{
        "Miles_per_Gallon":18,
        "Cylinders":8,
        "Displacement":318,
        "Horsepower":150,
        "Weight_in_lbs":3436,
        "Year":"1970-01-01",
        "Origin":"USA"
        },{
        "Name":"amc rebel sst",
        "Miles_per_Gallon":16,
        "Cylinders":8,
        "Displacement":304,
        "Horsepower":150,
        "Year":"1970-01-01",
        "Origin":"USA"
        }
    ]

    sortAndShow(arr, "Name", true)
}


/* Divide ==== Реалізуйте завдання Number: divide у HTML:
    //Number: divide ==== Зробіть калькулятор для розрахунку поділу націло двох чисел. Використовуйте Math.floor або альтернативи.

        let dilene = +prompt("Введіть ділене")
        let dilnyk = +prompt("Введіть дільник")
        if(!isNaN(dilene) && !isNaN(dilnyk)){
            let chastka = dilene / dilnyk
            chastka = Math.round(chastka)
            alert("Результатом поділу " + dilene + " НАЦІЛО на " + dilnyk + " буде число " + chastka + ` \nАле, лише між нами: реально буде ` + dilene / dilnyk)
        }
        else{
            alert('Ви помилились при вводі даних' )
        }*/
{   
    let str = `
    <input type='number' id="firstNumber" />
    <input type='number' id="secondNumber" />
    <div id="divisionResult">
        Що будемо ділити?
    </div>
    <script>
        const calcResult = () => {
            console.log(firstNumber.value, secondNumber.value, divisionResult.innerHTML)
            divisionResult.innerHTML = "Результатом поділу " + firstNumber.value + " НАЦІЛО на " + secondNumber.value + " буде число " + Math.floor(firstNumber.value/secondNumber.value)
        }        
        firstNumber.oninput = secondNumber.oninput = calcResult
    </script>`

    document.write(str)
}

/*Calc Func ==== Згадайте перше ДЗ з Javascript, в якому ви робили всякі розрахунки використовуючи код на Javascript. Оформіть це як функцію:
                    - знайдіть усі вхідні дані, зробіть їх параметри
                    - знайдіть змінну з результатом розрахунків і зробіть так, щоб ваша функція повертала цей результат.
                    - Якщо результатів декілька, створіть об'єкт із цих результатів та поверніть його.

    const cottageCheeseFat = 4.5
    const yogurtFat = 3.1
    const cailleFat = 1.6
    const CF = 2.85

    let milkFat = prompt('Який жир сирого молока? (вказувати у %) [від 3.3% до 4,5%]')
    let cottageCheeseNeed = prompt('Скільки потрібно творогу з жиром 4.5%? (вказувати у тоннах)')
    let yogurtNeed = prompt('Скільки потрібно йогурту з жиром 3.1%? (вказувати у тоннах)')
    let minCreamFat = prompt('Який МІНІМАЛЬНИЙ жир вершків потрібен? % (вказувати у %) [від 10% до 35%]')
    let maxCreamFat = prompt('Який МАКСИМАЛЬНИЙ жир вершків потрібен? % (вказувати у %) [від 10% до 35%]')
    let minCreamNeed = prompt('Яка МІНІМАЛЬНА кількість вершків потрібена? % (вказувати у тоннах)')
    let maxCreamNeed = prompt('Яка МАКСИМАЛЬНА кількість вершків потрібена? % (вказувати у тоннах)')
    let cailleNeed
    let yogurtFD
    let cottageCheeseFD 
    let productsFD
    let minAllFD
    let maxAllFD
    let minCreamFD
    let maxCreamFD
    if(milkFat <= 4.5 && milkFat >= 3.3){
        if(maxCreamFat > minCreamFat && minCreamFat >= 10 && maxCreamFat <= 35){
            if(minCreamNeed < maxCreamNeed){
                if(yogurtNeed >=0 && cottageCheeseNeed >= 0){
                    console.log('Ваше замовлення:')
                    console.log('Отримати ', cottageCheeseNeed, 'т творогу з жиром ', cottageCheeseFat, '% плюс ', yogurtNeed, 'т йогурту з жиром ', yogurtFat, '%.')
                    console.log('Жир сирого молока', milkFat, '%. Вершків потрібно від ', minCreamNeed * 1000,  '-', maxCreamNeed * 1000, 'кілограм. Жир вершків має бути в межах ', minCreamFat, '-', maxCreamFat, '%.')
                    console.log('Давайте рахувати: Йогурт:')
                    console.log('Для йогурту нам потрібно', yogurtFat, 'Х', yogurtNeed, '=', yogurtFD = yogurtFat * (yogurtNeed * 1000), 'жироодиниць.')
                    console.log('Давайте рахувати: Творог:')
                    console.log('Для ', cottageCheeseNeed, 'т творогу з коефіцієнтом згущення ', CF, 'спочатку потрбіно ' , cailleNeed = CF * cottageCheeseNeed,  'т кальє з жиром 1.6 %.' )
                    console.log('А для ', cailleNeed, 'т кальє з жиром 1.6 % потрібно ',  cottageCheeseFD = (cailleNeed * 1000) * cailleFat,  'жироодиниць.' )
                    console.log('Отже для основного продутку нам потрібно ', productsFD = cottageCheeseFD + yogurtFD, ' жироодиниць.')
                    console.log('Рахуємо межі жироодиниць для вершків:')
                    console.log('Мінімаьна кількість жироодиниць вершків: ', minCreamFD = minCreamFat * minCreamNeed * 1000 , '(Для ', minCreamFat, '% х', minCreamNeed * 1000, 'кг).')
                    console.log('Максимальна кількість жироодиниць вершків: ', maxCreamFD = maxCreamFat * maxCreamNeed * 1000 , '(Для ', maxCreamFat, '% х', maxCreamNeed* 1000, 'кг).')
                    console.log('Отже всього потрібно від ', minAllFD = minCreamFD + productsFD , ' до ', maxAllFD = maxCreamFD + productsFD, ' жироодиниць.')
                    console.log('І, якщо сире молоко має жир ', milkFat , ', то нам потрібно від ', minAllFD / milkFat, ' до ', maxAllFD / milkFat, 'кг молока з таким жиром.')
                }else{
                    console.log('Серйозно? Мінусові значення в заявці?..')
                }
            }else{
                console.log('Межі кількості вершків задані неправильно!')
            }
        }else{
            console.log('Межі жирів вершків задані неправильно!')
        }
        
    }else{
        console.log('Корови таке молока не дають. Або дають, але то хворі корови :)')
    }
    console.log('Ну якось так...')
}*/
{
    const milkyway = (milkFat, cottageCheeseNeed, yogurtNeed, minCreamFat, maxCreamFat, minCreamNeed, maxCreamNeed) =>{
        const cottageCheeseFat = 4.5
        const yogurtFat = 3.1
        const cailleFat = 1.6
        const CF = 2.85
        let cailleNeed
        let yogurtFD
        let cottageCheeseFD 
        let productsFD
        let minAllFD
        let maxAllFD
        let minCreamFD
        let maxCreamFD
        let result
        if(milkFat <= 4.5 && milkFat >= 3.3){
            if(maxCreamFat > minCreamFat && minCreamFat >= 10 && maxCreamFat <= 35){
                if(minCreamNeed < maxCreamNeed){
                    if(yogurtNeed >=0 && cottageCheeseNeed >= 0){
                        console.log('Ваше замовлення:')
                        console.log('Отримати ', cottageCheeseNeed, 'т творогу з жиром ', cottageCheeseFat, '% плюс ', yogurtNeed, 'т йогурту з жиром ', yogurtFat, '%.')
                        console.log('Жир сирого молока', milkFat, '%. Вершків потрібно від ', minCreamNeed * 1000,  '-', maxCreamNeed * 1000, 'кілограм. Жир вершків має бути в межах ', minCreamFat, '-', maxCreamFat, '%.')
                        console.log('Давайте рахувати: Йогурт:')
                        console.log('Для йогурту нам потрібно', yogurtFat, 'Х', yogurtNeed, '=', yogurtFD = yogurtFat * (yogurtNeed * 1000), 'жироодиниць.')
                        console.log('Давайте рахувати: Творог:')
                        console.log('Для ', cottageCheeseNeed, 'т творогу з коефіцієнтом згущення ', CF, 'спочатку потрбіно ' , cailleNeed = CF * cottageCheeseNeed,  'т кальє з жиром 1.6 %.' )
                        console.log('А для ', cailleNeed, 'т кальє з жиром 1.6 % потрібно ',  cottageCheeseFD = (cailleNeed * 1000) * cailleFat,  'жироодиниць.' )
                        console.log('Отже для основного продутку нам потрібно ', productsFD = cottageCheeseFD + yogurtFD, ' жироодиниць.')
                        console.log('Рахуємо межі жироодиниць для вершків:')
                        console.log('Мінімаьна кількість жироодиниць вершків: ', minCreamFD = minCreamFat * minCreamNeed * 1000 , '(Для ', minCreamFat, '% х', minCreamNeed * 1000, 'кг).')
                        console.log('Максимальна кількість жироодиниць вершків: ', maxCreamFD = maxCreamFat * maxCreamNeed * 1000 , '(Для ', maxCreamFat, '% х', maxCreamNeed* 1000, 'кг).')
                        console.log('Отже всього потрібно від ', minAllFD = minCreamFD + productsFD , ' до ', maxAllFD = maxCreamFD + productsFD, ' жироодиниць.')
                        console.log('І, якщо сире молоко має жир ', milkFat , ', то нам потрібно від ', minAllFD / milkFat, ' до ', maxAllFD / milkFat, 'кг молока з таким жиром.')
                    }else{
                        console.log('Серйозно? Мінусові значення в заявці?..')
                        result = {manMilkVolume: false, maxMilkVolume: false}
                        return result
                    }
                }else{
                    console.log('Межі кількості вершків задані неправильно!')
                    result = {manMilkVolume: false, maxMilkVolume: false}
                    return result
                }
            }else{
                console.log('Межі жирів вершків задані неправильно!')
                result = {manMilkVolume: false, maxMilkVolume: false}
                return result
            }
            
        }else{
            console.log('Корови таке молока не дають. Або дають, але то хворі корови :)')
            result = {manMilkVolume: false, maxMilkVolume: false}
            return result
        }
            result = {manMilkVolume: minAllFD / milkFat, maxMilkVolume: maxAllFD / milkFat}
            return result
        }

        console.log(milkyway (4, 8, 12, 16, 20, 3, 4))
}

/*Calc Live ==== Використовуючи приклад із завдання Divide та функцію з Calc Func зробіть кілька полів введення в HTML, 
                    змінюючи які ви отримуватимете результат калькуляції в якомусь div.*/
{
    let str = `
    <span>Жир творогу: 4.5</span><br>
    <span>Жир йогурту: 3.1</span><br>
    <span>Жир кальє: 1.6</span><br>
    <span>CF: 2.85</span><br><br>
    <label> Який жир сирого молока? (вказувати у %) [від 3% до 5%] <input type='number' id="milkFat" /><br></label>
    <label> Скільки потрібно творогу з жиром 4.5%? (вказувати у тоннах) <input type='number' id="cottageCheeseNeed" /><br></label>
    <label> Скільки потрібно йогурту з жиром 3.1%? (вказувати у тоннах) <input type='number' id="yogurtNeed" /><br></label>
    <label> Який МІНІМАЛЬНИЙ жир вершків потрібен? % (вказувати у %) [від 10% до 35%] <input type='number' id="minCreamFat" /><br></label>
    <label> Який МАКСИМАЛЬНИЙ жир вершків потрібен? % (вказувати у %) [від 10% до 35%] <input type='number' id="maxCreamFat" /><br></label>
    <label> Яка МІНІМАЛЬНА кількість вершків потрібена? % (вказувати у тоннах) <input type='number' id="minCreamNeed" /><br></label>
    <label> Яка МАКСИМАЛЬНА кількість вершків потрібена? % (вказувати у тоннах) <input type='number' id="maxCreamNeed" /><br></label>
    
    <div id="divisionResult">
        Що будемо ділити?
    </div>
    <script>
        const calcResult = () => {
            const cottageCheeseFat = 4.5
            const yogurtFat = 3.1
            const cailleFat = 1.6
            const CF = 2.85
            let cailleNeed
            let yogurtFD
            let cottageCheeseFD 
            let productsFD
            let minAllFD
            let maxAllFD
            let minCreamFD
            let maxCreamFD
            let result
            if(milkFat.value <= 5 && milkFat.value >= 3){
                if(maxCreamFat.value > minCreamFat.value && minCreamFat.value >= 10 && maxCreamFat.value <= 35){
                    if(minCreamNeed.value < maxCreamNeed.value){
                        if(yogurtNeed.value >=0 && cottageCheeseNeed.value >= 0){
                            result = "Ваше замовлення: <br>"
                            result += 'Отримати ' + cottageCheeseNeed.value + 'т творогу з жиром ' + cottageCheeseFat + '% плюс ' + yogurtNeed.value + 'т йогурту з жиром ' + yogurtFat + '%.  <br>'
                            result += 'Жир сирого молока ' + milkFat.value + '%. Вершків потрібно від ' + minCreamNeed.value * 1000 + '-' + maxCreamNeed.value * 1000 +' кілограм. Жир вершків має бути в межах ' + minCreamFat.value + '-' + maxCreamFat.value + '%.  <br>'
                            result += 'Давайте рахувати: Йогурт:  <br>'
                            result += 'Для йогурту нам потрібно ' + yogurtFat + ' Х ' + yogurtNeed.value + '=' + (yogurtFD = yogurtFat * (yogurtNeed.value * 1000)) + ' жироодиниць.  <br>'
                            result += 'Давайте рахувати: Творог:  <br>'
                            result += 'Для ' + cottageCheeseNeed.value + 'т творогу з коефіцієнтом згущення ' + CF + ' спочатку потрбіно ' + (cailleNeed = CF * cottageCheeseNeed.value) + 'т кальє з жиром 1.6 %.  <br>'
                            result += 'А для ' + cailleNeed + 'т кальє з жиром 1.6 % потрібно ' +  (cottageCheeseFD = (cailleNeed * 1000) * cailleFat) + ' жироодиниць.  <br>'
                            result += 'Отже для основного продутку нам потрібно ' + (productsFD = cottageCheeseFD + yogurtFD) + ' жироодиниць.  <br>'
                            result += 'Рахуємо межі жироодиниць для вершків:  <br>'
                            result += 'Мінімаьна кількість жироодиниць вершків: ' + (minCreamFD = minCreamFat.value * minCreamNeed.value * 1000) + ' (Для ' + minCreamFat.value + '% х ' + minCreamNeed.value * 1000 + 'кг).  <br>'
                            result += 'Максимальна кількість жироодиниць вершків: ' + (maxCreamFD = maxCreamFat.value * maxCreamNeed.value * 1000) + ' (Для ' + maxCreamFat.value +  '% х ' + maxCreamNeed.value * 1000 + 'кг).  <br>'
                            result += 'Отже всього потрібно від '+ (minAllFD = minCreamFD + productsFD) + ' до ' + (maxAllFD = maxCreamFD + productsFD) + ' жироодиниць.  <br>'
                            result += 'І, якщо сире молоко має жир ' + milkFat.value + ', то нам потрібно від ' + minAllFD / milkFat.value + ' до ' + maxAllFD / milkFat.value + 'кг молока з таким жиром.  <br>'
                        }else{
                            result = 'Серйозно? Мінусові значення в заявці?..'
                        }
                    }else{
                        result = 'Межі кількості вершків задані неправильно!'
                    }
                }else{
                    result = 'Межі жирів вершків задані неправильно!'
                }
                
            }else{
                result = 'Корови таке молока не дають. Або дають, але то хворі корови :)'
            }
            console.log(result)            
            divisionResult.innerHTML = result
        }
        milkFat.oninput = cottageCheeseNeed.oninput = yogurtNeed.oninput = minCreamFat.oninput = maxCreamFat.oninput = minCreamNeed.oninput = maxCreamNeed.oninput = calcResult
    </script>`

    document.write(str)

}