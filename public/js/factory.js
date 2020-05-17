import {Student} from './student.js';
import {Teacher} from './teacher.js';
import {Person} from './person.js';

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

export {PersonFactory};