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
    const name = prompt('Введите название коктейля'),
        isAlco = confirm('Алкогольный ли напиток?'),
        ingredients = prompt('Введите нгредиенты и их количество'),
        receipt = prompt('Введите рецепт коктейля')

    cocktailsStorage.addValue(name, {isAlco, ingredients, receipt})
}
getReceipt.onclick = function(){
    const name = prompt('Введите название коктейля')
    if(cocktailsStorage.getValue(name)){
        infoBlock.innerText = `Коктейль ${name} (Алкогольный: ${cocktailsStorage.getValue(name).isAlco ? 'да': 'нет'})
        Необходимые игредиенты:
        ${cocktailsStorage.getValue(name).ingredients}
        Рецепт приготовления:
        ${cocktailsStorage.getValue(name).receipt}`
    }
    else {
        infoBlock.innerText = 'Такого коктейля не существует'
    }

}







cocktailsStorage.addValue('a',{isAlco:true, ingredients:'a,b,v,c,x,d', receipt:'sfdgsdfsd'})
cocktailsStorage.addValue('b',{isAlco:true, ingredients:'gsdgsfdgd', receipt:'sffdgfdgdgd342'})
// console.log(cocktailsStorage.deleteValue('a'))