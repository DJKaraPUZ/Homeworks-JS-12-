/*blocks ==== Дайте відповідь на запитання в коментарях і звіртеся з відладчиком. console.log спеціально не писав*/

{
    let a = 10
    {
        let b = 20
        {
            let c = 30
            //які тут будуть значення змінних a, b, c, d
            // a: 10 b: 20 c: 30 d: поки не існує
            console.log(`// a: 10 b: 20 c: 30 d: поки не існує`)
            console.log(`a: ${a}, b: ${b}, c: ${c}`/*, d: ${d}`*/)
            b++
            a *= 10
            // a: 100 b: 21 c: 30 d: поки не існує
            console.log(`// a: 100 b: 21 c: 30 d: поки не існує`)
            console.log(`a: ${a}, b: ${b}, c: ${c}`/*, d: ${d}`*/)
        }
        {
            let c = 50
            //які тут будуть значення змінних a, b, c, d
            // a: 100 b: 21 c: 50 d: поки не існує
            console.log(`// a: 100 b: 21 c: 50 d: поки не існує`)
            console.log(`a: ${a}, b: ${b}, c: ${c}`/*, d: ${d}`*/)
            b += 500
            // a: 100 b: 521 c: 50 d: поки не існує
            console.log(`// a: 100 b: 521 c: 50 d: поки не існує`)
            console.log(`a: ${a}, b: ${b}, c: ${c}`/*, d: ${d}`*/)
        }
        {
            const a = 100500
            const d = "value"
            //які тут будуть значення змінних a, b, c, d
            // a: 100500 b: 521 c: поки не існує d: "value"
            console.log(`// a: 100500 b: 521 c: поки не існує d: "value"`)
            console.log(`a: ${a}, b: ${b}, c:    , d: ${d}`)
            {
                let a = -50
                b     = 1000
                //які тут будуть значення змінних a, b, c, d
                // a: -50 b: 1000 c: поки не існує d: "value"
                console.log(`// a: -50 b: 1000 c: поки не існує d: "value"`)
                console.log(`a: ${a}, b: ${b}, c:     , d: ${d}`)
            }
            //які тут будуть значення змінних a, b, c, d
            // a: 100500 b: 521 c: поки не існує d: "value"
            console.log(`// a: 100500 b: 521 c: поки не існує d: "value"`) // <= Ну до цього моменту все було ОК :(
            console.log(`a: ${a}, b: ${b}, c:    , d: ${d}`)
        }
        //які тут будуть значення змінних a, b, c, d
        // a: 100 b: 521 c: поки не існує d: поки не існує
        console.log(`// a: 100 b: 521 c: поки не існує d: поки не існує`) // <= Та сама проблема з b :(
        console.log(`a: ${a}, b: ${b}, c:   , d:   `)
    }
    //які тут будуть значення змінних a, b, c, d
    // a: 100 b: поки не існує c: поки не існує d: поки не існує
    console.log(`// a: 100 b: поки не існує c: поки не існує d: поки не існує`)
    console.log(`a: ${a}, b:   , c:  , d:    `)
}

/*comparison if ==== Розберіть приклад
                    Додайте умову негативного віку на приклад вище. Розставте ВІДСУТНІ 
                    (але синтаксично необов'язкові) фігурні дужки. Викиньте зайве з поточного коду */

{//Чесно кажучи, я щось не дуже зроумів завдання.
    var age = prompt ("Скільки вам років?");
    if (age < 0) {
        alert("Надто молодий, щоб користуватися ПК");
    }
    else if (age >= 0 && age < 18){
        alert("школяр");
    }
    else if (age >= 18 && age < 30){
        alert("молодь");
    }
    else if (age >= 30 && age < 45){
        alert("зрілість");
    }
    else if (age >= 45 && age < 60){
        alert("захід сонця");
    }
    else if (age >= 60) {
        alert("як пенсія?");
    }
    else {
        alert("чи кіборг, чи KERNESS");
    }
}                        

/*switch: sizes ==== Зробіть завдання Comparison: sizes використовуючи switch
    /*Comparison: sizes ==== Зробіть переклад переклад з нашої системи розмірів до американської чи будь-якої на вибір.
                                Використовуйте prompt, умови порівняння та alert.
    {
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
    }*/
{
    let size = prompt(`Нарешті ми займемося чимось корисним і дізнаємося, який розмір панчох / шкарпеток підійде нам, якщо ми потрапимо в ВБ.
Введіть розмір панчох / шкарпеток по європейській системі розмірів [від 0 до 6]`)
        if(size.length && Number.isInteger(+size)){
            size = +size //Це треба, бо якщо вище написати "+prompt", то він пусте значення з промта буде сприймати, як 0-ий розмір
            switch (size){
                case 0 :
                    size = "У ВБ нам підійде розмір 8"
                    break
                case 1 :
                    size = "У ВБ нам підійде розмір 8 1/2"
                    break
                case 2 :
                    size = "У ВБ нам підійде розмір 9"
                    break
                case 3 :
                    size = "У ВБ нам підійде розмір 9 1/2"
                    break
                case 4 :
                    size = "У ВБ нам підійде розмір 10"
                    break
                case 5 :
                    size = "У ВБ нам підійде розмір 10 1/2"
                    break
                case 6 :
                    size = "У ВБ нам підійде розмір 11"
                    break
                default:
                    size = "У ВБ немає такого розміру. Можливо ви помилилися"
            }
            alert(size)
        }else{
            alert('Ви помилились при вводі даних')
        }
}

/*switch: if ==== Перепишіть приклад нижче, використовуючи if.
    let color = prompt("Введіть колір","");
    switch (color) {
         case "red": document.write("<div style='background-color: red;'>червоний</div>");
         case "black": document.write("<div style='background-color: black; color: white;'>чорний</div>");
                     break;
         case "blue": document.write("<div style='background-color: blue;'>синій</div>");
         case "green": document.write("<div style='background-color: green;'>зелений</div>");
                     break;
         default: document.write("<div style='background-color: gray;'>Я не зрозумів</div>");
    }*/
{
    let color = prompt("Введіть колір","");
    if(color === "red"){
        document.write("<div style='background-color: red;'>червоний</div>");
        document.write("<div style='background-color: black; color: white;'>чорний</div>");
    }else if(color === "black"){
        document.write("<div style='background-color: black; color: white;'>чорний</div>");
    }
    else if(color === "blue"){
        document.write("<div style='background-color: blue;'>синій</div>");
        document.write("<div style='background-color: green;'>зелений</div>");
    }else if(color === "green"){
        document.write("<div style='background-color: green;'>зелений</div>");
    }else{
        document.write("<div style='background-color: gray;'>Я не зрозумів</div>");
    }
}

/*noswitch ==== Напишіть функцію noSwitch, яка приймає об'єкт зі значеннями-функціями, ключ для об'єкта 
                та запускає одну з функцій з об'єкта якщо ключ знайдений, інакше - запускає default:*/

{
    const noSwitch = (key, cases, defaultKey='default') => {
        //перевірка наявності key в cases
        //якщо є - дістати значення по ключу. це буде функція. Запустити її
        //якщо немає - витягти з об'єкта cases значення по ключу, ім'я якого лежить у змінній defaultKey. Запустити
        //Нехай функція noSwitch повертає те, що повертає одна з функцій з об'єкта про всяк випадок
        if(Object.keys(cases).includes(key)){
            //console.log(key + " є в CASES!")
            return cases[key]()
        }else{
            //console.log(key + " НЕМАЄ в CASES!")
            return cases[defaultKey]()
        }        
    }
    
    const drink = prompt("Що ви любите пити")
    noSwitch(drink, {
        воду: () => console.log('Найздоровіший вибір!'),
        чай(){
            console.log('Смачна та корисна штука. Не перестарайтеся з цукром')
        },
        "пиво": () => console.log('Добре влітку, та в міру'),
        віскі: function(){
            console.log('Та ви, батечку, естет! Не забудьте лід і сигару')
        },
        default(){
            console.log('шото я не зрозумів')
        }
    })
}

/*closure calc ==== Напишіть всередині анонімної функції, переданої в then (data =>):
                    - цикл, що перебирає курси;
                        - на кожній ітерації створюється кнопка (document.createElement)
                        - текст кнопки - назва валюти (innerHTML або innerText)
                        - Призначте обробник події на цій кнопці (onclick = () => {.....}). Функція-обробник має бути написана прямо в тілі циклу
                        - Обробник повинен запитувати суму використовуючи prompt і конвертувати цю суму з валюти, написаної на кнопці в USD
                        - Знайдіть замикання. Для доступу до валют з data.rates використовуйте [], . тут не допоможе. Кнопки додавайте в спеціальний 
                            контейнер (div наприклад), створений в HTML, або, на крайній край, в body*/
{
    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
     .then(data => {
            document.write("<BR>")
            const{rates: djk}  = data
            const mainDiv = document.createElement('div')
            mainDiv.style.cssText = `background-Color: black; height: 99%; width: 99%`            
            document.body.append(mainDiv)
            for (const [key, value] of Object.entries(djk)){
                const button = document.createElement('button')
                button.style.cssText = `padding: 1% 1%; margin: 1% 1%`
                button.innerText = key                
                button.onclick = () => {
                    alert((+prompt("Скільки?") * value).toFixed(2))
                }
                mainDiv.append(button)
            }
            console.log(data) // Вивчіть структуру, що отримується з сервера в консолі
        })
}

/*closure calc 2 ==== Створіть HTML файл з:
                        - <select id='from'> - вихідна валюта
                        - <select id='to'> - валюта в яку відбувається обмін
                        - <div id='rate'> - кроскурс між валютами
                        - <input type='number' id='amount' /> - сума у вихідній валюті
                        - <div id='result'> - сума у валюті, в яку хочемо поміняти
                    Використовуючи ЗАГОТОВКУ з попереднього завдання, наповніть select-и тегами option з назвами валют, використовуючи цикл
                        - document.createElement
                        - innerText для option
                        - from.append або to.append
                    За межами циклу призначте обробники onchange для елементів select та oninput для елемента input, 
                    використовуючи їх id. За цими подіями оновлюйте текст у div#rate та div#result */

{
    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
     .then(data => {
        document.write("<BR>")
        const{rates: djk}  = data
        const mainDiv = document.createElement('div')
        mainDiv.style.cssText = `background-Color: black; height: 80%; width: 99%; display: flex; flex-direction: column;`
        document.body.append(mainDiv)
        const from = document.createElement('select')
        const to = document.createElement('select')
        const amount = document.createElement('input')
        amount.type = "number"
        const rate = document.createElement('div')
        rate.style.cssText = `background-Color: yellow; min-height: 30%; display: flex; align-items: center; justify-content: center;`
        const result = document.createElement('div')
        result.style.cssText = `background-Color: RoyalBlue	; min-height: 30%; display: flex; align-items: center; justify-content: center; `

        const calcResult = () => {
            rate.innerHTML = "<b>" + (to.value / from.value).toFixed(2) + "</b>"
            result.innerHTML = "<b>" + (amount.value * (to.value / from.value)).toFixed(2)  + "</b>"
        }

        for (const [key, value] of Object.entries(djk)){
            let option1 = document.createElement('option')
            let option2 = document.createElement('option')
            option1.value = value
            option1.textContent = key
            option2.value = value
            option2.textContent = key
            from.append(option1)
            to.append(option2)
        }

        mainDiv.append(from)
        mainDiv.append(amount)
        mainDiv.append(to)
        mainDiv.append(rate)
        mainDiv.append(result)

        from.onchange = to.onchange = amount.oninput  = calcResult

    })   
}

/*countries and cities ==== За аналогією з попереднім завданням, реалізуйте інтерфейс вибору країни та міста:
                            - Наповнюйте select#countries елементами option з назвами країн;
                            - так само призначте обробник події onchange в select#countries, який:
                            - видаляє старий контент select#cities (достатньо занести в innerHTML або innerText порожній рядок)
                            - додає в select#cities елементи option з містами з обраної щойно країни.
                            Таким чином, при зміні країни змінюватиметься список міст у select#cities */
{
    fetch('https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.min.json').then(res => res.json())
     .then(data => {
        document.write("<BR>")
        const mainDiv = document.createElement('div')
        mainDiv.style.cssText = `background-Color: grey; height: 80%; width: 99%; display: flex; flex-direction: column;`
        document.body.append(mainDiv)
        const countries = document.createElement('select')
        const cities = document.createElement('select')        
        for (const [key, values] of Object.entries(data)){
            let option = document.createElement('option')            
            option.textContent = key
            option.value = key
            countries.append(option)            
        }
        
        for(const city of data[countries.value]){
            let option = document.createElement('option')
            option.textContent = city
            option.value = city
            cities.append(option)
        }

        mainDiv.append(countries)
        mainDiv.append(cities)

        const newConntry = () => {
            cities.innerText = ""
            for(const city of data[countries.value]){
                let option = document.createElement('option')
                option.textContent = city
                option.value = city
                cities.append(option)
            }
        }

        countries.onchange = newConntry
    })
}