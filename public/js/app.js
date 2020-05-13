window.onload = function() {
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
    }
    class Student extends Person{
        constructor(params) {
           super(params);
           this.course = params.course;
           this.type = "student";
        }
        render() {
            let div_students__item = document.createElement('div');
            div_students__item.className = "students__item";

            let img_students__photo = document.createElement('img');
            img_students__photo.className = "students__photo";
            img_students__photo.src = this.photoUrl;
            img_students__photo.alt = "Аватар ученика школы";

            let p_students__fio = document.createElement('p');
            let textNode_students__fio = document.createTextNode(this.fullName);
            p_students__fio.append(textNode_students__fio);
            p_students__fio.className = "students__fio";
            p_students__fio.title = this.fullName;

            let p_students__university = document.createElement('p');
            let textNode_students__university = document.createTextNode(this.university + " " + this.course + " курс");
            p_students__university.append(textNode_students__university);
            p_students__university.className = "students__university";
            p_students__university.title = this.university + " " + this.course + " курс";

            div_students__item.append(img_students__photo);
            div_students__item.append(p_students__fio);
            div_students__item.append(p_students__university);
            return div_students__item;
        }
        appendToDOM() {
            const studentBlock = this.render();
            let div_students__items = document.querySelector(".students__items");
            div_students__items.append(studentBlock);
            studentBlock.addEventListener('click', (event) => {
                openCard(this, event.currentTarget);
            }); 
        }
    }

    class Teacher extends Person{
        constructor(params) {
           super(params);
           this.experience = params.experience;
           this.type = "teacher";
        }
    }

    class PersonFactory {
        createStudent(params){
            return new Student(params);
        }
        createTeacher(params){
            return new Teacher(params);
        }
        createPerson(params){
            return new Person(params);
        }
        create(params, type){
            let instance;
            switch(type){
                case "student": 
                    instance = this.createStudent(params);
                    break;
                case "teacher": 
                    instance = this.createTeacher(params); 
                    break;
                default: 
                    instance = this.createPerson(params);
            }
            return instance;
        }
    }

    //Создать класс School которая будет хранить всех студентов и учителей, 
    //реализовать там методы добавления (через фабрику), удаления студентов,
    //а также их получение по какому-то признаку, например по имени.
    class School{
        constructor() {
            this.people = [];
        }
        add(params, type) {
            let instance = new PersonFactory().create(params,type);
            (this.people).push(instance);
            return instance;
        }  
        remove(fullName, type) {
            let human = this.people.find((name => name.fullName !== fullName) && (typePeople => typePeople.type !== type));
            let peopleID = this.people.indexOf(human); 
            if(peopleID >= 0) this.people.splice(peopleID,1);
        }
        getByName(fullName){
            let human = this.people.filter(name => name.fullName === fullName);
            return human;
        }
    }
    
    const studentArr = [
        {
            fullName: 'Миша Петров',
            university: 'УГАТУ',
            course: 2,
            birthDate: new Date(1990, 0, 1),
            photoUrl: 'img/ava01.jpg'
        },
        {
            fullName: 'Маша Иванова',
            university: 'СурГУ',
            course: 2,
            birthDate: new Date(1993, 2, 7),
            photoUrl: 'img/ava02.jpg'
        },
        {
            fullName: 'Катя Волнова',
            university: 'СевГУ',
            course: 2,
            birthDate: new Date(1996, 4, 15),
            photoUrl: 'img/ava03.jpg'
        },
        {
            fullName: 'Влад Петров',
            university: 'МГУ',
            course: 2,
            birthDate: new Date(1985, 9, 3),
            photoUrl: 'img/ava04.jpg'
        },
        {
            fullName: 'Кира Найтли',
            university: 'УрГУ',
            course: 2,
            birthDate: new Date(1980, 6, 15),
            photoUrl: 'img/ava05.jpg'
        },
        {
            fullName: 'Старик Хотабыч',
            university: 'СпбГУ',
            course: 2,
            birthDate: new Date(1950, 3, 26),
            photoUrl: 'img/ava06.jpg'
        },
     ];
    const school =  new School();
    studentArr.forEach((item) => {
        const student = school.add(item,'student');
        student.appendToDOM();
    });
    //Удаление элемента
    school.remove('Миша Петров','student');
    //Получение элемента по имени
    school.getByName('Старик Хотабыч').course;

    function openCard(student, event){
        if(document.getElementsByClassName("card")[0]) document.getElementsByClassName("card")[0].remove();
         // <div class="card">
        let div_card = document.createElement('div');
        div_card.className = "card";
            //<span class="close"></span>
            let span = document.createElement('span');
            span.className = "close";
            div_card.append(span);
            span.addEventListener('click', closeCard); 
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
                    let textnode_card__title = document.createTextNode(student.fullName);
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
                            let textNode_span_1_2 = document.createTextNode(student.birthDateStr + ", " + student.age + " лет");
                            span_1_2.append(textNode_span_1_2); 
                        div_text__item_1.append(span_1_1);
                        div_text__item_1.append(span_1_2);

                        let div_text__item_2 = document.createElement('div');
                        div_text__item_2.className = "card__text__item";
                            let span_2_1 = document.createElement('span');
                            span_2_1.className = "card__text--grey card__text--left";
                            let textNode_span_2_1 = document.createTextNode('Учится');
                            span_2_1.append(textNode_span_2_1);
                            let span_2_2 = document.createElement('span');
                            let textNode_span_2_2 = document.createTextNode(student.university);
                            span_2_2.append(textNode_span_2_2); 
                            div_text__item_2.append(span_2_1);
                            div_text__item_2.append(span_2_2);

                    div_card__text.append(div_text__item_1);
                    div_card__text.append(div_text__item_2);
                //<img class="card__img" src="" alt="Аватар ученика школы"></img>
                let img_card__img = document.createElement('img');
                img_card__img.className = "card__img";
                img_card__img.src = student.photoUrl;
                img_card__img.alt = "Аватар ученика школы";
                div_card__info.append(p_card__title);
                div_card__info.append(div_card__text);

                div_card__body.append(div_card__info);
                div_card__body.append(img_card__img);
        document.body.append(div_card);
        div_card.style.left = event.offsetLeft - 160 + "px";
        div_card.style.top = event.offsetTop - 50 + "px";
    }

    function closeCard(event){
        document.getElementsByClassName("card")[0].remove();
    }
  };