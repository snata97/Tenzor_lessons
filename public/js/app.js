import {Student, Teacher, PersonFactory} from './personLib.js';
import {School} from './school.js';

// проинициализируем фабрику
const factory = new PersonFactory();

// создадим школу (если есть для нее фабрика, то тоже через фабрику) 
let school = new School();

// добавим в список школы студентов используйте те данные, которые у вас есть
// Vasia и пр. тут скорее для примера
// если методы называются по другому, поменяйте
// по желанию можно добавить больше
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
studentArr.forEach((item) => {
    school.add(item,'student');
});
teacherArr.forEach((item) => {
    school.add(item,'teacher');
});
// school.add( factory.createStudent({ name: 'Vasia' }) );
// school.add( factory.createStudent({ name: 'Petia' }) );
// school.add( factory.createTeacher({ name: 'Misha' }) );

// отрисуем всех студентов в dom 
// если методы называются по другому, поменяйте
// точка монтирования document.body может быть изменена на любой другой элемент DOM
 school.appendToDom();

// в итоге в на странице должны получить список студентов и учителей
// папка js будет содержать несколько файлов, минимум 3, а лучше больше