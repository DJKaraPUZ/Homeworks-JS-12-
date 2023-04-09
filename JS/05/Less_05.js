/*Confirms ==== Збережіть у масив відповіді на запитання, задані за допомогою confirm. 
                Використовуйте літеральний (декларативний) синтаксис масивів ([....,....,....])*/
{
    let answersArray = [confirm("Перше питання"), confirm("Друге питання"), confirm("Третє питання")]
    alert(`Перше питання - ${answersArray[0]}. Друге питання - ${answersArray[1]}. Третє питання - ${answersArray[2]}.`)
}

/*Prompts ==== Збережіть у масив відповіді запитаннь, задані з допомогою prompts. 
                Використовуйте доступ до масиву за індексом та присвоєння (arr[....] = ....) */
{
    let answersArray = []
    answersArray[0] = prompt("Перше питання")
    answersArray[1] = prompt("Друге питання")
    answersArray[2] = prompt("Третє питання")
    alert(`Перше питання - ${answersArray[0]}. Друге питання - ${answersArray[1]}. Третє питання - ${answersArray[2]}.`)
}

/*Item access ==== Попросіть користувача ввести (prompt) індекс у масиві. 
                    Виведіть значення елемента за цим індексом. Спробуйте також ввести індекс "length". */
{
    let answersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    alert(answersArray[+prompt("Ведіть номер елемента, який хочете побачити. Перші 10 елементів реально існують")])
    alert(answersArray['length'])
}

/*Item change ==== Попросіть користувача ввести (prompt) індекс у масиві, а також значення для цього індексу. 
                    Присвойте у введений індекс введене значення */
{
    let answersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    answersArray[+prompt("Ведіть номер елемента, який хочете змінити. Перші 10 елементів реально існують")] = prompt("Ведіть нове значення елемнта")
    alert("Тепер масив виглядає так \n" + answersArray)
}

/*Multiply table ==== Створіть таблицю множення 5x5, як масив в пам'ятi, 
                        використовуючи декларативний синтаксис вкладених масивів const arr = [[....], [....], [....], .....]. 
                        Числа у вкладених масивах повинні дорівнювати добутку індексу зовнішнього масиву 
                        на індекс внутрішнього масиву: arr[2][3] === 6 */
{
    const arr = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]]
}

/*Multiply table slice ==== Використовуючи slice, створіть масив масивів (іншу таблицю/матрицю) з таблиці множення, в якій не буде нулів */
{
    const arr = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]]
    let arrNew = arr.slice(1, arr.length)
    arrNew[0] = arrNew[0].slice(1, arrNew[0].length)
    arrNew[1] = arrNew[1].slice(1, arrNew[1].length)
    arrNew[2] = arrNew[2].slice(1, arrNew[2].length)
    arrNew[3] = arrNew[3].slice(1, arrNew[3].length)
    alert(arrNew)
}

/*IndexOf Word ==== Запитайте у користувача рядок із кількох слів. Запитайте в нього потрібне слово. 
                    Виведіть, яким за рахунком є це слово у рядку з кількох слів. Якщо слово не знайдено, виведіть повідомлення про це (а не -1) */
{
    let wordsArray = prompt("Введіть кілька слів").split(" ")
    let temp = wordsArray.indexOf(prompt("Яке слово пошукати?"))
    if(temp == -1)
        alert("Такого слова в рядку немає")
    else
        alert("Номер слова в рядку: " + (temp + 1)) // Ми ж слова не з нуля рахуємо
}

/*Reverse ==== Додайте до масиву п'ять введених користувачем через prompt елементів (використовуйте push). 
                Створіть інший масив із цими ж елементами в зворотньому напрямку. 
                Для цього витягайте елементи з першого масиву використовуючи pop, додайте їх до другого використовуючи push. */
{    
    let array = [prompt('Введіть елемент №1'), prompt('Введіть елемент №2'), prompt('Введіть елемент №3'), prompt('Введіть елемент №4'), prompt('Введіть елемент №5')]
    let reversArray = [] 
    let copyArray = [...array] // Лише для зручності кінцевого порівняння
    while(array.length > 0){
        reversArray.push(array.pop())
    }
    alert("Просто масив: " + copyArray + "\nОберненний масив: " + reversArray)
}

/*Reverse 2 ==== Переверніть другий масив із попереднього завдання ще раз (послідовність буде як у першому масиві), використовуючи shift та unshift. */
{
    let array = [prompt('Введіть елемент №1'), prompt('Введіть елемент №2'), prompt('Введіть елемент №3'), prompt('Введіть елемент №4'), prompt('Введіть елемент №5')]
    let reversArray = [] 
    let copyArray = [...array] // Лише для зручності кінцевого порівняння
    while(array.length > 0){
        reversArray.push(array.pop())
    }
    alert("Просто масив: " + copyArray + "\nОберненний масив: " + reversArray)
    //----Як казав Леонід Данилович: "...це ж було вже..."-----------------------------------------------------------------
    let reversAgaineArray = []
    array = [...reversArray] // Щоб не створювати ще один масив візьмемо непотрібний
    while(reversArray.length > 0){
        reversAgaineArray.unshift(reversArray.shift())
    }
    alert("Просто масив: " + copyArray + "\nОберненний масив: " + array + "\nОбернений дооберненого масив: " + reversAgaineArray)
}

//Copy ==== Скопіюйте масив створений у завданні Multiply table неглибоко
{
    const arr = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]]
    let arrCopy = [...arr]
    alert("Масив: " + arr + "\nЙого НЕ глибока копія: " + arrCopy)
}

/*Deep Copy ==== Скопіюйте масив, створений у Multiply table, включаючи вкладені масиви (глибока копія). 
                    Не треба шукати якесь складне готове рiшення, зробiть це максимально простим чином за умови, 
                    що вам треба скопiювати 6 масивiв - загальний масив та п'ять масивiв у ньому;*/
{
    const arr = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]]
    const arrCopy = [...arr]
    arrCopy[0] = [...arr[0]]
    arrCopy[1] = [...arr[1]]
    arrCopy[2] = [...arr[2]]
    arrCopy[3] = [...arr[3]]
    arrCopy[4] = [...arr[4]]
    alert("Масив: " + arr + "\nЙого НЕ глибока копія: " + arrCopy)
}

// Array Equals ==== Створіть код, в якому буде дві змінні з масивами (arr і arr2), які рівні один одному (arr1 === arr2)
{
    const arr = []
    const arr2 = arr
    alert(`arr1 === arr2 ` + (arr2 === arr))
}

/*Flat ==== Зберіть усі елементи всіх вкладених масивів із завдання Multiply table в один масив. 
            Його довжина повинна дорівнювати 25. Використовуйте spread-оператор*/
{
    const arr = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]]
    let arrCopy = [...arr[0],...arr[1],...arr[2],...arr[3],...arr[4]]
    alert("Масив: " + arr + "\nДовжина масиву: " + arr.length + "\nНовий масив: " + arrCopy + "\nДовжина нового масиву: " + arrCopy.length)
}

/*Destruct ==== Вийміть першу, п'яту та дев'яту літеру з рядка, введеного користувачем, 
                використовуючи деструктуризацію. Виведіть їх */
{
    str = prompt('Введіть рядок, з якого буде видобуто 1-у, 5-ту та 9-ту літери')
    let char1
    let char5
    let char9
    [char1, , , , char5, , , , char9] = str
    alert("Видобуті літери: \nПерша: " + char1 + "\nП'ята: " + char5 + "\nДев'ята: " + char9)
}

/*Destruct default ==== Вийміть другу, четверту та п'яту літеру з рядка, введеного користувачем, використовуючи деструктуризацію. 
                        Якщо у рядку таких букв не виявиться задайте змінним значення за умовчанням ! (знак оклику). Виведіть ці змінні */
{
    str = prompt('Введіть рядок, з якого буде видобуто 2-у, 4-ту та 5-ту літери')
    let [, char2 = "!", , char4 = "!", char5 = "!"] = str
    alert("Видобуті літери: \nДруга: " + char2 + "\nЧетверта: " + char4 + "\nП'ята: " + char5)
}

/*Multiply table rest ==== Реалізуйте завдання Multiply table slice, використовуючи оператор rest при деструктуризації. 
                            Використовуйте вкладену деструктуризацію. 
                            Після отримання чотирьох обрізаних вкладених масивів - зберіть загальний масив без нулів */
    /*Multiply table slice ==== Використовуючи slice, створіть масив масивів (іншу таблицю/матрицю) з таблиці множення, в якій не буде нулів 
    {
        const arr = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]]
        let arrNew = arr.slice(1, arr.length)
        arrNew[0] = arrNew[0].slice(1, arrNew[0].length)
        arrNew[1] = arrNew[1].slice(1, arrNew[1].length)
        arrNew[2] = arrNew[2].slice(1, arrNew[2].length)
        arrNew[3] = arrNew[3].slice(1, arrNew[3].length)
        alert(arrNew)
    }*/
{
    const arr = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]]
    let [ , [ , a1, b1, c1, d1], [ , a2, b2, c2, d2], [ , a3, b3, c3, d3], [, a4, b4, c4, d4]] = arr
    let arrNew = [[a1, b1, c1, d1], [a2, b2, c2, d2], [a3, b3, c3, d3], [a4, b4, c4, d4]]
    alert(arrNew)
}

/*For Alert ==== Є масив ["John", "Paul", "George", "Ringo"]. Виведіть кожне ім'я окремим alert(), використовуючи цикл for .... of */
{
    const arr = ["John", "Paul", "George", "Ringo"]
    for(const name of arr){
        alert(name)
    }
}

/*For Select Option ==== Використовуючи код вище, створіть список, що випадає, з валютами. 
                            Елементи списку, що випадає, створюються за допомогою тега <option> */
{    
    const currencies = ["USD", "EUR", "GBP", "UAH"]
    let   str = "<select>"
    for (const currency of currencies){
    //    YOUR MAGIC HERE
        str += "<option> " + currency + " </option>"
    //--------------------------------
    }
    str+= "</select>"
    document.write(str) //document.write відобразить ваш HTML на сторінці
}

/*For Table Horizontal ==== Аналогічно, виконайте виведення імен в КОМІРКИ таблиці по горизонталі (один рядок з чотирма КОМІРКАМИ) */
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
}

/*For Table Vertical ==== Аналогічно, досягніть виведення імен в КОМІРКИ таблиці по вертикалі 
                            (одна колонка з чотирма рядками, у кожному рядку - одна КОМІРКА) */
{
    const names = ["John", "Paul", "George", "Ringo"]
    let   str = "<table>"
    for (const name of names){
    //    YOUR MAGIC HERE
    str += "<tr><td>" + name + "</td></tr>"
    //--------------------------------
    }
    str+= "</table>"
    document.write(str) //document.write відобразить ваш HTML на сторінці
}

/*For Table Letters ==== Використовуючи код вище, створіть таблицю 3x4. 
                            У кожному рядку три КОМІРКИ з літерами, чотири рядки, так як 4 валюти в масиві. */
{
    const currencies = ["USD", "EUR", "GBP", "UAH"]
    let   str = "<table>"
    for (const currency of currencies){ //цикл створює рядки
        // Одна ітерація циклу створює ОДНИЙ РЯДОК
        str += "<tr>"// <== 
        console.log(currency)
        for (const letter of currency){ //цикл створює осередки в одному рядку
            //одна ітерація циклу створює ОДИН осередок
            str += "<td>" + letter + "</td>"// <==
            console.log(letter)
        }
        str += "</tr>"// <==
    }
    str+= "</table>"
    document.write(str) //document.write відобразить ваш HTML на сторінці
}

/*For Multiply Table ==== Виведіть таблицю множення 5x5 із завдання Multiply table в таблицю, 
                            використовуючи вкладені for.... of та document.write
                            Зробіть черезрядкове підсвічування - задавайте парним рядкам один колір тла, непарним - інший */
{
    const arr = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]]
    let   str = "<table>"
    let colorFlag = 1
    for (const arrIn of arr){
        if(colorFlag % 2 === 1)
            str += `<tr bgcolor="#0057b8">`
        else
            str += `<tr bgcolor="#ffd700">`
        for (const char of arrIn){
            str += "<td>" + char + "</td>"            
        }
        str += "</tr>"
        colorFlag++
    }
    str+= "</table>"
    document.write(str)
}

/*Function Capitalize ==== Реалізуйте завдання String: capitalize як окрему функцію:*/
    /*String: capitalize ==== Перетворіть рядок, введений користувачем, таким чином, щоб перша літера ставала великою, а решта - маленькими:
    {
        let str = "cANBerRa"
        let result
        ////..... ваш код    
        result = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
        ///////////
        console.log(result) //Canberra    
    }*/
{
    const capitalize = str => {
        let result
        //..... ваш код
        result = str[0].toUpperCase() + str.slice(1).toLowerCase()
        //--------------------------------
        return result //саме цей код забезпечить повернення результату функції
        }
        console.log(capitalize("cANBerRa")) //Canberra 
}

/*Map Capitalize ==== Нехай користувач вводить рядок. Розбийте його за пробілами. Використовуючи map та capitalize
                         створіть масив у якому кожне слово буде з великої літери. Зберіть масив у рядок назад */
{
    const capitalize = str => {
        let result        
        result = str[0].toUpperCase() + str.slice(1).toLowerCase()
        return result
        }

    let wordsArray = prompt("Введіть кілька слів").split(" ")
    const finalArray = wordsArray.map(capitalize)
    alert("Спочатку масив виглядав так:\n" + wordsArray + "\n Тепер масив виглядає так:\n" + finalArray)
}

/*Filter Lexics ==== Нехай користувач вводить рядок. Розбийте його за пробілами. Використовуючи filter 
                        поверніть true якщо елемент масиву не ЗНАХОДИТЬСЯ у визначеному масиві неприпустимих слів. 
                        Якщо елемент масиву - неприпустиме слово, функція, передана в filter повинна повертати false. 
                        Зберіть масив у рядок назад. */
{    
    let wordsArray = prompt("Введіть кілька слів, серед яких будемо шукати погане").split(" ")
    const isWordGood = str => {
        const badWordsArray = ["путін", "Волдеморт", "Поребрик", "останній"]
        let result = true
        for(const word of badWordsArray){            
            if(str.toLowerCase() === word.toLowerCase())
                result = false            
        }
        return result
        }
    
    const resultArray = wordsArray.filter(isWordGood)
    let resultString = resultArray.join(" ")
    alert("Початковий рядок:\n" + wordsArray.join(" ") + "\nКінцевий рядок:\n" + resultString)
}

/*Beep Lexics ==== Нехай користувач вводить рядок. Розбийте його за пробілами. Використовуючи map та тернарний оператор 
                    поверніть з функції слово без змін, якщо воно не ЗНАХОДИТЬСЯ в якомусь іншому масиві заборонених слів. 
                    Якщо слово ЗНАХОДИТЬСЯ в цьому списку, функція повинна повернути слово BEEP. Зберіть масив назад у 
                    рядок через пробіл. Таким чином, ви зможете реалізувати заміну кількох заборонених слів на BEEP. */
{
    const wordsArray = prompt("Введіть кілька слів, серед яких будемо шукати погане").split(" ")
    const badWordsArray = ["путін", "Волдеморт", "Поребрик", "останній"]
    const resultArray = wordsArray.map(x => x.toLowerCase() === badWordsArray[0].toLowerCase() ? x = "BEEP" : x.toLowerCase()
         === badWordsArray[1].toLowerCase() ? x = "BEEP" : x.toLowerCase() === badWordsArray[2].toLowerCase() ? x 
        = "BEEP" : x.toLowerCase() === badWordsArray[3].toLowerCase() ? x = "BEEP" : x=x)
    let resultString = resultArray.join(" ")
    alert("Початковий рядок:\n" + wordsArray.join(" ") + "\nКінцевий рядок:\n" + resultString)
}

/*Reduce HTML ==== Реалізуйте завдання For Select Option використовуючи reduce:*/
{
    const currencies = ["USD", "EUR", "GBP", "UAH"]
    let str = "<select>"    
    str += currencies.reduce((a,b) => a + "<option>" + b + "</option>" , " ")
    str += "</select>" 
    console.log(str)
    document.write(str)
}

/*For Brackets Hell Check ==== Нехай користувач вводить рядок з будь-якими парними дужками в ньому, наприклад [[](){{{[]()}}}]. 
                                Знайдіть місце можливої помилки (непарності) у цьому рядку. Для цього, кожну дужку, що відкриває, 
                                додавайте в стек. При знаходженні дужки, що закриває, вона повинна відповідати вершині стека 
                                (останнєй доданой дужцi). Якщо вона не відповідає, виведіть повідомлення про помилку та позицію у рядку. 
                                Якщо відповідає – приберіть дужку зі стека. Якщо рядок помилок не містить, порадуйте користувача.*/
//Приклад, рядки із проблемою: [(}], [(()()()], {() () [()()}]{{{}}}
{
    const line = prompt()
    const bracketsStack = []
    let i = 0
    for (let character of line){
        //не звертайте уваги на символи, крім трьох видів дужок
        if(character === "(" || character === ")" || character === "{" || character === "}" || character === "[" || character === "]"){
            if(character === "(" || character === "{" || character === "[")
                bracketsStack.push(character)
            else{
                if(character === ")" && bracketsStack[bracketsStack.length-1] === "("){
                    bracketsStack.pop()
                }else if(character === "]" && bracketsStack[bracketsStack.length-1] === "["){
                    bracketsStack.pop()
                }else if(character === "}" && bracketsStack[bracketsStack.length-1] === "{"){
                    bracketsStack.pop()
                }else{
                    alert("Помилка на символі номер: " + (i+1))
                    i = -666
                    break
                }
            }
        }
        i++
    }
    if(i !== -666)
        alert("Рядок був без помилок")
}