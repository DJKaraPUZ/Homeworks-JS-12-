/*Arrow to Functions ==== Переведіть будь-які п'ять завдань з попереднього ДЗ з функцій у синтаксис function*/
{
    {//1 const convectorC2F = temperatureC => (!isNaN(temperatureC) ? (temperatureC * 1.8 + 32) : false)

        function convectorC2F (temperatureC){
            if(!isNaN(temperatureC)){
                return temperatureC * 1.8 + 32
            }else{
                return false
            }
        }

        alert(convectorC2F(-30))
        alert(convectorC2F(45))
        alert(convectorC2F("0"))
        alert(convectorC2F("fg"))
        alert(convectorC2F(!NaN))
    }

    {/* 2 
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
    }*/
        function convectorRedGreenBlue2RGB (red, green, blue){
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

    {/* 3 
        const deliveryBoy = (roomNumber, floors, roomsOnFloor) => {
        maxPorchRooms = roomsOnFloor * floors
        porch = Math.ceil(roomNumber / maxPorchRooms)
        floor = Math.ceil((roomNumber - (maxPorchRooms * (porch - 1))) / roomsOnFloor )
        return {entrance : porch, floor : floor}
    }
    
    deliveryBoy(44, 5, 3) */

        function deliveryBoy (roomNumber, floors, roomsOnFloor){
        maxPorchRooms = roomsOnFloor * floors
        porch = Math.ceil(roomNumber / maxPorchRooms)
        floor = Math.ceil((roomNumber - (maxPorchRooms * (porch - 1))) / roomsOnFloor )
        return {entrance : porch, floor : floor}
    }
    
    deliveryBoy(44, 5, 3)

    }

    {/* 4 i 5
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

    credentials() */

        function credentials (){
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

        function capitalize(str){
            let result
            result = str[0].toUpperCase() + str.slice(1).toLowerCase()
            return result
        }

        credentials()
    }
}

/*createPerson ==== Створіть функцію createPerson, яка приймає два параметри: name та surname, і повертає 
                    об'єкт із ключами name, surname, getFullName. getFullName має бути функцією, яка працює 
                    з об'єктом через this, а такОж готова до того, що в об'єкті потім додати ключ fatherName*/
{
    const a = createPerson("Вася", "Пупкін")
    const b = createPerson("Ганна", "Іванова")
    const c = createPerson("Єлизавета", "Петрова")

    function createPerson (name, surname){
        let resultObj = {name, surname, 
            getFullName : function getFullName (){
                if(this.fatherName !== undefined){
                    return this.name + " " + this.fatherName + " " + this.surname
                }else{
                    return this.name + " " + this.surname
                }
                
            }
        } 
        console.log(resultObj)
        return resultObj
    }


    console.log(a.getFullName()) //Вася Пупкін
    a.fatherName = 'Іванович'    
    console.log(a.getFullName()) //Вася Іванович Пупкін

    console.log(b.getFullName()) //Ганна Іванова
}

/*createPersonClosure ====  Завдання в цілому, аналогічно попередньому, проте, в об'єкт заносити name, surname, fatherName та age не потрібно. 
                            name і surname повинні бути параметрами, змінні age та fatherName оголосіть через let у тілі createPersonClosure. 
                            Всередині createPersonClosure оголосіть такі функції:
                                getName
                                getSurname
                                getFatherName
                                getAge
                                getFullName
                            Ці функції повинні повертати змінні, оголошені функції createPersonClosure
                            Наступні функції:
                                setName
                                setSurname
                                setFatherName
                                setAge
                                setFullName
                            повинні приймати один параметр (newName, newSurname і т.п.), перевіряти його на коректність та змінювати значення 
                            змінних, оголошених всередині createPersonClosure. Перевірки на коректність:
                                ім'я, прізвище, по батькові має бути рядком з великої літери
                                Вік повинен бути числом від 0 до 100.
                            Якщо перевірку на коректність не пройдено, функція не повинна змінювати відповідну змінну.
                            Функція setFullName повинна розбивати рядок по пробілах і заносити частини рядка в surname, name та fatherName
                            Усі функції set повинні повертати те значення, яке за підсумком потрапило до внутрішньої змінної. Тобто якщо нове 
                            значення некоректне, то функція повертає старе значення
                            В об'єкті-результаті createPersonClosure повинні бути лише ці 10 функцій (гетерів та сеттерів). 
                            У коді функцій this не використовується*/
{
    const a = createPersonClosure("Вася", "Пупкін")
    const b = createPersonClosure("Ганна", "Іванова")
    console.log(a.getName())
    a.setAge(15)
    a.setAge(150) //не працює

    b.setFullName("Петрова Ганна Миколаївна")
    console.log(b.getFatherName()) //Миколаївна

    function createPersonClosure(name, surname){
        let age
        let fatherName
        let resultObj = {
            getName: getName = () => {return name},
            getSurname : getSurname  = () => {return surname},
            getFatherName : getFatherName  = () => {return fatherName},
            getAge : getAge  = () => {return age},
            getFullName : getFullName  = () => {
                if (fatherName === undefined){
                    return name + " " + surname
                }else{
                    return name + " " + fatherName + " " + surname
                }
            },
            setName: setName = (newName) => {
                if(newName !== "" && newName[0] === newName[0].toUpperCase()){
                    name = newName                
                }
                return name
            },
            setSurname : setSurname = (newSurname) => {
                if(newSurname !== "" && newSurname[0] === newSurname[0].toUpperCase()){
                    surname = newSurname
                }
                return surname
            },
            setFatherName : setFatherName = (newFatherName) => {
                if(newFatherName !== "" && newFatherName[0] === newFatherName[0].toUpperCase()){
                    fatherName = newFatherName
                }
                return fatherName
            },
            setAge : setAge = (newAge) => {
                if(+newAge > 0 && +newAge < 100)
                    age = +newAge
                return age
            },
            setFullName : setFullName = (newFullName) => {//Метод сподівається отримати все в правильному форматі
                let djk = []
                djk = newFullName.split(" ")
                return setSurname(djk[0]) + " " + setName(djk[1]) + " " + setFatherName(djk[2])
            }
        }
        return resultObj
    }
}

/*createPersonClosureDestruct ==== Зробіть набір параметрів функції попереднього завдання об'єктом, використовуйте деструктуризацію 
                                    для вилучення параметрів.
                                    Вкажіть значення за замовчуванням */
{
    function createPerson (name, surname){
        let resultObj = {name, surname, 
            getFullName : function getFullName (){
                if(this.fatherName !== undefined){
                    return this.name + " " + this.fatherName + " " + this.surname
                }else{
                    return this.name + " " + this.surname
                }
                
            }
        } 
        console.log(resultObj)
        return resultObj
    }

    function createPersonClosureDestruct(obj){
        let {name = "НЕ_ВКАЗАНО", surname = "НЕ_ВКАЗАНО", age = 0, fatherName = "НЕ_ВКАЗАНО"} = obj
        /*console.log("name  " + name)
        console.log("surname " + surname)
        console.log("age " + age)
        console.log("fatherName " + fatherName)*/

        let resultObj = {
            getName: getName = () => {return name},
            getSurname : getSurname  = () => {return surname},
            getFatherName : getFatherName  = () => {return fatherName},
            getAge : getAge  = () => {return age},
            getFullName : getFullName  = () => {
                if (fatherName === undefined){
                    return name + " " + surname
                }else{
                    return name + " " + fatherName + " " + surname
                }
            },
            setName: setName = (newName) => {
                if(newName !== "" && newName[0] === newName[0].toUpperCase()){
                    name = newName                
                }
                return name
            },
            setSurname : setSurname = (newSurname) => {
                if(newSurname !== "" &&  newSurname[0] === newSurname[0].toUpperCase()){
                    surname = newSurname
                }
                return surname
            },
            setFatherName : setFatherName = (newFatherName) => {
                if(newFatherName !== "" &&  newFatherName[0] === newFatherName[0].toUpperCase()){
                    fatherName = newFatherName
                }
                return fatherName
            },
            setAge : setAge = (newAge) => {
                if(+newAge > 0 && +newAge < 100)
                    age = +newAge
                return age
            },
            setFullName : setFullName = (newFullName) => {//Метод сподівається отримати все в правильному форматі
                let djk = []
                djk = newFullName.split(" ")
                return setSurname(djk[0]) + " " + setName(djk[1]) + " " + setFatherName(djk[2])
            }
        }

        return resultObj
    }

    const a = createPersonClosureDestruct(createPerson("Вася", "Пупкін"))
    const b = createPersonClosureDestruct({name: 'Миколай', age: 75})
    console.log(a.getAge())
    console.log(a.setAge(88))
    console.log(a.getName())
    console.log(a.getSurname())
    console.log(a.getFullName())    
    console.log(a.getAge())
    console.log(b)
}

/*isSorted ==== Напишіть функцію isSorted, яка приймає набір параметрів будь-якого розміру, та повертає true, 
                коли всі параметри - це числа, і кожeн з них більше за попередній параметр. */
{
    function isSorted (...params){
        const djk = [...params]
        let result = true
        
        for(let i = 0; i < djk.length; i++){
            if(typeof(djk[i]) !== "number" || Number.isNaN(djk[i])){
                result = false
            }
        }

        for(let i = 1; i < djk.length; i++){
            if(djk[i] <= djk[i-1]){
                result = false
            }
        }

        return result
    }

    console.log(isSorted (1, 2, 3, 4, 9))//TRUE +
    console.log(isSorted (1, 2, 3, 4, 4, 9))// - 
    console.log(isSorted (1, 2, "3", 4, 9))// -
    console.log(isSorted (12, 2, 3, 4, 9))// -
}

/*Test isSorted ==== Використовуючи циклічне введення в масив (завдання array fill), забезпечте введення даних для isSorted */
    /*/*array fill ==== Створіть порожній масив і додавайте в нього елементи, введені користувачем, поки користувач не натисне Скасувати в черговому prompt. 
                    Використовуйте push для зручності: push У масиві не повинно бути null після роботи циклу;
            {
                const arr = []
                let djk = true
                while(djk){
                    djk = prompt('У вас є що додати?', " ")
                    if(djk)
                        arr.push(djk)
                }
                console.log(arr)
            } */
{
    function isSorted (...params){
        const djk = [...params]
        let result = true
        
        for(let i = 0; i < djk.length; i++){
            if(typeof(djk[i]) !== "number" || Number.isNaN(djk[i])){
                result = false
            }
        }

        for(let i = 1; i < djk.length; i++){
            if(djk[i] <= djk[i-1]){
                result = false
            }
        }

        return result
    }

    const arr = []
    let djk = true
    while(djk){
        djk = prompt('У вас є що додати?', " ")
        if(djk){
            arr.push(+djk)
        }
    }
    console.log(arr)

    console.log(isSorted (...arr))
    
}

/*personForm ==== Напишіть функцію, яка приймає два параметри: батьківський DOM-елемент та об'єкт-результат роботи createPersonClosure 
                    (або createPersonClosureDestruct, результати в обох цих функцій однакові) і малює форму, яка дозволяє редагувати 
                    дані про персону.
                    На початку роботи personForm створює 5 полів введення (ім'я, прізвище, по батькові, вік, ПІБ) у батьківському 
                    DOM-елементі та встановлює туди значення, прочитані за допомогою getName , getSurname і т.д.
                    Події oninput в будь-якому з полів введення потрібно запускати відповідний set..... Наприклад, при зміні поля 
                    введення імені повинен запускатися setName(якийсь инпут.value). Функції set... повертають значення, і його 
                    потрібно занести назад до input. Таким чином, у полях введення неможливо буде ввести некоректні значення 
                    (наприклад вік не зможе вийти за межі 0-100 років) */
{
    function createPersonClosure(name, surname){
        let age
        let fatherName
        let resultObj = {
            getName: getName = () => {return name},
            getSurname : getSurname  = () => {return surname},
            getFatherName : getFatherName  = () => {return fatherName},
            getAge : getAge  = () => {return age},
            getFullName : getFullName  = () => {
                if (fatherName === undefined){
                    return name + " " + surname
                }else{
                    return name + " " + fatherName + " " + surname
                }
            },

            setName: setName = (newName) => {
                if(newName !== "" && newName[0] === newName[0].toUpperCase()){
                    name = newName                
                }
                return name
            },
            setSurname : setSurname = (newSurname) => {
                if(newSurname !== "" && newSurname[0] === newSurname[0].toUpperCase()){
                    surname = newSurname
                }
                return surname
            },
            setFatherName : setFatherName = (newFatherName) => {
                if(newFatherName !== "" && newFatherName[0] === newFatherName[0].toUpperCase()){
                    fatherName = newFatherName
                }
                return fatherName
            },
            setAge : setAge = (newAge) => {
                if(+newAge > 0 && +newAge < 100)
                    age = +newAge
                return age
            },
            setFullName : setFullName = (newFullName) => {//Метод сподівається отримати все в правильному форматі
                let djk = []
                djk = newFullName.split(" ")
                return setSurname(djk[0]) + " " + setName(djk[1]) + " " + setFatherName(djk[2])
            }
        }
        return resultObj
    }

    const b = createPersonClosure("Ганна", "Іванова")
    b.setAge(15)
    b.setFullName("Петрова Ганна Миколаївна")

    document.write("<br>")
    const mainDiv = document.createElement('div')
    mainDiv.style.cssText = `background-Color: black; height: 80%; width: 99%; display: flex; flex-direction: column;`
    document.body.append(mainDiv)

    function personForm(parent, person){
        //настворювати інпутів (5 штук)
        const inName = document.createElement('input')
        inName.value = person.getName()
        const inSurname = document.createElement('input')
        inSurname.value = person.getSurname()
        const inFatherName = document.createElement('input')
        inFatherName.value = person.getFatherName()
        const inAge = document.createElement('input')
        inAge.type = "number"
        inAge.value = person.getAge()
        const inFullName = document.createElement('input')
        inFullName.value = getFullName()
        //додавати їх у parent
        parent.append(inName)
        parent.append(inSurname)
        parent.append(inFatherName)
        parent.append(inAge)
        parent.append(inFullName)
        //Навісити кожному з них обробник події типу nameInput.oninput = () => {
        inName.oninput = () => {
            inName.value = person.setName(inName.value)
            inFullName.value = getFullName()
        }
        inSurname.oninput = () => {
            inSurname.value = person.setSurname(inSurname.value)
            inFullName.value = getFullName()
        }
        inFatherName.oninput = () => {
            inFatherName.value = person.setFatherName(inFatherName.value)
            inFullName.value = getFullName()
        }
        inAge.oninput = () => {
            inAge.value = person.setAge(inAge.value)
        }
        inFullName.oninput = () => {
            inFullName.value = person.setFullName(inFullName.value)
            inName.value = getName()
            inSurname.value = getSurname()
            inFatherName.value = getFatherName()
        }
    }

    personForm(mainDiv, b)
}

/*getSetForm ==== Зробіть функцію, яка вирішує попереднє завдання універсально, тобто для будь-якого об'єкта, в якому є набір функцій 
                    get... та set.... Кода стане менше, гнучкості більше, адже в попередньому завданні багато копіпасти (x5)
                    Будь-який об'єкт можна перебрати
                    Будь-який об'єкт можна перебрати, використовуючи for....in або for.... of Object.entries(person). 
                    Таким чином ви дізнаєтеся набір всіх функцій get.... та set.....*/
{
    document.write("<br>")
    let car;
    {
        let brand = 'BMW', model = 'X5', volume = 2.4
        car = {
            getBrand(){
                return brand
            },
            setBrand(newBrand){
                if (newBrand && typeof newBrand === 'string'){
                    brand = newBrand
                }
                return brand
            },
            
            getModel(){
                return model
            },
            setModel(newModel){
                if (newModel && typeof newModel === 'string'){
                    model = newModel
                }
                return model
            },
            
            getVolume(){
                return volume
            },
            setVolume(newVolume){
                newVolume = +newVolume
                if (newVolume && newVolume > 0 && newVolume < 20){
                    volume = newVolume
                }
                return volume
            },
            
            getTax(){
                return volume * 100
            }
        }
    }

    function createPersonClosure(name, surname){
        let age
        let fatherName
        let resultObj = {
            getName: getName = () => {return name},
            getSurname : getSurname  = () => {return surname},
            getFatherName : getFatherName  = () => {return fatherName},
            getAge : getAge  = () => {return age},
            getFullName : getFullName  = () => {
                if (fatherName === undefined){
                    return name + " " + surname
                }else{
                    return name + " " + fatherName + " " + surname
                }
            },
            setName: setName = (newName) => {
                if(newName !== "" && newName[0] === newName[0].toUpperCase()){
                    name = newName                
                }
                return name
            },
            setSurname : setSurname = (newSurname) => {
                if(newSurname !== "" && newSurname[0] === newSurname[0].toUpperCase()){
                    surname = newSurname
                }
                return surname
            },
            setFatherName : setFatherName = (newFatherName) => {
                if(newFatherName !== "" && newFatherName[0] === newFatherName[0].toUpperCase()){
                    fatherName = newFatherName
                }
                return fatherName
            },
            setAge : setAge = (newAge) => {
                if(+newAge > 0 && +newAge < 100)
                    age = +newAge
                return age
            },
            setFullName : setFullName = (newFullName) => {//Метод сподівається отримати все в правильному форматі
                let djk = []
                djk = newFullName.split(" ")
                return setName(djk[0]) + " " + setFatherName(djk[1]) + " " + setSurname(djk[2])
            }
        }
        return resultObj
    }
    
    function getSetForm(parent, getSet){
        const inputs = {} //реєстр
        
        const updateInputs = () => { //функція оновлення полів введення відповідно до будь-яких get....
            for (const field in inputs) {//перебирає реєстр
                let geter = "get" + field//з ключа робить ім'я методу getШОТОТОТАМ
                if(Object.keys(getSet).includes(geter)){//перевіряє, що ключ є у вихідному об'єкті
                    inputs[field].value = getSet[geter]()//запускає функцію у вихідному об'єкті за наявності Добуте значення заносить в value інпуту з реєстру.
                }
            }
        }
        
        for (const getSetName in getSet){
            const getOrSet = getSetName.slice(0, 3)//перші три літери змінної getSetName. Також можна використовувати прапор isGet
            const fieldName = getSetName.slice(3)//Визначити ім'я поля, тобто відкусити get або set від імені ключа в об'єкті 
            const setKey = `set` + fieldName
            const getKey = `get` + fieldName
            const input = document.createElement("input")
            inputs[fieldName] = input //якщо ключа в реєстрі ще немає, створити інпут і додати його до реєстру використовуючи ім'я поля як ключ
            input.placeholder = fieldName //задати інпуту placeholder, згідно з назвою поля            
            typeof(getSet[getKey]()) === "number" ? input.type = "number" : input.type = "text"//задати інпуту тип, згідно з типом даних, доступним через get
            input.value = getSet[getKey]()//встановити інпуту значення, використовуючи get
            getSet[setKey] === undefined ? input.disabled=true : input.disabled=false//якщо в об'єкті немає set, зробити input.disabled=true
            input.oninput = () => {
                let inputValue = input.value
                getOrSet === "set" ? input.value =  getSet[setKey](inputValue) : input.value = getSet[getKey]()//задати інпуту обробник події, який запускатиме set 
                updateInputs()
            }
        }

        for (const [key, value] of Object.entries(inputs)){
            parent.append(value)
        }

        updateInputs()
    }    

    getSetForm(document.body, car)
    getSetForm(document.body, createPersonClosure('Анон', "Анонов"))
}