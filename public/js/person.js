import {Component} from './component.js';

class Person extends Component {
    constructor({item}) {
        super();
        this.state.item = item;
    }
    
    render({item}) {
        return `<div class="persons__item">
            <img class="persons__photo" alt="Аватар" src="${item.photoUrl || ''}">
            <p class="persons__fio" title="${item.title || ''}">${item.title || ''}</p>
            <p class="persons__university" title="${item.university || ''}">${item.university || ''}</p>
        </div>`;
    }
    get birthDateStr(){
        return (new Date(this.state.item.birthDate)).toLocaleString('ru-RU', {day: 'numeric', month: 'long'});
    }
    get age() {
        let difference = new Date() - new Date(this.state.item.birthDate);
        let diffdays = difference / 1000 / (60 * 60 * 24);
        return Math.floor(diffdays / 365.25);
    }

    afterMount() {
        this.container.addEventListener('click', (event) => this.onClick(event) );
    }

    onClick(event) {
        
    }
}

export{Person};