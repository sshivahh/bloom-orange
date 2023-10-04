import Card from "../Components/Card"



const CardText = [
        "halo olivia",
        "hai apakabar olivia",
        "hello olivia",
        "konichiwa orivia",
        "ni hao cina",
        "halo woi",
        "apakabar oliv",
        "haiiii woi",
        "Olivi djohan",
        "makan bubur yuk",
        "laper",
        "HIIII",
        "main emel",
        "mau jalan ga"
]

let length = CardText.length - 1
let indexes = getRandom(0,length)

function getTexts(indexes){
    const displayedText = []
    for(let x = 0; x<10; x++){
        displayedText[x] = CardText[(indexes[x])]
        console.log(indexes[x])
        // displayedText[x] = indexes[x]
    }

    return displayedText
}

function getRandom(min, max) {
    const random = [];
    for(let x = 0; x<10; x++){
        random[x] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return random;
}

export default getTexts(indexes);