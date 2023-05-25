/*makeProfileTimer ====  Напишіть функцію makeProfileTimer, яка служить для виміру часу виконання іншого коду і працює наступним чином:
                            Використовуйте performance.now() для того, щоб запам'ятати момент часу. Ця функцiя повертає час у 
                            мiлiсекундах вiд моменту завантаження сторiнки.*/
{    
    function makeProfileTimer(x = performance.now()){
        function f (y = performance.now()){
            return y - x 
        }
        return f
    }

    const timer = makeProfileTimer()
    alert('Вимiрюємо час роботи цього alert');  //якийсь код, час виконання якого ми хочемо виміряти з високою точністю
    alert(timer()); //alert повинен вивести час у мілiсекундах від виконання makeProfileTimer до моменту виклику timer(), 
                   // тобто виміряти час виконання alert
    const timer2 = makeProfileTimer()
    prompt('')
    alert(`Час роботи двух аlert та одного prompt ${timer()}`)
    alert(`Час роботи prompt та попереднього alert ${timer2()}`)
}
    
/*makeSaver ==== Напишіть функцію makeSaver, яка:
                    Таким чином makeSaver вирішує два завдання:
                    - Назавжди зберігає результат функції. Це актуально, наприклад, для Math.random.
                    - Діє ліниво, тобто викликає Math.random тільки тоді, коли результат дійсно потрібний. Якщо ж з 
                    якихось причин значення не знадобиться, то Math.random навіть не буде викликано*/
{
    let saver = makeSaver(Math.random) //створює функцію-сховище результату переданої як параметр функції (Math.random 
                                      // у прикладі). На цьому етапі Math.random НЕ ВИКЛИКАЄТЬСЯ
    let value1 = saver() //saver викликає передану в makeSaver функцію, запам'ятовує результат і повертає його
    let value2 = saver() //saver надалі просто зберігає результат функції, і більше НЕ викликає передану в makeSaver функцію;

    alert(`Random: ${value1} === ${value2}`)

    function makeSaver(f){
        let savedValue = f()
        return function(f){
            if(savedValue === undefined){
                savedValue = f()
            }else{
                return savedValue
            }            
        }
    }

    let saver2 = makeSaver(() => {
        console.log('saved function called');
        return [null, undefined, false, '', 0, Math.random()][Math.floor(Math.random()*6)]
    })
    let value3 = saver2()
    let value4 = saver2()

    value3 === value4 // теж має бути true    
    
    let namePrompt = prompt.bind(window, 'Як тебе звуть?')
    let nameSaver = makeSaver(namePrompt)
    alert(`Привіт! Prompt ще не було!`)
    alert(`Привіт ${nameSaver()}. Щойно запустився prompt, перший та останній раз`)
    alert(`Слухай, ${nameSaver()}, го пити пиво. Адже prompt був лише один раз`)
}

/* * myBind ==== Вивчіть вбудовану функцію bind, і зробіть свою версію, яка дозволить визначити "значення за замовчуванням" 
 *              не тільки для перших параметрів, але для будь-яких інших, наприклад для ступеня в Math.pow:
                Масив, який йде третім параметром, визначає, які поля повинні підмінятися значенням за замовчуванням, 
                а які - задаватися надалі (undefined).
                
                
                
                
                
                
                */
{
    let pow5 = myBind(Math.pow, Math, [, 5]) // перший параметр - функція для біндингу значень за замовчуванням, 
                                                  // другий - this для цієї функції, третій - масив, в якому undefined означає
                                                  // параметри, які мають передаватися під час виклику,
                                                  // інші значення є значеннями за замовчуванням:
    let cube = myBind(Math.pow, Math, [, 3]) // cube зводить число в куб

    console.log( pow5(2) )// => 32, викликає Math.pow(2,5), співвіднесіть з [undefined, 5]
    console.log( pow5(4) )// => 1024, викликає Math.pow(4,5), співвіднесіть з [undefined, 5]
    console.log( cube(3) )// => 27

    let chessMin = myBind(Math.min, Math, [, 4, , 5,, 8,, 9])
    console.log( chessMin(-1,-5,3,15) )// викликає Math.min(-1, 4, -5, 5, 3, 8, 15, 9), результат -5


    let zeroPrompt = myBind(prompt, window, [undefined, "0"]) // аналогічно, тільки тепер задається "0" як текст за замовчанням в prompt,
                                                            // а текст запрошення користувача задається під час виклику zeroPrompt
    let someNumber = zeroPrompt("Введіть число") // викликає prompt("Введіть число","0")

    const bindedJoiner = myBind((...params) => params.join(''), null, [, 'b', , , 'e', 'f'])//('a','c','d') === 'abcdef'
    bindedJoiner('a','c','d') === 'abcdef'
    bindedJoiner('1','2','3') === '1b23ef'

    function myBind(f, myThis, params){        
        return function(...args){
            let resultParam = []            
            for(let i = 0; i < params.length; i++){
                //console.log("params[i] = " + params[i])
                //console.log("params[i] === undefined " + (params[i] === undefined))
                if(params[i] === undefined){                        
                    resultParam.push(args[0])
                    //console.log("args[0] = " + args[0])
                    args.shift()
                }else{
                    resultParam.push(params[i])
                }
            }
            console.log("resultParam : " + resultParam)
            return f.apply(myThis, resultParam)
        }
    }
}

/*checkResult ==== Напишіть декоратор checkResult, який:
                    - приймає функцію для запуску (оригінал) 
                    - приймає функцію для перевірки результату (валідатор)
                    - повертає обгортку, яка запускає оригінал доти, доки оригінал не поверне значення, що задовольняє функції-валідатору. 
                    У валідатор передається результат оригінальної функції. Якщо валідатор повертає true, то обгортка повертає результат. 
                    оригінальної функції. Якщо валідатор повертає щось інше, то оригінал запускається ще, доти, доки валідатор не поверне true.
                    
                    Використовуючи checkResult зробіть функції, які:
                    RandomHigh. Повертає будь-яке число в діапазоні від 0.5 до 1 завдяки Math.random
                    AlwaysSayYes. Дістає користувача вікном confirm поки він не погодиться (не натисне OK)
                    respectMe. Дістає користувача запуском цієї функції, поки якесь із полів не введено */
{
    function checkResult(original, validator){
        function wrapper(...params){            
            while(true){
                const djk = validator(original(params))
                if(djk){
                    return djk
                }else{
                    continue
                }    
            }                    
        }        
        return wrapper
    }
        
    //numberPrompt - це функція, яка буде запускати prompt до тих пір, поки користувач не введе число
    const numberPrompt = checkResult(prompt, x => !isNaN(+x))
    let   number       = +numberPrompt("Введіть число", "0")  //параметри передаються наскрізь до оригіналу. Не забудьте передати це, використовуючи call або apply
    console.log(number)

    //gamePrompt - це функція, яка буде запускати prompt доти, доки користувач не введе одне зі слів 'камінь', 'ножиці', 'папір'
    const gamePrompt   = checkResult(prompt, x => ['камень', 'ножиці', 'папір'].includes(x.toLowerCase())) 
    const turn         = gamePrompt("Введіть щось зі списку: 'камень', 'ножиці', 'папір'")
    console.log(turn)

    console.log(numberPrompt("Введіть число", "0"))

    const RandomHigh = checkResult(Math.random, x => x < 0.5 ? false : x) //З великої, бо так в ТЗ
    let randomik = RandomHigh()
    console.log(randomik)
    console.log(RandomHigh())
    console.log(RandomHigh())
    console.log(RandomHigh())
    console.log(RandomHigh())
    console.log(RandomHigh())
    console.log(RandomHigh())

    const AlwaysSayYes = checkResult(confirm, x => x !== true ? false : x) //З великої, бо так в ТЗ
    let yesMan = AlwaysSayYes()
    console.log(yesMan)

    const respectMe = checkResult(credentials, x => x === false ? false : true)
    let povaga = respectMe()
    console.log(povaga)

    function credentials(){//const credentials = () =>{
        let uName1 = prompt ("Введіть своє призвіще")
        let uName2 = prompt ("Введіть своє ім'я")
        let uName3 = prompt ("Введіть своє по-батькові")
        if(uName1 && uName2 && uName3){
            uName1 = capitalize(uName1.trim())
            uName2 = capitalize(uName2.trim())
            uName3 = capitalize(uName3.trim())
            let uFullName = uName1 + " " + uName2 + " " + uName3
            //console.log({name : uName2, surname : uName1, fatherName: uName3, fullName : uFullName})
            return {name : uName2, surname : uName1, fatherName: uName3, fullName : uFullName}
        }else{
            return false
        }
    }

    function capitalize(str){//const capitalize = str => {
        let result
        result = str[0].toUpperCase() + str.slice(1).toLowerCase()
        return result
    }
}
