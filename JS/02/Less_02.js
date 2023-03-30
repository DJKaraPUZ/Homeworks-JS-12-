//Number: age ==== За допомогою prompt запитати у користувача його вік та підрахувати рік народження. Рік народження вивести за допомогою alert.

let currentYear = 2023
let year = currentYear - +prompt("Скільки вам років?")
if(!isNaN(year) ){
    alert('Ви народились в ' + year)
}
else{
    alert('Ви помилились при вводі даних ' )
}


//Number: temperature ==== За допомогою prompt запитати у користувача температуру в градусах Цельсія та перевести їх у Фаренгейти та/або навпаки.
// C => F за формулою (c × 1.8) + 32 = f °F
let degree = +prompt("Скільки градусіів Цельсія треба конвертувати у градуси Фарангейти?")
if(!isNaN(degree) ){
    alert(degree + ' градусів Цельсія становлять ' + (degree * 1.8 + 32) + " градусів Фаренгейта")
}
else{
    alert('Ви помилились при вводі даних ' )
}


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
}

/*Number: currency ==== Напишіть код, який обчислює обмін валют за курсом, заданим за допомогою константи const rate = КУРС ВАЛЮТИ 
                        Вважайте значення в одній валюті за допомогою 'prompt', після чого помножіть/поділіть це число на 'rate'. 
                        Виведіть результат, використовуючи alert. Обмежте кількість знаків після коми двома (нас не хвилюють дрібні частини центів/копійок)*/

const rate = 39.6989; //Курс Євро на дату 30.03.2023 НБУ
let amount = +prompt("Яку кількість євро ви б хотіли обміняти на надзвичайно стабільну гривню?")
if(!isNaN(amount) ){
    alert("Після обміну " + amount + " євро за курсом " + rate + " ви отримаєте " + (amount * rate).toFixed(2) + " гривень.")
}
else{
    alert('Ви помилились при вводі даних' )
}

/*Number: RGB ==== За допомогою prompt організуйте введення трьох констант red, green, blue у десятковій системі. 
                    Створіть із них CSS-колір у форматі #RRGGBB використовуючи шістнадцяткову систему числення. 
                    Значення менше 16ти поки що можна не враховувати.*/

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
}


/*Number: flats ==== Зробіть калькулятор, який дозволить вам виходячи з інформації про кількість поверхів у будинку 
                    та кількість квартир на поверсі знаходити під'їзд та поверх певної квартири за її номером. 
                    Наприклад для 9поверхового будинку по 4 квартири на поверх 81 квартира знаходиться на 3-му поверсі третього під'їзду. 
                    Користувач повинен вводити за допомогою prompt кiлькiсть поверхiв, кiлькiсть квартир на поверсi та номер квартири. 
                    Код повинен видавати пiд'їзд та поверх по номеру квартири.*/

let floorCapacity = +prompt("Скільки поверхів у будинку?")
let flatCapacity = +prompt("Скільки квартир на поверсі?")
let flatNumber = +prompt("Вкажіть номер квартири, яку ви шукаєте")
let flatInB = flatCapacity * floorCapacity// Скільки квартир в підїзді
let ourNumber
let ourFloor
if(!isNaN(flatCapacity) && !isNaN(flatCapacity) && !isNaN(flatNumber)){    
    if(flatNumber /flatInB <= 1){
        ourNumber = 1;
    }else{
        if(flatNumber % flatInB == 0){
            ourNumber = (Math.floor(flatNumber / flatInB))
        }else{
            ourNumber = (Math.ceil(flatNumber / flatInB))
        }
    }    
    if(flatNumber % flatInB == 0){
        ourFloor = flatCapacity
    }else{
        ourFloor = Math.ceil((flatNumber % flatInB) / flatCapacity)
    }
    alert("Квартир в кожному під'їзді по " + flatCapacity * floorCapacity + "." + "Квартира №" + flatNumber + " знаходиться в під'їзді №" + ourNumber + " Квартира на " + ourFloor + " поверсі")
}else{
    alert('Ви помилились при вводі даних')
}