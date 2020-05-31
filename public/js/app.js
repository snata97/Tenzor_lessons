import {Header, Student, Teacher, ComponentFactory} from './componentLib.js';
import {DataSet} from './dataset.js';
let factory = new ComponentFactory();

const head = factory.create(Header, {
    title: 'Tensor School',
    description: 'Это страница школы Тензор в Уфе. Тут вы можете познакомиться с нашими учениками и учителями.'  
});
head.mount(document.body, "afterbegin");

let datasetStudent = new DataSet({
    object: 'student'
});

datasetStudent.readAll().then(result => result.forEach((value) => {
    factory.create(Student, { item: value}).mount(document.querySelector(".persons__items"))
}));

let datasetTeacher = new DataSet({
    object: 'teacher'
});

datasetTeacher.readAll().then(result => result.forEach((value) => {
    factory.create(Teacher, { item: value}).mount(document.querySelector(".persons__items"))
}));
