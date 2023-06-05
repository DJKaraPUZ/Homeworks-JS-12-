//Світлофор ==== Використовуючи асинхронну функцію та нескінченний цикл, просимулюйте світлофор:
                //Для відображення включення того чи іншого світла використовуйте один або три DOM-елементи.

//{
    let flag = true
    const delay = ms => new Promise(ok => setTimeout(() => ok(ms), ms))

    const red = document.querySelector("#trafficLight .redColorDiv")
    const yellow = document.querySelector("#trafficLight .yellowColorDiv")
    const green = document.querySelector("#trafficLight .greenColorDiv")
    
    let startRed = window.getComputedStyle(red).backgroundColor;
    let startYellow = window.getComputedStyle(yellow).backgroundColor;
    let startGreen = window.getComputedStyle(green).backgroundColor;

    trafficLight()
    //trafficLightAgain("trafficLightAgain") //
    trafficLightAgain("trafficLightAgain", 3000, 800, 3000)
    //trafficLight2()
    pedestrianTrafficLight("pedestrianTrafficLight")
    pedestrianTrafficLightWithButton("pedestrianTrafficLightWithButton")

    async function trafficLight(){
        while (true){            
            //включаємо зелений
            red.style.backgroundColor = startRed
            yellow.style.backgroundColor = startYellow
            green.style.backgroundColor = "green"
            await delay(1500)
            //включаємо жовтий
            red.style.backgroundColor = startRed            
            yellow.style.backgroundColor = "yellow"
            green.style.backgroundColor = startGreen
            await delay(400)            
            //включаємо червоний
            red.style.backgroundColor = "red"
            yellow.style.backgroundColor = startYellow
            green.style.backgroundColor = startGreen
            await delay(1500)
        }
    }

    async function trafficLight2(){
        while (true){
            /**
             * Взагалі світлофор ніби ходить згори вниз, а потім знову нагору
             */
            //включаємо зелений
            red.style.backgroundColor = startRed
            yellow.style.backgroundColor = startYellow
            green.style.backgroundColor = "green"
            await delay(1500)
            //включаємо жовтий
            red.style.backgroundColor = startRed            
            yellow.style.backgroundColor = "yellow"
            green.style.backgroundColor = startGreen
            await delay(400)
            //включаємо червоний
            red.style.backgroundColor = "red"
            yellow.style.backgroundColor = startYellow
            green.style.backgroundColor = startGreen
            await delay(1500)
            //включаємо жовтий
            red.style.backgroundColor = startRed            
            yellow.style.backgroundColor = "yellow"
            green.style.backgroundColor = startGreen
            await delay(400)
            continue
        }
    }

//PedestrianTrafficLight ==== Напишіть спрощений світлофор для пішоходів

    async function trafficLightAgain(parentID, redTime = 1500, yellowTime = 400, greenTime = 1500){
        const red = document.querySelector("#" + parentID + " .redColorDiv")
        const yellow = document.querySelector("#" + parentID + " .yellowColorDiv")
        const green = document.querySelector("#" + parentID + " .greenColorDiv")

        let startRed = window.getComputedStyle(red).backgroundColor;
        let startYellow = window.getComputedStyle(yellow).backgroundColor;
        let startGreen = window.getComputedStyle(green).backgroundColor;

        while (true){            
            //включаємо зелений
            red.style.backgroundColor = startRed
            yellow.style.backgroundColor = startYellow
            green.style.backgroundColor = "green"
            await delay(greenTime)
            //включаємо жовтий
            red.style.backgroundColor = startRed            
            yellow.style.backgroundColor = "yellow"
            green.style.backgroundColor = startGreen
            await delay(yellowTime)            
            //включаємо червоний
            red.style.backgroundColor = "red"
            yellow.style.backgroundColor = startYellow
            green.style.backgroundColor = startGreen
            await delay(redTime)
        }
    }


    async function pedestrianTrafficLight(parentID, redTime = 2000,greenTime = 2000){
        const red = document.querySelector("#" + parentID + " .redColorDiv")
        const green = document.querySelector("#" + parentID + " .greenColorDiv")

        let startRed = window.getComputedStyle(red).backgroundColor;
        let startGreen = window.getComputedStyle(green).backgroundColor;

        while (true){            
            //включаємо зелений
            red.style.backgroundColor = startRed            
            green.style.backgroundColor = "green"
            await delay(greenTime)
            //включаємо червоний
            red.style.backgroundColor = "red"            
            green.style.backgroundColor = startGreen
            await delay(redTime)
        }
    }    
    
    async function pedestrianTrafficLightWithButton(parentID, redTime = 2000,greenTime = 2000){
        
        const red = document.querySelector("#" + parentID + " .redColorDiv")
        const green = document.querySelector("#" + parentID + " .greenColorDiv")
        
        const speedButton = document.getElementById("speedButton")
        
        let startRed = window.getComputedStyle(red).backgroundColor;
        let startGreen = window.getComputedStyle(green).backgroundColor;

        while (true){
            let djk = new Promise((resolve) =>{
                if(flag){
                    speedButton.onclick = () => {
                        canGreen()
                        resolve(1)
                    }
                }else{
                    console.log("PAHO!!!")
                }
            })

            red.style.backgroundColor = startRed
            green.style.backgroundColor = "green"
            await delay(greenTime)

            red.style.backgroundColor = "red"
            green.style.backgroundColor = startGreen
            await Promise.race([delay(redTime), djk])
        }
    }

    async function canGreen(kd = 4000){        
        flag = false        
        await delay(kd)        
        flag = true        
    }
    
    speedButton.onmousedown = () =>{
        speedButton.style.borderColor = "black"
    }

    speedButton.onmouseup = () =>{
        speedButton.style.borderColor = "red"
    }
//}

/**speedtest ==== Написати асинхронну функцію в якій:
                    - count - кількість повторів
                    - parallel - кількість одночасних запитів/промісів в одному повторі
                    - getPromise - функція, яка вміє повернути потрібний Вам проміс для тестування швидкості його роботи 
                    яка буде в циклі count раз створювати parallel промісів за допомогою переданої функції getPromise, 
                        чекати виконання всіх parallel промісів, після чого цикл повторюється.
                    Виміряти час загальний час виконання, та обчислити:
                    - duration, загальну тривалість роботи циклу
                    - parallelDuration, середній час обробки запиту паралельно (за який час виконався parallel*count промісів),
                    - paralledSpeed, швидкість у запитах у мілісекунду
                    - queryDuration, реальний середній час запиту (відштовхуючись від count та часу роботи циклу).
                    - querySpeed, реальна середня швидкість запиту
                    Ці змінні повернути в одному об'єкті-результаті (див. вище заготовку)
                    Для налагодження спробуйте на delay (приклад вище є, реальний час відрізнятиметься на одиниці-десятки мілісекунд). 
                    Потім можете спробувати "swapi.dev". Не створюйте надто багато паралельних запитів.*/
{
    const delay = ms => new Promise(ok => setTimeout(() => ok(ms), ms))

    async function speedtest(getPromise, count, parallel=1){
        let duration = 0
        let querySpeed
        let queryDuration
        let parallelSpeed
        let parallelDuration
        let querySpeedArr = []
        let queryDurationArr = []

        for(let i = 0; i < count; i++){
            const promiseArr = []
            let startLoopTimePoint = performance.now()
            for(let j = 0; j < parallel; j++){
                promiseArr.push(getPromise())
            }
            console.log(promiseArr)
            await Promise.all(promiseArr)
            let endLoopTimePoint = performance.now()
            console.log("Loop time : " + (endLoopTimePoint - startLoopTimePoint))
            duration += (endLoopTimePoint - startLoopTimePoint)
            console.log("duration : " + duration)
            querySpeedArr.push(1 / (endLoopTimePoint - startLoopTimePoint))
            queryDurationArr.push((endLoopTimePoint - startLoopTimePoint))
        }
        querySpeed = querySpeedArr.reduce((first, second) =>{
            return first + second
        }, 0) / querySpeedArr.length

        queryDuration = queryDurationArr.reduce((first, second) =>{
            return first + second
        }, 0) / queryDurationArr.length

        parallelDuration = duration / (count * parallel)
        parallelSpeed = (count * parallel) / duration

        console.log("<-- END -->")

        return {
            duration,
            querySpeed, //середня швидкість одного запиту
            queryDuration, //
            parallelSpeed,
            parallelDuration
        }
    }
    speedtest(() => delay(1000), 10, 10 ).then(result => console.log(result))
    // {duration: 10000, 
    // querySpeed: 0.001, //1 тысячная запроса за миллисекунду
    // queryDuration: 1000, //1000 миллисекунд на один реальный запрос в среднем 
    // parallelSpeed: 0.01  // 100 запросов за 10000 миллисекунд
    // parallelDuration: 100 // 100 запросов за 10000 миллисекунд
    speedtest(() => fetch('http://swapi.dev/api/people/1').then(res => res.json()), 10, 5).then(result => console.log(result))    
}

/*gql ====  Напишіть функцію gql, яка здійснює GraphQL запит. Функція приймає три параметри:
            1. Ендпоінт - адреса сервера. Наприклад "http://shop-roles.node.ed.asmer.org.ua/graphql"
            2. Текст запиту (query).
            3. Параметри(змінні) (variables) запиту об'єктом
            Функція повинна повертати проміс, створений fetch з наступними налаштуваннями:
            - Метод POST
            - Заголовки:
                - Content-Type - application/json
                - Accept - application/json
            - Тіло - JSON, об'єкт з двома ключами - query (текст запиту) та variables*/
{
    let URL = "http://shop-roles.node.ed.asmer.org.ua/graphql"
    async function gql(EndPoint, query, variables){
        return fetch(EndPoint, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "Accept" : "application/json"
            },
            body : JSON.stringify({
                query: query,
                variables
            })
        }).then(result => {
            return result.json()
        })
    }

    ;(async () => {
        const catQuery = `query cats($q: String){
                                            CategoryFind(query: $q){
                                                _id name
                                            }
                                        }`
        const cats = await gql("http://shop-roles.node.ed.asmer.org.ua/graphql",  catQuery,  {q: "[{}]"})
        console.log(cats) //список категорій з _id name та всім таким іншим        
        
        const loginQuery = `query login($login:String, $password:String){
                                    login(login:$login, password:$password)
                            }`
        
        const token = await gql("http://shop-roles.node.ed.asmer.org.ua/graphql", loginQuery ,{login: "test457", password: "123123"})
        console.log(token)
    })()
}



/*jwtDecode ==== Напишете функцію jwtDecode, яка приймає єдиний параметр token і повертає інформацію з переданого JWT токена.
                    Алгоритм розкодування:
                    - Розбити токен на три частини. Розділювач - . (крапка)
                    - Виділити середню частину.
                    - Використовуючи функцію atob розкодувати середню частину з кодування Base64, отримавши JSON
                    - Розкодувати JSON
                    - Повернути розкодовані дані з JSON
                    Врахуйте, що як токен може бути передана якась дичина. У такому разі розкодування не вийде, і функція:
                    - Не повинна сипати червоними матюками (помилками) у консоль
                    - Повинна просто повернути undefined */
{
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOiI2MzIyMDVhZWI3NGUxZjVmMmVjMWEzMjAiLCJsb2dpbiI6InRlc3Q0NTciLCJhY2wiOlsiNjMyMjA1YWViNzRlMWY1ZjJlYzFhMzIwIiwidXNlciJdfSwiaWF0IjoxNjY4MjcyMTYzfQ.rxV1ki9G6LjT2IPWcqkMeTi_1K9sb3Si8vLB6UDAGdw"
    console.log(jwtDecode(token)) 

    function jwtDecode(token){//debugger
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

    try {
        console.log(jwtDecode())         //undefined
        console.log(jwtDecode("дічь"))   //undefined
        console.log(jwtDecode("ey.ey.ey"))   //undefined
        
        console.log('до сюди допрацювало, а значить jwtDecode не матюкався в консоль червоним кольором')
    }
    finally{
        console.log('ДЗ, мабуть, закінчено')
    }
}
