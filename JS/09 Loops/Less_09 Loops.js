/*while confirm ==== Зробіть цикл з confirm, який триває поки (що <== це слово зайве) користувач тисне Скасування і закінчується по ОК.*/
{
    let djk = false
    while(!djk){
        djk = confirm('[Голосом Нолановського Джокера]: Хочеш дізнатися звідки ці шрами?')
    }
}

/*array fill ==== Створіть порожній масив і додавайте в нього елементи, введені користувачем, поки користувач не натисне Скасувати в черговому prompt. 
                    Використовуйте push для зручності: push У масиві не повинно бути null після роботи циклу; */
{
    const arr = []
    let djk = true
    while(djk){
        djk = prompt('У вас є що додати?', " ")
        if(djk)
            arr.push(djk)
    }
    console.log(arr)
}

/*array fill nopush ==== Зробіть попереднє завдання, не використовуючи push, а звертаючись до елементів індексу. */
{
    const arr = []
    let djk = true
    let index = 0
    while(djk){
        djk = prompt('У вас є що додати?', " ")
        if(djk){
            arr[index] = djk
            index++
        }
    }
    console.log(arr)
}

/*infinite probability ==== Створіть нескінченний цикл, який переривається за допомогою конструкції break, коли Math.random() > 0.9. 
                            Код повинен підраховувати кількість ітерацій та вивести це число за допомогою alert. */
{
    let counter = 0;
    while(true){
        if(Math.random() > 0.9)
            break
        counter++
    }
    alert(`Знадобилось довгих ${counter} ітерацій`)
}

/*empty loop ==== Зробіть цикл з prompt, який переривається за натисканням OK і продовжується за натисканням "Скасувати" c порожнім тілом циклу.*/
{
    do{
        
    }while(prompt("Що треба зробити???") === null)
}

/*progression sum ==== Підрахувати суму арифметичної прогресії від 1 до N c кроком 3 (1,4,7...) використовуючи цикл for. 
                        Метод Гауса не застосовувати, навпаки, зробити максимально наївне рішення. */

{
    let n = +prompt("До якого числа будемо рахувати?")
    if(!isNaN(n)){
        let sum = 0
        for(let i = 1; i <= n; i += 3){
            sum += i
            //console.log(`i = ${i}   n = ${n}   sum = ${sum}`)
        }
        alert(`За попередньою інформацією, сума арефметичної прогресії від 1 до ${n} з кроком 3 рівна числу: ${sum}`)
    }else{
        alert('Ви помилились при вводі даних')
    }    
}

/*chess one line ==== Сформувати рядок # # # # # за допомогою циклу for. Довжина рядка може бути парною та непарною, 
                        і вказується в одному місці в коді. */
{
    let strLength = +prompt("Якій довжині рядка ви надаєте первагу в цю пору року?")
    let result = ""
    if(!isNaN(strLength) && strLength > 0){
        //let djk = 1
        for(let i = 0; i < strLength; i ++)
            i % 2 === 1 ? result += " " : result += "#"
        
        alert("Не знаю, що ви очікували, але вийшло щось таке:\n" + result)
        //console.log("Не знаю, що ви очікували, але вийшло щось таке:\n" + result + "__" + strLength + "__" + result.length)
    }else{
        alert('Ви помилились при вводі даних')
    } 
}

/*numbers ==== Сформувати рядок за допомогою вкладених циклів. Для перекладу рядка використовуйте \n. */
{
    let result = ""    
    for(let d = 0; d < 10; d ++){
        for(let j = 0; j < 10; j ++){
            result += j
        }
        result += "\n"
    }        
    alert("Не знаю, що ви очікували, але вийшло щось таке:\n" + result)
    console.log("Не знаю, що ви очікували, але вийшло щось таке:\n" + result)
}

/*chess ==== Сформуйте рядок із шахівницею із вкладених циклів. Для перекладу рядка використовуйте '\n'. 
                Код повинен підтримувати легку зміну розмірів дошки. Розмiр може бути непарним, наприклад 3x5. 
                Цi значення (розмiри дошки) повиннi бути в кодi тiльки в одному мiсце кожне.*/
{
    const height = 7
    const width = 7
    let djk = 0
    let result = ""
    for(let d = 0; d < height; d++){
        for(let j =0; j < width; j++){
            djk % 2 === 1 ? result += " " : result += "#"
            djk++
        }
        result += "\n"
    }
    alert("Не знаю, що ви очікували, але вийшло щось таке:\n" + result)
    console.log("Не знаю, що ви очікували, але вийшло щось таке:\n" + result)
}

/*cubes ==== Сформуйте масив з N(вводиться користувачем за допомогою prompt) елементів , що містить в собі куби індексів, тобто: */
{
    let n = +prompt("скільки кубів вам треба для щастя?")
    const result = []
    if(!isNaN(n)){
        for(let i = 0; i < n; i++){
            result[i] = Math.pow(i, 3)
        }
        alert(`Масив кубів:\n${result}`)
        console.log("Масив кубів:\n" + result)
    }else{
        alert('Ви помилились при вводі даних')
    }    
}

/*multiply table ==== За допомогою вкладеного циклу сформуйте масив масивів "таблиця множення". 
                        Для ініціалізації вкладених масивів використовуйте arr[i] = [] 
                        //в i-тий елемент масиву заноситься новий порожній масив
                        arr[5][6] повинен дорівнювати, відповідно, 30, arr[7][2] == 14 і так далі. */
{
    const arr = []
    const size = 15
    for(let d = 0; d < size; d++){
        arr[d] = []// А без оцих танців з бубном в JS не можна? На оголошення const arr = [][] він теж свариться :(
        for(let j = 0; j < size; j++){
            arr[d][j] = ((d+1) * (j+1))
        }
    }
    console.log("Таблиця має вигляд:\n" + arr)
    arr
}

/*read array of objects ==== Напишіть функцію readArrayOfObjects, яка циклічно додає масив об'єкти, які ввів користувач.
                                Користувач вводить ключі та значення (їх у кожному об'єкті може бути будь-яка кількість), 
                                використовуючи prompt. Коли користувач натискає "Скасувати" у вікні prompt, введення 
                                об'єкта закінчується і об'єкт додається до масиву. Перед введенням наступного об'єкта 
                                користувачеві задається питання (використовуючи confirm), чи хоче він продовжить цi тортури 
                                введення об'єктів. При ствердній відповіді знову працює введення будь-якої кількості ключів 
                                для створення нового об'єкту
                                Функція має повертати створений масив із об'єктами. */
{//Я так розумію, що нам не треба обє'кти з пустими ключами чи полями. Бо, якщо треба, то треба було трохи інакше робити.
    function readArrayOfObjects (){
        const arrayOfObjects = []
        while(true){
            const tempObject = {}
            alert("Почнемо створювати новий об'єкт")
            while(true){
                let tempKey = prompt("Введіть новий КЛЮЧ для об'єкта")
                let tempValue = false
                if(tempKey !== null){
                    tempValue = prompt("Введіть нове ЗНАЧЕННЯ ключа")
                }                
                if(tempKey && tempValue){
                    tempObject [tempKey] = tempValue
                }else{
                    arrayOfObjects.push(tempObject)
                    break
                }
            }
            if(!confirm("Є бажання продовжувати?")){
                break
            }
        }
        return arrayOfObjects
    }

    console.log(readArrayOfObjects())
}

/*Ромбік ==== Сформувати наступний рядок – ромбік використовуючи цикли та змiнну size яка дорiвнює ширинi та висотi отриманого рядка:
                .....#.....
                ....###....
                ...#####...
                ..#######..
                .#########.
                ###########
                .#########.
                ..#######..
                ...#####...
                ....###....
                .....#.....*/
{//debugger
    const size = 99 //Тільки для непарних чисел
    let result = ""
    let mark = 1
    let djk
    let growOrNot = true
    for(let d = 0; d < size; d++){
            djk = (size / 2) - mark
            for(let j = 0; j < size; j++){
                if(j < djk || j > size - (djk + 1)){
                    result += "."
                }else{
                    result += "#"
                }                
            }
        if(mark > (size / 2)){            
            growOrNot = false
        }
        if(growOrNot){
            mark++
        }else{
            mark--
        }
        result += "\n"
        //console.log(result)
        //console.log("mark = " + mark + " size = " + size + "  " + growOrNot)
    }
    console.log(result)
}//Мабуть є якийсь більш простий алгоритм :(

/*DOM: multiply table ==== Зробити таблицю множення, використовуючи DOM createElement та innerText. Створіть таблицю, вкладені 
                            рядки та комірки у циклах.*/
{
    const size = 9
    document.write("<br>")
    const mainDiv = document.createElement('div')
    mainDiv.style.cssText = `background-Color: #DDD;`
    const myTable = document.createElement('table')
    document.body.append(mainDiv)
    mainDiv.append(myTable)
    for(let d = 0; d < size; d++){
        const row = document.createElement('tr')
        for(let j = 0; j < size; j++){
            const cell = document.createElement('td')
            cell.style.cssText = `border: 1px solid; text-align: center; width: 11vw; height: 10vh`
            cell.innerHTML = (d+1) * (j+1)
            row.append(cell)
        }
        myTable.append(row)
    }
}

/*DOM: highlight cell ==== Підсвітити комірку, над якою знаходиться курсор миші. Використовуйте події mouseover та mouseout, і 
                            style.backgroundColor для підсвічування. Для того, щоб підсвітити правильну комiрку, додайте 
                            обробники подій у вкладений цикл, і використовуйте у них ту змінну, яка зберігає <td>. 
                            У такому разі замикання вам допоможуть. */
{
    const size = 9
    document.write("<br>")
    const mainDiv = document.createElement('div')
    mainDiv.style.cssText = `background-Color: #DDD;`
    const myTable = document.createElement('table')
    document.body.append(mainDiv)
    mainDiv.append(myTable)
    for(let d = 0; d < size; d++){
        const row = document.createElement('tr')        
        for(let j = 0; j < size; j++){
            const cell = document.createElement('td')
            cell.style.cssText = `border: 1px solid; text-align: center; width: 11vw; height: 10vh`            
            cell.innerHTML = (d+1) * (j+1)
            cell.onmouseover = function(){
                cell.style.backgroundColor = "red"
            }
            cell.onmouseleave = function(){
                cell.style.backgroundColor = "#DDD"
            }
            row.append(cell)

        }
        myTable.append(row)
    }
}

/*DOM: Highlight cross ==== Підсвітити рядок і стовпець, у якому знаходиться підсвічена комiрка. Якщо у вас обробники подій 
                            оголошені у вкладеному циклі, то ви можете користуватися лічильниками циклу (зазвичай i та j) 
                            та іншими змінними, наприклад змінної, що містить у собі DOM-елемент рядка.*/
{
    const size = 9
    document.write("<br>")
    const mainDiv = document.createElement('div')
    mainDiv.style.cssText = `background-Color: #DDD;`
    const myTable = document.createElement('table')
    document.body.append(mainDiv)
    mainDiv.append(myTable)
    for(let d = 0; d < size; d++){
        const row = document.createElement('tr')
        for(let j = 0; j < size; j++){
            const cell = document.createElement('td')
            cell.style.cssText = `border: 1px solid; text-align: center; width: 11vw; height: 10vh`
            cell.innerHTML = (d+1) * (j+1)
            cell.onmouseover = function(){
                for(const cldrn of row.parentElement.children){
                    cldrn.children[j].style.backgroundColor = "red"
                }                
                for(const chld of cell.parentElement.children){
                    chld.style.backgroundColor = "red"
                }
                //row.style.backgroundColor = "red"//Ця фігня тепер не працює :(
            }
            cell.onmouseleave = function(){
                for(const cldrn of row.parentElement.children){
                    cldrn.children[j].style.backgroundColor = "#DDD"
                }
                for(const chld of cell.parentElement.children){
                    chld.style.backgroundColor = "#DDD"
                }
                //row.style.backgroundColor = "#DDD"
            }
            row.append(cell)
        }
        myTable.append(row)
    }
}