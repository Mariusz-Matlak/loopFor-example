const btn = document.querySelector('button');
const liItems = document.querySelector('li');

let fontSize = 12;

btn.addEventListener('click', () => {
    liItems.forEach((liItem) => {
        liItem.style.display = "block";
        liItem.style.fontSize = fontSize + "px";
    })
    fontSize++;
})