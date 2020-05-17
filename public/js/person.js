class Person {
    constructor(params) {
        this.fullName = params.fullName;
        this.university = params.university;
        this.birthDate = params.birthDate;
        this.photoUrl = params.photoUrl;
        this.type = "person";
     }
    get birthDateStr(){
        return this.birthDate.toLocaleString('ru-RU', {day: 'numeric', month: 'long'});
    }
    get age() {
        let difference = new Date() - this.birthDate;
        let diffdays = difference / 1000 / (60 * 60 * 24);
        return Math.floor(diffdays / 365.25);
    }
    render() {
        let div_persons__item = document.createElement('div');
        div_persons__item.className = "persons__item";

        let img_persons__photo = document.createElement('img');
        img_persons__photo.className = "persons__photo";
        img_persons__photo.src = this.photoUrl;
        img_persons__photo.alt = "Аватар";

        let p_persons__fio = document.createElement('p');
        let textNode_persons__fio = document.createTextNode(this.fullName);
        p_persons__fio.append(textNode_persons__fio);
        p_persons__fio.className = "persons__fio";
        p_persons__fio.title = this.fullName;

        let p_persons__university = document.createElement('p');
        if( this.type == "student" ){
            let textNode_persons__university = document.createTextNode(this.university + " " + this.course + " курс");
            p_persons__university.append(textNode_persons__university);
            p_persons__university.className = "persons__university";
            p_persons__university.title = this.university + " " + this.course + " курс";
        }
        else if( this.type == "teacher"){
            let textNode_persons__university = document.createTextNode(this.university + " преподаватель");
            p_persons__university.append(textNode_persons__university);
            p_persons__university.className = "persons__university";
            p_persons__university.title = this.university + " преподаватель";
        }

        div_persons__item.append(img_persons__photo);
        div_persons__item.append(p_persons__fio);
        div_persons__item.append(p_persons__university);
        return div_persons__item;
    }
    appendToDOM() {
        const personBlock = this.render();
        let div_persons__items = document.querySelector(".persons__items");
        div_persons__items.append(personBlock);
        personBlock.addEventListener('click', (event) => {
            this.openCard(event.currentTarget);
        }); 
    }
    openCard(event){
        if(document.getElementsByClassName("card")[0]) document.getElementsByClassName("card")[0].remove();
         // <div class="card">
        let div_card = document.createElement('div');
        div_card.className = "card";
            //<span class="close"></span>
            let span = document.createElement('span');
            span.className = "close";
            div_card.append(span);
            span.addEventListener('click', this.closeCard); 
            //<div class="card__body">
            let div_card__body = document.createElement('div');
            div_card__body.className = "card__body";
            div_card.append(div_card__body);
                //<div class="card__info">
                let div_card__info = document.createElement('div');
                div_card__info.className = "card__info";
                    //<p class="card__title">Иванов Иван</p>
                    let p_card__title = document.createElement("p");
                    p_card__title.className = "card__title";
                    let textnode_card__title = document.createTextNode(this.fullName);
                    p_card__title.append(textnode_card__title);
                    //<div class="card__text">
                    let div_card__text = document.createElement('div');
                    div_card__text.className = "card__text";
                        //<div class="card__text__item">
                        let div_text__item_1 = document.createElement('div');
                        div_text__item_1.className = "card__text__item";
                            let span_1_1 = document.createElement('span');
                            span_1_1.className = "card__text--grey card__text--left";
                            let textNode_span_1_1 = document.createTextNode('День рождения');
                            span_1_1.append(textNode_span_1_1);
                            let span_1_2 = document.createElement('span');
                            let textNode_span_1_2 = document.createTextNode(this.birthDateStr + ", " + this.age + " лет");
                            span_1_2.append(textNode_span_1_2); 
                        div_text__item_1.append(span_1_1);
                        div_text__item_1.append(span_1_2);

                        let div_text__item_2 = document.createElement('div');
                        div_text__item_2.className = "card__text__item";
                            let span_2_1 = document.createElement('span');
                            span_2_1.className = "card__text--grey card__text--left";
                            let textNode_span_2_1;
                            if(this.type == "student") {
                                textNode_span_2_1 = document.createTextNode('Учится');
                            }
                            else if(this.type == "teacher") {
                                textNode_span_2_1 = document.createTextNode('Работает');
                            }
                            span_2_1.append(textNode_span_2_1);
                            let span_2_2 = document.createElement('span');
                            let textNode_span_2_2 = document.createTextNode(this.university);
                            span_2_2.append(textNode_span_2_2); 
                            div_text__item_2.append(span_2_1);
                            div_text__item_2.append(span_2_2);

                    div_card__text.append(div_text__item_1);
                    div_card__text.append(div_text__item_2);
                //<img class="card__img" src="" alt="Аватар"></img>
                let img_card__img = document.createElement('img');
                img_card__img.className = "card__img";
                img_card__img.src = this.photoUrl;
                img_card__img.alt = "Аватар";
                div_card__info.append(p_card__title);
                div_card__info.append(div_card__text);

                div_card__body.append(div_card__info);
                div_card__body.append(img_card__img);
        document.body.append(div_card);
        div_card.style.left = event.offsetLeft - 160 + "px";
        div_card.style.top = event.offsetTop - 50 + "px";
    }
    closeCard(event){
        document.getElementsByClassName("card")[0].remove();
    }
}

export{Person};