let blockNumber
while(+blockNumber !== 0){
    blockNumber = (prompt(`Введіть назва завдання або його номер
    1 ==== "Number: odd"
    2 ==== "String: lexics"
    3 ==== "Boolean"
    4 ==== "Boolean: if"
    5 ==== "Comparison: sizes"
    6 ==== "Ternary"
    7 ==== "Training"
    8 ==== "Prompt: or"
    9 ==== "Confirm: or this days"
    10 === "Confirm: if this days"
    11 === "Default: or"
    12 === "Default: if"
    13 === "Login and password"
    14 === "Currency exchange"
    15 === "Scissors"

    0 ==== "Exit" ==== ВИЙТИ`)).trim()
    /*Number: odd ==== За допомогою prompt дізнайтесь число, введене користувачем. За допомогою if перевірте, чи число коректно перетворено з рядка. 
                        У разі помилки виведіть повідомлення Виведіть парне число чи ні, використовуючи if.*/
    if(blockNumber === "Number: odd" || +blockNumber === 1)
    {
        let odd = +prompt("Введіть число")
        if(!isNaN(odd)){
            if(!Number.isInteger(odd)){
                odd = Math.round(odd)
                alert("Ведене вами число було не ціле і я взяв на себе відаовідальність округлити його.")
            }
            if(odd % 2 === 0)
                alert(`Введене число ${odd} парне`)
            else
                alert(`Введене число ${odd} НЕ парне`)
        }else{
            alert("Це не число :'(")
        }

    }
    /*String: lexics ==== Запитайте у користувача текст і перевірте його на наявність некоректного слова або кількох некоректних слів. 
                            Використовуйте метод indexOf (або includes) рядки:*/
    else if(blockNumber === "String: lexics" || +blockNumber === 2){
        /*
        "123".indexOf("23") //повертає 1 - позицію підрядка "23" до "123"
        "abcdef".indexOf("ef") // 4
        "12345".indexOf("some bad word") // -1 - не знайдено
        Я не зрозмів, що саме мені робити з цими рядками :( */

        let badWord = (prompt("Введіть слово, яке буде грати роль поганого слова")).trim()
        let userWords = prompt(`Введіть кілька слів і ми перевиримо, чи є серед них "погане слово"`)
        if(badWord.length && userWords.length){
            if(!userWords.includes(badWord))
                alert(`Поганих слів не знайдено`)
            else{
                let badWordsCounter = 0
                while(userWords.includes(badWord)){
                    badWordsCounter++                
                    userWords = userWords.slice((userWords.indexOf(badWord) + badWord.length), userWords.length)
                }
                alert(`Погане слово знайдене ${badWordsCounter} разів.`)
            }
        }else{
            alert('Ви помилились при вводі даних')
        }
    }
    /*Boolean ==== Напишіть код, який запитує ті чи інші питання з відповіддю "так"/"ні" за допомогою confirm, і зберігає відповіді в змінних. */
    else if(blockNumber === "Boolean" || +blockNumber === 3){
        let question1 = `Ви визначаєте свою стать, як "чоловіча"?`
        let question2 = `Ви маєте авто?`
        let question3 = `Ви коли-небудь бігали маратон?`
        let answer1 = confirm(question1)
        let answer2 = confirm(question2)
        let answer3 = confirm(question3)
        alert(`Ваші відповіді:
        ${answer1 ? "✅" : "❌"} ${question1}
        ${answer2 ? "✅" : "❌"} ${question2}
        ${answer3 ? "✅" : "❌"} ${question3}`)
    }

    /*Boolean: if ==== Розширте попереднє завдання умовами за отриманими змінними умовами (if-else). 
                        Наприклад, якщо ви питаєте стать користувача з допомогою confirm, то за умовою зробіть alert("Ви жінка") та alert("Ви чоловік") */
    else if(blockNumber === "Boolean: if" || +blockNumber === 4){
        let question1 = `Ви чоловік?`
        let question2 = `Ви маєте авто?`
        let question3 = `Ви коли-небудь бігали маратон?`
        let answer1 = confirm(question1)
        let answer2 = confirm(question2)
        let answer3 = confirm(question3)
        let result = "Наскільки я зрозумів: "    
        result += answer1 ? "ви - чоловік, " : "ви - жінка, "    
        if(answer2)
            result += "що має авто "
        else
            result += "що не має авто "
        if(answer3)
            result += "та може пробігти 42 км на одному диханні."
        else
            result += "на не бачить небхідності бігти 42 км просто так."
        alert(`Ваші відповіді:
        ${answer1 ? "✅" : "❌"} ${question1}
        ${answer2 ? "✅" : "❌"} ${question2}
        ${answer3 ? "✅" : "❌"} ${question3}` + `
        ` +result)
    }

    /*Comparison: sizes ==== Зробіть переклад переклад з нашої системи розмірів до американської чи будь-якої на вибір.
                                Використовуйте prompt, умови порівняння та alert. */
    else if(blockNumber === "Comparison: sizes" || +blockNumber === 5){
        let size = prompt(`Нарешті ми займемося чимось корисним і дізнаємося, який розмір панчох / шкарпеток підійде нам, якщо ми потрапимо в ВБ.
    Введіть розмір панчох / шкарпеток по європейській системі розмірів [від 0 до 6]`)
        if(size.length && Number.isInteger(+size)){
            size = +size //Це треба, бо якщо вище написати "+prompt", то він пусте значення з промта буде сприймати, як 0-ий розмір
            if(size===0)
                size = "У ВБ нам підійде розмір 8"
            else if(size===1)
                size = "У ВБ нам підійде розмір 8 1/2"
            else if(size===2)
                size = "У ВБ нам підійде розмір 9"
            else if(size===3)
                size = "У ВБ нам підійде розмір 9 1/2"
            else if(size===4)
                size = "У ВБ нам підійде розмір 10"
            else if(size===5)
                size = "У ВБ нам підійде розмір 10 1/2"
            else if(size===6)
                size = "У ВБ нам підійде розмір 11"
            else
                size = "У ВБ немає такого розміру. Можливо ви помилилися"
            alert(size)        
        }else{
            alert('Ви помилились при вводі даних')
        }
    }

    //Ternary ==== Запитайте у користувача стать (confirm). Виведіть за допомогою alert "Ви чоловік" або "Ви жінка". Використовуйте тернарний оператор.
    else if(blockNumber === "Ternary" || +blockNumber === 6){
        alert (confirm("Якщо ви чоловік, натисніть ОК. \nЯкщо ви жінка, натисніть CANCEL") ? "Ви чоловік" : "Ви жінка")
    }

    //Training ==== Перегляньте вирази нижче і спробуйте обчислити їхній результат. Перевірте себе, використовуючи Console
    else if(blockNumber === "Training" || +blockNumber === 7){
        alert('Довіра як папір, раз помнеш - ідеальною вона вже не буде, як не рівняй')
    }

    /*Prompt: or ==== Для завдання Number: age використовуючи АБО || вивести повідомлення про помилку (alert) 
                        якщо користувач не введе вік або натисне скасування (тобто prompt видасть порожній рядок або null, що інтерпретується як false). */
    else if(blockNumber === "Prompt: or" || +blockNumber === 8){
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
        }
    }

    /*Confirm: or this days ==== За допомогою цього ж трюку (використання АБО для запуску альтернативи) зробіть примхливого робота, 
                                    який у confirm запитує "шопінг?", а у разі відмови - виводити alert "ти - бяка". */
    else if(blockNumber === "Confirm: or this days" || +blockNumber === 9){
        confirm("шопінг?") || alert('ти - бяка') ? alert('ЧУР ПЛАТИШ ТИ!!!') : true // <= Так, мабуть, не можна, але треба було щось написати.
        
    }

    //Confirm: if this days ==== Зробити те саме за допомогою if.
    else if(blockNumber === "Confirm: if this days" || +blockNumber === 10){
        if(confirm("шопінг?")){
            alert('ЧУР ПЛАТИШ ТИ!!!') 
        }else{
            alert('ти - бяка')
        }         
    }

    /*Default: or ==== Попросіть користувача ввести ПІБ в три різні змінні. Використовуючи АБО || додайте рядки за ЗАмовчУВАнням, 
                        які будуть зберігатися у внутрішніх змінних якщо користувач ввів порожній рядок або натиснув "Скасувати". 
                        Наприклад, якщо ви на кроці введення прізвища натиснете Escape, прізвище буде "Іванов" */
    else if(blockNumber === "Default: or" || +blockNumber === 11){
        let uName1 = prompt ("Введіть своє призвіще") || "Шевченко"
        let uName2 = prompt ("Введіть своє ім'я") || "Тарас"
        let uName3 = prompt ("Введіть своє по-батькові") || "Григорович"
        let uFullMane = uName1 + " " + uName2 + " " + uName3
        alert("Ну виходить, що ви: " + uFullMane)
    }

    //Default: if ==== Зробіть те саме за допомогою if та else
    else if(blockNumber === "Default: if" || +blockNumber === 12){
        let uName1 = prompt ("Введіть своє призвіще")    
        let uName2 = prompt ("Введіть своє ім'я")    
        let uName3 = prompt ("Введіть своє по-батькові")    
        if(!uName1)
            uName1 = "Шевченко"
        if(!uName2)
            uName2 = "Тарас"
        if(!uName3)
            uName3 = "Григорович"
        let uFullMane = uName1 + " " + uName2 + " " + uName3    
        alert("Ну виходить, що ви: " + uFullMane)
    }

    /*Login and password ==== Напишіть код, який запитує логін, перевіряє його на вірність, якщо логін вірний,просить 
                                ввести пароль і перевіряє його. В разі розбіжності логіну чи пароля виводити alert з текстом помилки. 
                                У разі успішного логіну – alert з привітанням. Правильні логін: admin та пароль: qwerty. Використовуйте вкладені if та else.*/
    else if(blockNumber === "Login and password" || +blockNumber === 13){
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

    /*Currency exchange ==== Попросіть користувача ввести валюту (наприклад, usd, eur, інші валюти додати до смаку) за допомогою prompt.
                                Також поцікавтеся купити чи продати він бажає (використовуйте confirm).
                                За допомогою декількох if та тернарного оператора всередині кожного з if задайте 
                                змінну rate, визначальну курс конкретної валюти на купівлю чи продаж. Зверніть увагу 
                                на місце оголошення змінної rate - вона має бути доступна в коді після всіх цих if.
                                Попросіть користувача ввести суму на обмін
                                Порахуйте та виведіть результат шляхом множення або поділу на rate
                                Дайте можливість користувачеві вводити назви валют у будь-якому регістрі (UsD, eUR). 
                                Для цього в if використовуйте toUpperCase (або toLowerCase) */
    else if(blockNumber === "Currency exchange" || +blockNumber === 14){
        let rateUSD = 36.5686
        let rateEUR = 39.761
        let rateDOGE = 3.62
        let rate
        let buySale
        let userCurrency = prompt(`Оберіть валюту:
    USD - Долар США
    EUR - Євро
    DOGE - Dogecoin`)    
    if(userCurrency != null && userCurrency.length >= 3 && userCurrency.length <= 4){
            buySale = confirm (`ЗРОБІТЬ ВИБІР:
    Натисніть ОК, якщо хочете ОБМІНЯТИ ВАЛЮТУ НА ГРИВНІ
    Натисніть CANCEL, якщо хочете ОБМІНЯТИ ГРИВНІ НА ВАЛЮТУ`)            
            userCurrency = userCurrency.trim().toUpperCase()
            if(userCurrency === "USD" ? rate = rateUSD : userCurrency === "EUR" ? rate = rateEUR : userCurrency === "DOGE" ? rate = rateDOGE : false){        
                let amount = +prompt("Скільки саме " + userCurrency + " ви хочете " + (buySale ? "продати" : "купити") + " за курсом " + rate )
                alert ("Ви вирішили " + (buySale ? "продати " : "купити ") + amount + " " + userCurrency + " за курсом " + rate + ". Ви " + (buySale ? "отримаєте " : "маєте сплатити ") + (amount * rate ).toFixed(2) + " гривень.")
            }else{
                alert('Ви помилились при виборі валюти')
            }
        }else{
            alert('Ви помилились при вводі даних')        
        }        
    }

    /*Scissors ==== Зробіть гру "камінь-ножиці-папір". Користувач вводить свій варіант через prompt, 
                    програма генерує свій варіант через Math.random() і виводить через alert. Наступний alert виводить ім'я переможця чи "нічия"*/
    else if(blockNumber === "Scissors" || +blockNumber === 15){
        let bet = prompt("Хтось на триколісному велосипеді в дивній масці клоуна каже: \nЯ хочу зіграти з тобою в гру\nЗробіть ставку: камінь, ножиці, чи папір")
        if(bet != null && (bet.trim().toUpperCase() == "КАМІНЬ" || bet.trim().toUpperCase() == "НОЖИЦІ" || bet.trim().toUpperCase() == "ПАПІР" )){
            bet = bet.trim().toUpperCase()
            let betBot = Math.random() * 3
            if(betBot >= 0 && betBot < 1){
                betBot = "КАМІНЬ"
            }else if(betBot >= 1 && betBot < 2){
                betBot = "НОЖИЦІ"
            }else if(betBot >= 2 && betBot <= 3){ //По факту, ймовірність цього варіанту таки вища за інші :)
                betBot = "ПАПІР"
            }
            alert(bet + " : " + betBot)
            if(bet === betBot){
                alert("НИЧІЯ!")
            }else if(bet === "ПАПІР" && betBot === "НОЖИЦІ"){
                alert("Ви обрали " + bet + " Бот обрав " + betBot + " Ви програли.")
            }else if(betBot === "ПАПІР" && bet === "НОЖИЦІ"){
                alert("Ви обрали " + bet + " Бот обрав " + betBot + " Ви виграли.")
            }else if(bet === "ПАПІР" && betBot === "КАМІНЬ"){
                alert("Ви обрали " + bet + " Бот обрав " + betBot + " Ви виграли.")
            }else if(bet === "КАМІНЬ" && betBot === "ПАПІР"){
                alert("Ви обрали " + bet + " Бот обрав " + betBot + " Ви програли.")
            }else if(bet === "НОЖИЦІ" && betBot === "КАМІНЬ"){
                alert("Ви обрали " + bet + " Бот обрав " + betBot + " Ви програли.")
            }else if(bet === "КАМІНЬ" && betBot === "НОЖИЦІ"){
                alert("Ви обрали " + bet + " Бот обрав " + betBot + " Ви виграли.")
            }else{
                alert("ЩОСЬ ПІШЛО ГЕТЬ НЕ ТАК!!!")
            }
        }else{
            alert('Ви помилились при вводі даних')
        }
    }else if(blockNumber === "Exit" || +blockNumber === 0){
        alert('Ну ніби все')
        blockNumber = +0
    }    else{
        alert('Ви помилились при вводі даних')
    }
}
