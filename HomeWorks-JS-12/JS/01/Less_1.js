{
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
}
