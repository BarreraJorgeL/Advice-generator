const URL = 'https://api.adviceslip.com/advice/';
const ADVICE_ID = document.querySelector('.js-advice__id');
const ADVICE_TEXT = document.querySelector('.js-advice__text');
const RANDOM_BUTTON = document.querySelector('.js-button');

function setContainerText(slipObject, idContainer, adviceContainer){
    idContainer.innerText = slipObject.id;
    adviceContainer.innerText = slipObject.advice;
}

function getAdvice(idContainer, adviceContainer){
    //for some reason when i put the URL to generate ramdom Avices, it keeps sending me the same one
    //so temporally i got this Math.random to replace it
    let random = Math.round(Math.random()*100 + Math.random()*100)
    fetch(`${URL}${random}`)
    .then(response => response.json())
    .then(data => setContainerText(data.slip, idContainer, adviceContainer))
    .catch((err) => setContainerText({id:'999', advice: 'never surrender'}, ADVICE_ID, ADVICE_TEXT))
}

RANDOM_BUTTON.addEventListener('click', () => {
    getAdvice(ADVICE_ID, ADVICE_TEXT)
})

getAdvice(ADVICE_ID, ADVICE_TEXT)