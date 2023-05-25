/*Рекурсія: HTML tree ==== Використовуючи рішення цього завдання зробіть функцію, яка рекурсивно створює HTML-рядок із деревоподібної 
                            структури даних Javascript будь-якої вкладеності. Перевірте результат роботи функції виводячи HTML-рядок 
                            використовуючи document.write або ж який-то_элемент.innerHTML */

                            /*Html tree ====  Зробіть декларативну JSON-структуру для тегів вище... */ 
{
    const body = {
        tagName : "body",
        attrs: {},
        children : [{
            tagName : "div",
            attrs: {},
            children : [{
                tagName : "span",
                attrs: {},
                children : ["Enter a data please:"]
            },
            {
                tagName : "br",
                attrs: {},
                children : []
            },
            {
                tagName : "input",
                attrs: {
                    type :'text',
                    id : 'name'
                },
                children : []                
            },
            {
                tagName : "input",
                attrs: {
                    type :'text',
                    id : 'surname'
                },
                children : []                
            }]            
        },{
            tagName : "div",
            attrs: {},
            children : [{
                tagName : "button",
                attrs: {
                    id : 'ok'
                },
                children : ["OK"]
            },
            {
                tagName : "button",
                attrs: {
                    id : 'cancel'
                },
                children : ["Cancel"]
            }
        ]}]
    }

    const table = {
        tagName: 'table',
        attrs: {
            border: "1",
        },
        children: [
            {
                tagName: 'tr',
                children: [
                    {
                        tagName: "td",
                        children: ["1x1"],
                    },
                    {
                        tagName: "td",
                        children: ["1x2"],
                    },
                ]
            },
            {
                tagName: 'tr',
                children: [
                    {
                        tagName: "td",
                        children: ["2x1"],
                    },
                    {
                        tagName: "td",
                        children: ["2x2"],
                    },
                ]
            }
        ]
    }

    function tree2HTML(tree){
        const singleTags = ["br", "hr", "meta", "img", "input"]
        let result = ""
        let endTag = ""
        result += "<" + tree.tagName
        //console.log("TAG: " + tree.tagName)
        if (tree.attrs !== undefined && Object.keys(tree.attrs).length !== 0) {
            result += attrsReader(tree.attrs)
        }
        result += ">\n"
        if(tree.children !== undefined && tree.children.length !== 0){
            if(typeof(tree.children[0]) === "object"){
                //console.log(tree.children[0] + " = object " + tree.children.length)
                for (child of tree.children){
                    result += tree2HTML(child)
                }
            }else{
                result += tree.children[0]
            }
        }
        //console.log(tree.tagName + singleTags.includes(tree.tagName.toLowerCase()))
        if(!singleTags.includes(tree.tagName.toLowerCase()) ){
            endTag += "</" + tree.tagName + ">\n"
        }
        
        result += endTag
        return result
    }

    function attrsReader(attrs){
        //console.log("ATTR: " + attrs)
        let result = ""
        for (const [key, value] of Object.entries(attrs)){
            result += ` ${key} = "${value}"`

        }
        return result
    }

    console.log(tree2HTML(body))
    console.log(tree2HTML(table))
    document.write(tree2HTML(body))
    document.write(tree2HTML(table))
}

/*Рекурсія: DOM tree ==== Використовуючи рішення цього завдання зробіть функцію, яка рекурсивно створює DOM із деревоподібної 
                             структури даних Javascript. Завдання в цілому аналогічно попередньому, проте замість накопичення 
                             результату в HTML-рядку функція повинна додавати елементи створені через document.createElement 
                             переданому в функцію parent. */
{
    const body = {
        tagName : "div",//body в body, мабуть, не вставити, тому я замінив на div для демонстрації
        attrs: {},
        children : [{
            tagName : "div",
            attrs: {},
            children : [{
                tagName : "span",
                attrs: {},
                children : ["Enter a data please:"]
            },
            {
                tagName : "br",
                attrs: {},
                children : []
            },
            {
                tagName : "input",
                attrs: {
                    type :'text',
                    id : 'name'
                },
                children : []                
            },
            {
                tagName : "input",
                attrs: {
                    type :'text',
                    id : 'surname'
                },
                children : []                
            }]            
        },{
            tagName : "div",
            attrs: {},
            children : [{
                tagName : "button",
                attrs: {
                    id : 'ok'
                },
                children : ["OK"]
            },
            {
                tagName : "button",
                attrs: {
                    id : 'cancel'
                },
                children : ["Cancel"]
            }
        ]}]
    }

    const table = {
        tagName: 'table',
        attrs: {
            border: "1",
        },
        children: [
            {
                tagName: 'tr',
                children: [
                    {
                        tagName: "td",
                        children: ["1x1"],
                    },
                    {
                        tagName: "td",
                        children: ["1x2"],
                    },
                ]
            },
            {
                tagName: 'tr',
                children: [
                    {
                        tagName: "td",
                        children: ["2x1"],
                    },
                    {
                        tagName: "td",
                        children: ["2x2"],
                    },
                ]
            }
        ]
    }

    function tree2HTML(tree, fatherElement = document.body){ 
        const currentElement = document.createElement(tree.tagName)
        fatherElement.append(currentElement)
        if (tree.attrs !== undefined && Object.entries(tree.attrs).length !== 0) {
            for (const [key, value] of Object.entries(tree.attrs)) {
                currentElement.setAttribute(key, value)
            }            
        }
        if(tree.children !== undefined && tree.children.length !== 0){
            if(typeof(tree.children[0]) === "object"){                
                for (child of tree.children){
                    tree2HTML(child, currentElement)
                }
            }else{
                currentElement.innerText = tree.children[0]
            }
        }
    }

    document.write("<br>")
    tree2HTML(body)
    tree2HTML(table)

}

//Рекурсія: Deep Copy ==== Напишіть функцію, яка рекурсивно здійснює глибоке копіювання структур Javascript, в яких немає циклічних зв'язків.

{//debugger
    const table = {
        tagName: 'table',
        attrs: {
            border: "1",
        },
        children: [
            {
                tagName: 'tr',
                children: [
                    {
                        tagName: "td",
                        children: ["1x1"],
                    },
                    {
                        tagName: "td",
                        children: ["1x2"],
                    },
                ]
            },
            {
                tagName: 'tr',
                children: [
                    {
                        tagName: "td",
                        children: ["2x1"],
                    },
                    {
                        tagName: "td",
                        children: ["2x2"],
                    },
                ]
            }
        ]
    }
     function deepCopy(obj){
        let result = {}
        if(Array. isArray(obj)){
            result = []
        }
        for (const field in obj) {
            if(typeof obj[field] == "object" && obj[field] !== null){                
                result[field] = deepCopy(obj[field])
            }else{
                result[field] = obj[field]
            }
        }
        return result
    }

    const arr  = [1,"string", null, undefined, {a: 15, b: 10, c: [1,2,3,4],d: undefined, e: true }, true, false]
    const arr2 = deepCopy(arr) //arr2 та всі його вкладені масиви та об'єкти - інші об'єкти, які можна змінювати без ризику поміняти щось у arr
    const table2 = deepCopy(table) // Аналогічно 
    
    console.log(arr)
    arr[4].a = 0
    arr[4].b = 0
    console.log(arr2)    
    console.log(table)
    console.log(table2)
}

//*Рекурсия: My Stringify ==== Напишите аналог JSON.stringify */
{
    const table = {
        tagName: 'table',
        attrs: {
            border: "1",
        },
        children: [
            {
                tagName: 'tr',
                children: [
                    {
                        tagName: "td",
                        children: ["1x1"],
                    },
                    {
                        tagName: "td",
                        children: ["1x2"],
                    },
                ]
            },
            {
                tagName: 'tr',
                children: [
                    {
                        tagName: "td",
                        children: ["2x1"],
                    },
                    {
                        tagName: "td",
                        children: ["2x2"],
                    },
                ]
            }
        ]
    }
    const arr  = [1,"string", null, undefined, {a: 15, b: 10, c: [1,2,3,4],d: undefined, e: true }, true, false]
    const jsonString = stringify(table) //Напишіть функцію stringify без використання JSON.stringify
    const jsonString2 = stringify(arr)  //Напишіть функцію stringify без використання JSON.stringify
    //console.log(table)
    console.log(JSON.parse(jsonString)) //не повинно поламатися і повернути структуру, у всьому схожу з оригінальним arr або table
    console.log(JSON.parse(jsonString2))//не повинно поламатися і повернути структуру, у всьому схожу з оригінальним arr або table
    //console.log(arr)

    function stringify(obj){
        let isArray = false
        let result = "{"
        let endRsult = "}"
        if(Array.isArray(obj)){
            result = "["
            endRsult = "]"
            isArray = true
        }
        for (const [key, value] of Object.entries(obj)){
            if(typeof(value) === "object" && value !== null){
                if (isArray) {
                    result += stringify(value)
                } else {
                    result += `"${key}":` + stringify(value)    
                }                
                if(!(key === Object.entries(obj)[Object.entries(obj).length -1][0])){
                    result += ","
                }
            }else{
                if(typeof(value) === "number" || typeof(value) === "boolean" || value === null){
                    if(isArray){
                        result += ` ${value}`
                    }else{
                        result += `"${key}" : ${value}`
                    }                    
                }else if(value === undefined){
                    if(isArray){
                        result +=  `null`
                    }else{
                        result += ``
                        continue
                    }  
                }else{
                    if (isArray){
                        result += ` "${value}"`
                    } else {
                        result += `"${key}" : "${value}"`    
                    }                    
                }                
                if(!(key === Object.entries(obj)[Object.entries(obj).length -1][0])){
                    result += ","
                }
            }         
        }
        result += endRsult
        //console.log(result)
        return result
    }
}

/**Рекурсія: getElementById throw ==== Напишіть функцію getElementById, яка буде аналогічна document.getElementById. Як основу можете взяти 
 *                                      матеріал лекції (walker), однак у цикл перебору children вставте перевірку на знаходження переданого id. 
 *                                      При знаходженні елемента по id у рекурсивній функції викидайте виняток із значенням знайденого DOM-елемента, 
 *                                      яке буде спіймано на рівні вашої функції getElementById, після чого вона поверне викинутий DOM-елемент. */
{
    function getElementById(idToFind){
        try{
            walker(idToFind)
        }catch(notError){
            return notError
        }
    }

    function walker(idToFind, parent=document.body){
        for (const child of parent.children){
            if(idToFind === child.id){
                throw child
            }else{
                walker(idToFind, child)
            }
        }
    }
    console.log(getElementById("root"))
    console.log(getElementById("h2-11"))    
    console.log(getElementById("h2-11_2"))
    let djk = getElementById("h3-10_0")
    djk.style.backgroundColor = "red"
}