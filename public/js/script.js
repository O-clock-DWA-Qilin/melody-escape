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
    new cards(13, 'g', 1),
    new cards(14, 'h', 1),
    new cards(15, 'i', 1),
    new cards(16, 'j', 1),
    new cards(17, 'g', 2),
    new cards(18, 'i', 2),
    new cards(19, 'j', 2),
    new cards(20, 'h', 2),
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

// const pairsList = ['aa', 'bb', 'cc', 'dd', 'ee', 'ff'];
const pairsList = ['17', '45', '911', '28', '312', '610', '71', '54', '119', '82', '123', '106', '1317', '1420', '1518', '1619', '1713', '2014', '1815', '1916'];

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
        cardsListDom[i-1].setAttribute('data-value', true)
    // Si face visible je lui affecte son image, j'incrémente le compteur de 1
    if(cardsListDom[i-1].dataset.value === 'true') {
        // cardsListDom[i-1].setAttribute(`src`, `/img/${[i]}.png`)
        cardsListDom[i-1].style.backgroundImage =`url(/img/${[i]}.png)`
        cardsListDom[i-1].style.backgroundPosition = `center`

        count ++

        // si mon compteur est à 2, je vérifie si mon code match avec un élément du tableau qui contient les codes des pairs
        if (count == 2) {
            count = 0;
            let otherCard;
            let otherCardDom;
            const codeOtherCard = tryCardWithId[0];
            const pairsContent = listCards.filter(id => id.id == codeOtherCard);
            const pairs = pairsContent;
            // Si ça match il laisse la carte retournée et retourne la deuxième, sinon il retourne les cartes face achées (false)
            if (pairsList.includes(`${tryCardWithId[0]}${tryCardWithId[1]}`) || pairsList.includes(`${tryCardWithId[1]}${tryCardWithId[0]}`) && tryCardWithId.length == 2) {
                // cardsListDom[i-1].setAttribute(`src`, `/img/${[i]}.png`)
                countPairs ++
                console.log(countPairs)
                if(cardsListDom[i-1].dataset.cat == 1) {
                    otherCard = pairs.filter(cat => cat.cat == 2);
                    otherCardDom = document.getElementById(otherCard[0].id)
                    otherCardDom.style.backgroundImage = `url(/img/${[otherCard[0].id]}.png)`
                    otherCardDom.style.backgroundPosition = `center`

                    cardsListDom[i-1].removeEventListener('click', displayCard, false)
                    otherCardDom.removeEventListener('click', displayCard, false)

                } else if (cardsListDom[i-1].dataset.cat == 2) {
                    otherCard = pairs.filter(cat => cat.cat == 1);
                    otherCardDom = document.getElementById(otherCard[0].id)
                    otherCardDom.style.backgroundImage = `url(/img/${[otherCard[0].id]}.png)`
                    otherCardDom.style.backgroundPosition = `center`

                    cardsListDom[i-1].removeEventListener('click', displayCard, false)
                    otherCardDom.removeEventListener('click', displayCard, false)
                }
                tryCardWithId = [];  
                if (countPairs == 10) {
                setTimeout(() => {
                    for (const card of cardsListDom) {
                        card.style.display = 'none';
                    }
                    const message = document.createElement('h1');
                    message.textContent = 'Bravo ! le memory t\'as permis de trouver cet indice : [22 1] [4 1 14 19] [12 5] [7 18 5 14 9 5 18], allons dans le bureau voir si on trouve quelque chose pour nous aider à déchiffrer ça !'
                    container.append(message)
                     }, "1500")
                    
                }
            } else if (!pairsList.includes(`${tryCardWithId[0]}${tryCardWithId[1]}` || !pairsList.includes(`${tryCardWithId[1]}${tryCardWithId[0]}`))) {
                const codeOtherCard = tryCard.substring(0, 1);
                const codeOtherCardid = tryCardWithId[0];
                const pairsContent = listCards.filter(code => code.code == codeOtherCard);
                const pairs = pairsContent;

                otherCard = pairs.filter(id => id.id == codeOtherCardid);
                otherCardDom = document.getElementById(otherCard[0].id)

                setTimeout(() => {
                    otherCardDom.style.backgroundImage = ``
                    cardsListDom[i-1].style.backgroundImage = ``
                }, "1200")
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

