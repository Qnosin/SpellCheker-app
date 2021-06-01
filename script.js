class SpellCheker {
    constructor() {
        let x = 0;
        this.x = x;
    }
    generated() {
        //Genereting a random num and puting that random num to a text option index to choose worc
        let randomNum = Math.floor(Math.random() * 6);
        const genTextPlace = document.querySelector('.Genereted-Text');
        const TextOption = ['lorem', 'ipsum', 'dolor', 'consectetur adipiscing elit', 'Excepteur', 'deserunt'];
        for (let d of TextOption[randomNum]) {
            //all of letters need to be in span , thats why we creating a new span element
            let newSpan = document.createElement('span');
            newSpan.append(d);
            genTextPlace.append(newSpan);
            this.x = genTextPlace;
        }
    }
    checking() {
        //Here we are cheaking if a letter from player is in the textContent if not span have red color
        const originalText = this.x.textContent;
        const playerText = document.querySelector('.user-text').value;
        for (let y = 0; y <= originalText.length; y++) {
            if (playerText[y] == undefined) {
                this.x.children[y].style.color = 'black';
            } else if (originalText[y] === playerText[y]) {
                this.x.children[y].style.color = 'green';
            } else if (originalText[y] !== playerText[y]) {
                this.x.children[y].style.color = 'red';

            }

        }

    }
}

window.addEventListener('load', () => {
    let user = new SpellCheker;
    user.generated();
    const playerText = document.querySelector('.user-text')
    playerText.addEventListener('focus', () => {
        setInterval(() => {
            console.clear();
        }, 100);
        setInterval(() => {
            user.checking();
        }, 100)
    })
})
const loadSite = document.querySelector('.new-Word');
loadSite.addEventListener('click', () => {
    window.location.reload();
})