import {Person} from './person.js';
import {PopupList} from './popupList.js';

class Student extends Person {
    constructor({item}) {
        super({item});
        this.state.item = item;
        this.popup;
    }
    render(options, {item}) {
        return `<div class="persons__item">
            <img class="persons__photo" alt="Аватар" src="${item.photoUrl}">
            <p class="persons__fio" title="${item.fullName}">${item.fullName}</p>
            <p class="persons__university" title="${item.university} ${item.course} курс">${item.university} ${item.course} курс</p>
        </div>`;
    }

    afterMount() {
        this.container.addEventListener('click', (event) => this.onClick(event) );
    }

    onClick(event) {
        if (!this.popup) {
            this.popup = new PopupList();
            this.popup.mount(document.body);
         }
       this.popup.open('student', {
            content: `
            <div class="card">
            <span class="close"></span>
                <div class="card__body">
                <div class="card__info">
                    <p class="card__title" title="${this.state.item.fullName}">${this.state.item.fullName}</p>
                    <div class="card__text">
                        <div class="card__text__item">
                            <span class="card__text--grey card__text--left">День рождения</span>
                            <span class="card__date">${this.birthDateStr}, ${this.age} лет</span>
                        </div>
                        <div class="card__text__item">
                            <span class="card__text--grey card__text--left card__status">Учится</span>
                            <span class="card__univercity">${this.state.item.university}</span>
                        </div>
                    </div>
                </div>
                <img class="card__img" src="${this.state.item.photoUrl}" alt="Аватар">
                </div>
            </div>
            `,
            target: this.getContainer(),
            offset: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }
         });
    }
}

export{Student};
