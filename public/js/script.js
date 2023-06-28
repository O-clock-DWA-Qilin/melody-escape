class cards {
    id;
    #code;
    cat;

    constructor(id, code, cat) {
        this.id = id;
        this.code = code;
        this.cat = cat;
    }

    set code(code) {
        this.#code = code;
    }

    get code() {
        return this.#code;
    }
}

const listCards = [
    new cards(1, 'a', 1),
    new cards(2, 'b', 1),
    new cards(3, 'c', 1),
    new cards(4, 'd', 1),
    new cards(5, 'd', 2),
    new cards(6, 'e', 1),
    new cards(7, 'a', 2),
    new cards(8, 'b', 2),
    new cards(9, 'f', 1),
    new cards(10, 'e', 2),
    new cards(11, 'f', 2),
    new cards(12, 'c', 2),
]


const container = document.getElementsByClassName('card_container')[0]

for (const card of listCards) {
    addCard(card)
}

function addCard(card) {
    const newCard = document.createElement('img');
    newCard.classList.add('card');
    newCard.setAttribute('id', `${card.id}`)
    newCard.setAttribute('data-code', `${card.code}`)
    newCard.setAttribute('data-cat', `${card.cat}`)
    container.append(newCard)
}
const cardsListDom = document.getElementsByClassName('card')

for (const card of cardsListDom) {
    card.addEventListener('click', displayCard)
}

const pairsList = ['aa', 'bb', 'cc', 'dd', 'ee', 'ff'];

let tryCard = '';
let tryCardWithId = [];
let count = 0;
let countPairs = 0;
       
function displayCard(event) {
    const i = event.target.id
    tryCard += `${cardsListDom[i-1].dataset.code}`
    tryCardWithId.push(i);
    gestCard(i)  
}    


function gestCard (i) {
    // Quand je clique sur ma card, elle prend true ou false si déjà retourné ou non
    // if(cardsListDom[i-1].dataset.value == 'true') {
    //     cardsListDom[i-1].setAttribute('data-value', false)
    // } else {
        cardsListDom[i-1].setAttribute('data-value', true)
// }

    // Si face visible je lui affecte son image, j'incrémente le compteur de 1
    if(cardsListDom[i-1].dataset.value === 'true') {
        cardsListDom[i-1].setAttribute(`src`, `/img/${[i]}.png`)
        count ++

        // si mon compteur est à 2, je vérifie si mon code match avec un élément du tableau qui contient les codes des pairs
        if (count == 2) {
            count = 0;
            let otherCard;
            let otherCardDom;
            const codeOtherCard = tryCard.substring(1, 2);
            const pairsContent = listCards.filter(code => code.code == codeOtherCard);
            const pairs = pairsContent;
            // Si ça match il laisse la carte retournée et retourne la deuxième, sinon il retourne les cartes face achées (false)
            if (pairsList.includes(tryCard) && tryCard.length == 2) {
                cardsListDom[i-1].setAttribute(`src`, `/img/${[i]}.png`)
                countPairs ++

                if(cardsListDom[i-1].dataset.cat == 1) {
                    otherCard = pairs.filter(cat => cat.cat == 2);
                    otherCardDom = document.getElementById(otherCard[0].id)
                    otherCardDom.setAttribute(`src`, `/img/${[otherCard[0].id]}.png`)
                } else if (cardsListDom[i-1].dataset.cat == 2) {
                    otherCard = pairs.filter(cat => cat.cat == 1);
                    otherCardDom = document.getElementById(otherCard[0].id)
                    otherCardDom.setAttribute(`src`, `/img/${[otherCard[0].id]}.png`)
                }
                tryCardWithId = [];
                console.log(countPairs)
                if (countPairs == 6) {
                    for (const card of cardsListDom) {
                        card.style.display = 'none';
                    }
                    const message = document.createElement('h1');
                    message.textContent = 'Bravo ! le memory t\'as permis de trouver cet indice : '
                    container.append(message)
                }
            } else if (!pairsList.includes(tryCard)) {
                const codeOtherCard = tryCard.substring(0, 1);
                const codeOtherCardid = tryCardWithId[0];
                const pairsContent = listCards.filter(code => code.code == codeOtherCard);
                const pairs = pairsContent;

                otherCard = pairs.filter(id => id.id == codeOtherCardid);
                otherCardDom = document.getElementById(otherCard[0].id)

                setTimeout(() => {
                    otherCardDom.removeAttribute(`src`)
                    cardsListDom[i-1].removeAttribute(`src`)
                }, "1500")
                tryCardWithId = [];  
            }
        }    
    }

    if (tryCard.length == 2) {
        tryCard = '';
    }

    if (tryCardWithId.length > 2) {
        tryCardWithId = [];
    }
}

