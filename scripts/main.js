import { User, prophetsData } from "./user.js";

const Israel = new User('Israel', 20);
const Destiny = new User('Destiny', 18);

const temp = document.querySelector('#prophet-card');



const body = document.querySelector('body');

function displayProphetsData(template, dataList, HTMLContainer) {
    dataList.forEach(element => {
        const clone = template.content.cloneNode(true);

        clone.querySelector('section').children[0].firstElementChild.textContent = element.name
        clone.querySelector('section').children[0].lastElementChild.textContent = element.lastname

        clone.querySelector('section').children[1].textContent = element.birthdate
        clone.querySelector('section').children[2].textContent = element.birthplace
        clone.querySelector('section .profile').setAttribute('src', element.imageurl)

        body.append(clone);

    })
}

displayProphetsData(temp, prophetsData, body);
