import {Person} from './person.js';

class Student extends Person{
    constructor(params) {
       super(params);
       this.course = params.course;
       this.type = "student";
    }
    // render() {
    //     let div_students__item = document.createElement('div');
    //     div_students__item.className = "students__item";

    //     let img_students__photo = document.createElement('img');
    //     img_students__photo.className = "students__photo";
    //     img_students__photo.src = this.photoUrl;
    //     img_students__photo.alt = "Аватар ученика школы";

    //     let p_students__fio = document.createElement('p');
    //     let textNode_students__fio = document.createTextNode(this.fullName);
    //     p_students__fio.append(textNode_students__fio);
    //     p_students__fio.className = "students__fio";
    //     p_students__fio.title = this.fullName;

    //     let p_students__university = document.createElement('p');
    //     let textNode_students__university = document.createTextNode(this.university + " " + this.course + " курс");
    //     p_students__university.append(textNode_students__university);
    //     p_students__university.className = "students__university";
    //     p_students__university.title = this.university + " " + this.course + " курс";

    //     div_students__item.append(img_students__photo);
    //     div_students__item.append(p_students__fio);
    //     div_students__item.append(p_students__university);
    //     return div_students__item;
    // }
    // appendToDOM() {
    //     const studentBlock = this.render();
    //     let div_persons__items = document.querySelector(".persons__items");
    //     div_persons__items.append(studentBlock);
    //     studentBlock.addEventListener('click', (event) => {
    //         this.openCard(event.currentTarget);
    //     }); 
    // }
    // openCard(event){
    //     if(document.getElementsByClassName("card")[0]) document.getElementsByClassName("card")[0].remove();
    //      // <div class="card">
    //     let div_card = document.createElement('div');
    //     div_card.className = "card";
    //         //<span class="close"></span>
    //         let span = document.createElement('span');
    //         span.className = "close";
    //         div_card.append(span);
    //         span.addEventListener('click', this.closeCard); 
    //         //<div class="card__body">
    //         let div_card__body = document.createElement('div');
    //         div_card__body.className = "card__body";
    //         div_card.append(div_card__body);
    //             //<div class="card__info">
    //             let div_card__info = document.createElement('div');
    //             div_card__info.className = "card__info";
    //                 //<p class="card__title">Иванов Иван</p>
    //                 let p_card__title = document.createElement("p");
    //                 p_card__title.className = "card__title";
    //                 let textnode_card__title = document.createTextNode(this.fullName);
    //                 p_card__title.append(textnode_card__title);
    //                 //<div class="card__text">
    //                 let div_card__text = document.createElement('div');
    //                 div_card__text.className = "card__text";
    //                     //<div class="card__text__item">
    //                     let div_text__item_1 = document.createElement('div');
    //                     div_text__item_1.className = "card__text__item";
    //                         let span_1_1 = document.createElement('span');
    //                         span_1_1.className = "card__text--grey card__text--left";
    //                         let textNode_span_1_1 = document.createTextNode('День рождения');
    //                         span_1_1.append(textNode_span_1_1);
    //                         let span_1_2 = document.createElement('span');
    //                         let textNode_span_1_2 = document.createTextNode(this.birthDateStr + ", " + this.age + " лет");
    //                         span_1_2.append(textNode_span_1_2); 
    //                     div_text__item_1.append(span_1_1);
    //                     div_text__item_1.append(span_1_2);

    //                     let div_text__item_2 = document.createElement('div');
    //                     div_text__item_2.className = "card__text__item";
    //                         let span_2_1 = document.createElement('span');
    //                         span_2_1.className = "card__text--grey card__text--left";
    //                         let textNode_span_2_1 = document.createTextNode('Учится');
    //                         span_2_1.append(textNode_span_2_1);
    //                         let span_2_2 = document.createElement('span');
    //                         let textNode_span_2_2 = document.createTextNode(this.university);
    //                         span_2_2.append(textNode_span_2_2); 
    //                         div_text__item_2.append(span_2_1);
    //                         div_text__item_2.append(span_2_2);

    //                 div_card__text.append(div_text__item_1);
    //                 div_card__text.append(div_text__item_2);
    //             //<img class="card__img" src="" alt="Аватар ученика школы"></img>
    //             let img_card__img = document.createElement('img');
    //             img_card__img.className = "card__img";
    //             img_card__img.src = this.photoUrl;
    //             img_card__img.alt = "Аватар ученика школы";
    //             div_card__info.append(p_card__title);
    //             div_card__info.append(div_card__text);

    //             div_card__body.append(div_card__info);
    //             div_card__body.append(img_card__img);
    //     document.body.append(div_card);
    //     div_card.style.left = event.offsetLeft - 160 + "px";
    //     div_card.style.top = event.offsetTop - 50 + "px";
    // }

    // closeCard(event){
    //     document.getElementsByClassName("card")[0].remove();
    // }
}

export {Student};