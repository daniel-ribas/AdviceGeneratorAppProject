let adviceHTML = document.getElementById('advice')
let adviceButton = document.querySelector('img')

let conter = 1

let canClick = true;

adviceButton.addEventListener('click', () => {
    if (canClick) {
        canClick = false;

        conter++;
        addConter(conter);
        adviceHTML.innerHTML = ""

        addingAdviceOnScreen();

        setTimeout(() => {
            canClick = true;
        }, 2000);
    }
})

async function addConter(eventConter) {
    let conterSpan = document.getElementById('conter')
    conterSpan.innerText = `${eventConter}`
}

async function randomAdviceGenerator() {
    const url = 'https://api.adviceslip.com/advice'
    const response = await fetch(url)
    return await response.json()
}

async function addingAdviceOnScreen() {
    const advice = await randomAdviceGenerator();
    const adviceText = advice.slip.advice
    adviceHTML.innerHTML += `<p>${adviceText}</p>`   
}

addingAdviceOnScreen()