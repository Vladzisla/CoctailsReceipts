class HashStorage {
    constructor() {
        this.store = {}
    }
    addValue(key,value){
        this.store[key] = value
    }
    getValue(key){
        return this.store[key]
    }
    deleteValue(key){
        if(!(key in this.store)) {
            return false
        }
        return delete this.store[key];
    }
    getKeys(){
        return Object.keys(this.store)
    }
}

const cocktailsStorage = new HashStorage()

const addReceipt = document.getElementById('add-receipt')
const getReceipt = document.getElementById('get-receipt')
const delReceipt = document.getElementById('del-receipt')
const getCocktails = document.getElementById('get-cocktails')
const infoBlock = document.getElementById('info')


addReceipt.onclick = function(){
    const name = prompt('Введите название коктейля')
    if(!name) return
    const isAlco = confirm('Алкогольный ли напиток?')
    const ingredients = prompt('Введите ингредиенты и их количество')
    if(ingredients == null) return
    const receipt = prompt('Введите рецепт коктейля')
    if(receipt == null) return

    cocktailsStorage.addValue(name, {isAlco, ingredients, receipt})
}
getReceipt.onclick = function(){
    const name = prompt('Введите название коктейля')
    if(!name) return
    if(cocktailsStorage.getValue(name)){
        infoBlock.innerText = `Коктейль ${name} (Алкогольный: ${cocktailsStorage.getValue(name).isAlco ? 'да': 'нет'})
        Необходимые ингредиенты:
        ${cocktailsStorage.getValue(name).ingredients}
        Рецепт приготовления:
        ${cocktailsStorage.getValue(name).receipt}`
    }
    else {
        infoBlock.innerText = 'Такого коктейля не существует'
    }
}
delReceipt.onclick = function(){
    const name = prompt('Введите название коктейля')
    if(!name) return
    infoBlock.innerText = cocktailsStorage.deleteValue(name) ? 'Напиток удален' : 'Такого напитка не существовало'
}
getCocktails.onclick = () => {
    infoBlock.innerText = null
    cocktailsStorage.getKeys().forEach((elem) => {
        infoBlock.append(document.createElement("span").innerText = elem)
        infoBlock.append(document.createElement('br'))
    })
}

cocktailsStorage.addValue('Маргарита',{isAlco:true,
    ingredients:'Водка Finlandia 50мл\n' +
        'Кофейный ликер 25мл\n' +
        'Лед в кубиках 120 г',
    receipt:'Наполни стакан кубиками льда доверху, затем налей кофейный ликер 25 мл, водку 50 мл и размешай коктейльной ложкой.'})
cocktailsStorage.addValue('Пеликан',{isAlco:false,
    ingredients:'Гренадин Monin 10мл\n' +
        'Клубничный сироп Monin 10мл\n' +
        'Персиковый сок 150мл\n' +
        'Лимонный сок 15мл\n' +
        'Банан 110г\n' +
        'Клубника 50г\n' +
        'Дробленый лед 60г',
    receipt:'Положи в блендер очищенную и нарезанную половинку банана и клубнику 2 ягоды. Налей лимонный сок 15 мл, гренадин 10 мл, клубничный сироп 10 мл и персиковый сок 150 мл. Добавь в блендер совок дробленого льда и взбей. Перелей в хайбол. Укрась кружком банана и половинкой клубники на коктейльной шпажке.'})
cocktailsStorage.addValue('Пиранья',{isAlco:true,
    ingredients:'Водка Finlandia 37мл\n' +
        'Шоколадный ликер 25мл\n' +
        'Кола 25мл',
    receipt:'Влейте спиртное в низкий стакан, заполненный большим количеством колотого льда. Хорошо размешайте. Затем добавьте колу.'})