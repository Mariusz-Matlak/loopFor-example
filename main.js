const btn = document.querySelector('button');
const liItems = document.querySelectorAll('li');

let fontSize = 12;

//for 
btn.addEventListener('click', () => {
    fontSize++;
    for (let i = 0; i < liItems.length; i++) {
        if (!liItems[i].style.display) {
            liItems[i].style.display = "block";
        }
        liItems[i].style.display = "block";
        liItems[i].style.fontSize = `${fontSize}px`;
    }
})

// foreach
// btn.addEventListener('click', () => {
//     liItems.forEach((liItem) => {
//         liItem.style.display = "block";
//         liItem.style.fontSize = fontSize + "px";
//     })
//     fontSize++;
// })