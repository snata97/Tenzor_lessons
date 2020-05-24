import {Header, ContainerPersons, Person, Student, Teacher, ComponentFactory} from './componentLib.js';

let factory = new ComponentFactory();

const head = factory.create(Header, {
    title: 'Tensor School',
    description: 'Это страница школы Тензор в Уфе. Тут вы можете познакомиться с нашими учениками и учителями.'  
});
head.mount(document.body);

const containerPerson = factory.create(ContainerPersons);
containerPerson.mount(document.body);

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
        course: 3,
        birthDate: new Date(1993, 2, 7),
        photoUrl: 'img/ava02.jpg'
    },
    {
        fullName: 'Катя Волнова',
        university: 'СевГУ',
        course: 4,
        birthDate: new Date(1996, 4, 15),
        photoUrl: 'img/ava03.jpg'
    },
    {
        fullName: 'Влад Петров',
        university: 'МГУ',
        course: 1,
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
        course: 3,
        birthDate: new Date(1950, 3, 26),
        photoUrl: 'img/ava06.jpg'
    },
 ];
studentArr.forEach((value) => {
    factory.create(Student, { item: value}).mount(document.querySelector(".persons__items"))
});

const teacherArr = [
    {
        fullName: 'Леша Иванов',
        university: 'НГУ',
        experience: 12,
        birthDate: new Date(1985, 4, 6),
        photoUrl: 'img/ava01.jpg'
    },
    {
        fullName: 'Лена Петрова',
        university: 'АрхГУ',
        experience: 5,
        birthDate: new Date(1990, 12, 8),
        photoUrl: 'img/ava02.jpg'
    },
    {
        fullName: 'Розалия Громова',
        university: 'ТюмГУ',
        experience: 6,
        birthDate: new Date(1989, 1, 30),
        photoUrl: 'img/ava03.jpg'
    },
    
 ];

 teacherArr.forEach((value) => {
    factory.create(Teacher, { item: value}).mount(document.querySelector(".persons__items"))
});
