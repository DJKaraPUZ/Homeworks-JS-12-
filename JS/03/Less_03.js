//String: greeting ==== Запитайте у користувача ім'я та привітайте його за допомогою alert.
{
    alert("Вітаю вас, " + prompt ("Як вас звати?"))
}

//String: gopni4ek ==== Попросіть користувача ввести рядок через 'prompt'. Використовуючи split та join зробіть що б після будь-якої коми слід було слово блін, .
{
    let gopni4ek = prompt ("Напишіть кілька слів?")
    let strings = gopni4ek.split(' ')
    gopni4ek = strings.join(', блін, ')
    alert(gopni4ek)
}

//String: capitalize ==== Перетворіть рядок, введений користувачем, таким чином, щоб перша літера ставала великою, а решта - маленькими:
{
    let str = "cANBerRa"
    let result
    ////..... ваш код    
    result = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
    ///////////
    console.log(result) //Canberra    
}

//String: word count ==== Порахуйте кількість слів у рядку. Використовуйте розбиття за пробілами. Довжина масиву називається так само, як і довжина рядка.

{
    let wordCounter = prompt ("Напишіть кілька слів?")
    if(wordCounter.length){////////////////////////
        wordCounter = wordCounter.split(' ')    
        alert("Слів в цьому рядку: " + wordCounter.length + "\n  *За умови, що рахувати словом все, щоб було між двома пробілами.")
    }else{
        alert('Ви помилились при вводі даних')
    }
}

/*String: credentials ==== Запитайте у користувача ПІБ, використовуючи prompt тричі. Викиньте зайві прогалини, використовуючи .trim
                            Використовуючи String: capitalize зробіть так, щоб кожне слово у ПІБ було з великої літери, а решта - маленькі
                            Об'єднайте ці три рядки в один змінний fullName і виведіть кудись (alert, console.log). Не забудьте прогалини між словами.*/

{
    let uName1 = prompt ("Введіть своє призвіще")
    let uName2 = prompt ("Введіть своє ім'я")
    let uName3 = prompt ("Введіть своє по-батькові")
    if(uName1 && uName2 && uName3){
        uName1 = uName1.trim()
        uName2 = uName2.trim()
        uName3 = uName3.trim()
        uName1 = uName1.charAt(0).toUpperCase() + uName1.slice(1).toLowerCase()
        uName2 = uName2.charAt(0).toUpperCase() + uName2.slice(1).toLowerCase()
        uName3 = uName3.charAt(0).toUpperCase() + uName3.slice(1).toLowerCase()
        let uFullMane = uName1 + " " + uName2 + " " + uName3
        alert(uFullMane)
    }else{
        alert('Ви помилились при вводі даних')
    }
}

//String: beer ==== Не використовуючи .replace замініть слово пиво у рядку на слово чай

{
    let str = "Було жарко. Василь пив пиво вприкуску з креветками"
    let result
    //ваша магія
    str = str.split('пиво')
    result = str.join('чай')
    ///////////
    console.log(result) //"Було жарко. Василь пив чай уприкуску з креветками"
}

/*String: no tag ==== Знайдіть у рядку HTML тег. Видаліть, тобто виріжте його - створіть інший рядок, в якому будуть всі символи до тега і після нього 
                        Тег може бути будь-яким. split і join не використовуйте, натомість використовуйте indexOf і slice. .replace не використовуйте*/
{
    let str = "якийсь текст, в якому є один тег <br /> і всяке інше"
    let result
    //ваша магія    
    result = str.slice((str.indexOf("/>")+2), str.length)
    result =  (str.slice(0, str.indexOf("<"))) + result
    ///////////
    console.log(result) //якийсь текст, в якому є один тег і всяке інше
}


//String: big tag ==== На основі попереднього завдання зробіть тег великими літерами. replace, split і join не використовуйте, натомість використовуйте indexOf і slice,
{
    let str = "якийсь текст у якому є один тег <br /> і всяке інше"
    let result
    //ваша магія
    result = str.slice(str.indexOf("/>"), str.length)
    result = (str.slice(str.indexOf("<"), (str.indexOf("/>")))).toUpperCase() + result
    result =  (str.slice(0, str.indexOf("<"))) + result
    ///////////
    console.log(result) //якийсь текст, в якому є один тег <BR /> і всяке інше
}

/*String: new line ==== Попросіть користувача ввести рядок черезprompt. prompt не дозволяє вводити БАГАТОрядкові рядки. 
                        Дамо користувачеві таку можливість - Користувач може вводити \n як маркер нового рядка.
                        Використовуючи split та join зробіть цей рядок воістину багаторядковим і виведіть в консоль або через alert.*/
{
    let string = prompt ("Введіть кілька слів, розділивши їх за допомогою '\\n' ")
    string = string.split('\\n')
    string = string.join('\n')
    alert(string)
}

/*String: youtube ==== Нехай користувач введе будь-який текст із посиланням на youtube. 
                        Використовуючи регулярний вираз вийміть із посилання ідентифікатор видосу і створіть рядок із вбудованим блоком HTML. Додайте блок на сторінку. 
                        оголосіть константу з регулярним виразом використовуйте метод match, який поверне вам масив вийміть із масиву елемент із ідентифікатором відео 
                        вивчіть HTML код вбудовування відео на сторінку на youtube. використовуючи інтерполяцію рядків, вклейте ідентифікатор відео в HTML код вбудовування відео
                        використовуючи document.write відправте отриманий рядок на сторінку.*/

{
    const videoLink = /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/
    let userLink = prompt("Вставте посилання на YouTube відео.")
    if(userLink.length){
        userLink = userLink.match(videoLink)
        if(userLink != null){
            let inpetCode = `<iframe width="560" height="315" src="https://www.youtube.com/embed/`+ userLink[1] 
            +`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
            document.write(inpetCode)
        }else{
            alert('Ви помилились при вводі даних')
        }
    }else{
        alert('Ви помилились при вводі даних')
    }
}